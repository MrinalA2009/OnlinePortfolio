"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";

const achievements = [
  {
    icon: "🔬",
    title: "NeurIPS Spotlighted Researcher",
    desc: "Top 0.1% among 400+ PhD researchers & professionals",
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20",
    glow: "hover:shadow-blue-500/15",
  },
  {
    icon: "🏆",
    title: "2nd in Nation — Debate",
    desc: "Public Forum Debate, nationally and California ranked",
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20",
    glow: "hover:shadow-purple-500/15",
  },
  {
    icon: "📐",
    title: "AIME Qualifier",
    desc: "AMC top 5% nationally · Perfect NOETIC & MOEMS scores",
    color: "from-cyan-500/20 to-cyan-600/5",
    border: "border-cyan-500/20",
    glow: "hover:shadow-cyan-500/15",
  },
  {
    icon: "💻",
    title: "DebateSim & MathSim",
    desc: "AI-powered tools for debate training and math tutoring",
    color: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/20",
    glow: "hover:shadow-emerald-500/15",
  },
];

const stats = [
  { end: 2, suffix: "nd", label: "Nation in Debate", description: "Public Forum, 2025" },
  { end: 400, suffix: "+", label: "PhD Peers Surpassed", description: "NeurIPS submission pool" },
  { end: 350, suffix: "+", label: "Tutoring Hours", description: "Across 3 programs" },
  { end: 80, suffix: "+", label: "Math Club Members", description: "EHS Math Club President" },
];

const roles = [
  "AI Researcher",
  "Mathematician",
  "Full-Stack Developer",
  "National Debater",
  "Math Club President",
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="relative overflow-hidden">
      <ParticleBackground />

      {/* Grid background */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-60" />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center"
      >
        {/* Radial glow blobs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-purple-700/8 blur-[120px] pointer-events-none" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-xs font-medium text-blue-300 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            NeurIPS Spotlighted · AIME Qualifier · 2nd in Nation Debater
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 leading-none"
          >
            <span className="text-white">Mrinal</span>
            <br />
            <span className="gradient-text text-glow">Agarwal</span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-8"
          >
            {roles.map((role, i) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                className="px-3 py-1 text-xs font-medium rounded-full border border-white/8 text-slate-400 bg-white/3"
              >
                {role}
              </motion.span>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            High school junior at Emerald High School researching LLM deception and agentic AI systems.
            Nationally recognized in mathematics, debate, and computer science.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/projects"
              className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden btn-shimmer shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore My Work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 rounded-xl font-semibold text-slate-300 glass border border-white/8 hover:border-blue-500/30 hover:text-white transition-all duration-200"
            >
              About Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-0.5 h-8 bg-gradient-to-b from-blue-500/50 to-transparent rounded-full"
          />
        </motion.div>
      </section>

      {/* ── ACHIEVEMENT CARDS ── */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Highlights</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Recognized Across <span className="gradient-text">Multiple Disciplines</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`glass rounded-2xl p-6 border ${item.border} bg-gradient-to-br ${item.color} hover:shadow-xl ${item.glow} transition-all duration-300 h-full`}
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-3xl border border-blue-500/10 p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-700/5 pointer-events-none" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
              {stats.map((s) => (
                <StatCounter key={s.label} {...s} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED AREAS ── */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">Areas of Focus</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Where I <span className="gradient-text">Excel</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "AI & Machine Learning Research",
                desc: "Conducting groundbreaking research on LLM deception, detection, and injection robustness. Published work spotlighted at NeurIPS and IJCNLP-AACL, cited by UPenn, Microsoft, and MBZUAI.",
                tags: ["PyTorch", "LangChain", "HuggingFace", "OpenAI APIs"],
                href: "/projects",
                icon: "🧠",
                gradient: "from-blue-600/15 to-blue-800/5",
                accent: "text-blue-400",
                border: "border-blue-500/15",
              },
              {
                title: "Competitive Mathematics",
                desc: "AIME qualifier with AMC top 5% nationally. Perfect scores on NOETIC and MOEMS. First from prior team to qualify to MATHCOUNTS States. EHS Math Club President leading 80+ students.",
                tags: ["AMC", "AIME", "NOETIC", "MATHCOUNTS"],
                href: "/about",
                icon: "∑",
                gradient: "from-purple-600/15 to-purple-800/5",
                accent: "text-purple-400",
                border: "border-purple-500/15",
              },
              {
                title: "National Debate & Leadership",
                desc: "Ranked 2nd in the Nation and 2nd in California in Public Forum Debate. National Sunvite Champion. Extensive foreign policy research and polished public speaking.",
                tags: ["Public Forum", "Research", "Foreign Policy", "Leadership"],
                href: "/about",
                icon: "🎙",
                gradient: "from-cyan-600/15 to-cyan-800/5",
                accent: "text-cyan-400",
                border: "border-cyan-500/15",
              },
            ].map((area, i) => (
              <AnimatedSection key={area.title} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`glass rounded-2xl border ${area.border} bg-gradient-to-br ${area.gradient} p-8 h-full flex flex-col group hover:shadow-xl transition-all duration-300`}
                >
                  <div className={`text-4xl mb-5 font-mono ${area.accent}`}>{area.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">{area.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {area.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-md bg-white/5 border border-white/8 text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={area.href}
                    className={`text-sm font-semibold ${area.accent} flex items-center gap-1 group-hover:gap-2 transition-all`}
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="relative glass rounded-3xl border border-blue-500/15 p-16 overflow-hidden pulse-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-700/10 pointer-events-none" />
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Let&apos;s <span className="gradient-text">Connect</span>
                </h2>
                <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                  Whether you&apos;re a research lab, university admissions team, or startup founder — I&apos;d love to collaborate.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-4 rounded-xl font-semibold text-white btn-shimmer shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
                  >
                    Get in Touch
                  </Link>
                  <Link
                    href="/resume"
                    className="px-8 py-4 rounded-xl font-semibold text-slate-300 glass border border-white/8 hover:border-blue-500/30 hover:text-white transition-all"
                  >
                    View Resume
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
