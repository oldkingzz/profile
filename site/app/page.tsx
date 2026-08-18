"use client";

import { InlineProjectAtlas } from "./inline-project-atlas";
import { localize, type LocalizedText, useLanguage } from "./language";
import { withBasePath } from "./paths";
import { SiteFooter, SiteHeader } from "./site-header";

const cvUrl = withBasePath("/VincentWangCV.docx");

type Experience = {
  period: LocalizedText;
  place: string;
  role: string;
  intro: LocalizedText;
  points: Record<"en" | "zh", string[]>;
  tone: "blue" | "clay" | "sage";
};

const experiences: Experience[] = [
  {
    period: { en: "May 18 — Aug 21, 2026", zh: "2026.05.18 — 2026.08.21" },
    place: "Synthoid.ai",
    role: "VLA Research Intern",
    intro: {
      en: "Built real-robot VLA infrastructure, contributed to proprietary model training, and independently led an online policy-distillation study.",
      zh: "搭建真机 VLA 基础设施，深度参与公司自研模型训练，并独立主导在线策略蒸馏研究。",
    },
    points: {
      en: [
        "Independently built 7-DoF industrial-arm SDK control and a robot-side VLA adapter; led stable human teleoperation and LeRobot data collection",
        "Deeply contributed to early proprietary VLA training through distributed runs, checkpoint management, initial ablations, and key failure diagnosis",
        "Independently led Path-OPD from problem formulation through matched experiments and manuscript preparation; obtained positive results over endpoint DAgger",
      ],
      zh: [
        "独立完成 7 自由度工业机械臂 SDK 控制与机器人端 VLA adapter，主导稳定遥操作和 LeRobot 数据采集",
        "深度参与公司自研 VLA 的前期训练，负责分布式运行、checkpoint 管理、初始消融与关键故障定位",
        "独立主导 Path-OPD 的问题定义、方法、实现、matched 实验和论文写作，取得优于 endpoint DAgger 的正向结果",
      ],
    },
    tone: "blue",
  },
  {
    period: { en: "Sep 2025 — May 2027 (expected)", zh: "2025.09 — 2027.05（预计）" },
    place: "University of Pennsylvania",
    role: "M.S. in Mechanical Engineering and Applied Mechanics",
    intro: {
      en: "Continuing rigorous training in mechatronics and robotics, with current research interests centered on VLA post-training.",
      zh: "在机电一体化与机器人方向继续系统训练，目前研究兴趣聚焦 VLA 后训练。",
    },
    points: {
      en: [
        "MEAM 510 autonomous mobile robot: localization, planning, control, and mission execution",
        "CIS 548 PennOS: operating systems and low-level systems engineering",
        "Current focus: VLA post-training and reliable experimental validation",
      ],
      zh: ["MEAM 510 自主移动机器人：定位、规划、控制与任务闭环", "CIS 548 PennOS：操作系统与底层系统能力", "当前研究兴趣：VLA post-training 与可靠实验验证"],
    },
    tone: "blue",
  },
  {
    period: { en: "Jul 2024 — Sep 2024", zh: "2024.07 — 2024.09" },
    place: "Shanghai Wuji Technology",
    role: "Robotics Control Intern",
    intro: {
      en: "Contributed to early dexterous-hand teleoperation and multi-motor control R&D, bringing control theory into real sensing, actuation, and communication systems.",
      zh: "参与早期灵巧手遥操作与多电机控制研发，把控制理论带入真实传感、执行器和通信网络。",
    },
    points: {
      en: [
        "High-fidelity teleoperation and multi-axis control simulation in MATLAB / Simulink",
        "Reworked an impedance structure into admittance control with torque feedback",
        "Linux C++ / CAN communication connecting approximately 30 motors",
      ],
      zh: ["MATLAB / Simulink 高保真遥操作与多轴控制仿真", "将阻抗结构调整为融合扭矩反馈的导纳控制", "Linux C++ / CAN 通信，连接约 30 个电机"],
    },
    tone: "clay",
  },
  {
    period: { en: "Sep 2022 — Jul 2024", zh: "2022.09 — 2024.07" },
    place: "ECUST Robocon Team",
    role: "Co-founder · Control Lead",
    intro: {
      en: "Started with STM32 control and gradually took ownership of perception, localization, planning, host–controller integration, and cross-disciplinary technical leadership.",
      zh: "从 STM32 电控出发，逐步承担感知、定位、规划、上下位机集成与跨专业团队技术领导。",
    },
    points: {
      en: [
        "Integrated Point-LIO, YOLO, MoveIt, and chassis control into an autonomous pipeline",
        "Achieved approximately 20 FPS vision inference on an embedded NUC",
        "Helped grow a small founding group into a multidisciplinary engineering team",
      ],
      zh: ["Point-LIO、YOLO、MoveIt 与底盘控制组成完整自主链路", "嵌入式 NUC 上实现约 20 FPS 视觉检测", "团队由数人协作发展到数十人的工程组织"],
    },
    tone: "sage",
  },
];

const copy = {
  en: {
    heroTitle: "From real robot systems to VLA research.",
    heroBody: "M.S. student in MEAM at the University of Pennsylvania. I build real-robot control and data infrastructure, contribute to VLA training systems, and independently study VLA post-training with matched, closed-loop experiments.",
    explore: "Explore project × skill map",
    viewCv: "View CV",
    portraitAlt: "Portrait of Vincent Wang",
    availability: <>Open to robotics, controls<br />& embodied AI opportunities</>,
    experienceTitle: "Experience & Capability Growth",
    educationTitle: "Education",
    expected: "2025 — 2027 (expected)",
    firstAuthor: "First author · Multi-Domain Adaptive Classification Strategy for Mechanical Fault Detection",
    contactTitle: "Seeking my next opportunity in robotics, controls, and embodied intelligence.",
    contactBody: "Open to internships, full-time roles, and research collaborations.",
  },
  zh: {
    heroTitle: "从真实机器人系统，走向 VLA 研究。",
    heroBody: "宾夕法尼亚大学 MEAM 硕士生。我搭建真机控制与数据基础设施，参与 VLA 训练系统研发，并以匹配的闭环实验独立研究 VLA 后训练问题。",
    explore: "查看项目技术图",
    viewCv: "查看 CV",
    portraitAlt: "Vincent Wang 的个人头像",
    availability: <>开放机器人、控制<br />与具身智能方向机会</>,
    experienceTitle: "经历与能力演进",
    educationTitle: "教育背景",
    expected: "2025 — 2027（预计）",
    firstAuthor: "第一作者 · Multi-Domain Adaptive Classification Strategy for Mechanical Fault Detection",
    contactTitle: "我正在寻找机器人、控制与具身智能方向的下一段机会。",
    contactBody: "欢迎联系我讨论实习、全职岗位或研究合作。",
  },
} as const;

export default function Home() {
  const { language } = useLanguage();
  const text = copy[language];

  return (
    <main>
      <SiteHeader />

      <section className="career-hero section-shell" id="about">
        <div className="career-hero-copy">
          <p className="section-kicker">ROBOTICS ENGINEER · RESEARCHER</p>
          <h1>Vincent Wang<br /><span>王泽森</span></h1>
          <h2>{text.heroTitle}</h2>
          <p>{text.heroBody}</p>
          <div className="career-actions">
            <a className="button primary" href="#project-atlas">{text.explore} <span>↓</span></a>
            <a className="button quiet" href={cvUrl} target="_blank" rel="noreferrer">{text.viewCv} ↗</a>
          </div>
          <div className="career-links">
            <a href="https://github.com/oldkingzz" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/sansenpai/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="mailto:wang2003@engineering.upenn.edu">Email ↗</a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame"><img src={withBasePath("/me.jpg")} alt={text.portraitAlt} /></div>
          <div className="availability"><i /><span>{text.availability}</span></div>
        </div>
      </section>

      <section className="credibility-strip">
        <div className="section-shell">
          <div><span>CURRENT</span><strong>Penn MEAM M.S.</strong></div>
          <div><span>FOCUS</span><strong>Robot Learning · VLA Post-training</strong></div>
          <div><span>BACKGROUND</span><strong>Real Robots · Training · Research</strong></div>
          <div><span>LOCATION</span><strong>Philadelphia, PA</strong></div>
        </div>
      </section>

      <InlineProjectAtlas />

      <section className="career-section section-shell" id="experience">
        <header className="career-heading">
          <div><p className="section-kicker">EXPERIENCE</p><h2>{text.experienceTitle}</h2></div>
        </header>
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article className={`experience-row tone-${experience.tone}`} key={experience.place}>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-title"><span>{localize(experience.period, language)}</span><h3>{experience.place}</h3><strong>{experience.role}</strong></div>
              <div className="experience-content"><p>{localize(experience.intro, language)}</p><ul>{experience.points[language].map((point) => <li key={point}>{point}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </section>

      <section className="education-band" id="education">
        <div className="section-shell education-grid">
          <header><p className="section-kicker">EDUCATION</p><h2>{text.educationTitle}</h2></header>
          <article><span>{text.expected}</span><h3>University of Pennsylvania</h3><p>M.S. in Mechanical Engineering and Applied Mechanics<br />Mechatronics & Robotics</p></article>
          <article><span>2021 — 2025</span><h3>East China University of Science and Technology</h3><p>B.Eng. in Intelligent Manufacturing Engineering<br />GPA 3.6 · Top 15%</p></article>
        </div>
      </section>

      <section className="publication-band">
        <div className="section-shell publication-row">
          <div><p className="section-kicker">PUBLICATION</p><h2>MDATS</h2></div>
          <p>{text.firstAuthor}</p>
          <div><strong>88.27%</strong><span>target-domain accuracy</span></div>
          <div><strong>+40.6</strong><span>absolute improvement</span></div>
          <a href="https://doi.org/10.1109/MEAE62008.2024.11026598" target="_blank" rel="noreferrer">IEEE DOI ↗</a>
        </div>
      </section>

      <section className="contact-band section-shell" id="contact">
        <p className="section-kicker">CONTACT</p>
        <h2>{text.contactTitle}</h2>
        <p>{text.contactBody}</p>
        <a href="mailto:wang2003@engineering.upenn.edu">wang2003@engineering.upenn.edu <span>↗</span></a>
      </section>

      <SiteFooter />
    </main>
  );
}
