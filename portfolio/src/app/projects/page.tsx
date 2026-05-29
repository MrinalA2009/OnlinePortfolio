"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";

type LinkItem = { label: string; href: string; icon: "globe" | "github" | "paper" };

interface Project {
  id: string;
  type: "Research Paper" | "Web Application";
  title: string;
  fullTitle: string;
  status: string;
  statusDot: string;
  emoji: string;
  brief: string;
  description: string;
  objective: string;
  approach: string;
  impact: string;
  period: string;
  technologies: string[];
  links: LinkItem[];
  accentColor: string;
  authors?: string[];
  venue?: string;
  diagram: string[];
}

const projects: Project[] = [
  {
    id: "wolf",
    type: "Research Paper",
    title: "WOLF",
    fullTitle: "Werewolf-based Observations for LLM Deception and Falsehoods",
    status: "Spotlighted",
    statusDot: "#2563EB",
    emoji: "🐺",
    brief: "Multi-agent framework for evaluating strategic deception and falsehood generation in large language models.",
    description: "WOLF introduces a naturalistic multi-agent environment — the social deduction game Werewolf — to rigorously evaluate deceptive reasoning, strategic falsehood generation, and behavioral inconsistency in large language models. By situating LLMs in a game requiring active deception and real-time detection, WOLF surfaces vulnerabilities that structured benchmarks systematically miss.",
    objective: "Develop a principled, naturalistic framework for evaluating LLM deception behavior in multi-agent settings — revealing failure modes invisible to conventional benchmarks.",
    approach: "Implemented Werewolf as a controlled multi-agent environment with LLM participants. Designed evaluation protocols measuring deception success rate, cross-examination consistency, strategic reasoning quality, and behavioral stability across model families and prompt regimes.",
    impact: "Spotlighted at NeurIPS and IJCNLP-AACL. Cited by UPenn, Microsoft, and MBZUAI. Among the first high-school-led research to appear at these venues in the area of LLM behavioral analysis.",
    period: "2025 – Present",
    venue: "NeurIPS · IJCNLP-AACL",
    technologies: ["Python", "GPT-4 API", "LangChain", "PyTorch", "Statistical Analysis", "LaTeX"],
    links: [
      { label: "GitHub", href: "https://github.com/MrinalA2009/WOLF-Werewolf-based-Observations-for-LLM-Deception-and-Falsehoods", icon: "github" },
      { label: "arXiv Paper", href: "https://arxiv.org/abs/2512.09187", icon: "paper" },
    ],
    accentColor: "#2563EB",
    diagram: [
      "LLM AGENTS  →  WEREWOLF GAME ENGINE  →  ROLE ASSIGNMENT (VILLAGER / WEREWOLF)",
      "                        ↓",
      "          MULTI-ROUND DISCUSSION & VOTING",
      "             ↙                     ↘",
      "   DECEPTION LOGS            DETECTION ANALYSIS",
      "             ↘                     ↙",
      "      BEHAVIORAL CONSISTENCY METRICS + STATISTICAL EVAL",
    ],
  },
  {
    id: "zedd",
    type: "Research Paper",
    title: "ZEDD",
    fullTitle: "Zero-Shot Embedded Drift Detection",
    status: "Published",
    statusDot: "#059669",
    emoji: "📡",
    brief: "Zero-shot framework for detecting distributional drift in ML model embeddings — without labeled drift examples.",
    description: "ZEDD addresses a critical gap in production ML reliability: detecting when a model's internal representations shift away from training distribution without any labeled drift examples to reference. By applying zero-shot analysis techniques directly to embedding spaces, ZEDD enables continuous, lightweight monitoring of model health across diverse deployment scenarios.",
    objective: "Create a zero-shot drift detection framework that operates purely on embedding representations — no labeled drift data required — enabling reliable ML monitoring at scale.",
    approach: "Designed statistical tests and geometric analysis methods for detecting drift signatures in embedding spaces. Validated across multiple model architectures, tasks, and real-world deployment conditions. Benchmarked against supervised drift detection baselines.",
    impact: "Directly applicable to agentic AI deployment, model reliability engineering, and robust ML pipelines. Advances the state of ML monitoring for production systems operating under distribution shift.",
    period: "2024 – Present",
    venue: "Research Publication",
    technologies: ["Python", "PyTorch", "HuggingFace", "Embedding Analysis", "Statistical Methods", "LaTeX"],
    authors: ["Anirudh Shekhar", "Mrinal Agarwal"],
    links: [
      { label: "arXiv Paper", href: "https://arxiv.org/abs/2601.12359", icon: "paper" },
    ],
    accentColor: "#059669",
    diagram: [
      "PRODUCTION MODEL  →  EMBEDDING EXTRACTOR  →  REPRESENTATION SPACE",
      "                                                       ↓",
      "            ZERO-SHOT STATISTICAL DRIFT TESTS",
      "            (no labeled examples required)",
      "                          ↓",
      "         DRIFT SIGNAL  ←→  NO DRIFT SIGNAL",
      "              ↓",
      "       ALERT + DIAGNOSTIC REPORT",
    ],
  },
  {
    id: "debatesim",
    type: "Web Application",
    title: "DebateSim",
    fullTitle: "AI-Powered Debate & Legislation Analysis Platform",
    status: "Live",
    statusDot: "#16A34A",
    emoji: "🎙",
    brief: "AI-powered platform for legislative analysis, structured argument generation, and debate preparation.",
    description: "DebateSim reads real legislation and policy documents, extracts key arguments, and generates structured debate cases for both sides of any issue — transforming hours of bill research into actionable preparation in minutes. Built for competitive debaters, policy researchers, and students navigating complex public policy terrain.",
    objective: "Democratize access to high-quality debate preparation through AI-powered legislative analysis, making world-class research tools accessible to students at every level.",
    approach: "Built a full-stack platform with an LLM pipeline that ingests bill text, extracts policy arguments, generates structured Pro/Con contentions, and provides rebuttal frameworks with evidence tagging.",
    impact: "Used by debate students nationally. Reduces bill research time from hours to minutes. A practical demonstration of LLMs applied to real-world policy analysis and structured reasoning.",
    period: "2022 – Present",
    technologies: ["Python", "OpenAI API", "LangChain", "HTML/CSS", "JavaScript"],
    links: [
      { label: "Live Site", href: "https://debatesim.us", icon: "globe" },
    ],
    accentColor: "#D97706",
    diagram: [
      "BILL TEXT / POLICY DOC  →  ANALYSIS PIPELINE  →  ARGUMENT EXTRACTION",
      "                                                          ↓",
      "              PRO CASE                         CON CASE",
      "         (contentions + evidence)         (contentions + evidence)",
      "                   ↓                               ↓",
      "              REBUTTAL FRAMEWORK + EVIDENCE TAGGING",
    ],
  },
  {
    id: "mathsim",
    type: "Web Application",
    title: "MathSim",
    fullTitle: "Personalized Adaptive Mathematics Learning Platform",
    status: "Live",
    statusDot: "#16A34A",
    emoji: "∑",
    brief: "Adaptive mathematics tutoring platform designed for competition preparation and personalized learning.",
    description: "MathSim delivers personalized problem sets calibrated to each student's current level, AI-generated step-by-step explanations, and performance analytics — all designed from direct experience coaching hundreds of students through AMC, AIME, and MATHCOUNTS. It closes the gap between undirected practice and strategic, data-informed preparation.",
    objective: "Build an adaptive tutoring system that personalizes competition mathematics preparation at scale — applying insights from 550+ hours of direct coaching experience.",
    approach: "Designed an adaptive difficulty system driven by performance data, built a curated problem bank with rich metadata, and implemented an AI explanation engine that adapts its style and depth to each student's learning pattern.",
    impact: "Serves students preparing for AMC, AIME, and MATHCOUNTS. Scales the insights from hundreds of individual tutoring sessions into a continuously available, personalized platform.",
    period: "2023 – Present",
    technologies: ["Python", "OpenAI API", "LaTeX", "JavaScript", "PostgreSQL"],
    links: [
      { label: "Live Site", href: "https://mathsim.us", icon: "globe" },
    ],
    accentColor: "#7C3AED",
    diagram: [
      "STUDENT PROFILE  →  PERFORMANCE MODEL  →  ADAPTIVE SCHEDULER",
      "        ↓                  ↓                      ↓",
      "  PROBLEM BANK      ANALYTICS DASHBOARD     SPACED PRACTICE SETS",
      "        ↓                  ↓                      ↓",
      "         AI EXPLANATION ENGINE  (depth adapts to student level)",
    ],
  },
];

function LinkIcon({ icon }: { icon: string }) {
  if (icon === "github") return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
  if (icon === "paper") return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
    </svg>
  );
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  );
}

export default function ProjectsPage() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggle = (id: string) => setActiveId((prev) => (prev === id ? null : id));

  return (
    <div style={{ background: "var(--bg-base)" }} className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-5">

        {/* Header */}
        <AnimatedSection className="mb-16">
          <p className="label mb-3">Portfolio</p>
          <h1 className="heading-display mb-5">
            Research &amp; <span className="gradient-text">Projects</span>
          </h1>
          <p className="body-lg max-w-2xl">
            Two published AI research papers and two live platforms — each one built to solve a real problem, not to demonstrate capability.
          </p>
        </AnimatedSection>

        {/* Filter / quick nav */}
        <AnimatedSection className="mb-10">
          <div className="flex flex-wrap gap-3">
            {[
              { label: "All", id: null },
              { label: "Research Papers", id: "research" },
              { label: "Web Applications", id: "apps" },
            ].map((f) => (
              <button
                key={String(f.id)}
                onClick={() => setActiveId(null)}
                className="btn btn-secondary text-xs"
              >
                {f.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Project grid — 2 columns desktop, click to expand full-width */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p) => {
            const isOpen = activeId === p.id;
            return (
              <motion.div
                key={p.id}
                layout
                className={`${isOpen ? "md:col-span-2" : ""}`}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
              >
                <motion.div
                  layout
                  className="card overflow-hidden"
                  style={{
                    boxShadow: isOpen ? "var(--shadow-lg)" : "var(--shadow-sm)",
                    borderColor: isOpen ? `${p.accentColor}35` : "var(--border)",
                    cursor: "pointer",
                    transition: "border-color 0.25s, box-shadow 0.25s",
                  }}
                  whileHover={!isOpen ? { y: -3, boxShadow: "var(--shadow-md)" } : {}}
                  onClick={() => toggle(p.id)}
                >
                  {/* Card header — always visible */}
                  <div className="p-6 select-none">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <motion.span
                          animate={isOpen ? { scale: 1.15, rotate: -5 } : { scale: 1, rotate: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-2xl leading-none"
                        >
                          {p.emoji}
                        </motion.span>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <span
                              className="text-xs font-medium"
                              style={{
                                color: p.accentColor,
                                background: `${p.accentColor}12`,
                                border: `1px solid ${p.accentColor}25`,
                                borderRadius: 5,
                                padding: "2px 7px",
                              }}
                            >
                              {p.type}
                            </span>
                            <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text-3)" }}>
                              <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.statusDot }} />
                              {p.status}
                            </span>
                          </div>
                          <h2 className="heading-md text-base leading-tight">
                            <span style={{ color: p.accentColor }}>{p.title}</span>
                          </h2>
                        </div>
                      </div>

                      {/* Expand/collapse indicator */}
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5"
                        style={{
                          background: isOpen ? `${p.accentColor}15` : "var(--bg-subtle)",
                          border: `1px solid ${isOpen ? p.accentColor + "30" : "var(--border)"}`,
                          color: isOpen ? p.accentColor : "var(--text-3)",
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                      </motion.div>
                    </div>

                    <p className="body-sm leading-relaxed mb-4">{p.brief}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.technologies.slice(0, isOpen ? p.technologies.length : 4).map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                      {!isOpen && p.technologies.length > 4 && (
                        <span className="tag" style={{ color: "var(--text-3)" }}>+{p.technologies.length - 4}</span>
                      )}
                    </div>

                    {/* Authors / venue */}
                    {p.authors && (
                      <p className="body-sm" style={{ color: "var(--text-3)" }}>
                        Authors: {p.authors.join(", ")}
                      </p>
                    )}
                    {p.venue && (
                      <p className="body-sm mt-0.5" style={{ color: "var(--text-3)" }}>
                        Venue: {p.venue}
                      </p>
                    )}
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div
                          style={{ borderTop: "1px solid var(--border)" }}
                          className="p-6"
                        >
                          {/* Full title */}
                          <p className="body-sm mb-6 font-medium" style={{ color: "var(--text-2)", fontStyle: "italic" }}>
                            {p.fullTitle}
                          </p>

                          {/* Three-column insight grid */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-7">
                            {[
                              { label: "Objective", content: p.objective },
                              { label: "Approach", content: p.approach },
                              { label: "Impact", content: p.impact },
                            ].map(({ label, content }) => (
                              <div
                                key={label}
                                className="rounded-xl p-5"
                                style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)" }}
                              >
                                <p className="label mb-3" style={{ color: p.accentColor }}>{label}</p>
                                <p className="body-sm leading-relaxed">{content}</p>
                              </div>
                            ))}
                          </div>

                          {/* Architecture diagram */}
                          <div className="mb-7">
                            <p
                              className="text-xs font-semibold uppercase tracking-wider mb-3"
                              style={{ color: "var(--text-3)" }}
                            >
                              System Architecture
                            </p>
                            <div
                              className="rounded-xl p-5 font-mono text-xs overflow-x-auto"
                              style={{
                                background: "var(--bg-subtle)",
                                border: "1px solid var(--border)",
                                color: "var(--text-2)",
                                lineHeight: 1.9,
                              }}
                            >
                              {p.diagram.map((line, i) => (
                                <div key={i} className="whitespace-pre">{line}</div>
                              ))}
                            </div>
                          </div>

                          {/* Links */}
                          <div className="flex flex-wrap gap-2">
                            {p.links.map((link) => (
                              <MagneticButton key={link.label} strength={0.25}>
                                <a
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-secondary text-xs"
                                  style={link.icon === "globe" ? {
                                    background: `${p.accentColor}12`,
                                    borderColor: `${p.accentColor}30`,
                                    color: p.accentColor,
                                  } : {}}
                                >
                                  <LinkIcon icon={link.icon} />
                                  {link.label}
                                </a>
                              </MagneticButton>
                            ))}
                            <button
                              onClick={(e) => { e.stopPropagation(); toggle(p.id); }}
                              className="btn btn-ghost text-xs"
                            >
                              Collapse ↑
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Research note */}
        <AnimatedSection className="mt-10">
          <div
            className="rounded-xl p-5 flex items-start gap-3"
            style={{ background: "var(--accent-subtle)", border: "1px solid var(--accent-border)" }}
          >
            <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p className="body-sm">
              <strong style={{ color: "var(--text-1)" }}>Note on research papers:</strong> WOLF and ZEDD are peer-reviewed publications
              co-authored with academic collaborators. Click any project card to explore full technical detail, or open the arXiv links directly.
            </p>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="mt-12">
          <div className="card p-10 text-center" style={{ boxShadow: "var(--shadow-sm)" }}>
            <h3 className="heading-lg mb-3">Interested in Collaborating?</h3>
            <p className="body-md max-w-md mx-auto mb-7">
              Research opportunities, open-source contributions, or just a technical conversation — always open to connecting.
            </p>
            <MagneticButton>
              <Link href="/contact" className="btn btn-primary px-6 py-2.5 inline-flex">
                Reach Out
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </MagneticButton>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
