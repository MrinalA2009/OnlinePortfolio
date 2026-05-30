"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import SectionNav from "@/components/SectionNav";

const NAV_SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "highlights", label: "Highlights" },
  { id: "stats", label: "Stats" },
  { id: "areas", label: "Focus" },
  { id: "cta", label: "Contact" },
];

const highlights = [
  {
    label: "Research",
    title: "NeurIPS & IJCNLP-AACL Spotlight",
    desc: "Two papers recognized among submissions from 400+ researchers. Cited by UPenn, Microsoft, and MBZUAI.",
  },
  {
    label: "Debate",
    title: "2nd in the Nation, Public Forum",
    desc: "National Sunvite Champion, 2025. Ranked 2nd in California and nationally.",
  },
  {
    label: "Mathematics",
    title: "AIME Qualifier — AMC Top 5%",
    desc: "Perfect NOETIC and MOEMS scores. First from team to reach MATHCOUNTS States. EHS Math Club President.",
  },
  {
    label: "Development",
    title: "DebateSim & MathSim",
    desc: "Production platforms for legislative analysis and adaptive math instruction.",
  },
];

const areas = [
  {
    title: "AI Safety Research",
    desc: "LLM deception, zero-shot drift detection, and behavioral robustness in multi-agent systems. Two papers at NeurIPS and IJCNLP-AACL.",
    tags: ["PyTorch", "LangChain", "HuggingFace", "Python"],
    href: "/projects",
  },
  {
    title: "Competitive Mathematics",
    desc: "AIME qualifier and AMC top 5% nationally. President of an 80+ member math club. 550+ tutoring hours across three programs.",
    tags: ["AMC 10/12", "AIME", "MATHCOUNTS", "NOETIC"],
    href: "/about",
  },
  {
    title: "Public Forum Debate",
    desc: "2nd in the nation, 2025. National Sunvite Champion. Focus on foreign policy analysis and evidence construction.",
    tags: ["Public Forum", "Policy Research", "Foreign Affairs"],
    href: "/about",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div style={{ background: "var(--bg-base)" }}>
      <SectionNav sections={NAV_SECTIONS} />

      {/* ── HERO ────────────────────────────────────────── */}
      <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <BackgroundCanvas className="w-full h-full" />
        </div>
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 70% at 50% 45%, transparent 35%, var(--bg-base) 92%)" }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-20 text-center px-5 max-w-3xl mx-auto select-none"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="body-sm mb-8 tracking-wide"
          >
            Emerald High School · Dublin, CA · Class of 2027
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="heading-display mb-6"
          >
            Mrinal Agarwal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="text-base mb-3"
            style={{ color: "var(--text-2)", fontWeight: 500 }}
          >
            AI Research · Mathematics · Software · Public Forum Debate
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.38 }}
            className="body-lg max-w-lg mx-auto mb-10 select-text"
          >
            High school junior working on LLM safety and multi-agent systems.
            Nationally recognized in mathematics, debate, and applied AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.48 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link href="/projects" className="btn btn-primary px-6 py-3 text-sm">
              View Projects
            </Link>
            <Link href="/about" className="btn btn-secondary px-6 py-3 text-sm">
              About
            </Link>
            <Link href="/resume" className="btn btn-ghost px-5 py-3 text-sm" style={{ color: "var(--text-2)" }}>
              Resume
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── HIGHLIGHTS ──────────────────────────────────── */}
      <section id="highlights" className="px-5 pt-10 pb-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-8">
            <h2 className="heading-lg">Selected highlights</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <AnimatedSection key={h.title} delay={i * 0.06}>
                <div className="card p-6 h-full" style={{ boxShadow: "var(--shadow-sm)" }}>
                  <p className="label mb-3">{h.label}</p>
                  <h3 className="text-sm font-semibold mb-2 leading-snug" style={{ color: "var(--text-1)" }}>{h.title}</h3>
                  <p className="body-sm leading-relaxed select-text">{h.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────── */}
      <section id="stats" className="px-5 pb-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div
              className="rounded-xl p-10"
              style={{ background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                <StatCounter end={2} prefix="#" label="In Nation, Public Forum" description="Public Forum Debate, 2025" />
                <StatCounter end={400} suffix="+" label="Researchers in Peer Pool" description="NeurIPS & IJCNLP-AACL spotlight" />
                <StatCounter end={550} suffix="+" label="Tutoring Hours" description="Across 3 programs" />
                <StatCounter end={80} suffix="+" label="Math Club Members" description="EHS Math Club President" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── AREAS ─────────────────────────────────────── */}
      <section id="areas" className="px-5 pb-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-10">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <h2 className="heading-xl">Areas of focus</h2>
              </div>
              <Link href="/about" className="btn btn-ghost text-sm" style={{ color: "var(--text-2)" }}>
                Full background
              </Link>
            </div>
          </AnimatedSection>
          <div className="space-y-3">
            {areas.map((area, i) => (
              <AnimatedSection key={area.title} delay={i * 0.06}>
                <div
                  className="card p-7 flex flex-col md:flex-row md:items-center gap-6"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="heading-md mb-2">{area.title}</h3>
                    <p className="body-sm leading-relaxed mb-4 max-w-2xl select-text">{area.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {area.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                  <Link
                    href={area.href}
                    className="flex-shrink-0 text-sm font-medium"
                    style={{ color: "var(--accent)" }}
                  >
                    Learn more →
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section id="cta" className="px-5 pb-28">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div
              className="rounded-xl px-8 py-14 text-center"
              style={{ background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}
            >
              <h2 className="heading-xl mb-4">Get in touch</h2>
              <p className="body-lg max-w-md mx-auto mb-8 select-text">
                Open to research collaborations, academic inquiries, and professional conversations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn btn-primary px-7 py-3">Contact</Link>
                <Link href="/resume" className="btn btn-secondary px-7 py-3">Resume</Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
