"use client";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";

const projects = [
  {
    id: "debatesim",
    title: "DebateSim",
    subtitle: "AI-Driven Debate Training Platform",
    emoji: "🎙",
    period: "2022 – Present",
    status: "Active",
    statusColor: "bg-emerald-500",
    gradient: "from-blue-600/15 to-cyan-600/5",
    border: "border-blue-500/20",
    accentColor: "text-blue-400",
    badgeColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    objective:
      "To democratize access to high-quality debate training by building an AI-powered platform that analyzes legislation, generates realistic opposing arguments, and provides structured feedback to help debaters at all levels improve rapidly.",
    responsibilities: [
      "Designed and architected the full-stack application from scratch",
      "Implemented AI pipeline using OpenAI APIs and LangChain for intelligent argument generation",
      "Built a legislative analysis engine that parses and summarizes real policy documents",
      "Developed a dynamic feedback system that evaluates argument structure, evidence quality, and logical coherence",
      "Created a RESTful backend with scalable data handling for user progress tracking",
      "Designed a responsive, accessible frontend interface prioritizing user experience",
    ],
    learned: [
      "How to integrate large language models into production applications reliably and cost-efficiently",
      "The complexity of evaluating open-ended text for argument quality — a fundamentally harder problem than classification",
      "How real debate evidence and legislative language differ from general-purpose text and require domain-specific prompt engineering",
      "System design principles for educational applications where personalization and progress tracking matter",
    ],
    skills: ["LLM Integration", "Prompt Engineering", "System Design", "API Development", "UX Design", "Educational Technology"],
    technologies: ["Python", "OpenAI API", "LangChain", "HTML", "CSS", "JavaScript", "REST APIs"],
    visual: {
      mockup: [
        "[ LEGISLATION INPUT ]  →  [ AI ANALYSIS ENGINE ]  →  [ ARGUMENT GENERATOR ]",
        "         ↓                                                       ↓",
        "[ POLICY SUMMARY ]                              [ COUNTER-ARGUMENTS + REBUTTALS ]",
        "         ↓                                                       ↓",
        "                     [ STRUCTURED FEEDBACK REPORT ]",
      ],
    },
  },
  {
    id: "mathsim",
    title: "MathSim",
    subtitle: "Personalized Math Tutoring Platform",
    emoji: "∑",
    period: "2023 – Present",
    status: "In Development",
    statusColor: "bg-yellow-500",
    gradient: "from-purple-600/15 to-purple-800/5",
    border: "border-purple-500/20",
    accentColor: "text-purple-400",
    badgeColor: "bg-purple-500/10 border-purple-500/20 text-purple-300",
    objective:
      "To build an adaptive mathematics tutoring platform that personalizes the learning journey for each student — from AMC beginners to AIME contenders — by analyzing performance patterns and generating targeted practice problems with rich, human-quality explanations.",
    responsibilities: [
      "Designing adaptive difficulty algorithms based on student performance analytics",
      "Building a competition mathematics problem bank with structured metadata (topic, difficulty, source)",
      "Developing an AI explanation engine that produces step-by-step solutions in multiple styles",
      "Implementing progress dashboards and spaced-repetition scheduling for optimal retention",
      "Creating curriculum paths aligned with AMC 8/10/12, AIME, and MATHCOUNTS syllabi",
      "Designing parent/instructor dashboards for oversight and intervention",
    ],
    learned: [
      "How to model student knowledge using Item Response Theory and Bayesian knowledge tracing",
      "The importance of explanation quality over problem quantity in mathematics education",
      "How spaced repetition dramatically improves long-term mathematical retention",
      "Building robust data pipelines that handle diverse mathematical notations (LaTeX, plain text, images)",
    ],
    skills: ["Adaptive Learning Systems", "Data Modeling", "EdTech Design", "Algorithm Design", "Full-Stack Development"],
    technologies: ["Python", "PyTorch", "LaTeX", "JavaScript", "HTML/CSS", "PostgreSQL", "OpenAI API"],
    visual: {
      mockup: [
        "[ STUDENT PROFILE ]  →  [ KNOWLEDGE MODEL ]  →  [ ADAPTIVE SCHEDULER ]",
        "        ↓                       ↓                          ↓",
        "[ PROBLEM BANK ]   [ PERFORMANCE ANALYTICS ]   [ SPACED PRACTICE SETS ]",
        "        ↓                       ↓                          ↓",
        "              [ AI EXPLANATION ENGINE + PROGRESS DASHBOARD ]",
      ],
    },
  },
  {
    id: "ai-safety",
    title: "LLM Deception & Robustness Research",
    subtitle: "NeurIPS & IJCNLP-AACL Spotlighted Research",
    emoji: "🔬",
    period: "2025 – Present",
    status: "Published",
    statusColor: "bg-blue-500",
    gradient: "from-cyan-600/15 to-blue-800/5",
    border: "border-cyan-500/20",
    accentColor: "text-cyan-400",
    badgeColor: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
    objective:
      "To investigate the mechanisms by which large language models produce deceptive outputs, develop detection methodologies for identifying deceptive behavior in agentic multi-agent systems, and build robustness techniques against prompt injection attacks — contributing to foundational AI safety research.",
    responsibilities: [
      "Designed and executed large-scale experiment pipelines for evaluating LLM deception across diverse prompting strategies",
      "Developed novel detection algorithms for identifying deceptive reasoning chains in chain-of-thought outputs",
      "Performed rigorous statistical analysis across thousands of model evaluations",
      "Authored complete research papers from hypothesis to submission, including related work, methodology, experiments, and conclusions",
      "Collaborated with academic researchers and refined methodology through peer review",
      "Presented research findings to reviewers at top-tier AI venues (NeurIPS, IJCNLP-AACL)",
    ],
    learned: [
      "How to design scientifically rigorous experiments that isolate specific behaviors in language models",
      "The profound challenge of defining and operationalizing 'deception' in a non-conscious AI system",
      "How to write research papers that communicate complex findings clearly to expert audiences",
      "The importance of reproducibility — every experiment was meticulously documented for replication",
      "How frontier AI models fail in subtle ways that naive benchmarks miss entirely",
    ],
    skills: ["AI Research", "Statistical Analysis", "Experiment Design", "Academic Writing", "LLM Evaluation", "AI Safety"],
    technologies: ["Python", "PyTorch", "HuggingFace", "LangChain", "OpenAI API", "LaTeX", "Statistical Analysis"],
    visual: {
      mockup: [
        "[ HYPOTHESIS FORMATION ]  →  [ DATASET DESIGN ]  →  [ PIPELINE IMPLEMENTATION ]",
        "           ↓                                                     ↓",
        "[ STATISTICAL ANALYSIS ]  ←  [ EXPERIMENT EXECUTION (1000s of evals) ]",
        "           ↓",
        "[ PAPER: NEURIPS + IJCNLP-AACL SPOTLIGHT ] → [ CITED BY UPENN, MICROSOFT, MBZUAI ]",
      ],
    },
  },
];

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      <div className="fixed top-1/4 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-700/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From published AI safety research to educational tools — each project represents a commitment to building technology that matters.
          </p>
        </AnimatedSection>

        {/* Project tabs / quick nav */}
        <AnimatedSection className="mb-16">
          <div className="flex flex-wrap gap-3 justify-center">
            {projects.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  document.getElementById(p.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                  activeProject === p.id
                    ? "bg-blue-500/20 border-blue-500/40 text-blue-300"
                    : "glass border-white/8 text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                {p.emoji} {p.title}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Project Cards */}
        <div className="space-y-20">
          {projects.map((project, idx) => (
            <AnimatedSection key={project.id} delay={idx * 0.05}>
              <div
                id={project.id}
                className={`glass rounded-3xl border ${project.border} bg-gradient-to-br ${project.gradient} overflow-hidden`}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/* Card Header */}
                <div className="p-8 md:p-10 border-b border-white/5">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex items-start gap-5">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="text-5xl flex-shrink-0"
                      >
                        {project.emoji}
                      </motion.div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${project.badgeColor}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${project.statusColor}`} />
                            {project.status}
                          </span>
                          <span className="text-xs text-slate-500">{project.period}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">{project.title}</h2>
                        <p className={`text-sm font-medium ${project.accentColor} mt-1`}>{project.subtitle}</p>
                      </div>
                    </div>
                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
                      {project.technologies.map((t) => (
                        <span key={t} className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/8 text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Left column */}
                  <div className="space-y-8">
                    <ProjectSection title="Objective" icon="🎯">
                      <p className="text-sm text-slate-400 leading-relaxed">{project.objective}</p>
                    </ProjectSection>

                    <ProjectSection title="Responsibilities" icon="📋">
                      <ul className="space-y-2">
                        {project.responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className={`mt-1 flex-shrink-0 ${project.accentColor}`}>›</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </ProjectSection>
                  </div>

                  {/* Right column */}
                  <div className="space-y-8">
                    <ProjectSection title="What I Learned" icon="💡">
                      <ul className="space-y-2">
                        {project.learned.map((l) => (
                          <li key={l} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className="mt-1 flex-shrink-0 text-yellow-400">›</span>
                            {l}
                          </li>
                        ))}
                      </ul>
                    </ProjectSection>

                    <ProjectSection title="Skills Demonstrated" icon="⚡">
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((s) => (
                          <span key={s} className={`px-3 py-1 text-xs rounded-lg border font-medium ${project.badgeColor}`}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </ProjectSection>
                  </div>
                </div>

                {/* Visual / Mockup */}
                <div className="px-8 md:px-10 pb-8 md:pb-10">
                  <ProjectSection title="System Architecture / Flow" icon="🗺">
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="rounded-xl bg-black/30 border border-white/5 p-6 font-mono text-xs text-slate-400 overflow-x-auto"
                    >
                      {project.visual.mockup.map((line, i) => (
                        <div key={i} className="whitespace-pre leading-relaxed">{line}</div>
                      ))}
                    </motion.div>
                  </ProjectSection>
                </div>

                {/* Documentation */}
                <div className="px-8 md:px-10 pb-10 flex flex-wrap gap-3">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300 hover:border-blue-500/30 hover:text-white transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Documentation
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300 hover:border-purple-500/30 hover:text-white transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Rubric / Report
                  </motion.button>
                  {project.id === "ai-safety" && (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-sm text-blue-300 hover:bg-blue-500/20 transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Paper (NeurIPS)
                    </motion.button>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-20 text-center">
          <div className="glass rounded-2xl border border-white/6 p-12">
            <h3 className="text-2xl font-bold text-white mb-3">Interested in Collaborating?</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
              I&apos;m always looking for opportunities to work on impactful AI safety research, educational technology, or competitive mathematics.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
            >
              Reach Out
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

function ProjectSection({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-base">{icon}</span>
        <h3 className="text-sm font-bold text-white uppercase tracking-wide">{title}</h3>
      </div>
      {children}
    </div>
  );
}
