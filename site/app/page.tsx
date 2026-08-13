import { InlineProjectAtlas } from "./inline-project-atlas";
import { withBasePath } from "./paths";
import { SiteFooter, SiteHeader } from "./site-header";

const cvUrl = "https://raw.githubusercontent.com/oldkingzz/profile/main/static/VincentWangCV.docx";

const experiences = [
  {
    period: "2025.09 — 2027.05（预计）",
    place: "University of Pennsylvania",
    role: "M.S. in Mechanical Engineering and Applied Mechanics",
    intro: "在机电一体化与机器人方向继续系统训练，目前研究兴趣聚焦 VLA 后训练。",
    points: ["MEAM 510 自主移动机器人：定位、规划、控制与任务闭环", "CIS 548 PennOS：操作系统与底层系统能力", "当前研究兴趣：VLA post-training 与可靠实验验证"],
    tone: "blue",
  },
  {
    period: "2024.07 — 2024.09",
    place: "Shanghai Wuji Technology",
    role: "Robotics Control Intern",
    intro: "参与早期灵巧手遥操作与多电机控制研发，把控制理论带入真实传感、执行器和通信网络。",
    points: ["MATLAB / Simulink 高保真遥操作与多轴控制仿真", "将阻抗结构调整为融合扭矩反馈的导纳控制", "Linux C++ / CAN 通信，连接约 30 个电机"],
    tone: "clay",
  },
  {
    period: "2022.09 — 2024.07",
    place: "ECUST Robocon Team",
    role: "Co-founder · Control Lead",
    intro: "从 STM32 电控出发，逐步承担感知、定位、规划、上下位机集成与跨专业团队技术领导。",
    points: ["Point-LIO、YOLO、MoveIt 与底盘控制组成完整自主链路", "嵌入式 NUC 上实现约 20 FPS 视觉检测", "团队由数人协作发展到数十人的工程组织"],
    tone: "sage",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="career-hero section-shell" id="about">
        <div className="career-hero-copy">
          <p className="section-kicker">ROBOTICS ENGINEER · RESEARCHER</p>
          <h1>Vincent Wang<br /><span>王泽森</span></h1>
          <h2>从完整机器人系统，走向具身智能研究。</h2>
          <p>宾夕法尼亚大学 MEAM 硕士生，研究兴趣聚焦 VLA 后训练。过往工作覆盖机器人控制、嵌入式、自主导航与深度学习，重视系统落地和可验证的实验结果。</p>
          <div className="career-actions">
            <a className="button primary" href="#project-atlas">查看项目技术图 <span>↓</span></a>
            <a className="button quiet" href={cvUrl} target="_blank" rel="noreferrer">查看 CV ↗</a>
          </div>
          <div className="career-links">
            <a href="https://github.com/oldkingzz" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/sansenpai/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="mailto:Wang2003@seas.upenn.edu">Email ↗</a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame"><img src={withBasePath("/me.jpg")} alt="Vincent Wang 的个人头像" /></div>
          <div className="availability"><i /><span>Open to robotics, controls<br />& embodied AI opportunities</span></div>
        </div>
      </section>

      <section className="credibility-strip">
        <div className="section-shell">
          <div><span>CURRENT</span><strong>Penn MEAM M.S.</strong></div>
          <div><span>FOCUS</span><strong>Robotics · VLA Post-training</strong></div>
          <div><span>BACKGROUND</span><strong>Controls · Embedded · AI</strong></div>
          <div><span>LOCATION</span><strong>Philadelphia, PA</strong></div>
        </div>
      </section>

      <InlineProjectAtlas />

      <section className="career-section section-shell" id="experience">
        <header className="career-heading">
          <div><p className="section-kicker">EXPERIENCE</p><h2>经历与能力演进</h2></div>
        </header>
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article className={`experience-row tone-${experience.tone}`} key={experience.place}>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-title"><span>{experience.period}</span><h3>{experience.place}</h3><strong>{experience.role}</strong></div>
              <div className="experience-content"><p>{experience.intro}</p><ul>{experience.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </section>

      <section className="education-band" id="education">
        <div className="section-shell education-grid">
          <header><p className="section-kicker">EDUCATION</p><h2>教育背景</h2></header>
          <article><span>2025 — 2027（预计）</span><h3>University of Pennsylvania</h3><p>M.S. in Mechanical Engineering and Applied Mechanics<br />Mechatronics & Robotics</p></article>
          <article><span>2021 — 2025</span><h3>East China University of Science and Technology</h3><p>B.Eng. in Intelligent Manufacturing Engineering<br />GPA 3.6 · Top 15%</p></article>
        </div>
      </section>

      <section className="publication-band">
        <div className="section-shell publication-row">
          <div><p className="section-kicker">PUBLICATION</p><h2>MDATS</h2></div>
          <p>第一作者 · Multi-Domain Adaptive Classification Strategy for Mechanical Fault Detection</p>
          <div><strong>88.27%</strong><span>target-domain accuracy</span></div>
          <div><strong>+40.6</strong><span>absolute improvement</span></div>
          <a href="https://doi.org/10.1109/MEAE62008.2024.11026598" target="_blank" rel="noreferrer">IEEE DOI ↗</a>
        </div>
      </section>

      <section className="contact-band section-shell" id="contact">
        <p className="section-kicker">CONTACT</p>
        <h2>我正在寻找机器人、控制与具身智能方向的下一段机会。</h2>
        <p>欢迎联系我讨论实习、全职岗位或研究合作。</p>
        <a href="mailto:Wang2003@seas.upenn.edu">Wang2003@seas.upenn.edu <span>↗</span></a>
      </section>

      <SiteFooter />
    </main>
  );
}
