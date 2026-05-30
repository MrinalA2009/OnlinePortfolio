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
      "Werewolf-based benchmark measuring LLM deception production and detection. Across 7,320 statements, Werewolves deceived in 31% of turns while peer detection reached 71–73% precision.",
    description:
      "WOLF embeds role-grounded LLM agents (Villager, Werewolf, Seer, Doctor) in a programmable LangGraph Werewolf environment with night–day cycles, debate, and voting. Every public statement is analyzed with speaker self-assessments and peer deception ratings across a taxonomy of omission, distortion, fabrication, and misdirection.\n\nKey results from 100 full games: Werewolves produced deceptive statements in 31% of turns. Peer detection achieved 71–73% precision and 52% overall accuracy, with higher precision for identifying Werewolves but some false positives against truthful Villagers. Suspicion toward Werewolves rose from 52% to over 60% across rounds, while suspicion toward Villagers and the Doctor stabilized near 44–46% — extended interaction improved recall against liars without compounding errors against honest roles.",
    objective:
      "Measure how often and in what forms LLMs deceive, how accurately they detect deception in peers, and how trust and suspicion evolve across multi-turn adversarial interaction.",
    approach:
      "Built an eight-player Werewolf loop with structured logging, statement-level deception labels, exponential smoothing of suspicion scores, and subsystem ablations with deterministic controls for reproducibility.",
    impact:
      "Spotlighted at NeurIPS and IJCNLP-AACL. Cited by UPenn, Microsoft, and MBZUAI. Demonstrates that deception scales faster than detection in multi-agent LLM systems.",
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
      "Lightweight zero-shot defense against prompt injection via embedding drift. Achieves greater than 93% detection accuracy with under 3% false positives on Llama 3, Mistral, and Qwen 2.",
    description:
      "ZEDD (Zero-Shot Embedding Drift Detection) flags direct and indirect prompt injections by measuring cosine drift between embeddings of benign prompts and suspect variants. The method uses fine-tuned encoders plus Gaussian Mixture Modeling and Kernel Density Estimation to set thresholds — without model internals, attack-specific retraining, or heavy inference overhead.\n\nKey results on 51,603 held-out prompt pairs from the LLMail-Inject dataset (jailbreak, system leak, task override, encoding manipulation, prompt confusion): greater than 93% accuracy across Llama 3, Qwen 2, and Mistral with a false positive rate under 3%. Best encoders reached about 95% accuracy with 96%+ precision (e.g., Mistral 7B: 95.55% accuracy, 96.58% precision, 2.3% clean FPR). Detection rates exceeded 90% on most attack categories while keeping clean prompts rarely flagged.",
    objective:
      "Detect prompt injection attacks by quantifying semantic shift in embedding space between clean and adversarial prompt pairs, with minimal compute and integration cost.",
    approach:
      "Fine-tune sentence/LLM encoders on clean–clean and injected–clean pairs, compute 1 − cosine similarity as drift, then classify via two-component GMM with KDE fallback and a 3% false-positive cap on the clean distribution.",
    impact:
      "Offers a scalable first-line defense for LLM pipelines. Outperforms many heavier classifiers on precision and F1 while remaining lightweight enough for production deployment.",
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
