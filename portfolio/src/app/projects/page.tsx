"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";

type LinkItem = { label: string; href: string; icon: "globe" | "github" | "paper" };

interface Project {
  id: string;
  type: "Research" | "Platform";
  title: string;
  fullTitle: string;
  status: string;
  statusDot: string;
  emoji: string;
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
  authors?: string[];
  venue?: string;
  diagram: string[];
}

const projects: Project[] = [
  {
    id: "wolf",
    type: "Research",
    title: "WOLF",
    fullTitle: "Werewolf-based Observations for LLM Deception and Falsehoods",
    status: "Spotlighted",
    statusDot: "#2563EB",
    emoji: "🐺",
    tagline: "Multi-agent LLM deception research",
    brief: "A naturalistic framework for evaluating strategic deception and falsehood generation in large language models, using the social deduction game Werewolf.",
    description: "WOLF places LLMs inside the social deduction game Werewolf — where agents must actively deceive or detect deception — to surface behavioral vulnerabilities invisible to conventional benchmarks. The framework reveals how frontier models fail under adversarial social pressure, providing a rigorous lens for AI safety evaluation.",
    objective: "Develop a principled, naturalistic framework for evaluating LLM deception behavior in multi-agent settings — revealing failure modes invisible to conventional benchmarks.",
    approach: "Implemented Werewolf as a controlled multi-agent environment. Designed evaluation protocols measuring deception success rate, cross-examination consistency, and strategic reasoning stability across model families and prompt regimes.",
    impact: "Spotlighted at NeurIPS and IJCNLP-AACL. Cited by UPenn, Microsoft, and MBZUAI. Among the first high-school-led research at these venues in LLM behavioral analysis.",
    period: "2025 – Present",
    venue: "NeurIPS · IJCNLP-AACL",
    technologies: ["Python", "GPT-4 API", "LangChain", "PyTorch", "LaTeX"],
    links: [
      { label: "GitHub", href: "https://github.com/MrinalA2009/WOLF-Werewolf-based-Observations-for-LLM-Deception-and-Falsehoods", icon: "github" },
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
    emoji: "📡",
    tagline: "Zero-shot ML model drift detection",
    brief: "A zero-shot framework for detecting distributional drift in ML model embeddings without labeled drift examples — enabling continuous, lightweight monitoring for production AI systems.",
    description: "ZEDD addresses a critical gap in production ML reliability: detecting when a model's internal representations shift away from training distribution, without any labeled drift examples. By applying zero-shot analysis to embedding spaces, ZEDD enables scalable monitoring of model health across diverse deployment scenarios.",
    objective: "Create a zero-shot drift detection framework that operates purely on embedding representations — no labeled data required — enabling reliable ML monitoring at scale.",
    approach: "Designed statistical tests and geometric analysis methods for detecting drift signatures in embedding spaces. Validated across multiple architectures, tasks, and deployment conditions. Benchmarked against supervised detection baselines.",
    impact: "Directly applicable to agentic AI deployment, model reliability engineering, and robust ML pipelines. Advances the state of ML monitoring for systems under distribution shift.",
    period: "2024 – Present",
    venue: "Research Publication",
    technologies: ["Python", "PyTorch", "HuggingFace", "Statistical Methods", "LaTeX"],
    authors: ["Anirudh Shekhar", "Mrinal Agarwal"],
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2601.12359", icon: "paper" },
    ],
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
    emoji: "🎙",
    tagline: "AI-powered debate training & bill analysis",
    brief: "Reads real legislation, extracts key arguments, and generates structured debate cases for both sides — transforming hours of bill research into actionable preparation in minutes.",
    description: "DebateSim uses an LLM pipeline to ingest bill text, extract policy arguments, and generate structured Pro/Con contentions with evidence tagging and rebuttal frameworks. Built for competitive debaters and policy researchers who need depth without the time cost of manual research.",
    objective: "Democratize access to high-quality debate preparation through AI-powered legislative analysis — making world-class research tools accessible to students at every level.",
    approach: "Built a full-stack platform with an LLM analysis pipeline: bill ingestion → argument extraction → structured case generation → rebuttal framework. Includes evidence tagging and cross-examination scaffolding.",
    impact: "Used by debate students nationally. Reduces bill research from hours to minutes. Demonstrates practical application of LLMs to real-world policy analysis.",
    period: "2022 – Present",
    technologies: ["Python", "OpenAI API", "LangChain", "HTML/CSS", "JavaScript"],
    links: [
      { label: "Live Site", href: "https://debatesim.us", icon: "globe" },
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
    emoji: "∑",
    tagline: "Adaptive competition math tutoring platform",
    brief: "Delivers personalized problem sets, AI-generated step-by-step explanations, and performance analytics — built from 550+ hours of direct competition coaching experience.",
    description: "MathSim closes the gap between undirected practice and strategic preparation by personalizing each student's problem set to their exact level, generating explanations in the student's style, and tracking progress toward AMC, AIME, and MATHCOUNTS targets.",
    objective: "Build an adaptive tutoring system that personalizes competition mathematics preparation — scaling the insights from 550+ hours of direct coaching experience.",
    approach: "Designed an adaptive difficulty system driven by performance data, built a curated problem bank with rich metadata, and implemented an AI explanation engine that adapts depth and style to each student's pattern.",
    impact: "Serves students preparing for AMC, AIME, and MATHCOUNTS. Scales individual tutoring insights into a continuously available, personalized platform.",
    period: "2023 – Present",
    technologies: ["Python", "OpenAI API", "LaTeX", "JavaScript", "PostgreSQL"],
    links: [
      { label: "Live Site", href: "https://mathsim.us", icon: "globe" },
    ],
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

function LinkIcon({ icon }: { icon: string }) {
  if (icon === "github") return <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>;
  if (icon === "paper") return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>;
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>;
}

export default function ProjectsPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedProject = projects.find((p) => p.id === selected);

  // Prevent body scroll when project is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  // Escape to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div style={{ background: "var(--bg-base)" }} className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-5">

        {/* Header */}
        <AnimatedSection className="mb-14">
          <p className="label mb-3">Portfolio</p>
          <h1 className="heading-display mb-5">
            Research &amp; <span className="gradient-text">Projects</span>
          </h1>
          <p className="body-lg max-w-2xl">
            Two published AI research papers and two live platforms. Click any project to explore the full story.
          </p>
        </AnimatedSection>

        {/* Grid — 2 columns on desktop */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {projects.map((p, i) => (
            <AnimatedSection key={p.id} delay={i * 0.08}>
              {/* The layoutId connects this card to the full-screen view */}
              <motion.div
                layoutId={`project-${p.id}`}
                onClick={() => setSelected(p.id)}
                whileHover={{ y: -4, boxShadow: "var(--shadow-md)" }}
                transition={{ duration: 0.2 }}
                className="card cursor-pointer overflow-hidden h-full"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                {/* Accent top bar */}
                <div className="h-0.5 w-full" style={{ background: p.accentColor }} />

                <div className="p-7">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded"
                          style={{ background: `${p.accentColor}12`, color: p.accentColor, border: `1px solid ${p.accentColor}25` }}
                        >
                          {p.type}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-3)" }}>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.statusDot }} />
                          {p.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{p.emoji}</span>
                        <div>
                          <h2 className="heading-md" style={{ color: p.accentColor }}>{p.title}</h2>
                          <p className="body-sm mt-0.5">{p.tagline}</p>
                        </div>
                      </div>
                    </div>
                    {/* Enter arrow */}
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      style={{ background: `${p.accentColor}10`, border: `1px solid ${p.accentColor}25`, color: p.accentColor }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                  </div>

                  <p className="body-sm leading-relaxed mb-5">{p.brief}</p>

                  {p.authors && <p className="body-sm mb-3" style={{ color: "var(--text-3)" }}>Authors: {p.authors.join(", ")}</p>}
                  {p.venue && <p className="body-sm mb-4" style={{ color: "var(--text-3)" }}>Venue: {p.venue}</p>}

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.technologies.slice(0, 4).map((t) => <span key={t} className="tag">{t}</span>)}
                    {p.technologies.length > 4 && <span className="tag" style={{ color: "var(--text-3)" }}>+{p.technologies.length - 4}</span>}
                  </div>

                  <p className="text-xs font-medium" style={{ color: p.accentColor }}>
                    Click to explore →
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </motion.div>

        {/* CTA */}
        <AnimatedSection>
          <div className="card p-10 text-center" style={{ boxShadow: "var(--shadow-sm)" }}>
            <h3 className="heading-lg mb-3">Interested in Collaborating?</h3>
            <p className="body-md max-w-md mx-auto mb-7">Research opportunities, open-source work, or a technical conversation — always open.</p>
            <MagneticButton>
              <Link href="/contact" className="btn btn-primary px-6 py-2.5 inline-flex">
                Reach Out
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </MagneticButton>
          </div>
        </AnimatedSection>
      </div>

      {/* ── PROJECT PORTAL — full-screen expansion via layoutId ── */}
      <AnimatePresence>
        {selected && selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40"
              style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
              onClick={() => setSelected(null)}
            />

            {/* Expanded card — shares layoutId with the grid card */}
            <div className="fixed inset-0 z-50 flex items-start justify-center p-4 md:p-10 pointer-events-none overflow-auto">
              <motion.div
                layoutId={`project-${selected}`}
                className="pointer-events-auto w-full max-w-3xl"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                {/* Accent bar */}
                <div className="h-0.5" style={{ background: selectedProject.accentColor }} />

                {/* Close + Header */}
                <div className="p-7 pb-0">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded"
                          style={{ background: `${selectedProject.accentColor}12`, color: selectedProject.accentColor, border: `1px solid ${selectedProject.accentColor}25` }}
                        >
                          {selectedProject.type}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-3)" }}>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: selectedProject.statusDot }} />
                          {selectedProject.status}
                        </span>
                        <span className="body-sm" style={{ color: "var(--text-3)" }}>{selectedProject.period}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{selectedProject.emoji}</span>
                        <div>
                          <h2 className="heading-lg" style={{ color: selectedProject.accentColor }}>{selectedProject.title}</h2>
                          <p className="body-sm mt-0.5 italic">{selectedProject.fullTitle}</p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelected(null)}
                      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                      style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)", color: "var(--text-2)" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                  </div>
                </div>

                {/* Content fades in after the layout animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.18, duration: 0.3 }}
                  className="px-7 pb-7"
                >
                  {selectedProject.authors && (
                    <p className="body-sm mb-5" style={{ color: "var(--text-3)" }}>
                      Authors: {selectedProject.authors.join(", ")}
                      {selectedProject.venue && ` · ${selectedProject.venue}`}
                    </p>
                  )}

                  <p className="body-md leading-relaxed mb-7">{selectedProject.description}</p>

                  {/* Three-panel insight */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
                    {[
                      { label: "Objective", content: selectedProject.objective },
                      { label: "Approach", content: selectedProject.approach },
                      { label: "Impact", content: selectedProject.impact },
                    ].map(({ label, content }) => (
                      <div
                        key={label}
                        className="rounded-xl p-4"
                        style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)" }}
                      >
                        <p className="label mb-2" style={{ color: selectedProject.accentColor }}>{label}</p>
                        <p className="body-sm leading-relaxed">{content}</p>
                      </div>
                    ))}
                  </div>

                  {/* Architecture */}
                  <div className="mb-7">
                    <p className="label mb-3" style={{ color: "var(--text-3)" }}>Architecture</p>
                    <div
                      className="rounded-xl p-5 font-mono text-xs overflow-x-auto"
                      style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)", color: "var(--text-2)", lineHeight: 1.9 }}
                    >
                      {selectedProject.diagram.map((line, i) => (
                        <div key={i} className="whitespace-pre">{line}</div>
                      ))}
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-7">
                    {selectedProject.technologies.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary text-xs"
                        style={link.icon === "globe" ? {
                          background: `${selectedProject.accentColor}12`,
                          borderColor: `${selectedProject.accentColor}30`,
                          color: selectedProject.accentColor,
                        } : {}}
                      >
                        <LinkIcon icon={link.icon} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
