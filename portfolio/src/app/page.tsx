"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import MagneticButton from "@/components/MagneticButton";

const highlights = [
  {
    emoji: "🔬",
    label: "AI Research",
    title: "NeurIPS & IJCNLP-AACL Spotlight",
    desc: "Papers recognized among submissions from 400+ researchers and PhD professionals. Cited by UPenn, Microsoft, and MBZUAI.",
    accent: "#2563EB",
    accentBg: "rgba(37,99,235,0.06)",
  },
  {
    emoji: "🏆",
    label: "National Debate",
    title: "Ranked 2nd in the Nation",
    desc: "Public Forum Debate, 2025. National Sunvite Champion. Recognized in California and nationally.",
    accent: "#7C3AED",
    accentBg: "rgba(124,58,237,0.06)",
  },
  {
    emoji: "∑",
    label: "Mathematics",
    title: "AIME Qualifier — AMC Top 5%",
    desc: "Perfect NOETIC & MOEMS scores. First from team to reach MATHCOUNTS States. EHS Math Club President.",
    accent: "#059669",
    accentBg: "rgba(5,150,105,0.06)",
  },
  {
    emoji: "💻",
    label: "Development",
    title: "DebateSim & MathSim",
    desc: "Two live AI-powered platforms — a legislation analysis tool and an adaptive math tutoring system.",
    accent: "#D97706",
    accentBg: "rgba(217,119,6,0.06)",
  },
];

const areas = [
  {
    title: "AI Safety Research",
    desc: "Investigating LLM deception, zero-shot drift detection, and behavioral robustness in multi-agent systems. Two papers spotlighted at top venues — cited by leading research institutions.",
    tags: ["PyTorch", "LangChain", "HuggingFace", "Python"],
    href: "/projects",
    accent: "#2563EB",
    number: "01",
  },
  {
    title: "Competitive Mathematics",
    desc: "AIME qualifier and AMC top 5%. Leads 80+ students as EHS Math Club President. Raised $2,000+ through a summer bootcamp and 550+ tutoring hours across three programs.",
    tags: ["AMC 10/12", "AIME", "MATHCOUNTS", "NOETIC"],
    href: "/about",
    accent: "#7C3AED",
    number: "02",
  },
  {
    title: "Debate & Leadership",
    desc: "2nd in the Nation, Public Forum Debate. National Sunvite Champion 2025. Expertise in foreign policy analysis, evidence construction, and high-stakes public speaking.",
    tags: ["Public Forum", "Policy Research", "Foreign Affairs"],
    href: "/about",
    accent: "#059669",
    number: "03",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <div style={{ background: "var(--bg-base)" }}>

      {/* ── HERO ──────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Canvas constellation — absolute fill */}
        <div className="absolute inset-0 z-0" style={{ opacity: 0.9 }}>
          <BackgroundCanvas className="w-full h-full" />
        </div>

        {/* Soft radial gradient overlay to focus the eye on center content */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 70% at 50% 50%, transparent 30%, var(--surface) 88%)",
          }}
        />

        {/* Subtle ambient glow behind headline */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            width: 560,
            height: 340,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -55%)",
          }}
        />

        {/* Hero content */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-20 text-center px-5 max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-flex items-center gap-2 mb-10"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 100,
              padding: "6px 14px",
              fontSize: 12,
              fontWeight: 500,
              color: "var(--text-2)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#16A34A" }} />
            Available for research · Emerald High School · Dublin, CA
          </motion.div>

          {/* Name — cinematic scale */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="heading-display mb-6" style={{ lineHeight: 1.04 }}>
              Mrinal{" "}
              <span className="gradient-text">Agarwal</span>
            </h1>
          </motion.div>

          {/* Roles with dividers */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="flex items-center justify-center flex-wrap gap-x-3 gap-y-2 mb-7"
            style={{ color: "var(--text-2)", fontSize: 14, fontWeight: 500 }}
          >
            {["AI Researcher", "Mathematician", "Developer", "National Debater"].map((role, i, arr) => (
              <span key={role} className="flex items-center gap-3">
                <span>{role}</span>
                {i < arr.length - 1 && (
                  <span style={{ color: "var(--border)", fontSize: 18, fontWeight: 200 }}>·</span>
                )}
              </span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48 }}
            className="body-lg max-w-xl mx-auto mb-11"
          >
            High school junior researching LLM deception and multi-agent AI safety.
            Nationally recognized in mathematics, debate, and applied AI.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.58 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <MagneticButton>
              <Link href="/projects" className="btn btn-primary px-6 py-3 text-sm">
                View My Work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/about" className="btn btn-secondary px-6 py-3 text-sm">
                About Me
              </Link>
            </MagneticButton>
            <Link href="/resume" className="btn btn-ghost px-5 py-3 text-sm">
              Resume
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              style={{ color: "var(--text-3)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}
            >
              <span style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500 }}>Scroll</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── HIGHLIGHTS ──────────────────────────────────── */}
      <section className="px-5 pt-10 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <AnimatedSection key={h.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="card-lifted p-6 group cursor-default"
                  style={{ background: `linear-gradient(145deg, var(--surface) 0%, ${h.accentBg} 100%)` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-2xl">{h.emoji}</span>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: h.accent,
                        background: `${h.accent}12`,
                        border: `1px solid ${h.accent}25`,
                        borderRadius: 5,
                        padding: "2px 7px",
                      }}
                    >
                      {h.label}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold mb-2 leading-snug" style={{ color: "var(--text-1)" }}>
                    {h.title}
                  </h3>
                  <p className="body-sm leading-relaxed">{h.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────── */}
      <section className="px-5 pb-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div
              className="rounded-2xl p-10 relative overflow-hidden"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {/* Subtle accent stripe */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: "linear-gradient(90deg, var(--accent) 0%, #7C3AED 50%, transparent 100%)" }}
              />
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
      <section className="px-5 pb-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="mb-12">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <p className="label mb-2">Areas of Focus</p>
                <h2 className="heading-xl">What I Work On</h2>
              </div>
              <Link href="/about" className="btn btn-ghost text-sm">
                Full Story →
              </Link>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {areas.map((area, i) => (
              <AnimatedSection key={area.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="card p-7 group flex flex-col md:flex-row md:items-center gap-6"
                  style={{
                    boxShadow: "var(--shadow-sm)",
                    cursor: "default",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onHoverStart={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${area.accent}40`;
                  }}
                  onHoverEnd={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  }}
                >
                  {/* Number */}
                  <div
                    className="text-4xl font-black tracking-tighter flex-shrink-0 select-none"
                    style={{
                      color: `${area.accent}18`,
                      fontVariantNumeric: "tabular-nums",
                      minWidth: 56,
                    }}
                  >
                    {area.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="heading-md mb-2">{area.title}</h3>
                    <p className="body-sm leading-relaxed mb-4 max-w-xl">{area.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {area.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <Link
                    href={area.href}
                    className="flex-shrink-0 flex items-center gap-1.5 text-sm font-medium transition-all duration-200 group-hover:gap-2.5"
                    style={{ color: area.accent }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Explore
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="px-5 pb-28">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div
              className="relative rounded-2xl px-8 py-16 text-center overflow-hidden"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              {/* Accent gradient top */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent 0%, var(--accent) 40%, #7C3AED 60%, transparent 100%)" }}
              />
              {/* Soft glow */}
              <div
                className="absolute pointer-events-none"
                style={{
                  width: 400, height: 200, borderRadius: "50%",
                  background: "radial-gradient(ellipse, rgba(37,99,235,0.05) 0%, transparent 70%)",
                  top: 0, left: "50%", transform: "translateX(-50%)",
                }}
              />

              <div className="relative z-10">
                <h2 className="heading-xl mb-4">
                  Let&apos;s <span className="gradient-text">Connect</span>
                </h2>
                <p className="body-lg max-w-lg mx-auto mb-10">
                  Research collaborations, academic opportunities, internships, or just a conversation — I&apos;m always glad to connect with motivated people.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <MagneticButton>
                    <Link href="/contact" className="btn btn-primary px-7 py-3">
                      Get in Touch
                    </Link>
                  </MagneticButton>
                  <MagneticButton>
                    <Link href="/resume" className="btn btn-secondary px-7 py-3">
                      View Resume
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
