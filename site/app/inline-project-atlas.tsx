"use client";

import { useMemo, useState } from "react";
import {
  AtlasNode,
  AtlasProjectId,
  atlasProjects,
  atlasStages,
  chronologicalProjects,
  findAtlasProject,
  getGlobalOwnership,
  horizontalMaps,
  ownershipLabels,
  systemLayers,
} from "./atlas-data";
import { withBasePath } from "./paths";

function evidenceSource(url: string) {
  if (url.includes("github.com")) return { icon: withBasePath("/icons/github.svg"), label: "在 GitHub 查看公开项目" };
  if (url.includes("arxiv.org")) return { icon: withBasePath("/icons/arxiv.svg"), label: "在 arXiv 查看论文" };
  return { icon: withBasePath("/icons/doi.svg"), label: "通过 DOI 查看论文" };
}

const allNodes = [
  ...systemLayers.flatMap((layer) => layer.nodes),
  ...horizontalMaps.flatMap((map) => map.groups.flatMap((group) => group.nodes)),
];

const skillLabels = new Map<string, string>();
for (const node of allNodes) {
  skillLabels.set(node.id, node.label);
  for (const method of node.methods ?? []) skillLabels.set(method.id, method.label);
}

function hasProjectMapping(skillId: string) {
  return atlasProjects.some((project) => project.skills[skillId]);
}

type SkillNodeProps = {
  node: AtlasNode;
  projectId: AtlasProjectId;
  selectedTech: string | null;
  onSelectTech: (skillId: string) => void;
};

function SkillNode({ node, projectId, selectedTech, onSelectTech }: SkillNodeProps) {
  const project = findAtlasProject(projectId);
  const related = Boolean(project.skills[node.id]);
  const filterable = hasProjectMapping(node.id) && !node.alwaysOn;
  const level = getGlobalOwnership(node.id, node.baseLevel);
  const className = [
    "atlas-capability",
    related || node.alwaysOn ? "is-active" : "",
    selectedTech === node.id ? "is-selected" : "",
    node.alwaysOn ? "is-always-on" : "",
  ].filter(Boolean).join(" ");

  const content = (
    <>
      <span className="atlas-capability-name">{node.label}</span>
      <span className={`atlas-level level-${level}`}>{ownershipLabels[level]}</span>
    </>
  );

  return (
    <div className="atlas-node">
      {filterable ? (
        <button className={className} onClick={() => onSelectTech(node.id)} aria-pressed={selectedTech === node.id}>
          {content}
        </button>
      ) : (
        <div className={className}>{content}</div>
      )}

      {node.methods?.length ? (
        <div className="atlas-methods">
          {node.methods
            .filter((method) => project.skills[method.id] || node.alwaysOn || !hasProjectMapping(method.id))
            .map((method) => {
              const methodFilterable = hasProjectMapping(method.id) && !node.alwaysOn;
              const methodClass = [
                "atlas-method",
                project.skills[method.id] || node.alwaysOn ? "is-active" : "",
                selectedTech === method.id ? "is-selected" : "",
              ].filter(Boolean).join(" ");

              return methodFilterable ? (
                <button key={method.id} className={methodClass} onClick={() => onSelectTech(method.id)} aria-pressed={selectedTech === method.id}>
                  {method.label}
                </button>
              ) : (
                <span key={method.id} className={methodClass}>{method.label}</span>
              );
            })}
        </div>
      ) : null}

      {node.evidenceLinks?.length ? (
        <div className="atlas-node-evidence" aria-label="Agent-native Engineering 的公开证据">
          {node.evidenceLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" title={link.label} aria-label={`在 GitHub 查看 ${link.label}`}>
              <img src={withBasePath("/icons/github.svg")} alt="" />
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function InlineProjectAtlas() {
  const [selectedId, setSelectedId] = useState<AtlasProjectId>("robocon");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const selected = useMemo(() => findAtlasProject(selectedId), [selectedId]);

  const matchingProjects = useMemo(
    () => selectedTech ? chronologicalProjects.filter((project) => project.skills[selectedTech]) : [],
    [selectedTech],
  );

  const chooseProject = (id: AtlasProjectId) => {
    setSelectedId(id);
    setSelectedTech(null);
  };

  const chooseTech = (skillId: string) => {
    if (selectedTech === skillId) {
      setSelectedTech(null);
      setSelectedId("robocon");
      return;
    }

    const firstMatch = chronologicalProjects.find((project) => project.skills[skillId]);

    if (!firstMatch) return;
    setSelectedTech(skillId);
    setSelectedId(firstMatch.id);
  };

  const source = selected.link ? evidenceSource(selected.link) : null;

  return (
    <section className="home-atlas" id="project-atlas">
      <div className="section-shell">
        <header className="home-atlas-heading"><h2>项目与技术栈</h2></header>

        <div className="atlas-layout">
          <aside className="atlas-projects">
            <div className="atlas-rail-title"><strong>阶段与项目</strong></div>
            <nav aria-label="选择项目">
              {atlasStages.map((stage) => (
                <section className="atlas-project-stage" key={stage.id} aria-labelledby={`atlas-stage-${stage.id}`}>
                  <header id={`atlas-stage-${stage.id}`}>
                    <strong>{stage.title}</strong>
                    <span>{stage.period}</span>
                  </header>
                  <div>
                    {stage.projectIds.map((projectId) => {
                      const project = findAtlasProject(projectId);
                      const index = chronologicalProjects.findIndex((item) => item.id === project.id);
                      const matchLevel = selectedTech ? project.skills[selectedTech] : undefined;
                      return (
                        <button
                          key={project.id}
                          className={[
                            selected.id === project.id ? "active" : "",
                            matchLevel ? "tech-match" : "",
                            selectedTech && !matchLevel ? "tech-muted" : "",
                          ].filter(Boolean).join(" ")}
                          onClick={() => chooseProject(project.id)}
                          aria-pressed={selected.id === project.id}
                        >
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          <strong>{project.title}</strong>
                          {matchLevel ? <em>{ownershipLabels[matchLevel]}</em> : null}
                        </button>
                      );
                    })}
                  </div>
                </section>
              ))}
            </nav>
          </aside>

          <div className="atlas-stack">
            <article className={`atlas-project-focus tone-${selected.tone}`}>
              <div className="atlas-focus-head">
                {selected.image ? <img className="atlas-project-image" src={withBasePath(selected.image)} alt={`${selected.title} 项目图片`} /> : null}
                <div><h3>{selected.title}</h3><p>{selected.summary}</p></div>
                {selected.link && source ? (
                  <a className="evidence-icon" href={selected.link} target="_blank" rel="noreferrer" aria-label={source.label} title={source.label}>
                    <img src={source.icon} alt="" />
                  </a>
                ) : null}
              </div>
              <ul>{selected.evidence.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>

            <article className="atlas-system-map">
              <header><h3>Robotics & Autonomous Systems</h3></header>
              <div className="atlas-system-layers">
                {systemLayers.map((layer, index) => (
                  <section className="atlas-layer" key={layer.title}>
                    <div className="atlas-layer-title"><span>{String(7 - index).padStart(2, "0")}</span><h4>{layer.title}</h4></div>
                    <div className="atlas-layer-nodes">
                      {layer.nodes.map((node) => (
                        <SkillNode key={node.id} node={node} projectId={selected.id} selectedTech={selectedTech} onSelectTech={chooseTech} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>

            <div className="atlas-horizontal-maps">
              {horizontalMaps.map((map) => (
                <article className="atlas-horizontal-map" key={map.title}>
                  <header><h3>{map.title}</h3></header>
                  <div className="atlas-horizontal-groups">
                    {map.groups.map((group) => (
                      <section key={group.title}>
                        <h4>{group.title}</h4>
                        <div>
                          {group.nodes.map((node) => (
                            <SkillNode key={node.id} node={node} projectId={selected.id} selectedTech={selectedTech} onSelectTech={chooseTech} />
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            {selectedTech ? (
              <aside className="atlas-inspector visible" aria-live="polite">
                <h3>{skillLabels.get(selectedTech) ?? selectedTech}</h3>
                <div>
                  {matchingProjects.map((project) => {
                    const level = project.skills[selectedTech];
                    return <button key={project.id} onClick={() => chooseProject(project.id)}><strong>{project.title}</strong><span>{ownershipLabels[level]}</span></button>;
                  })}
                </div>
              </aside>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
