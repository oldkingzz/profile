"use client";

import { localize, useLanguage } from "../language";
import { SiteFooter, SiteHeader } from "../site-header";
import { stages } from "../site-data";

const sideNotes = [
  {
    year: "2022—2023",
    title: "Tennis.ai",
    text: {
      en: "Moved from video annotation to YOLOv8 fine-tuning and developed an end-to-end understanding of a computer-vision project's data and model pipeline.",
      zh: "从视频数据标注走到 YOLOv8 微调，第一次完整认识计算机视觉项目的数据与模型链路。",
    },
  },
  {
    year: "Mar 2024",
    title: { en: "National Mechanical Innovation Competition", zh: "机械创新竞赛" },
    text: {
      en: "Studied industrial networking, simulation, and automation with Tecnomatix and Siemens PLC; received a national third prize.",
      zh: "通过 Tecnomatix 与 Siemens PLC 学习工业网络、仿真和自动控制，获国家三等奖。",
    },
  },
  {
    year: "2024",
    title: "MDATS",
    text: {
      en: "Completed a first-author study in cross-domain mechanical fault diagnosis, covering problem formulation through research communication.",
      zh: "以第一作者完成跨域机械故障诊断研究，形成从问题定义到论文表达的研究闭环。",
    },
  },
] as const;

const copy = {
  en: {
    kicker: "JOURNEY / RESEARCH PATH",
    title: <>Growth has not been linear.<br />Engineering and research keep correcting each other.</>,
    intro: "Beginning with mechanics, embedded systems, and control, I moved through complete robot systems and industrial R&D toward embodied intelligence research.",
    other: "Other Work & Outcomes",
  },
  zh: {
    kicker: "JOURNEY / 成长路径",
    title: <>不是线性升级，<br />而是工程与研究不断相互校正。</>,
    intro: "从机械、嵌入式和控制出发，经由完整机器人系统与工业研发实践，逐步走向具身智能研究。",
    other: "其他经历与成果",
  },
} as const;

export default function JourneyPage() {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <main>
      <SiteHeader />
      <section className="page-intro section-shell">
        <p className="section-kicker">{text.kicker}</p>
        <h1>{text.title}</h1>
        <p>{text.intro}</p>
      </section>

      <section className="journey-list section-shell">
        {stages.map((stage, index) => (
          <article className={`journey-stage tone-${stage.tone}`} key={stage.id}>
            <div className="journey-marker"><span>0{index + 1}</span><i /></div>
            <header>
              <p>{localize(stage.years, language)}</p>
              <h2>{stage.place}</h2>
              <strong>{localize(stage.role, language)}</strong>
            </header>
            <div className="journey-body">
              <div><span>CONTEXT</span><p>{localize(stage.context, language)}</p></div>
              <div className="journey-question"><span>QUESTION</span><p>{localize(stage.question, language)}</p></div>
              <div><span>WORK</span><ul>{stage.work[language].map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div><span>OWNERSHIP</span><p>{localize(stage.ownership, language)}</p></div>
              <div className="journey-transition"><span>TRANSITION</span><p>{localize(stage.transition, language)}</p></div>
            </div>
          </article>
        ))}
      </section>

      <section className="side-paths section-shell">
        <header className="section-heading"><p className="section-kicker">OTHER WORK</p><h2>{text.other}</h2></header>
        <div className="side-path-grid">
          {sideNotes.map((note) => (
            <article key={typeof note.title === "string" ? note.title : note.title.en}>
              <span>{note.year}</span>
              <h3>{typeof note.title === "string" ? note.title : note.title[language]}</h3>
              <p>{note.text[language]}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
