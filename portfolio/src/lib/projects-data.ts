export type LinkItem = { label: string; href: string; icon: "globe" | "github" | "paper" };

export type Project = {
  id: string;
  type: "Research" | "Platform";
  title: string;
  fullTitle: string;
  status: string;
  statusDot: string;
  tagline: string;
  brief: string;
  description: string;
  objective: string;
  approach: string;
  impact: string;
  period: string;
  technologies: string[];
  links: LinkItem[];
  accentColor: string;
  venue?: string;
  diagram: string[];
};

export const projects: Project[] = [
  {
    id: "wolf",
    type: "Research",
    title: "WOLF",
    fullTitle: "Werewolf-based Observations for LLM Deception and Falsehoods",
    status: "Spotlighted",
    statusDot: "#2563EB",
    tagline: "Multi-agent LLM deception research",
    brief:
      "A naturalistic framework for evaluating strategic deception and falsehood generation in large language models, using the social deduction game Werewolf.",
    description:
      "WOLF places LLMs inside the social deduction game Werewolf — where agents must actively deceive or detect deception — to surface behavioral vulnerabilities invisible to conventional benchmarks. The framework reveals how frontier models fail under adversarial social pressure, providing a rigorous lens for AI safety evaluation.",
    objective:
      "Develop a principled, naturalistic framework for evaluating LLM deception behavior in multi-agent settings — revealing failure modes invisible to conventional benchmarks.",
    approach:
      "Implemented Werewolf as a controlled multi-agent environment. Designed evaluation protocols measuring deception success rate, cross-examination consistency, and strategic reasoning stability across model families and prompt regimes.",
    impact:
      "Spotlighted at NeurIPS and IJCNLP-AACL. Cited by UPenn, Microsoft, and MBZUAI. Among the first high-school-led research at these venues in LLM behavioral analysis.",
    period: "2025 – Present",
    venue: "NeurIPS · IJCNLP-AACL",
    technologies: ["Python", "GPT-4 API", "LangChain", "PyTorch", "LaTeX"],
    links: [
      {
        label: "Documentation",
        href: "https://github.com/MrinalA2009/WOLF-Werewolf-based-Observations-for-LLM-Deception-and-Falsehoods",
        icon: "github",
      },
      { label: "arXiv", href: "https://arxiv.org/abs/2512.09187", icon: "paper" },
    ],
    accentColor: "#2563EB",
    diagram: [
      "LLM AGENTS → WEREWOLF ENGINE → ROLE ASSIGNMENT (Villager / Werewolf)",
      "                    ↓",
      "          MULTI-ROUND DISCUSSION & VOTING",
      "              ↙                   ↘",
      "    DECEPTION LOGS         DETECTION ANALYSIS",
      "              ↘                   ↙",
      "     BEHAVIORAL CONSISTENCY + STATISTICAL EVAL",
    ],
  },
  {
    id: "zedd",
    type: "Research",
    title: "ZEDD",
    fullTitle: "Zero-Shot Embedded Drift Detection",
    status: "Published",
    statusDot: "#059669",
    tagline: "Zero-shot ML model drift detection",
    brief:
      "A zero-shot framework for detecting distributional drift in ML model embeddings without labeled drift examples — enabling continuous, lightweight monitoring for production AI systems.",
    description:
      "ZEDD addresses a critical gap in production ML reliability: detecting when a model's internal representations shift away from training distribution, without any labeled drift examples. By applying zero-shot analysis to embedding spaces, ZEDD enables scalable monitoring of model health across diverse deployment scenarios.",
    objective:
      "Create a zero-shot drift detection framework that operates purely on embedding representations — no labeled data required — enabling reliable ML monitoring at scale.",
    approach:
      "Designed statistical tests and geometric analysis methods for detecting drift signatures in embedding spaces. Validated across multiple architectures, tasks, and deployment conditions. Benchmarked against supervised detection baselines.",
    impact:
      "Directly applicable to agentic AI deployment, model reliability engineering, and robust ML pipelines. Advances the state of ML monitoring for systems under distribution shift.",
    period: "2024 – Present",
    technologies: ["Python", "PyTorch", "HuggingFace", "Statistical Methods", "LaTeX"],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2601.12359", icon: "paper" }],
    accentColor: "#059669",
    diagram: [
      "PRODUCTION MODEL → EMBEDDING EXTRACTOR → REPRESENTATION SPACE",
      "                                                  ↓",
      "               ZERO-SHOT STATISTICAL DRIFT TESTS",
      "               (no labeled examples required)",
      "                             ↓",
      "            DRIFT SIGNAL ←→ NO DRIFT SIGNAL",
      "                 ↓",
      "          ALERT + DIAGNOSTIC REPORT",
    ],
  },
  {
    id: "debatesim",
    type: "Platform",
    title: "DebateSim",
    fullTitle: "AI-Powered Debate & Legislation Analysis Platform",
    status: "Live",
    statusDot: "#16A34A",
    tagline: "AI-powered debate training & bill analysis",
    brief:
      "Reads real legislation, extracts key arguments, and generates structured debate cases for both sides — transforming hours of bill research into actionable preparation in minutes.",
    description:
      "DebateSim uses an LLM pipeline to ingest bill text, extract policy arguments, and generate structured Pro/Con contentions with evidence tagging and rebuttal frameworks. Built for competitive debaters and policy researchers who need depth without the time cost of manual research.",
    objective:
      "Democratize access to high-quality debate preparation through AI-powered legislative analysis — making world-class research tools accessible to students at every level.",
    approach:
      "Built a full-stack platform with an LLM analysis pipeline: bill ingestion → argument extraction → structured case generation → rebuttal framework. Includes evidence tagging and cross-examination scaffolding.",
    impact:
      "Used by debate students nationally. Reduces bill research from hours to minutes. Demonstrates practical application of LLMs to real-world policy analysis.",
    period: "2022 – Present",
    technologies: ["Python", "OpenAI API", "LangChain", "HTML/CSS", "JavaScript"],
    links: [
      { label: "Live Site", href: "https://debatesim.us", icon: "globe" },
      {
        label: "Documentation",
        href: "https://github.com/alexliao95311/DebateSim",
        icon: "github",
      },
    ],
    accentColor: "#D97706",
    diagram: [
      "BILL TEXT → ANALYSIS PIPELINE → ARGUMENT EXTRACTION",
      "                                          ↓",
      "               PRO CASE          CON CASE",
      "          (contentions+evidence) (contentions+evidence)",
      "                          ↓",
      "          REBUTTAL FRAMEWORK + EVIDENCE TAGGING",
    ],
  },
  {
    id: "mathsim",
    type: "Platform",
    title: "MathSim",
    fullTitle: "Personalized Adaptive Mathematics Learning Platform",
    status: "Live",
    statusDot: "#16A34A",
    tagline: "Adaptive competition math tutoring platform",
    brief:
      "Delivers personalized problem sets, AI-generated step-by-step explanations, and performance analytics — built from 550+ hours of direct competition coaching experience.",
    description:
      "MathSim closes the gap between undirected practice and strategic preparation by personalizing each student's problem set to their exact level, generating explanations in the student's style, and tracking progress toward AMC, AIME, and MATHCOUNTS targets.",
    objective:
      "Build an adaptive tutoring system that personalizes competition mathematics preparation — scaling the insights from 550+ hours of direct coaching experience.",
    approach:
      "Designed an adaptive difficulty system driven by performance data, built a curated problem bank with rich metadata, and implemented an AI explanation engine that adapts depth and style to each student's pattern.",
    impact:
      "Serves students preparing for AMC, AIME, and MATHCOUNTS. Scales individual tutoring insights into a continuously available, personalized platform.",
    period: "2023 – Present",
    technologies: ["Python", "OpenAI API", "LaTeX", "JavaScript", "PostgreSQL"],
    links: [{ label: "Live Site", href: "https://mathsim.us", icon: "globe" }],
    accentColor: "#7C3AED",
    diagram: [
      "STUDENT PROFILE → PERFORMANCE MODEL → ADAPTIVE SCHEDULER",
      "       ↓                 ↓                    ↓",
      " PROBLEM BANK    ANALYTICS DASHBOARD    SPACED PRACTICE",
      "       ↓                 ↓                    ↓",
      "       AI EXPLANATION ENGINE (depth adapts to student level)",
    ],
  },
];
