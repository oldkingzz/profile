import type { LocalizedText } from "./language";

export type JourneyStage = {
  id: string;
  years: LocalizedText;
  place: string;
  role: LocalizedText;
  context: LocalizedText;
  question: LocalizedText;
  work: Record<"en" | "zh", string[]>;
  ownership: LocalizedText;
  transition: LocalizedText;
  tone: "sage" | "clay" | "blue";
};

export const stages: JourneyStage[] = [
  {
    id: "ecust",
    years: { en: "Sep 2021 — Jun 2025", zh: "2021.09 — 2025.06" },
    place: "East China University of Science and Technology",
    role: { en: "B.Eng. in Intelligent Manufacturing Engineering", zh: "智能制造工程本科" },
    context: {
      en: "Built an engineering foundation through mechanical design, embedded systems, measurement and control, and artificial intelligence.",
      zh: "通过机械设计、嵌入式、测量控制和人工智能课程建立工程基础。",
    },
    question: {
      en: "How can isolated technical skills become a complete robotic system?",
      zh: "怎样从单点技术走向完整机器人系统？",
    },
    work: {
      en: [
        "Tennis.ai: built familiarity with the vision workflow from data annotation to model fine-tuning",
        "Robocon: worked across nearly the full robotics stack beyond mechanical modeling",
        "MDATS: completed a research cycle from problem formulation and experiments to publication",
      ],
      zh: [
        "Tennis.ai：完成从视觉数据标注到模型微调的基础链路",
        "Robocon：覆盖除机械建模外的主要机器人链路",
        "MDATS：完成从问题定义、模型与实验到论文写作的研究闭环",
      ],
    },
    ownership: {
      en: "Started with STM32 control in Robocon, then expanded into host–controller integration, perception, localization, planning, system integration, and technical leadership.",
      zh: "在 Robocon 中从 STM32 电控出发，逐步承担上下位机、感知、定位、规划、系统集成与团队技术领导。",
    },
    transition: {
      en: "Building complete robots established a systems perspective and led me toward research methodology and real-world control problems.",
      zh: "完整机器人系统的实践建立了系统观，也促使我进一步关注研究方法与真实控制问题。",
    },
    tone: "sage",
  },
  {
    id: "industry",
    years: { en: "Jul 2024 — Sep 2024", zh: "2024.07 — 2024.09" },
    place: "Wuji Tech",
    role: { en: "Robotics Control Intern", zh: "Robotics Control Intern" },
    context: {
      en: "Worked with interaction control, sensor feedback, multi-actuator communication, and cross-functional collaboration in a real R&D environment.",
      zh: "在真实研发环境中面对交互控制、传感反馈、多执行器通信和跨职能协作。",
    },
    question: {
      en: "How should a controller balance stability and responsiveness once it reaches real hardware?",
      zh: "控制方法进入真实硬件后，怎样兼顾稳定性与灵敏度？",
    },
    work: {
      en: [
        "High-fidelity teleoperation and multi-axis control simulation",
        "Impedance/admittance control with torque feedback",
        "Linux C++ host software and CAN-based multi-motor control",
      ],
      zh: ["高保真遥操作与多轴控制仿真", "阻抗 / 导纳控制与扭矩反馈", "Linux C++ 上位机与 CAN 多电机控制"],
    },
    ownership: {
      en: "Contributed to early dexterous-hand teleoperation development, implemented control simulations and system debugging, and adjusted the control structure in response to instability.",
      zh: "参与早期灵巧手遥操作研发，完成控制仿真和系统调试，并针对不稳定现象调整控制结构。",
    },
    transition: {
      en: "This experience moved control theory into a real system and reinforced the importance of hardware constraints, experimental validation, and engineering collaboration.",
      zh: "这段经历把课程中的控制方法带入真实系统，也让我更重视硬件约束、实验验证和工程协作。",
    },
    tone: "clay",
  },
  {
    id: "penn",
    years: { en: "Sep 2025 — May 2027 (expected)", zh: "2025.09 — 2027.05（预计）" },
    place: "University of Pennsylvania",
    role: { en: "M.S. in MEAM · Mechatronics & Robotics", zh: "MEAM M.S. · Mechatronics & Robotics" },
    context: {
      en: "Extending my robotics research foundation through advanced dynamics, mechatronic systems, engineering mathematics, and operating systems.",
      zh: "在高级动力学、机电系统、工程数学和操作系统训练中继续扩展机器人研究基础。",
    },
    question: {
      en: "How can my systems-engineering background support rigorous VLA post-training research?",
      zh: "如何让既有系统工程能力服务于 VLA 后训练研究？",
    },
    work: {
      en: ["MEAM 510 autonomous mobile robot", "CIS 548 PennOS", "Current research interest: VLA post-training"],
      zh: ["MEAM 510 自主移动机器人", "CIS 548 PennOS", "当前研究兴趣：VLA 后训练"],
    },
    ownership: {
      en: "Maintaining an end-to-end engineering loop from hardware to software while developing more rigorous methods for literature review, experimental validation, and technical communication.",
      zh: "继续保持从硬件到软件的工程闭环，同时建立更严格的研究阅读、实验验证和技术表达方法。",
    },
    transition: {
      en: "This foundation led into a 2026 VLA research internship at Synthoid.ai, where systems work and research methodology met on real-robot problems.",
      zh: "这些基础进一步导向 2026 年在 Synthoid.ai 的 VLA 研究实习，让系统工程与研究方法在真机问题中汇合。",
    },
    tone: "blue",
  },
  {
    id: "synthoid",
    years: { en: "May 18 — Aug 21, 2026", zh: "2026.05.18 — 2026.08.21" },
    place: "Synthoid.ai",
    role: { en: "VLA Research Intern", zh: "VLA 实习研究员" },
    context: {
      en: "Worked across real-robot infrastructure, proprietary VLA training, and an independently owned research problem in an industrial research environment.",
      zh: "在工业研究环境中同时推进真机基础设施、公司自研 VLA 训练和个人独立研究问题。",
    },
    question: {
      en: "How can real-robot systems and controlled experiments make VLA post-training more effective and more trustworthy?",
      zh: "怎样让真机系统和严格对照实验共同推动更有效、更可信的 VLA 后训练？",
    },
    work: {
      en: [
        "7-DoF industrial-arm control, teleoperation, data collection, and robot-side VLA adapter",
        "Early proprietary VLA training, distributed execution, checkpoint management, and initial ablations",
        "Path-OPD: independently defined online policy distillation for flow-matching VLAs",
      ],
      zh: [
        "7 自由度工业机械臂控制、遥操作、数据采集与机器人端 VLA adapter",
        "公司自研 VLA 前期训练、分布式运行、checkpoint 管理与初始消融",
        "Path-OPD：独立定义面向 flow-matching VLA 的在线策略蒸馏方法",
      ],
    },
    ownership: {
      en: "Independently owned the robot SDK control and VLA adapter; deeply contributed to early model training; solely defined, implemented, evaluated, and wrote the Path-OPD study.",
      zh: "独立负责机器人 SDK 控制与 VLA adapter；深度参与模型前期训练；独立完成 Path-OPD 的问题定义、方法、实现、评测与论文写作。",
    },
    transition: {
      en: "This experience connected systems ownership with independent research and established a concrete foundation for continued work in VLA post-training at Penn.",
      zh: "这段经历把系统 ownership 与独立研究连接起来，为返回 Penn 后继续推进 VLA 后训练研究建立了具体基础。",
    },
    tone: "clay",
  },
];
