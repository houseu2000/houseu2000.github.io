import type { Localized } from "./site-data";
import type { ResumeBullet } from "./research-data";

export const resumeSections = [
  { id: "about", zh: "个人简介", en: "Profile" },
  { id: "education", zh: "教育背景", en: "Education" },
  { id: "research", zh: "研究项目", en: "Research" },
  { id: "experience", zh: "实习及项目", en: "Experience" },
  { id: "publications", zh: "代表性论文", en: "Publications" },
  { id: "honors", zh: "荣誉与奖励", en: "Honors" },
  { id: "activities", zh: "课外活动", en: "Beyond research" },
];

export const introduction: Localized = {
  zh: "2027 届清华大学工科博士研究生。通过**计算机视觉与视觉智能体**，感知灾害过程中**结构、非结构构件与人**的状态，为灾后分析与评估提供依据。",
  en: "I am a Ph.D. candidate at Tsinghua University, graduating in 2027. I use **computer vision and visual agents** to understand the states of **structures, non-structural components and people** during disasters, supporting post-disaster analysis and assessment.",
};

export const publicationSummary: Localized = {
  zh: "共发表 SCI 论文 16 篇，其中第一作者或导师一作本人二作论文 7 篇；另有 1 篇第一作者 SCI 论文已被 SCHM 接收（In press），SEES 论文已投稿至 SCIHM。",
  en: "16 published SCI papers, including seven as first author or second author with my advisor as first author; one additional first-author SCI paper accepted by SCHM (in press), and the SEES manuscript submitted to SCIHM.",
};

export const resumeEducation = [
  {
    school: { zh: "清华大学", en: "Tsinghua University" },
    degree: {
      zh: "土木工程 · 工学博士研究生",
      en: "Civil Engineering · Ph.D. candidate",
    },
    period: { zh: "2023.09 – 至今", en: "2023.09 – Present" },
    note: {
      zh: "均分 86.00；综合一等奖学金（2 次）、第 33 届全国结构工程会议论文特等奖；预计 2027 年 6 月毕业。",
      en: "Average: 86.00. Comprehensive First-Class Scholarship (twice); Special Prize for Outstanding Paper at the 33rd National Conference on Structural Engineering. Expected graduation: June 2027.",
    },
  },
  {
    school: { zh: "东南大学", en: "Southeast University" },
    degree: {
      zh: "土木水利 · 工学硕士",
      en: "Civil and Hydraulic Engineering · M.Eng.",
    },
    period: { zh: "2020.09 – 2023.07", en: "2020.09 – 2023.07" },
    note: {
      zh: "均分 82.89，排名 18 / 100；江苏省土木工程学科优秀毕业生、三好研究生标兵、一等学业奖学金（2 次）。",
      en: "Average: 82.89; rank: 18/100. Outstanding Graduate in Civil Engineering of Jiangsu Province; Model Merit Graduate Student; First-Class Academic Scholarship (twice).",
    },
  },
  {
    school: {
      zh: "西安建筑科技大学",
      en: "Xi’an University of Architecture and Technology",
    },
    degree: { zh: "土木工程 · 工学学士", en: "Civil Engineering · B.Eng." },
    period: { zh: "2016.09 – 2020.07", en: "2016.09 – 2020.07" },
    note: {
      zh: "均分 83.41，排名 22 / 450；陕西省高校高等数学竞赛特等奖、校一等奖学金。",
      en: "Average: 83.41; rank: 22/450. Special Prize in the Shaanxi Collegiate Higher Mathematics Competition; University First-Class Scholarship.",
    },
  },
];

type Experience = {
  title: Localized;
  role: Localized;
  period: string;
  bullets: ResumeBullet[];
};

export const experiences: Experience[] = [
  {
    title: { zh: "DCON Painting & Sons", en: "DCON Painting & Sons" },
    role: {
      zh: "建筑造价 Agent 开发 · 线上",
      en: "Construction estimating agent development · Remote",
    },
    period: "2026.06 –",
    bullets: [
      {
        label: {
          zh: "图纸理解与造价范围判定",
          en: "Drawing understanding and scope assessment",
        },
        text: {
          zh: "基于 AECV Benchmark 评估 DeepSeek V4 Flash Vision Exp 的建筑图纸理解能力，设计并接入 EasyOCR、房间区域裁剪、YOLO 门窗识别等工具。工具增强后，准确率由 **87.7% 提升至 96.9%**，空间推理、比较推理和计数任务分别提升 2.6pp、4.5pp、4.8pp。",
          en: "Evaluate DeepSeek V4 Flash Vision Exp on AECV Benchmark; integrate EasyOCR, room-region cropping and YOLO door/window detection. Tool augmentation improves accuracy from **87.7% to 96.9%**, with gains of 2.6pp, 4.5pp and 4.8pp in spatial reasoning, comparison and counting.",
        },
      },
      {
        label: { zh: "造价工作 Agent", en: "Estimating agent" },
        text: {
          zh: "基于 DeepSeek Harness 搭建轻量级造价 Agent，将造价工作流拆解为十余个可调用工具，覆盖项目资料解析、造价范围判断、报价文件生成，以及 SharePoint 文件管理和 Simpro 项目管理，实现通过自然语言完成跨系统造价流程。",
          en: "Build a lightweight estimating agent with DeepSeek Harness and more than ten callable tools for document parsing, scope assessment, quote generation, SharePoint file management and Simpro project management, enabling cross-system workflows through natural language.",
        },
      },
      {
        label: { zh: "反馈驱动的持续迭代", en: "Feedback-driven iteration" },
        text: {
          zh: "基于员工反馈持续优化 Harness 架构；员工可通过 Agent 在独立 Git 分支中修改流程与工具，提交后由统一管理的 Agent 复核与审查，将有效改进合并至主分支。",
          en: "Iterate on the Harness architecture using employee feedback. Employees update workflows and tools through an agent on isolated Git branches; a centrally managed agent reviews submissions before effective improvements are merged.",
        },
      },
    ],
  },
  {
    title: { zh: "北京万格智元", en: "Beijing Wange Zhiyuan" },
    role: { zh: "智能体平台研发实习生", en: "Agent platform R&D intern" },
    period: "2026.03 – 2026.05",
    bullets: [
      {
        label: { zh: "隐私感知路由", en: "Privacy-aware routing" },
        text: {
          zh: "参与端侧隐私感知路由开发，通过规则筛查与本地模型判别识别敏感请求，并动态选择端侧推理或云端模型，实现隐私约束下的端云协同推理。",
          en: "Contribute to on-device privacy-aware routing, combining rule-based screening and local-model classification to detect sensitive requests and route them to local or cloud inference.",
        },
      },
      {
        label: { zh: "隐私信息处理", en: "Sensitive-data processing" },
        text: {
          zh: "参与端侧隐私信息处理模块开发，对识别出的个人信息等敏感字段进行脱敏与去标识化处理，在保留任务语义的基础上生成可安全发送至云端模型的请求。",
          en: "Contribute to on-device redaction and de-identification of sensitive fields, preserving task semantics in requests intended for cloud models.",
        },
      },
      {
        label: { zh: "Agent 产品开发", en: "Agent product engineering" },
        text: {
          zh: "基于 Electron + React + TypeScript、Flask 与公司自研推理引擎，参与 Agent 桌面系统原型开发与集成，实现本地和云端大模型统一接入、Agent 工作流及核心功能验证。",
          en: "Develop and integrate a desktop agent prototype using Electron, React, TypeScript, Flask and the company’s inference engine, unifying local and cloud models and validating agent workflows and core features.",
        },
      },
    ],
  },
  {
    title: {
      zh: "小参数 VLM 的 Gated Attention 训练与优化",
      en: "Gated Attention training and optimization for small VLMs",
    },
    role: { zh: "个人项目", en: "Personal project" },
    period: "2025.11 – 2026.02",
    bullets: [
      {
        text: {
          zh: "基于 MiniMind-V 搭建小参数视觉语言模型，将 NeurIPS 2025 Gated Attention 机制迁移至小模型，实现 elementwise、headwise、headshare 等 **6 种门控注意力变体**，分析 attention sink 现象。",
          en: "Build a small vision-language model with MiniMind-V and transfer the NeurIPS 2025 Gated Attention mechanism to small models. Implement **six variants**, including elementwise, headwise and headshare gating, and analyze attention sinks.",
        },
      },
      {
        text: {
          zh: "采用 CLIP ViT-B-16 提取视觉特征，在约 **1.5G 中文语言数据**上完成语言模型预训练，并在约 **1.8G 多模态数据**上完成视觉模块训练与监督微调。",
          en: "Use CLIP ViT-B-16 for visual features, pretrain the language model on approximately **1.5G of Chinese language data**, and train the visual module and perform supervised fine-tuning on approximately **1.8G of multimodal data**.",
        },
      },
      {
        text: {
          zh: "最优配置在参数量仅增加约 **1%** 的情况下，使同数据条件下 PPL 下降约 **7.06%**，同时注意力集中现象减弱。",
          en: "The best configuration adds only about **1%** more parameters while reducing PPL by approximately **7.06%** on the same data and mitigating attention concentration.",
        },
      },
    ],
  },
];

export const resumeHonors = [
  {
    year: "2026",
    title: { zh: "学生论文优秀奖", en: "Outstanding Student Paper Award" },
    org: {
      zh: "第十三届海峡两岸土木工程监测与控制研讨会 · 哈尔滨",
      en: "13th Cross-Strait Symposium on Civil Engineering Monitoring and Control · Harbin",
    },
  },
  {
    year: "2024 – 2025",
    title: {
      zh: "综合一等奖学金（2 次）、系研团优秀干部",
      en: "Comprehensive First-Class Scholarship (twice); Outstanding Graduate Youth League Cadre",
    },
    org: {
      zh: "清华大学、清华大学土木系",
      en: "Tsinghua University and its Department of Civil Engineering",
    },
  },
  {
    year: "2024",
    title: { zh: "论文特等奖", en: "Special Prize for Outstanding Paper" },
    org: {
      zh: "第 33 届全国结构工程会议 · 昆明",
      en: "33rd National Conference on Structural Engineering · Kunming",
    },
  },
  {
    year: "2024",
    title: { zh: "Best Presentation Award", en: "Best Presentation Award" },
    org: {
      zh: "欧洲–亚太地区智能结构技术暑期学校 · 京都",
      en: "Europe–Asia-Pacific Smart Structures Summer School · Kyoto",
    },
  },
  {
    year: "2023",
    title: {
      zh: "江苏省土木工程学科优秀毕业生",
      en: "Outstanding Graduate in Civil Engineering of Jiangsu Province",
    },
    org: {
      zh: "江苏省土木建筑学会",
      en: "Jiangsu Civil and Architectural Society",
    },
  },
  {
    year: "2021 – 2023",
    title: {
      zh: "三好研究生、三好研究生标兵、优秀毕业研究生",
      en: "Merit Graduate Student, Model Merit Graduate Student and Outstanding Graduate",
    },
    org: { zh: "东南大学", en: "Southeast University" },
  },
  {
    year: "2021 – 2023",
    title: {
      zh: "一等学业奖学金（2 次）、“陆俊、许学雷”奖学金",
      en: "First-Class Academic Scholarship (twice); Lu Jun–Xu Xuelei Scholarship",
    },
    org: { zh: "东南大学", en: "Southeast University" },
  },
  {
    year: "2019",
    title: {
      zh: "陕西省高校高等数学竞赛特等奖",
      en: "Special Prize, Shaanxi Collegiate Higher Mathematics Competition",
    },
    org: { zh: "陕西省数学会", en: "Shaanxi Mathematical Society" },
  },
];

export const activities: ResumeBullet[] = [
  {
    label: { zh: "个人开发", en: "Independent development" },
    text: {
      zh: "Zen：隔离工作上下文的 AI 日记本，把生活片段、思考与经验持续沉淀。",
      en: "Zen: an AI journal separate from work contexts, collecting everyday moments, reflections and experience.",
    },
    href: "https://zen-ai.online",
  },
  {
    label: { zh: "学术服务", en: "Academic service" },
    text: {
      zh: "中科院一区 Top 期刊 MSSP、RESS 审稿人，SCI 期刊 Measurement、JCCE，以及多次会议审稿人。",
      en: "Reviewer for MSSP, RESS, Measurement, JCCE and multiple conferences.",
    },
  },
  {
    label: { zh: "学生工作", en: "Student leadership" },
    text: {
      zh: "现任清华大学土木系 23 级博士生团支部书记，曾任清华大学土木系研究生团总支实践部副部长。",
      en: "Youth League branch secretary for the 2023 doctoral cohort in Tsinghua’s Department of Civil Engineering; previously deputy head of the graduate Youth League practice department.",
    },
  },
  {
    label: { zh: "体育及志愿", en: "Sports and volunteering" },
    text: {
      zh: "乒乓球二级运动员；多次获得省、校乒乓球比赛前三名。参与至善云端对口支教服务一学期。",
      en: "National Level-2 table tennis athlete, with multiple top-three finishes in provincial and university competitions. Completed a semester of remote volunteer teaching through Zhishan Cloud.",
    },
  },
];
