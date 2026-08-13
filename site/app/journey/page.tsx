import { SiteFooter, SiteHeader } from "../site-header";
import { stages } from "../site-data";

const sideNotes = [
  { year: "2022—2023", title: "Tennis.ai", text: "从视频数据标注走到 YOLOv8 微调，第一次完整认识计算机视觉项目的数据与模型链路。" },
  { year: "2024.03", title: "机械创新竞赛", text: "通过 Tecnomatix 与 Siemens PLC 学习工业网络、仿真和自动控制，获国家三等奖。" },
  { year: "2024", title: "MDATS", text: "以第一作者完成跨域机械故障诊断研究，形成从问题定义到论文表达的研究闭环。" },
];

export default function JourneyPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-intro section-shell">
        <p className="section-kicker">JOURNEY / 成长路径</p>
        <h1>不是线性升级，<br />而是工程与研究不断相互校正。</h1>
        <p>从机械、嵌入式和控制出发，经由完整机器人系统与工业研发实践，逐步走向具身智能研究。</p>
      </section>

      <section className="journey-list section-shell">
        {stages.map((stage, index) => (
          <article className={`journey-stage tone-${stage.tone}`} key={stage.id}>
            <div className="journey-marker"><span>0{index + 1}</span><i /></div>
            <header>
              <p>{stage.years}</p>
              <h2>{stage.place}</h2>
              <strong>{stage.role}</strong>
            </header>
            <div className="journey-body">
              <div><span>CONTEXT</span><p>{stage.context}</p></div>
              <div className="journey-question"><span>QUESTION</span><p>{stage.question}</p></div>
              <div><span>WORK</span><ul>{stage.work.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div><span>OWNERSHIP</span><p>{stage.ownership}</p></div>
              <div className="journey-transition"><span>TRANSITION</span><p>{stage.transition}</p></div>
            </div>
          </article>
        ))}
      </section>

      <section className="side-paths section-shell">
        <header className="section-heading"><p className="section-kicker">OTHER WORK</p><h2>其他经历与成果</h2></header>
        <div className="side-path-grid">
          {sideNotes.map((note) => <article key={note.title}><span>{note.year}</span><h3>{note.title}</h3><p>{note.text}</p></article>)}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
