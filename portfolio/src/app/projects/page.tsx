"use client";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const projects = [
  {
    id: "debatesim",
    title: "DebateSim",
    subtitle: "AI-Driven Debate Training Platform",
    emoji: "🎙",
    period: "2022 – Present",
    status: "Active",
    statusDot: "#16A34A",
    accentColor: "#2563EB",
    objective: "To democratize access to high-quality debate training by building an AI-powered platform that analyzes legislation, generates realistic opposing arguments, and provides structured feedback to help debaters at all levels improve rapidly.",
    responsibilities: [
      "Designed and architected the full-stack application from scratch",
      "Implemented AI pipeline using OpenAI APIs and LangChain for argument generation",
      "Built a legislative analysis engine that parses and summarizes real policy documents",
      "Developed a feedback system evaluating argument structure, evidence quality, and logical coherence",
      "Created a RESTful backend with scalable data handling and user progress tracking",
      "Designed a responsive, accessible frontend prioritizing user experience",
    ],
    learned: [
      "How to integrate LLMs into production applications reliably and cost-efficiently",
      "Evaluating open-ended text for argument quality is fundamentally harder than classification",
      "Legislative language requires domain-specific prompt engineering — general prompts fail",
      "System design for educational applications where personalization and progress tracking matter",
    ],
    skills: ["LLM Integration", "Prompt Engineering", "System Design", "API Development", "EdTech"],
    technologies: ["Python", "OpenAI API", "LangChain", "HTML", "CSS", "JavaScript"],
    diagram: [
      "LEGISLATION INPUT  →  AI ANALYSIS ENGINE  →  ARGUMENT GENERATOR",
      "        ↓                                             ↓",
      "  POLICY SUMMARY                    COUNTER-ARGUMENTS & REBUTTALS",
      "        ↓                                             ↓",
      "              STRUCTURED FEEDBACK REPORT & SCORING",
    ],
  },
  {
    id: "mathsim",
    title: "MathSim",
    subtitle: "Personalized Math Tutoring Platform",
    emoji: "∑",
    period: "2023 – Present",
    status: "In Development",
    statusDot: "#D97706",
    accentColor: "#7C3AED",
    objective: "To build an adaptive mathematics tutoring platform that personalizes the learning journey for each student — from AMC beginners to AIME contenders — by analyzing performance patterns and generating targeted practice problems with human-quality explanations.",
    responsibilities: [
      "Designing adaptive difficulty algorithms based on student performance analytics",
      "Building a competition mathematics problem bank with structured metadata (topic, difficulty, source)",
      "Developing an AI explanation engine that produces step-by-step solutions in multiple styles",
      "Implementing progress dashboards and spaced-repetition scheduling for optimal retention",
      "Creating curriculum paths aligned with AMC 8/10/12, AIME, and MATHCOUNTS syllabi",
    ],
    learned: [
      "How to model student knowledge using Item Response Theory and Bayesian tracing",
      "Explanation quality matters more than problem quantity in mathematics education",
      "Spaced repetition dramatically improves long-term mathematical retention",
      "Building robust pipelines that handle diverse mathematical notation (LaTeX, plain text, images)",
    ],
    skills: ["Adaptive Learning", "Data Modeling", "EdTech Design", "Algorithm Design", "Full-Stack"],
    technologies: ["Python", "PyTorch", "LaTeX", "JavaScript", "PostgreSQL", "OpenAI API"],
    diagram: [
      "STUDENT PROFILE  →  KNOWLEDGE MODEL  →  ADAPTIVE SCHEDULER",
      "       ↓                   ↓                     ↓",
      " PROBLEM BANK   PERFORMANCE ANALYTICS    SPACED PRACTICE",
      "       ↓                   ↓                     ↓",
      "         AI EXPLANATION ENGINE + PROGRESS DASHBOARD",
    ],
  },
  {
    id: "ai-safety",
    title: "LLM Deception & Robustness",
    subtitle: "NeurIPS & IJCNLP-AACL Spotlighted Research",
    emoji: "🔬",
    period: "2025 – Present",
    status: "Published",
    statusDot: "#2563EB",
    accentColor: "#059669",
    objective: "To investigate the mechanisms by which large language models produce deceptive outputs, develop detection methodologies for identifying deceptive behavior in agentic multi-agent systems, and build robustness techniques against prompt injection attacks — contributing to foundational AI safety research.",
    responsibilities: [
      "Designed and executed large-scale experiment pipelines for evaluating LLM deception",
      "Developed novel detection algorithms for identifying deceptive reasoning in chain-of-thought outputs",
      "Performed rigorous statistical analysis across thousands of model evaluations",
      "Authored complete research papers from hypothesis through peer review",
      "Collaborated with academic researchers and refined methodology through review cycles",
      "Presented findings to reviewers at NeurIPS and IJCNLP-AACL — spotlighted in both venues",
    ],
    learned: [
      "How to design scientifically rigorous experiments that isolate specific behaviors in LLMs",
      "The profound challenge of defining and operationalizing 'deception' in a non-conscious system",
      "How to write research papers that communicate complex findings clearly to expert audiences",
      "Frontier AI models fail in subtle ways that naive benchmarks miss entirely",
    ],
    skills: ["AI Research", "Statistical Analysis", "Experiment Design", "Academic Writing", "AI Safety"],
    technologies: ["Python", "PyTorch", "HuggingFace", "LangChain", "OpenAI API", "LaTeX"],
    diagram: [
      "HYPOTHESIS  →  DATASET DESIGN  →  PIPELINE IMPLEMENTATION",
      "     ↓                                      ↓",
      "STATISTICAL ANALYSIS  ←  EXPERIMENT EXECUTION (1000s of evals)",
      "     ↓",
      "NEURIPS + IJCNLP-AACL SPOTLIGHT  →  CITED BY UPENN, MICROSOFT, MBZUAI",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div style={{ background: "var(--bg-base)" }} className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-5">

        {/* Header */}
        <AnimatedSection className="mb-14">
          <p className="label mb-3">Portfolio</p>
          <h1 className="heading-display mb-5">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="body-lg max-w-xl">
            From published AI safety research to educational tools — each project represents a commitment to building technology that genuinely matters.
          </p>
        </AnimatedSection>

        {/* Quick nav */}
        <AnimatedSection className="mb-14">
          <div className="flex flex-wrap gap-2">
            {projects.map((p) => (
              <button
                key={p.id}
                onClick={() => document.getElementById(p.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="btn btn-secondary text-sm"
              >
                {p.emoji} {p.title}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects */}
        <div className="space-y-14">
          {projects.map((project, idx) => (
            <AnimatedSection key={project.id} delay={idx * 0.04}>
              <div
                id={project.id}
                className="card overflow-hidden"
                style={{ boxShadow: "var(--shadow-md)" }}
              >
                {/* Card header */}
                <div
                  className="px-8 py-7"
                  style={{ borderBottom: "1px solid var(--border)", background: "var(--surface-2)" }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                    <div className="flex items-start gap-5">
                      <motion.span
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.2 }}
                        className="text-4xl leading-none mt-1 cursor-default select-none"
                      >
                        {project.emoji}
                      </motion.span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "var(--text-2)" }}>
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.statusDot }} />
                            {project.status}
                          </span>
                          <span className="body-sm">{project.period}</span>
                        </div>
                        <h2 className="heading-lg">{project.title}</h2>
                        <p className="body-sm mt-1" style={{ color: project.accentColor }}>{project.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 md:max-w-52 md:justify-end">
                      {project.technologies.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="px-8 py-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div className="space-y-8">
                    <ProjectBlock title="Objective" icon="🎯">
                      <p className="body-sm leading-relaxed">{project.objective}</p>
                    </ProjectBlock>
                    <ProjectBlock title="Responsibilities" icon="📋">
                      <ul className="space-y-2">
                        {project.responsibilities.map((r) => (
                          <li key={r} className="body-sm flex items-start gap-2">
                            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.accentColor }} />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </ProjectBlock>
                  </div>
                  <div className="space-y-8">
                    <ProjectBlock title="What I Learned" icon="💡">
                      <ul className="space-y-2">
                        {project.learned.map((l) => (
                          <li key={l} className="body-sm flex items-start gap-2">
                            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--text-3)" }} />
                            {l}
                          </li>
                        ))}
                      </ul>
                    </ProjectBlock>
                    <ProjectBlock title="Skills Demonstrated" icon="⚡">
                      <div className="flex flex-wrap gap-1.5">
                        {project.skills.map((s) => (
                          <span
                            key={s}
                            className="tag"
                            style={{
                              background: `${project.accentColor}12`,
                              borderColor: `${project.accentColor}30`,
                              color: project.accentColor,
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </ProjectBlock>
                  </div>
                </div>

                {/* Architecture diagram */}
                <div className="px-8 pb-8">
                  <ProjectBlock title="System Architecture" icon="🗺">
                    <div
                      className="rounded-xl p-6 font-mono text-xs overflow-x-auto"
                      style={{
                        background: "var(--bg-subtle)",
                        border: "1px solid var(--border)",
                        color: "var(--text-2)",
                        lineHeight: "1.8",
                      }}
                    >
                      {project.diagram.map((line, i) => (
                        <div key={i} className="whitespace-pre">{line}</div>
                      ))}
                    </div>
                  </ProjectBlock>
                </div>

                {/* Footer actions */}
                <div
                  className="px-8 py-5 flex flex-wrap gap-3"
                  style={{ borderTop: "1px solid var(--border)", background: "var(--surface-2)" }}
                >
                  <button className="btn btn-secondary text-xs">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/>
                    </svg>
                    Documentation
                  </button>
                  <button className="btn btn-secondary text-xs">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                    </svg>
                    Download Report
                  </button>
                  {project.id === "ai-safety" && (
                    <button
                      className="btn text-xs"
                      style={{ background: "var(--accent-subtle)", border: "1px solid var(--accent-border)", color: "var(--accent)" }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      View NeurIPS Paper
                    </button>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-14">
          <div className="card p-10 text-center" style={{ boxShadow: "var(--shadow-sm)" }}>
            <h3 className="heading-lg mb-3">Interested in Collaborating?</h3>
            <p className="body-md max-w-md mx-auto mb-7">
              I&apos;m always looking for opportunities in AI safety research, educational technology, or competitive mathematics.
            </p>
            <Link href="/contact" className="btn btn-primary px-6 py-2.5 inline-flex">
              Reach Out
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

function ProjectBlock({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm">{icon}</span>
        <h3 className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-3)" }}>{title}</h3>
      </div>
      {children}
    </div>
  );
}
