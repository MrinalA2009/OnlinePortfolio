export type LinkItem = { label: string; href: string; icon: "globe" | "github" | "paper" };

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  /** Shown in placeholder when file is missing */
  placeholderHint: string;
};

export type ProjectData = {
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
  /** Alternate image left / text right on desktop */
  imageOnLeft: boolean;
  hero: ProjectImage;
  gallery: ProjectImage[];
  researchVisuals?: ProjectImage[];
  mockup?: {
    title: string;
    images: ProjectImage[];
    browserStyle?: boolean;
  };
  diagram: string[];
};

export const projects: ProjectData[] = [
  {
    id: "wolf",
    type: "Research",
    title: "WOLF",
    fullTitle: "Werewolf-based Observations for LLM Deception and Falsehoods",
    status: "Spotlighted",
    statusDot: "#2563EB",
    tagline: "Multi-agent LLM deception research",
    brief:
      "A naturalistic framework for evaluating strategic deception in large language models using the social deduction game Werewolf.",
    description:
      "WOLF places LLMs inside Werewolf — where agents must deceive or detect deception — to surface behavioral vulnerabilities invisible to conventional benchmarks.",
    objective:
      "Develop a principled framework for evaluating LLM deception in multi-agent settings.",
    approach:
      "Implemented Werewolf as a controlled multi-agent environment with protocols for deception rate, consistency, and strategic stability.",
    impact:
      "Spotlighted at NeurIPS and IJCNLP-AACL. Cited by UPenn, Microsoft, and MBZUAI.",
    period: "2025 – Present",
    venue: "NeurIPS · IJCNLP-AACL",
    technologies: ["Python", "GPT-4 API", "LangChain", "PyTorch", "LaTeX"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/MrinalA2009/WOLF-Werewolf-based-Observations-for-LLM-Deception-and-Falsehoods",
        icon: "github",
      },
      { label: "arXiv", href: "https://arxiv.org/abs/2512.09187", icon: "paper" },
    ],
    accentColor: "#2563EB",
    imageOnLeft: true,
    hero: {
      src: "/projects/wolf/hero.png",
      alt: "WOLF research overview",
      caption: "WOLF multi-agent evaluation framework",
      placeholderHint: "public/projects/wolf/hero.png",
    },
    gallery: [
      {
        src: "/projects/wolf/paper.png",
        alt: "WOLF paper figure",
        caption: "Paper overview",
        placeholderHint: "public/projects/wolf/paper.png",
      },
      {
        src: "/projects/wolf/game-flow.png",
        alt: "Werewolf game flow diagram",
        caption: "Game flow",
        placeholderHint: "public/projects/wolf/game-flow.png",
      },
    ],
    researchVisuals: [
      {
        src: "/projects/wolf/architecture.png",
        alt: "WOLF system architecture",
        caption: "Architecture",
        placeholderHint: "public/projects/wolf/architecture.png",
      },
      {
        src: "/projects/wolf/benchmark.png",
        alt: "Deception benchmark results",
        caption: "Benchmarks",
        placeholderHint: "public/projects/wolf/benchmark.png",
      },
      {
        src: "/projects/wolf/figure.png",
        alt: "Experiment figure",
        caption: "Results",
        placeholderHint: "public/projects/wolf/figure.png",
      },
    ],
    diagram: [
      "LLM AGENTS → WEREWOLF ENGINE → ROLE ASSIGNMENT",
      "MULTI-ROUND DISCUSSION & VOTING",
      "DECEPTION LOGS → BEHAVIORAL CONSISTENCY → EVAL",
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
      "Detects distributional drift in model embeddings without labeled drift examples — lightweight monitoring for production AI.",
    description:
      "ZEDD detects when internal representations shift away from training distribution using zero-shot analysis on embedding spaces.",
    objective: "Create a zero-shot drift detection framework operating purely on embeddings.",
    approach:
      "Statistical tests and geometric analysis on embedding spaces, validated across architectures and deployment conditions.",
    impact:
      "Applicable to agentic AI deployment, model reliability engineering, and robust ML pipelines.",
    period: "2024 – Present",
    technologies: ["Python", "PyTorch", "HuggingFace", "Statistical Methods", "LaTeX"],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2601.12359", icon: "paper" }],
    accentColor: "#059669",
    imageOnLeft: false,
    hero: {
      src: "/projects/zedd/hero.png",
      alt: "ZEDD drift detection overview",
      caption: "Zero-shot drift monitoring pipeline",
      placeholderHint: "public/projects/zedd/hero.png",
    },
    gallery: [
      {
        src: "/projects/zedd/paper.png",
        alt: "ZEDD paper screenshot",
        caption: "Publication",
        placeholderHint: "public/projects/zedd/paper.png",
      },
      {
        src: "/projects/zedd/embedding.png",
        alt: "Embedding space visualization",
        caption: "Embedding space",
        placeholderHint: "public/projects/zedd/embedding.png",
      },
    ],
    researchVisuals: [
      {
        src: "/projects/zedd/architecture.png",
        alt: "ZEDD architecture diagram",
        caption: "Architecture",
        placeholderHint: "public/projects/zedd/architecture.png",
      },
      {
        src: "/projects/zedd/drift-chart.png",
        alt: "Drift detection chart",
        caption: "Drift signals",
        placeholderHint: "public/projects/zedd/drift-chart.png",
      },
      {
        src: "/projects/zedd/benchmark.png",
        alt: "Benchmark comparison",
        caption: "Benchmarks",
        placeholderHint: "public/projects/zedd/benchmark.png",
      },
    ],
    diagram: [
      "PRODUCTION MODEL → EMBEDDING EXTRACTOR",
      "ZERO-SHOT STATISTICAL DRIFT TESTS",
      "DRIFT SIGNAL → ALERT + DIAGNOSTIC REPORT",
    ],
  },
  {
    id: "debatesim",
    type: "Platform",
    title: "DebateSim",
    fullTitle: "AI-Powered Debate & Legislation Analysis Platform",
    status: "Live",
    statusDot: "#16A34A",
    tagline: "Legislative analysis and debate preparation",
    brief:
      "Reads legislation, extracts arguments, and generates structured debate cases — reducing bill research from hours to minutes.",
    description:
      "DebateSim ingests bill text, extracts policy arguments, and generates Pro/Con contentions with evidence tagging and rebuttal frameworks.",
    objective: "Make high-quality debate preparation accessible through AI-powered legislative analysis.",
    approach: "Full-stack platform: bill ingestion → argument extraction → case generation → rebuttal scaffolding.",
    impact: "Used by debate students nationally at debatesim.us.",
    period: "2022 – Present",
    technologies: ["Python", "OpenAI API", "LangChain", "HTML/CSS", "JavaScript"],
    links: [{ label: "Live Site", href: "https://debatesim.us", icon: "globe" }],
    accentColor: "#D97706",
    imageOnLeft: true,
    hero: {
      src: "/projects/debatesim/hero.png",
      alt: "DebateSim homepage screenshot",
      caption: "DebateSim — debatesim.us",
      placeholderHint: "public/projects/debatesim/hero.png",
    },
    gallery: [
      {
        src: "/projects/debatesim/analysis.png",
        alt: "Bill analysis interface",
        caption: "Bill analysis",
        placeholderHint: "public/projects/debatesim/analysis.png",
      },
      {
        src: "/projects/debatesim/case-builder.png",
        alt: "Case builder view",
        caption: "Case builder",
        placeholderHint: "public/projects/debatesim/case-builder.png",
      },
      {
        src: "/projects/debatesim/features.png",
        alt: "Key features overview",
        caption: "Features",
        placeholderHint: "public/projects/debatesim/features.png",
      },
    ],
    mockup: {
      title: "Live platform preview",
      browserStyle: true,
      images: [
        {
          src: "/projects/debatesim/screenshot.png",
          alt: "DebateSim website in browser",
          caption: "Full-width site capture",
          placeholderHint: "public/projects/debatesim/screenshot.png",
        },
      ],
    },
    diagram: [
      "BILL TEXT → ANALYSIS PIPELINE → PRO / CON CASES",
      "REBUTTAL FRAMEWORK + EVIDENCE TAGGING",
    ],
  },
  {
    id: "mathsim",
    type: "Platform",
    title: "MathSim",
    fullTitle: "Personalized Adaptive Mathematics Learning Platform",
    status: "Live",
    statusDot: "#16A34A",
    tagline: "Adaptive competition math tutoring",
    brief:
      "Personalized problem sets, step-by-step explanations, and analytics — built from 550+ hours of coaching experience.",
    description:
      "MathSim personalizes problem sets, generates explanations, and tracks progress toward AMC, AIME, and MATHCOUNTS targets.",
    objective: "Scale competition math preparation through adaptive instruction.",
    approach: "Adaptive difficulty, curated problem bank, and AI explanations tuned to each student.",
    impact: "Serves students preparing for national math competitions at mathsim.us.",
    period: "2023 – Present",
    technologies: ["Python", "OpenAI API", "LaTeX", "JavaScript", "PostgreSQL"],
    links: [{ label: "Live Site", href: "https://mathsim.us", icon: "globe" }],
    accentColor: "#7C3AED",
    imageOnLeft: false,
    hero: {
      src: "/projects/mathsim/hero.png",
      alt: "MathSim dashboard",
      caption: "MathSim — mathsim.us",
      placeholderHint: "public/projects/mathsim/hero.png",
    },
    gallery: [
      {
        src: "/projects/mathsim/dashboard.png",
        alt: "Analytics dashboard",
        caption: "Dashboard",
        placeholderHint: "public/projects/mathsim/dashboard.png",
      },
      {
        src: "/projects/mathsim/problem.png",
        alt: "Problem view with explanation",
        caption: "Problem view",
        placeholderHint: "public/projects/mathsim/problem.png",
      },
      {
        src: "/projects/mathsim/progress.png",
        alt: "Student progress tracking",
        caption: "Progress",
        placeholderHint: "public/projects/mathsim/progress.png",
      },
    ],
    mockup: {
      title: "Platform mockups",
      browserStyle: false,
      images: [
        {
          src: "/projects/mathsim/mockup-dashboard.png",
          alt: "MathSim dashboard mockup",
          caption: "Dashboard mockup",
          placeholderHint: "public/projects/mathsim/mockup-dashboard.png",
        },
        {
          src: "/projects/mathsim/mockup-problem.png",
          alt: "Example problem interface",
          caption: "Problem interface",
          placeholderHint: "public/projects/mathsim/mockup-problem.png",
        },
      ],
    },
    diagram: [
      "STUDENT PROFILE → ADAPTIVE SCHEDULER → PROBLEM BANK",
      "AI EXPLANATION ENGINE + ANALYTICS DASHBOARD",
    ],
  },
];
