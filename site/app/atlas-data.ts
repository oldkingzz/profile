import type { Language, LocalizedText } from "./language";

export type Ownership = 1 | 2 | 3;

export type AtlasProjectId =
  | "robocon"
  | "wuji"
  | "pennos"
  | "tennis"
  | "meam510"
  | "mdats";

export type AtlasProject = {
  id: AtlasProjectId;
  title: LocalizedText;
  summary: LocalizedText;
  evidence: Record<Language, string[]>;
  skills: Record<string, Ownership>;
  link?: string;
  image?: string;
  tone: "sage" | "clay" | "blue" | "gold" | "lilac";
};

export type AtlasNode = {
  id: string;
  label: string;
  methods?: Array<{ id: string; label: string }>;
  baseLevel?: Ownership;
  alwaysOn?: boolean;
  evidenceLinks?: Array<{ href: string; label: string }>;
};

export type AtlasGroup = {
  title: string;
  nodes: AtlasNode[];
};

export const ownershipLabels: Record<Language, Record<Ownership, string>> = {
  en: { 1: "Used", 2: "Built", 3: "Led" },
  zh: { 1: "使用", 2: "实现", 3: "主导" },
};

export const atlasProjects: AtlasProject[] = [
  {
    id: "robocon",
    title: { en: "Robocon Autonomous Robot System", zh: "Robocon 自主机器人系统" },
    summary: {
      en: "Started with STM32 control and expanded into perception, localization, planning, host–controller integration, and multi-node system integration, while taking ownership of system architecture and technical leadership.",
      zh: "从 STM32 电控出发，逐步完成感知、定位、规划、上下位机与多节点系统集成，并承担机器人系统架构和团队技术领导。",
    },
    evidence: {
      en: ["Embedded and real-time control", "Multi-node ROS system", "Localization, navigation, and planning", "Full-system architecture and integration"],
      zh: ["嵌入式与实时控制", "ROS 多节点系统", "定位、导航与规划", "整机架构与集成"],
    },
    skills: {
      embedded: 3,
      stm32: 3,
      rtos: 3,
      can: 3,
      sensing: 3,
      motion_control: 3,
      mobile_control: 3,
      middleware: 3,
      ros: 3,
      visual: 2,
      yolo: 2,
      localization: 2,
      pointlio: 2,
      navigation: 2,
      motion_planning: 2,
      moveit: 2,
      task_logic: 2,
      system_integration: 3,
      ccpp: 3,
      git: 2,
    },
    link: "https://github.com/oldkingzz/ECUST-robocon",
    image: "/projects/robocon.png",
    tone: "sage",
  },
  {
    id: "wuji",
    title: { en: "Wuji Tech Dexterous-hand Teleoperation", zh: "Wuji Tech 灵巧手遥操作" },
    summary: {
      en: "Contributed to early dexterous-hand teleoperation and multi-motor control R&D, working across control simulation, interaction control, and system debugging with real sensors, actuators, and CAN communication.",
      zh: "参与早期灵巧手遥操作与多电机控制研发，在真实传感、执行器与 CAN 通信链路中完成控制仿真、交互控制和系统调试。",
    },
    evidence: {
      en: ["Simulink control simulation", "Impedance and admittance control", "Teleoperation interaction", "CAN multi-actuator communication"],
      zh: ["Simulink 控制仿真", "阻抗与导纳控制", "遥操作交互", "CAN 多执行器通信"],
    },
    skills: {
      simulation: 2,
      simulink: 2,
      interaction_control: 3,
      impedance: 3,
      admittance: 3,
      hri: 2,
      teleoperation: 2,
      ccpp: 1,
      linux: 1,
      can: 2,
      sensing: 1,
    },
    tone: "clay",
  },
  {
    id: "pennos",
    title: { en: "PennOS Operating System", zh: "PennOS 操作系统" },
    summary: {
      en: "Implemented and debugged core operating-system mechanisms including processes, scheduling, system calls, signals, a file system, and a shell in a full course project.",
      zh: "通过完整课程项目实现和调试进程、调度、系统调用、信号、文件系统与 Shell 等操作系统核心机制。",
    },
    evidence: {
      en: ["C systems programming", "Processes and scheduling", "System calls and IPC", "File systems and low-level debugging"],
      zh: ["C 系统编程", "进程与调度", "系统调用与 IPC", "文件系统与底层调试"],
    },
    skills: {
      ccpp: 3,
      operating_systems: 3,
      process: 2,
      syscalls: 3,
      filesystem: 2,
      concurrency: 2,
      memory: 2,
      lowlevel_debug: 3,
    },
    tone: "lilac",
  },
  {
    id: "tennis",
    title: { en: "Tennis.ai Vision Data Pipeline", zh: "Tennis.ai 视觉数据链路" },
    summary: {
      en: "Supported visual data collection, annotation, quality analysis, and YOLO fine-tuning, building an end-to-end understanding of the CV workflow from data preparation to object-detection evaluation.",
      zh: "协助参与视觉数据采集、标注、质量分析与 YOLO 微调，建立从数据准备到目标检测评估的完整 CV 工作流程认识。",
    },
    evidence: {
      en: ["Visual data collection and annotation", "Training-data pipeline", "YOLO fine-tuning", "Object-detection evaluation"],
      zh: ["视觉数据采集与标注", "训练数据管线", "YOLO 微调", "目标检测评估"],
    },
    skills: {
      visual_data: 3,
      data_pipeline: 2,
      visual: 1,
      yolo: 1,
      model_training: 1,
      evaluation: 1,
    },
    tone: "blue",
  },
  {
    id: "meam510",
    title: { en: "MEAM 510 Autonomous Mobile Robot", zh: "MEAM 510 自主移动机器人" },
    summary: {
      en: "Built a closed-loop autonomous mobile robot on ESP32 and FreeRTOS, spanning sensing, localization, path planning, chassis control, mission state logic, and system validation.",
      zh: "在 ESP32 与 FreeRTOS 上构建自主移动机器人闭环，覆盖传感、定位、路径规划、底盘控制、任务状态机和系统验证。",
    },
    evidence: {
      en: ["ESP32 and FreeRTOS", "Vive / EKF localization", "A* path planning", "Mission FSM and system validation"],
      zh: ["ESP32 与 FreeRTOS", "Vive / EKF 定位", "A* 路径规划", "Mission FSM 与整机验证"],
    },
    skills: {
      embedded: 3,
      esp32: 3,
      rtos: 3,
      sensing: 3,
      mobile_control: 3,
      localization: 3,
      odometry: 3,
      vive: 3,
      ekf: 3,
      navigation: 3,
      astar: 3,
      task_logic: 3,
      mission_fsm: 3,
      system_integration: 3,
      ccpp: 2,
      git: 2,
    },
    link: "https://github.com/oldkingzz/wuer",
    image: "/projects/meam510.jpg",
    tone: "gold",
  },
  {
    id: "mdats",
    title: { en: "MDATS Cross-domain Fault Diagnosis", zh: "MDATS 机械故障诊断" },
    summary: {
      en: "Addressed distribution shifts across machines and operating conditions through a complete research cycle: problem formulation, training pipeline, method design, controlled experiments, and a first-author paper.",
      zh: "围绕跨机器、跨工况的数据分布变化，完成从问题定义、训练管线和方法设计到对照实验与第一作者论文的研究闭环。",
    },
    evidence: {
      en: ["PyTorch training pipeline", "Model training and domain adaptation", "Controlled experiments", "First-author paper"],
      zh: ["PyTorch 训练管线", "模型训练与跨域适应", "对照实验", "第一作者论文"],
    },
    skills: {
      python: 3,
      pytorch: 3,
      data_pipeline: 3,
      model_training: 3,
      evaluation: 3,
      problem_formulation: 3,
      method_design: 3,
      controlled_experiments: 3,
      academic_writing: 3,
      research_communication: 3,
      conda: 1,
      git: 2,
    },
    link: "https://doi.org/10.1109/MEAE62008.2024.11026598",
    image: "/projects/meae.png",
    tone: "blue",
  },
];

export const atlasStages: Array<{
  id: string;
  title: LocalizedText;
  period: string;
  projectIds: AtlasProjectId[];
}> = [
  {
    id: "ecust",
    title: { en: "Undergraduate · ECUST", zh: "ECUST 本科阶段" },
    period: "2021 — 2025",
    projectIds: ["tennis", "robocon", "mdats"],
  },
  {
    id: "wuji",
    title: { en: "Internship · Wuji Tech", zh: "Wuji Tech 实习阶段" },
    period: "2024.07 — 2024.09",
    projectIds: ["wuji"],
  },
  {
    id: "penn",
    title: { en: "Master's · Penn", zh: "Penn Master 阶段" },
    period: "2025 — 2027",
    projectIds: ["meam510", "pennos"],
  },
];

export const chronologicalProjects = atlasStages.flatMap((stage) =>
  stage.projectIds.map((id) => findAtlasProject(id)),
);

export const systemLayers: AtlasGroup[] = [
  {
    title: "Learning-based Intelligence & Behavior",
    nodes: [{ id: "vla", label: "VLA Post-training", baseLevel: 1 }],
  },
  {
    title: "Planning & Autonomy",
    nodes: [
      { id: "navigation", label: "Navigation & Path Planning", methods: [{ id: "astar", label: "A*" }] },
      { id: "motion_planning", label: "Motion Planning", methods: [{ id: "moveit", label: "MoveIt" }] },
      { id: "task_logic", label: "Task & Behavior Logic", methods: [{ id: "mission_fsm", label: "Mission FSM" }] },
      { id: "hri", label: "Human–Robot Interaction", methods: [{ id: "teleoperation", label: "Teleoperation" }] },
    ],
  },
  {
    title: "Perception & Localization",
    nodes: [
      { id: "visual", label: "Visual & Spatial Perception", methods: [{ id: "yolo", label: "YOLO" }] },
      { id: "localization", label: "Localization & Mapping", methods: [{ id: "pointlio", label: "Point-LIO" }, { id: "vive", label: "Vive" }, { id: "ekf", label: "EKF" }] },
      { id: "odometry", label: "Tracking & Odometry" },
    ],
  },
  {
    title: "Control & Dynamics",
    nodes: [
      { id: "motion_control", label: "Motion Control" },
      { id: "interaction_control", label: "Interaction Control", methods: [{ id: "impedance", label: "Impedance" }, { id: "admittance", label: "Admittance" }] },
      { id: "mobile_control", label: "Mobile Robot Control" },
    ],
  },
  {
    title: "System Runtime",
    nodes: [
      { id: "embedded", label: "Embedded & Real-time", methods: [{ id: "stm32", label: "STM32" }, { id: "esp32", label: "ESP32" }, { id: "rtos", label: "RTOS" }, { id: "can", label: "CAN" }] },
      { id: "middleware", label: "Middleware & Compute", methods: [{ id: "system_integration", label: "System Integration" }] },
    ],
  },
  {
    title: "Sensing, Actuation & Integration",
    nodes: [{ id: "sensing", label: "Sensors · Actuators · System Integration" }],
  },
  {
    title: "Mechanical Design & CAD",
    nodes: [{ id: "mechanical", label: "Mechanical Design & CAD", baseLevel: 1, methods: [{ id: "fusion360", label: "Fusion 360" }] }],
  },
];

export const horizontalMaps: Array<{ title: string; groups: AtlasGroup[] }> = [
  {
    title: "Learning & Modeling",
    groups: [
      {
        title: "Learning workflow",
        nodes: [
          { id: "data_pipeline", label: "Data & Training Pipelines", methods: [{ id: "visual_data", label: "Data Collection & Annotation" }, { id: "pytorch", label: "PyTorch" }, { id: "lerobot", label: "LeRobot" }] },
          { id: "model_training", label: "Model Training & Adaptation" },
          { id: "evaluation", label: "Evaluation & Research" },
        ],
      },
    ],
  },
  {
    title: "Research Practice",
    groups: [
      {
        title: "Research workflow",
        nodes: [
          { id: "problem_formulation", label: "Problem Formulation" },
          { id: "method_design", label: "Method Design" },
          { id: "controlled_experiments", label: "Controlled Experiments" },
          { id: "academic_writing", label: "Academic Writing" },
          { id: "research_communication", label: "Research Communication" },
        ],
      },
    ],
  },
  {
    title: "Software & Computing",
    groups: [
      { title: "Programming", nodes: [{ id: "ccpp", label: "C/C++" }, { id: "python", label: "Python" }] },
      {
        title: "Systems",
        nodes: [
          { id: "linux", label: "Linux" },
          { id: "operating_systems", label: "Operating Systems", methods: [{ id: "process", label: "Process & Scheduling" }, { id: "syscalls", label: "Syscalls & IPC" }, { id: "filesystem", label: "Filesystem & Shell" }, { id: "concurrency", label: "Concurrency" }, { id: "memory", label: "Memory" }, { id: "lowlevel_debug", label: "Low-level Debugging" }] },
          { id: "ros", label: "ROS" },
        ],
      },
      {
        title: "Tools",
        nodes: [
          {
            id: "agent_native",
            label: "Agent-native Engineering",
            baseLevel: 3,
            alwaysOn: true,
            methods: [{ id: "claude_code", label: "Claude Code" }, { id: "codex", label: "OpenAI Codex" }, { id: "symphony", label: "Symphony" }],
            evidenceLinks: [
              { href: "https://github.com/oldkingzz/research_skills", label: "research-skills" },
              { href: "https://github.com/oldkingzz/slides-tool", label: "slides-tool" },
            ],
          },
          { id: "git", label: "Git / GitHub", baseLevel: 2 },
          { id: "docker", label: "Docker", baseLevel: 1 },
          { id: "ssh", label: "SSH / Remote Development", baseLevel: 1 },
          { id: "conda", label: "Conda", baseLevel: 1 },
          { id: "simulation", label: "Control / Lab Simulation", methods: [{ id: "simulink", label: "Simulink" }] },
          { id: "tecnomatix", label: "Industrial / Factory Simulation", baseLevel: 1 },
        ],
      },
    ],
  },
];

export function findAtlasProject(id: AtlasProjectId) {
  return atlasProjects.find((project) => project.id === id) ?? atlasProjects[0];
}

export function getGlobalOwnership(skillId: string, baseLevel: Ownership = 1): Ownership {
  return atlasProjects.reduce<Ownership>((level, project) => {
    const projectLevel = project.skills[skillId] ?? 0;
    return Math.max(level, projectLevel) as Ownership;
  }, baseLevel);
}
