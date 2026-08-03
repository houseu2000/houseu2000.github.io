export type Language = "zh" | "en";
export type Filter = "all" | "vision" | "bridge";
export type Localized = { zh: string; en: string };
export type LocalizedList = { zh: string[]; en: string[] };
export type EducationEntry = {
  period: string;
  institution: Localized;
  degree: Localized;
  current?: boolean;
  advisors?: Array<{ name: Localized; url: string }>;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  category: Exclude<Filter, "all">;
  url: string;
  doi?: string;
  citationCount?: number | null;
};

export const scholarUrl =
  "https://scholar.google.com/citations?user=RM60Sm4AAAAJ&hl=en&authuser=1";
export const profileUrl = "https://www.researchgate.net/profile/Jiale-Hou-3";

export const publications: Publication[] = [
  { title: "Digital modeling of vortex-induced vibration of main girder of a large-span suspension bridge based on deep learning", authors: "Chunfeng Wan, Puyu Li, Jiale Hou, et al.", venue: "Structures", year: 2025, category: "bridge", url: profileUrl, citationCount: 0 },
  { title: "An automatic method for measuring inter-storey structural displacement based on vision data", authors: "Jiale Hou, Yi Zhang, Enjian Cai, et al.", venue: "Mechanical Systems and Signal Processing", year: 2025, category: "vision", url: "https://www.sciencedirect.com/science/article/pii/S0888327025008246", doi: "10.1016/j.ymssp.2025.113123", citationCount: 6 },
  { title: "An anti-occlusion vision-based method for structural motion estimation", authors: "Jiale Hou, Yi Zhang, Xinzheng Lu, et al.", venue: "Mechanical Systems and Signal Processing", year: 2025, category: "vision", url: "https://www.researchgate.net/publication/384725122_An_anti-occlusion_vision-based_method_for_structural_motion_estimation", citationCount: 13 },
  { title: "Domain adaptation based automatic identification method of vortex induced vibration of long-span bridges without prior information", authors: "Chunfeng Wan, Jiale Hou, Guangcai Zhang, et al.", venue: "Engineering Applications of Artificial Intelligence", year: 2025, category: "bridge", url: "https://www.sciencedirect.com/science/article/pii/S0952197624018359", doi: "10.1016/j.engappai.2024.109677", citationCount: 4 },
  { title: "Non-contact vision-based response reconstruction and reinforcement learning guided evolutionary algorithm for substructural condition assessment", authors: "Guangcai Zhang, Jiale Hou, Chunfeng Wan, et al.", venue: "Mechanical Systems and Signal Processing", year: 2024, category: "vision", url: profileUrl, citationCount: 9 },
  { title: "Estimating structural motions in extreme environmental conditions--A dynamic correlation filter based computer vision approach", authors: "Enjian Cai, Yi Zhang, Xinzheng Lu, et al.", venue: "Mechanical Systems and Signal Processing", year: 2024, category: "vision", url: profileUrl, citationCount: 20 },
  { title: "A Hybrid Perspective of Vision-Based Methods for Estimating Structural Displacements Based on Mask Region-Based Convolutional Neural Networks", authors: "Chuanchang Xu, Cass Wai Gwan Lai, Yangchun Wang, et al.", venue: "ASCE-ASME Journal of Risk and Uncertainty in Engineering Systems, Part B: Mechanical Engineering", year: 2024, category: "vision", url: profileUrl, citationCount: null },
  { title: "Vision-based automatic structural motion estimation in presence of 3D camera motion effects", authors: "Enjian Cai, Yi Zhang, Xinzheng Lu, et al.", venue: "Automation in Construction", year: 2024, category: "vision", url: profileUrl, citationCount: 24 },
  { title: "Structural damage identification with output-only strain measurements and swarm intelligence algorithms: a comparative study", authors: "Guangcai Zhang, Jiale Hou, Kun Feng, Chunfeng Wan, et al.", venue: "Measurement Science and Technology", year: 2024, category: "bridge", url: "https://doi.org/10.1088/1361-6501/ad2ad4", doi: "10.1088/1361-6501/ad2ad4", citationCount: 7 },
  { title: "Enhanced data imputation framework for bridge health monitoring using Wasserstein generative adversarial networks with gradient penalty", authors: "Shuai Gao, Chunfeng Wan, Zhenwei Zhou, Jiale Hou, et al.", venue: "Structures", year: 2023, category: "bridge", url: profileUrl, citationCount: 26 },
  { title: "Vortex-Induced Vibration Recognition for Long-Span Bridges Based on Transfer Component Analysis", authors: "Jiale Hou, Sugong Cao, Hao Hu, et al.", venue: "Buildings", year: 2023, category: "bridge", url: "https://www.mdpi.com/2075-5309/13/8/2012", doi: "10.3390/buildings13082012", citationCount: 7 },
  { title: "Forced vibration of a novel beam model considering the shear deformation induced rotary inertia", authors: "Chunfeng Wan, Jiale Hou, Songtao Xue, et al.", venue: "Structures", year: 2023, category: "bridge", url: profileUrl, citationCount: 8 },
  { title: "Structural system identification and damage detection using adaptive hybrid Jaya and differential evolution algorithm with mutation pool strategy", authors: "Guangcai Zhang, Jiale Hou, Chunfeng Wan, et al.", venue: "Structures", year: 2022, category: "bridge", url: profileUrl, citationCount: 11 },
  { title: "Structural health monitoring data cleaning based on Bayesian robust tensor learning", authors: "Letian Yi, Youliang Ding, Jiale Hou, et al.", venue: "Structural Health Monitoring", year: 2022, category: "bridge", url: profileUrl, citationCount: 15 },
  { title: "Automatic identification of vortex induced vibration of long-span bridges using kernel mean matching method", authors: "Jiale Hou, Xiaobing Xiong, Ensheng Ge, et al.", venue: "Conference paper", year: 2022, category: "bridge", url: profileUrl, citationCount: null },
  { title: "Deep learning and data augmentation based data imputation for structural health monitoring system in multi-sensor damaged state", authors: "Jiale Hou, Huachen Jiang, Chunfeng Wan, et al.", venue: "Measurement", year: 2022, category: "bridge", url: "https://www.sciencedirect.com/science/article/pii/S0263224122004584", doi: "10.1016/j.measurement.2022.111206", citationCount: 80 },
];

export const researchTracks = [
  {
    number: "01",
    title: { zh: "灾后结构视觉感知与非接触响应测量", en: "Vision-Based Structural Sensing and Post-Disaster Assessment" },
    description: { zh: "利用城市监控视频与计算机视觉，从复杂、低质量甚至存在遮挡的影像中提取结构运动和层间位移，为震后快速评估提供低成本、可扩展的感知手段。", en: "Using urban surveillance video and computer vision to recover structural motion and inter-storey displacement from noisy, occluded footage, enabling scalable post-disaster assessment." },
    methods: { zh: ["层间位移测量", "抗遮挡跟踪", "相机运动消除", "非接触响应重构"], en: ["Inter-storey displacement", "Occlusion-robust tracking", "Camera motion removal", "Non-contact response reconstruction"] },
    figures: [
      { src: "/research/vision-displacement.jpg", alt: { zh: "城市监控视频驱动的层间位移测量系统示意图", en: "Surveillance-camera-based inter-storey displacement measurement system" }, caption: { zh: "城市监控视频测量系统", en: "Surveillance-camera measurement system" }, paper: "An automatic method for measuring inter-storey structural displacement based on vision data", url: "https://www.sciencedirect.com/science/article/pii/S0888327025008246" },
      { src: "/research/vision-anti-occlusion.jpg", alt: { zh: "抗遮挡结构运动估计方法流程图", en: "Anti-occlusion structural motion estimation workflow" }, caption: { zh: "抗遮挡视觉运动估计", en: "Anti-occlusion visual motion estimation" }, paper: "An anti-occlusion vision-based method for structural motion estimation", url: "https://www.sciencedirect.com/science/article/pii/S0888327024009014" },
      { src: "/research/vision-dynamic-filter.jpg", alt: { zh: "动态相关滤波视觉测量流程图", en: "Dynamic correlation-filter vision measurement workflow" }, caption: { zh: "极端环境下的动态相关滤波", en: "Dynamic correlation filtering in extreme environments" }, paper: "Estimating structural motions in extreme environmental conditions—A dynamic correlation filter based computer vision approach", url: "https://www.sciencedirect.com/science/article/pii/S0888327024002966" },
      { src: "/research/vision-camera-motion.jpg", alt: { zh: "相机运动与结构运动分离的单应性示意图", en: "Homography-based separation of camera and structural motion" }, caption: { zh: "三维相机运动消除", en: "3D camera motion removal" }, paper: "Vision-based automatic structural motion estimation in presence of 3D camera motion effects", url: "https://www.sciencedirect.com/science/article/pii/S0926580524000116" },
      { src: "/research/vision-substructure.jpg", alt: { zh: "基于视觉响应重构的子结构损伤识别框架", en: "Substructural damage identification framework using vision-based response reconstruction" }, caption: { zh: "视觉响应重构与损伤识别", en: "Vision-based response reconstruction and damage identification" }, paper: "Non-contact vision-based response reconstruction and reinforcement learning guided evolutionary algorithm for substructural condition assessment", url: "https://www.sciencedirect.com/science/article/pii/S0888327024009154" },
    ],
  },
  {
    number: "02",
    title: { zh: "桥梁结构健康监测与数据驱动状态识别", en: "Data-Driven Bridge Structural Health Monitoring and Condition Assessment" },
    description: { zh: "面向大跨度桥梁长期监测数据，研究涡激振动识别、异常数据清洗、缺失数据修复与结构损伤识别，推动监测数据从采集走向可靠的智能诊断。", en: "Developing data-driven methods for long-span bridge monitoring, including vortex-induced vibration recognition, anomaly cleaning, missing-data imputation, and structural damage identification." },
    methods: { zh: ["涡激振动识别", "监测数据清洗", "缺失数据修复", "损伤识别与评估"], en: ["VIV recognition", "Monitoring data cleaning", "Missing-data imputation", "Damage identification"] },
    figures: [
      { src: "/research/bridge-imputation.jpg", alt: { zh: "桥梁健康监测多传感器数据修复框架示意图", en: "Multi-sensor data imputation framework for bridge health monitoring" }, caption: { zh: "多传感器监测数据修复框架", en: "Multi-sensor monitoring data imputation framework" }, paper: "Deep learning and data augmentation based data imputation for structural health monitoring system in multi-sensor damaged state", url: "https://www.sciencedirect.com/science/article/pii/S0263224122004584" },
      { src: "/research/bridge-viv-tca.jpg", alt: { zh: "基于迁移成分分析的长大桥梁涡激振动识别框架", en: "Transfer-component-analysis framework for long-span bridge vortex-induced vibration recognition" }, caption: { zh: "涡激振动迁移识别框架", en: "Transfer-based VIV recognition framework" }, paper: "Vortex-Induced Vibration Recognition for Long-Span Bridges Based on Transfer Component Analysis", url: "https://www.mdpi.com/2075-5309/13/8/2012" },
      { src: "/research/bridge-domain-viv.jpg", alt: { zh: "基于域适配的长大桥梁涡激振动识别框架", en: "Domain-adaptation framework for long-span bridge VIV identification" }, caption: { zh: "域适配涡激振动识别框架", en: "Domain-adaptation VIV identification framework" }, paper: "Domain adaptation based automatic identification method of vortex induced vibration of long-span bridges without prior information", url: "https://www.sciencedirect.com/science/article/pii/S0952197624018359" },
      { src: "/research/bridge-digital-viv.jpg", alt: { zh: "桥梁涡激振动数字建模流程图", en: "Digital modeling workflow for bridge vortex-induced vibration" }, caption: { zh: "涡激振动数字建模", en: "Digital modeling of vortex-induced vibration" }, paper: "Digital modeling of vortex-induced vibration of main girder of a large-span suspension bridge based on deep learning", url: "https://www.sciencedirect.com/science/article/pii/S2352012425023094" },
    ],
  },
];

export const education: EducationEntry[] = [
  { period: "2023.09 — 至今 / Present", institution: { zh: "清华大学", en: "Tsinghua University" }, degree: { zh: "博士 · 土木工程（防灾减灾工程）", en: "Ph.D. · Civil Engineering (Disaster Prevention and Mitigation Engineering)" }, current: true },
  { period: "2020.09 — 2023.06", institution: { zh: "东南大学", en: "Southeast University" }, degree: { zh: "硕士 · 土木水利（结构工程）", en: "M.Eng. · Civil and Hydraulic Engineering (Structural Engineering)" }, advisors: [
    { name: { zh: "万春风教授", en: "Prof. Chunfeng Wan" }, url: "https://civil.seu.edu.cn/wcf/list.htm" },
    { name: { zh: "丁幼亮教授", en: "Prof. Youliang Ding" }, url: "https://civil.seu.edu.cn/dyl/list.htm#" },
  ] },
  { period: "2016.09 — 2020.06", institution: { zh: "西安建筑科技大学", en: "Xi'an University of Architecture and Technology" }, degree: { zh: "本科 · 土木工程", en: "B.Eng. · Civil Engineering" } },
];

export const awards = [
  { year: "2025", zh: "综合一等奖学金", en: "Comprehensive First-Class Scholarship", orgZh: "清华大学", orgEn: "Tsinghua University" },
  { year: "2024", zh: "综合一等奖学金", en: "Comprehensive First-Class Scholarship", orgZh: "清华大学土木系", orgEn: "Department of Civil Engineering, Tsinghua University" },
  { year: "2024", zh: "论文特等奖", en: "Special Prize for Outstanding Paper", orgZh: "第33届全国结构工程会议", orgEn: "The 33rd National Conference on Structural Engineering" },
  { year: "2024", zh: "系研团优秀干部", en: "Outstanding Student Association Cadre", orgZh: "清华大学土木系", orgEn: "Department of Civil Engineering, Tsinghua University" },
  { year: "2024", zh: "Best Presentation Award", en: "Best Presentation Award", orgZh: "亚太区-欧洲智能结构技术暑期学校（日本京都）", orgEn: "Asia-Pacific–Europe Smart Structures Summer School, Kyoto, Japan" },
  { year: "2023", zh: "江苏省土木工程学科优秀毕业生", en: "Outstanding Graduate in Civil Engineering", orgZh: "江苏省土木建筑学会", orgEn: "Jiangsu Civil and Architectural Society" },
  { year: "2021–2023", zh: "三好研究生、三好研究生标兵、优秀毕业研究生", en: "Merit Student, Model Merit Student, and Outstanding Graduate Student", orgZh: "东南大学", orgEn: "Southeast University" },
  { year: "2021–2023", zh: "一等学业奖学金（两次）、“陆俊、许学雷”奖学金", en: "First-Class Academic Scholarship (two times) and Lu Jun–Xu Xuelei Scholarship", orgZh: "东南大学", orgEn: "Southeast University" },
  { year: "2019", zh: "陕西省高校高等数学竞赛特等奖", en: "Special Prize, Shaanxi Collegiate Higher Mathematics Competition", orgZh: "陕西省数学会", orgEn: "Shaanxi Mathematical Society" },
];

export const navItems = [
  { id: "research", zh: "研究方向", en: "Research" },
  { id: "publications", zh: "论文发表", en: "Papers" },
  { id: "education", zh: "教育经历", en: "Education" },
  { id: "honors", zh: "荣誉奖励", en: "Honors" },
  { id: "contact", zh: "联系我", en: "Contact" },
];
