"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import MagneticButton from "@/components/MagneticButton";
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
    emoji: "🔬",
    label: "AI Research",
    title: "NeurIPS & IJCNLP-AACL Spotlight",
    desc: "Papers recognized among submissions from 400+ researchers and PhD professionals. Cited by UPenn, Microsoft, and MBZUAI.",
    color: "#2563EB",
  },
  {
    emoji: "🏆",
    label: "National Debate",
    title: "Ranked 2nd in the Nation",
    desc: "Public Forum Debate, 2025. National Sunvite Champion. Recognized in California and nationally.",
    color: "#7C3AED",
  },
  {
    emoji: "∑",
    label: "Mathematics",
    title: "AIME Qualifier — AMC Top 5%",
    desc: "Perfect NOETIC & MOEMS scores. First from team to reach MATHCOUNTS States. EHS Math Club President.",
    color: "#059669",
  },
  {
    emoji: "💻",
    label: "Development",
    title: "DebateSim & MathSim",
    desc: "Two live AI-powered platforms — legislation analysis for debate and an adaptive math tutoring engine.",
    color: "#D97706",
  },
];

const areas = [
  {
    number: "01",
    title: "AI Safety Research",
    desc: "Investigating LLM deception, zero-shot drift detection, and behavioral robustness in multi-agent systems. Two papers spotlighted at NeurIPS and IJCNLP-AACL — cited by leading research institutions.",
    tags: ["PyTorch", "LangChain", "HuggingFace", "Python"],
    href: "/projects",
    color: "#2563EB",
  },
  {
    number: "02",
    title: "Competitive Mathematics",
    desc: "AIME qualifier, AMC top 5% nationally. Leads 80+ students as EHS Math Club President. Raised $2,000+ through a summer bootcamp, with 550+ total tutoring hours across three programs.",
    tags: ["AMC 10/12", "AIME", "MATHCOUNTS", "NOETIC"],
    href: "/about",
    color: "#7C3AED",
  },
  {
    number: "03",
    title: "National Debate",
    desc: "2nd in the Nation in Public Forum Debate. National Sunvite Champion 2025. Deep expertise in foreign policy analysis, evidence construction, and high-stakes public speaking.",
    tags: ["Public Forum", "Policy Research", "Foreign Affairs"],
    href: "/about",
    color: "#059669",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div style={{ background: "var(--bg-base)" }}>
      <SectionNav sections={NAV_SECTIONS} />

      {/* ── HERO ────────────────────────────────────────── */}
      <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <BackgroundCanvas className="w-full h-full" />
        </div>
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 55% 65% at 50% 50%, transparent 30%, var(--surface) 90%)" }}
        />
        {/* Ambient glow */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            width: 600, height: 360, borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(37,99,235,0.06) 0%, transparent 70%)",
            top: "50%", left: "50%", transform: "translate(-50%, -55%)",
          }}
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-20 text-center px-5 max-w-4xl mx-auto">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-10"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 100, padding: "6px 16px", fontSize: 12, fontWeight: 500, color: "var(--text-2)", boxShadow: "var(--shadow-sm)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#16A34A" }} />
            Available for research · Emerald High School · Dublin, CA · Class of 2027
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="heading-display mb-5"
            style={{ lineHeight: 1.04 }}
          >
            Mrinal{" "}
            <span className="gradient-text">Agarwal</span>
          </motion.h1>

          {/* Role strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 mb-7"
          >
            {[
              { label: "AI Researcher", color: "#2563EB" },
              { label: "Mathematician", color: "#7C3AED" },
              { label: "Developer", color: "#D97706" },
              { label: "National Debater", color: "#059669" },
            ].map(({ label, color }, i, arr) => (
              <span key={label} className="flex items-center gap-4">
                <span style={{ fontSize: 14, fontWeight: 500, color }}>{label}</span>
                {i < arr.length - 1 && <span style={{ color: "var(--border)", fontSize: 20, fontWeight: 200, lineHeight: 1 }}>·</span>}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.46 }}
            className="body-lg max-w-xl mx-auto mb-11"
          >
            High school junior researching LLM safety and multi-agent AI systems.
            Nationally recognized in mathematics, debate, and applied AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.56 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <MagneticButton>
              <Link href="/projects" className="btn btn-primary px-6 py-3 text-sm">
                Explore My Work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/about" className="btn btn-secondary px-6 py-3 text-sm">My Story</Link>
            </MagneticButton>
            <Link href="/resume" className="btn btn-ghost px-5 py-3 text-sm" style={{ color: "var(--text-2)" }}>Resume ↗</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{ color: "var(--text-3)", display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}
            >
              <span style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>Scroll</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── HIGHLIGHTS ──────────────────────────────────── */}
      <section id="highlights" className="px-5 pt-10 pb-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-8">
            <p className="label mb-2">At a glance</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <AnimatedSection key={h.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="card-lifted p-6 h-full"
                  style={{
                    borderTop: `2px solid ${h.color}`,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                >
                  <span className="text-2xl mb-3 block">{h.emoji}</span>
                  <div className="text-xs font-semibold mb-2" style={{ color: h.color, letterSpacing: "0.06em", textTransform: "uppercase" }}>{h.label}</div>
                  <h3 className="text-sm font-semibold mb-2 leading-snug" style={{ color: "var(--text-1)" }}>{h.title}</h3>
                  <p className="body-sm leading-relaxed">{h.desc}</p>
                </motion.div>
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
              className="rounded-2xl p-10 relative overflow-hidden"
              style={{ background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, #2563EB 0%, #7C3AED 40%, #059669 70%, transparent 100%)" }} />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                <StatCounter end={2} prefix="#" label="In Nation — Debate" description="Public Forum, 2025" />
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
                <p className="label mb-2">Areas of Focus</p>
                <h2 className="heading-xl">What I Work On</h2>
              </div>
              <Link href="/about" className="btn btn-ghost text-sm" style={{ color: "var(--text-2)" }}>Full Story →</Link>
            </div>
          </AnimatedSection>
          <div className="space-y-3">
            {areas.map((area, i) => (
              <AnimatedSection key={area.title} delay={i * 0.09}>
                <motion.div
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                  className="card p-7 flex flex-col md:flex-row md:items-center gap-6 group"
                  style={{ boxShadow: "var(--shadow-sm)", cursor: "default" }}
                  onHoverStart={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${area.color}35`; }}
                  onHoverEnd={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
                >
                  <div
                    className="text-5xl font-black tracking-tighter flex-shrink-0 select-none hidden md:block"
                    style={{ color: `${area.color}14`, minWidth: 56, fontVariantNumeric: "tabular-nums" }}
                  >
                    {area.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="heading-md mb-2">{area.title}</h3>
                    <p className="body-sm leading-relaxed mb-4 max-w-2xl">{area.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {area.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                  <Link
                    href={area.href}
                    className="flex-shrink-0 text-sm font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                    style={{ color: area.color }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Explore
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </motion.div>
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
              className="relative rounded-2xl px-8 py-16 text-center overflow-hidden"
              style={{ background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "var(--shadow-md)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--accent) 40%, #7C3AED 60%, transparent)" }} />
              <div className="absolute pointer-events-none" style={{ width: 500, height: 250, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(37,99,235,0.04) 0%, transparent 70%)", top: 0, left: "50%", transform: "translateX(-50%)" }} />
              <div className="relative z-10">
                <h2 className="heading-xl mb-4">Let&apos;s <span className="gradient-text">Connect</span></h2>
                <p className="body-lg max-w-md mx-auto mb-10">
                  Research collaborations, academic opportunities, internships, or just a conversation — always glad to connect.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <MagneticButton><Link href="/contact" className="btn btn-primary px-7 py-3">Get in Touch</Link></MagneticButton>
                  <MagneticButton><Link href="/resume" className="btn btn-secondary px-7 py-3">View Resume</Link></MagneticButton>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
