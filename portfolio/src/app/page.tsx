"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";

const highlights = [
  {
    emoji: "🔬",
    title: "NeurIPS Spotlight",
    desc: "Papers spotlighted among 400+ researchers and PhD professionals. Cited by UPenn, Microsoft & MBZUAI.",
  },
  {
    emoji: "🏆",
    title: "2nd in Nation — Debate",
    desc: "Nationally ranked in Public Forum Debate. National Sunvite Champion 2025.",
  },
  {
    emoji: "∑",
    title: "AIME Qualifier",
    desc: "AMC top 5% nationally. Perfect NOETIC & MOEMS scores. MATHCOUNTS State qualifier.",
  },
  {
    emoji: "💻",
    title: "Developer & Builder",
    desc: "Creator of DebateSim and MathSim — AI-powered educational tools.",
  },
];

const areas = [
  {
    title: "AI Safety Research",
    desc: "Investigating LLM deception, detection, and injection robustness in agentic multi-agent systems. Spotlighted at NeurIPS and IJCNLP-AACL.",
    tags: ["PyTorch", "LangChain", "HuggingFace", "OpenAI API"],
    href: "/projects",
    accent: "var(--accent)",
  },
  {
    title: "Competitive Mathematics",
    desc: "AIME qualifier, AMC top 5% nationally. EHS Math Club President leading 80+ students and raising $2,000+ for math education.",
    tags: ["AMC 10/12", "AIME", "MATHCOUNTS", "NOETIC"],
    href: "/about",
    accent: "#7C3AED",
  },
  {
    title: "Debate & Leadership",
    desc: "Ranked 2nd in the Nation in Public Forum Debate. National Sunvite Champion. Deep expertise in foreign policy and public speaking.",
    tags: ["Public Forum", "Foreign Policy", "Research", "Speaking"],
    href: "/about",
    accent: "#059669",
  },
];

export default function Home() {
  return (
    <div style={{ background: "var(--bg-base)" }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-5 overflow-hidden">
        {/* Subtle dot-grid background */}
        <div
          className="absolute inset-0 dot-grid opacity-60 pointer-events-none"
          style={{
            maskImage: "radial-gradient(ellipse 70% 70% at 50% 40%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 40%, black 40%, transparent 100%)",
          }}
        />

        <div className="max-w-3xl mx-auto text-center relative">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 tag tag-accent mb-8"
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--success)" }}
            />
            Available for research · Emerald High School, Dublin CA · Class of 2027
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="heading-display mb-5"
          >
            Mrinal{" "}
            <span className="gradient-text">Agarwal</span>
          </motion.h1>

          {/* Roles */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="text-base font-medium mb-6"
            style={{ color: "var(--text-2)" }}
          >
            AI Researcher · Mathematician · Full-Stack Developer · National Debater
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42 }}
            className="body-lg max-w-xl mx-auto mb-10"
          >
            High school junior researching LLM deception and agentic AI safety.
            Nationally recognized in mathematics, debate, and computer science.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.52 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link href="/projects" className="btn btn-primary text-sm px-5 py-2.5">
              View My Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="/about" className="btn btn-secondary text-sm px-5 py-2.5">
              About Me
            </Link>
            <Link href="/resume" className="btn btn-ghost text-sm px-5 py-2.5">
              Resume
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ───────────────────────────────────── */}
      <section className="px-5 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <AnimatedSection key={h.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="card-lifted p-6"
                >
                  <div className="text-2xl mb-3">{h.emoji}</div>
                  <h3 className="heading-md text-sm mb-2">{h.title}</h3>
                  <p className="body-sm leading-relaxed">{h.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="px-5 pb-20">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-2xl p-10"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCounter end={2} prefix="#" label="In Nation — Debate" description="Public Forum, 2025" />
              <StatCounter end={400} suffix="+" label="Researchers in Peer Pool" description="NeurIPS & IJCNLP-AACL spotlight" />
              <StatCounter end={550} suffix="+" label="Tutoring Hours" description="Across 3 programs" />
              <StatCounter end={80} suffix="+" label="Math Club Members" description="EHS Math Club President" />
            </div>
          </div>
        </div>
      </section>

      {/* ── AREAS ────────────────────────────────────────── */}
      <section className="px-5 pb-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-10">
            <p className="label mb-2">Areas of Focus</p>
            <h2 className="heading-xl">Where I Excel</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {areas.map((area, i) => (
              <AnimatedSection key={area.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="card-lifted p-7 flex flex-col h-full group"
                >
                  <div
                    className="w-8 h-1.5 rounded-full mb-6"
                    style={{ background: area.accent }}
                  />
                  <h3 className="heading-md mb-3">{area.title}</h3>
                  <p className="body-sm leading-relaxed flex-1 mb-5">{area.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {area.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <Link
                    href={area.href}
                    className="text-sm font-medium flex items-center gap-1.5 transition-colors"
                    style={{ color: area.accent }}
                  >
                    Learn more
                    <svg
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                      width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section className="px-5 pb-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div
              className="rounded-2xl px-8 py-14 text-center"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <h2 className="heading-xl mb-4">
                Let&apos;s <span className="gradient-text">Connect</span>
              </h2>
              <p className="body-lg max-w-md mx-auto mb-8">
                Whether you&apos;re a research lab, university admissions team, or startup founder — I&apos;d love to talk.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn btn-primary px-6 py-2.5">
                  Get in Touch
                </Link>
                <Link href="/resume" className="btn btn-secondary px-6 py-2.5">
                  View Resume
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
