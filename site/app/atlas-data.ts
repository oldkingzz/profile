import type { Language, LocalizedText } from "./language";

export type Ownership = 1 | 2 | 3;

export type AtlasProjectId =
  | "robocon"
  | "wuji"
  | "pennos"
  | "tennis"
  | "meam510"
  | "mdats"
  | "synthoid_robot"
  | "synthoid_vla"
  | "path_opd";

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

const technologyLabelTranslations: Record<string, string> = {
  "VLA Post-training": "VLA 后训练",
  "Flow Matching": "Flow Matching",
  "Online Policy Distillation": "在线策略蒸馏",
  "Path-OPD": "Path-OPD",
  "Learning-based Intelligence & Behavior": "学习型智能与行为",
  "Planning & Autonomy": "规划与自主",
  "Navigation & Path Planning": "导航与路径规划",
  "Motion Planning": "运动规划",
  "Task & Behavior Logic": "任务与行为逻辑",
  "Mission FSM": "任务 FSM",
  "Human–Robot Interaction": "人机交互",
  Teleoperation: "遥操作",
  "Perception & Localization": "感知与定位",
  "Visual & Spatial Perception": "视觉与空间感知",
  "Localization & Mapping": "定位与建图",
  "Tracking & Odometry": "跟踪与里程计",
  "Control & Dynamics": "控制与动力学",
  "Motion Control": "运动控制",
  "Manipulation Control": "机械臂控制",
  "Cartesian Pose Control": "笛卡尔末端位姿控制",
  "Trajectory Interpolation": "轨迹插值",
  "Inverse Kinematics": "逆运动学",
  "Interaction Control": "交互控制",
  Impedance: "阻抗控制",
  Admittance: "导纳控制",
  "Mobile Robot Control": "移动机器人控制",
  "System Runtime": "系统运行层",
  "Embedded & Real-time": "嵌入式与实时系统",
  "Middleware & Compute": "中间件与计算",
  "System Integration": "系统集成",
  "Robot SDK Integration": "机器人 SDK 集成",
  "VLA Adapter": "VLA Adapter",
  "Sensing, Actuation & Integration": "传感、执行与集成",
  "Sensors · Actuators · System Integration": "传感器 · 执行器 · 系统集成",
  "7-DoF Industrial Arm": "7 自由度工业机械臂",
  "Dexterous Hand": "灵巧手",
  "Multi-camera Sensing": "多相机感知",
  "Mechanical Design & CAD": "机械设计与 CAD",
  "Learning & Modeling": "学习与建模",
  "Learning workflow": "学习工作流",
  "Data & Training Pipelines": "数据与训练管线",
  "Data Collection & Annotation": "数据采集与标注",
  "Timestamp Synchronization": "时间戳同步",
  "Trajectory Screening": "轨迹异常筛选",
  "Model Training & Adaptation": "模型训练与适配",
  "Distributed Training": "分布式训练",
  "Checkpoint Management": "Checkpoint 管理",
  "Initial Ablations": "初始消融",
  "Training Diagnostics": "训练诊断",
  "Action-head Fine-tuning": "Action Head 微调",
  "Evaluation & Research": "评估与研究",
  "Closed-loop Evaluation": "闭环评测",
  "Teacher NFE / Cost Accounting": "Teacher NFE / 成本核算",
  "Research Practice": "研究实践",
  "Research workflow": "研究工作流",
  "Problem Formulation": "问题定义",
  "Method Design": "方法设计",
  "Controlled Experiments": "对照实验",
  "Matched Experimental Design": "匹配实验设计",
  "Academic Writing": "学术写作",
  "Research Communication": "研究交流",
  "Software & Computing": "软件与计算",
  Programming: "编程",
  Systems: "系统",
  "Operating Systems": "操作系统",
  Tools: "工具",
  "Agent-native Engineering": "Agent-native 工程",
  "Process & Scheduling": "进程与调度",
  "Syscalls & IPC": "系统调用与 IPC",
  "Filesystem & Shell": "文件系统与 Shell",
  Concurrency: "并发",
  Memory: "内存管理",
  "Low-level Debugging": "底层调试",
  "SSH / Remote Development": "SSH / 远程开发",
  "Control / Lab Simulation": "控制 / 实验仿真",
  "Industrial / Factory Simulation": "工业 / 工厂仿真",
  "Robot-learning Frameworks": "机器人学习框架",
};

export function technologyLabel(label: string, language: Language) {
  return language === "zh" ? technologyLabelTranslations[label] ?? label : label;
}

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
  {
    id: "synthoid_robot",
    title: { en: "Industrial Arm Teleoperation & Data Infrastructure", zh: "工业机械臂遥操作与数据基础设施" },
    summary: {
      en: "Independently built the low-level SDK control and robot-side VLA adapter for a 7-DoF industrial arm, and led a stable human-teleoperation and real-robot data-collection pipeline.",
      zh: "独立完成 7 自由度工业机械臂底层 SDK 控制与机器人端 VLA adapter，并主导稳定的人类遥操作和真机数据采集链路。",
    },
    evidence: {
      en: [
        "Cartesian end-effector control with multi-rate interpolation and automatic recovery",
        "Dexterous-hand teleoperation with head and wrist camera observations",
        "LeRobot multimodal data with timestamp synchronization and trajectory screening",
        "Robot-side VLA adapter integrated with a LAN inference service",
      ],
      zh: [
        "笛卡尔末端位姿控制、分层控制频率、轨迹插值与自动恢复",
        "灵巧手遥操作与头部、腕部双视角观测",
        "LeRobot 多模态数据、时间戳同步与轨迹异常筛选",
        "机器人端 VLA adapter 接入局域网推理服务",
      ],
    },
    skills: {
      vla: 2,
      hri: 3,
      teleoperation: 3,
      manipulation_control: 3,
      cartesian_control: 3,
      trajectory_interpolation: 3,
      inverse_kinematics: 2,
      middleware: 3,
      system_integration: 3,
      robot_sdk: 3,
      vla_adapter: 3,
      sensing: 3,
      industrial_arm: 3,
      dexterous_hand: 3,
      multicamera: 2,
      can: 2,
      data_pipeline: 3,
      lerobot: 3,
      timestamp_sync: 3,
      trajectory_screening: 3,
      ccpp: 3,
      linux: 2,
    },
    tone: "gold",
  },
  {
    id: "synthoid_vla",
    title: { en: "Proprietary VLA Model · Early Training", zh: "公司自研 VLA · 前期训练" },
    summary: {
      en: "Deeply contributed to the early development of a proprietary VLA model, concentrating on training implementation, distributed execution, experiment operations, and key engineering diagnosis before handing the project off for final evaluation.",
      zh: "深度参与公司自研 VLA 的前期研发，重点负责训练实现、分布式运行、实验运维和关键工程排错，随后交接给同事完成最终评估。",
    },
    evidence: {
      en: [
        "Training configuration, implementation, launch, monitoring, and recovery",
        "Distributed training and GPU-environment diagnosis",
        "Checkpoint management, historical-result reproduction, and initial ablations",
        "Diagnosed a gripper-dimension output-contract mismatch and GPU ECC hardware failures",
      ],
      zh: [
        "训练配置与实现、任务启动、监控和故障恢复",
        "分布式训练与 GPU 环境诊断",
        "Checkpoint 管理、历史结果复现与初始消融",
        "定位 gripper 维度 contract 错误与 GPU ECC 硬件故障",
      ],
    },
    skills: {
      vla: 2,
      model_training: 2,
      distributed_training: 2,
      checkpoint_management: 2,
      initial_ablations: 2,
      training_diagnostics: 3,
      action_head: 2,
      pytorch: 2,
      python: 2,
      cuda: 2,
      ssh: 2,
      git: 2,
    },
    tone: "blue",
  },
  {
    id: "path_opd",
    title: { en: "Path-OPD · Independent VLA Research", zh: "Path-OPD · 独立 VLA 研究" },
    summary: {
      en: "Independently defined, implemented, evaluated, and wrote a matched study of inner-path online policy distillation for flow-matching VLAs. Positive matched results were obtained over endpoint DAgger; an ICLR 2027 submission is in preparation.",
      zh: "独立完成面向 flow-matching VLA 的 inner-path 在线策略蒸馏研究，包括问题定义、方法、实现、matched 实验、结果解释与论文写作；相较 endpoint DAgger 已取得正向结果，正在准备 ICLR 2027 投稿。",
    },
    evidence: {
      en: [
        "Current-student rollout and saved inner solver chains",
        "Frozen-Teacher endpoint and velocity queries with gradient isolation",
        "Matched occupancy, Teacher-query, training, checkpoint, and evaluation contracts",
        "Closed-loop success, per-task spread, Teacher NFE, wall-clock, and resource-cost accounting",
      ],
      zh: [
        "Current-student rollout 与 inner solver chain 保存",
        "Frozen Teacher endpoint / velocity query 与梯度隔离",
        "匹配 occupancy、Teacher query、训练、checkpoint 与评测合同",
        "闭环成功率、任务分布、Teacher NFE、wall-clock 与资源成本核算",
      ],
    },
    skills: {
      vla: 3,
      flow_matching: 3,
      online_policy_distillation: 3,
      path_opd: 3,
      model_training: 3,
      evaluation: 3,
      closed_loop_evaluation: 3,
      nfe_cost: 3,
      problem_formulation: 3,
      method_design: 3,
      controlled_experiments: 3,
      matched_experiments: 3,
      academic_writing: 3,
      research_communication: 3,
      pytorch: 3,
      python: 3,
      cuda: 2,
      robot_learning_frameworks: 2,
      rlinf: 2,
      pi05: 2,
      maniskill25: 2,
      git: 2,
    },
    tone: "lilac",
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
  {
    id: "synthoid",
    title: { en: "Internship · Synthoid.ai", zh: "Synthoid.ai 实习阶段" },
    period: "2026.05 — 2026.08",
    projectIds: ["synthoid_robot", "synthoid_vla", "path_opd"],
  },
];

export const chronologicalProjects = atlasStages.flatMap((stage) =>
  stage.projectIds.map((id) => findAtlasProject(id)),
);

export const systemLayers: AtlasGroup[] = [
  {
    title: "Learning-based Intelligence & Behavior",
    nodes: [{
      id: "vla",
      label: "VLA Post-training",
      baseLevel: 1,
      methods: [
        { id: "flow_matching", label: "Flow Matching" },
        { id: "online_policy_distillation", label: "Online Policy Distillation" },
        { id: "path_opd", label: "Path-OPD" },
      ],
    }],
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
      { id: "manipulation_control", label: "Manipulation Control", methods: [{ id: "cartesian_control", label: "Cartesian Pose Control" }, { id: "trajectory_interpolation", label: "Trajectory Interpolation" }, { id: "inverse_kinematics", label: "Inverse Kinematics" }] },
      { id: "interaction_control", label: "Interaction Control", methods: [{ id: "impedance", label: "Impedance" }, { id: "admittance", label: "Admittance" }] },
      { id: "mobile_control", label: "Mobile Robot Control" },
    ],
  },
  {
    title: "System Runtime",
    nodes: [
      { id: "embedded", label: "Embedded & Real-time", methods: [{ id: "stm32", label: "STM32" }, { id: "esp32", label: "ESP32" }, { id: "rtos", label: "RTOS" }, { id: "can", label: "CAN" }] },
      { id: "middleware", label: "Middleware & Compute", methods: [{ id: "system_integration", label: "System Integration" }, { id: "robot_sdk", label: "Robot SDK Integration" }, { id: "vla_adapter", label: "VLA Adapter" }] },
    ],
  },
  {
    title: "Sensing, Actuation & Integration",
    nodes: [{ id: "sensing", label: "Sensors · Actuators · System Integration", methods: [{ id: "industrial_arm", label: "7-DoF Industrial Arm" }, { id: "dexterous_hand", label: "Dexterous Hand" }, { id: "multicamera", label: "Multi-camera Sensing" }] }],
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
          { id: "data_pipeline", label: "Data & Training Pipelines", methods: [{ id: "visual_data", label: "Data Collection & Annotation" }, { id: "pytorch", label: "PyTorch" }, { id: "lerobot", label: "LeRobot" }, { id: "timestamp_sync", label: "Timestamp Synchronization" }, { id: "trajectory_screening", label: "Trajectory Screening" }] },
          { id: "model_training", label: "Model Training & Adaptation", methods: [{ id: "distributed_training", label: "Distributed Training" }, { id: "checkpoint_management", label: "Checkpoint Management" }, { id: "initial_ablations", label: "Initial Ablations" }, { id: "training_diagnostics", label: "Training Diagnostics" }, { id: "action_head", label: "Action-head Fine-tuning" }] },
          { id: "evaluation", label: "Evaluation & Research", methods: [{ id: "closed_loop_evaluation", label: "Closed-loop Evaluation" }, { id: "nfe_cost", label: "Teacher NFE / Cost Accounting" }] },
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
          { id: "controlled_experiments", label: "Controlled Experiments", methods: [{ id: "matched_experiments", label: "Matched Experimental Design" }] },
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
          { id: "cuda", label: "CUDA", baseLevel: 1 },
          { id: "robot_learning_frameworks", label: "Robot-learning Frameworks", methods: [{ id: "rlinf", label: "RLinf" }, { id: "pi05", label: "π0.5" }, { id: "maniskill25", label: "ManiSkill-25" }] },
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
