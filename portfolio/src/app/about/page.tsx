"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";
import SectionNav from "@/components/SectionNav";
import PageShell from "@/components/PageShell";
import Link from "next/link";

type Category = "All" | "Research" | "Mathematics" | "Debate" | "Development" | "Leadership";

interface Milestone {
  year: string;
  category: Category;
  color: string;
  title: string;
  summary: string;
  desc: string;
  tags: string[];
  achievements?: string[];
  latest?: boolean;
}

const CATEGORIES: Category[] = ["All", "Research", "Mathematics", "Debate", "Development", "Leadership"];

const CATEGORY_COLORS: Record<Category, string> = {
  All: "#2563EB",
  Research: "#2563EB",
  Mathematics: "#7C3AED",
  Debate: "#059669",
  Development: "#D97706",
  Leadership: "#DC2626",
};

const milestones: Milestone[] = [
  {
    year: "2020",
    category: "Mathematics",
    color: "#7C3AED",
    title: "Competition Mathematics Begins",
    summary: "Perfect NOETIC & MOEMS scores nationally",
    desc: "Started competing in national mathematics competitions, earning perfect scores on NOETIC and MOEMS. Developed a deep appreciation for elegant proof and mathematical structure.",
    tags: ["NOETIC", "MOEMS", "AMC"],
    achievements: ["Perfect NOETIC score", "Perfect MOEMS score", "First national competitions"],
  },
  {
    year: "2021",
    category: "Leadership",
    color: "#DC2626",
    title: "KoolMath Institute — Lead Volunteer",
    summary: "200+ hours tutoring 100+ students to national recognition",
    desc: "Began tutoring students at KoolMath Institute, accumulating 200+ hours helping over 100 students earn national recognition in competition mathematics.",
    tags: ["Tutoring", "Leadership", "Competition Math"],
    achievements: ["200+ tutoring hours", "100+ students reached", "National-level results"],
  },
  {
    year: "2022",
    category: "Development",
    color: "#D97706",
    title: "Web Development & DebateSim",
    summary: "Built DebateSim — AI-powered legislative analysis platform",
    desc: "Started building full-stack web applications and conceptualized DebateSim, an AI-powered platform for debate training and legislative analysis. Now live at debatesim.us.",
    tags: ["Python", "OpenAI API", "LangChain", "HTML/CSS"],
    achievements: ["Launched DebateSim", "First production AI app", "debatesim.us live"],
  },
  {
    year: "2023",
    category: "Mathematics",
    color: "#7C3AED",
    title: "Math Club President & MATHCOUNTS States",
    summary: "Elected President — first student from team to reach States",
    desc: "Elected EHS Math Club President, leading 80+ students. Became the first student from the prior team to qualify to MATHCOUNTS States. Started as Lead Instructor at Fallon MATHCOUNTS.",
    tags: ["MATHCOUNTS", "Leadership", "AMC"],
    achievements: ["EHS Math Club President", "MATHCOUNTS States qualifier", "150+ tutoring hours at Fallon"],
  },
  {
    year: "2023",
    category: "Leadership",
    color: "#DC2626",
    title: "Fallon MATHCOUNTS — Lead Instructor",
    summary: "150+ hours — designed curriculum for 200+ students",
    desc: "Joined as Lead Instructor at Fallon MATHCOUNTS, designing curriculum for 200+ students and conducting 50+ advanced mathematics sessions. Helped multiple students qualify to States.",
    tags: ["Curriculum Design", "Instruction", "MATHCOUNTS"],
    achievements: ["150+ tutoring hours", "200+ students reached", "Multiple States qualifiers"],
  },
  {
    year: "2024",
    category: "Mathematics",
    color: "#7C3AED",
    title: "AIME Qualifier",
    summary: "Top 5% nationally on the AMC — AIME Honor Roll",
    desc: "Qualified for the AIME (Invitational Mathematics Examination), placing in the top 5% of AMC participants nationally. Recognized on the AIME Honor Roll.",
    tags: ["AIME", "AMC 10/12", "Honor Roll"],
    achievements: ["AMC top 5% nationally", "AIME qualification", "AIME Honor Roll"],
  },
  {
    year: "2024",
    category: "Debate",
    color: "#059669",
    title: "Competitive Debate — National Ascent",
    summary: "Entered PF Debate — climbed to national ranking rapidly",
    desc: "Entered competitive Public Forum Debate, rapidly advancing through national rankings. Developed extensive foreign policy and defense expertise. Earned Git & GitHub certification.",
    tags: ["Public Forum", "Foreign Policy", "Debate Research"],
    achievements: ["Entered national competition circuit", "Git & GitHub Certified", "Varsity Badminton Captain"],
  },
  {
    year: "2025",
    category: "Research",
    color: "#2563EB",
    title: "NeurIPS & IJCNLP-AACL Spotlight",
    summary: "Two papers recognized among 400+ researchers worldwide",
    desc: "AI research spotlighted at NeurIPS and IJCNLP-AACL — recognized among submissions from 400+ researchers and PhD professionals. WOLF and ZEDD cited by UPenn, Microsoft, and MBZUAI.",
    tags: ["NeurIPS", "IJCNLP-AACL", "LLM Research", "arXiv"],
    achievements: ["2 papers spotlighted", "Cited by UPenn, Microsoft, MBZUAI", "WOLF & ZEDD published"],
    latest: true,
  },
  {
    year: "2025",
    category: "Debate",
    color: "#059669",
    title: "National Sunvite Champion — 2nd in Nation",
    summary: "Ranked 2nd nationally in Public Forum Debate",
    desc: "Ranked 2nd in the Nation and 2nd in California in Public Forum Debate. Won the National Sunvite Championship. Recognized with the All American Academic Award.",
    tags: ["National Champion", "PF Debate", "All American Academic"],
    achievements: ["2nd in Nation (PF Debate)", "National Sunvite Champion", "All American Academic Award"],
    latest: true,
  },
  {
    year: "2025",
    category: "Leadership",
    color: "#DC2626",
    title: "Summer Math Bootcamp — Founder",
    summary: "Founded bootcamp — $2,000+ raised, 30+ students",
    desc: "Founded and ran a summer mathematics bootcamp for 30+ students, raising over $2,000 for the EHS Math Club. Designed 15+ comprehensive lessons and practice systems from scratch.",
    tags: ["Curriculum Design", "Fundraising", "Leadership"],
    achievements: ["$2,000+ raised", "30+ students served", "15+ lessons designed"],
    latest: true,
  },
];

const skills = [
  { name: "Python / PyTorch", level: 90 },
  { name: "LangChain / HuggingFace", level: 85 },
  { name: "AI Research & Experiment Design", level: 88 },
  { name: "Mathematical Reasoning", level: 93 },
  { name: "Java", level: 76 },
  { name: "HTML / CSS / Web Dev", level: 82 },
  { name: "LaTeX", level: 80 },
  { name: "Public Speaking & Debate", level: 95 },
];

const NAV_SECTIONS = [
  { id: "about-hero", label: "About" },
  { id: "timeline", label: "Timeline" },
  { id: "skills", label: "Skills" },
];

export default function AboutPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [focusedId, setFocusedId] = useState<string | null>(null);

  const filtered = milestones.filter((m) => activeCategory === "All" || m.category === activeCategory);

  const handleFocus = (id: string) => {
    setFocusedId((prev) => (prev === id ? null : id));
  };

  return (
    <PageShell>
      <SectionNav sections={NAV_SECTIONS} />

      <div>

        {/* ── HEADER ── */}
        <section id="about-hero">
          <AnimatedSection className="mb-16">
            <p className="label mb-3">About</p>
            <h1 className="heading-display mb-6">
              About <span className="gradient-text">Mrinal</span>
            </h1>
            <p className="body-lg max-w-xl">
              AI researcher, mathematician, debater, and developer.
            </p>
          </AnimatedSection>

          {/* Bio + Profile */}
          <AnimatedSection className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="card p-8 text-center" style={{ boxShadow: "var(--shadow-sm)" }}>
                  <div
                    className="w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center text-4xl font-black"
                    style={{ background: "var(--accent-subtle)", border: "2px solid var(--accent-border)", color: "var(--accent)" }}
                  >M</div>
                  <h2 className="heading-md mb-1">Mrinal Agarwal</h2>
                  <p className="body-sm mb-1" style={{ color: "var(--accent)" }}>High School Junior</p>
                  <p className="body-sm mb-5">Emerald High School · Dublin, CA · Class of 2027</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[{ val: "3.96", label: "UW GPA" }, { val: "4.56", label: "W GPA" }].map(({ val, label }) => (
                      <div key={label} className="rounded-lg p-3" style={{ background: "var(--bg-subtle)" }}>
                        <div className="font-bold" style={{ color: "var(--text-1)" }}>{val}</div>
                        <div className="body-sm">{label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2.5" style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}>
                    <a href="mailto:smmrinal2009@gmail.com" className="flex items-center gap-2 text-xs transition-colors hover:text-[var(--accent)]" style={{ color: "var(--text-2)" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      smmrinal2009@gmail.com
                    </a>
                    <a href="https://www.linkedin.com/in/mrinal-agarwal-71017535a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs transition-colors hover:text-[var(--accent)]" style={{ color: "var(--text-2)" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 space-y-5">
                <div className="card p-7" style={{ boxShadow: "var(--shadow-sm)" }}>
                  <h3 className="heading-md mb-4">Who I Am</h3>
                  <div className="space-y-4 body-md">
                    <p>I&apos;m Mrinal Agarwal, a junior at Emerald High School in Dublin, California, working at the intersection of AI research, mathematics, software development, and debate.</p>
                    <p>My research on LLM deception and embedded drift detection has been spotlighted at NeurIPS and IJCNLP-AACL — recognized among submissions from 400+ researchers and PhD professionals. My work is cited by the University of Pennsylvania, Microsoft, and MBZUAI.</p>
                    <p>In mathematics, I hold an AIME qualification and top 5% national AMC ranking, and I lead the EHS Math Club with 80+ members. In debate, I&apos;ve reached 2nd in the Nation in Public Forum and won the National Sunvite Championship.</p>
                  </div>
                </div>
                <div className="card p-7" style={{ boxShadow: "var(--shadow-sm)" }}>
                  <h3 className="heading-md mb-3">What I&apos;m Building Toward</h3>
                  <p className="body-md">I&apos;m pursuing a degree in Computer Science or Mathematics at a top research university — and continuing work at the frontier of AI safety and alignment. Long-term, I aim to lead research that makes advanced AI systems more transparent and robustly aligned, while building educational technology that democratizes access to excellent instruction.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection className="mb-20">
            <div className="card p-10" style={{ boxShadow: "var(--shadow-sm)" }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <StatCounter end={2} label="Research Papers" description="NeurIPS · IJCNLP-AACL" />
                <StatCounter end={2} prefix="#" label="In Nation, Public Forum" description="Public Forum Debate, 2025" />
                <StatCounter end={550} suffix="+" label="Tutoring Hours" description="Across all programs" />
                <StatCounter end={2000} suffix="+" prefix="$" label="Raised for Math Club" description="Bootcamp & events" />
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* ── EXPLORABLE TIMELINE ── */}
        <section id="timeline" className="mb-20">
          <AnimatedSection className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
              <div>
                <p className="label mb-2">Journey</p>
                <h2 className="heading-xl">My Timeline</h2>
                <p className="body-sm mt-2" style={{ color: "var(--text-3)" }}>
                  Filter by area · Click any milestone to explore
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              const color = CATEGORY_COLORS[cat];
              return (
                <motion.button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setFocusedId(null); }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                  style={{
                    background: isActive ? `${color}15` : "var(--surface)",
                    border: `1px solid ${isActive ? color + "40" : "var(--border)"}`,
                    color: isActive ? color : "var(--text-2)",
                    boxShadow: isActive ? "var(--shadow-sm)" : "none",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="category-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: `${color}10`, border: `1px solid ${color}35` }}
                      transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Desktop zigzag */}
            <div className="hidden md:block relative">
              <div
                className="absolute left-1/2 top-0 bottom-0 w-px"
                style={{ background: "var(--border)", transform: "translateX(-50%)" }}
              />

              <motion.div layout className="space-y-6">
                <AnimatePresence mode="popLayout">
                  {filtered.map((item, i) => {
                    const id = `${item.year}-${item.title}`;
                    const isFocused = focusedId === id;
                    const isLeft = i % 2 === 0;
                    const isAnyFocused = focusedId !== null;

                    return (
                      <motion.div
                        key={id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: isAnyFocused && !isFocused ? 0.45 : 1,
                          y: 0,
                          scale: isFocused ? 1 : isAnyFocused ? 0.99 : 1,
                        }}
                        exit={{ opacity: 0, y: -10, scale: 0.97 }}
                        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                        className="relative flex flex-row items-start gap-0"
                        onClick={() => handleFocus(id)}
                      >
                        <div className="w-[calc(50%-30px)] pr-8">
                          {isLeft && (
                            <MilestoneCard item={item} isFocused={isFocused} accentSide="right" />
                          )}
                        </div>

                        <div className="w-[60px] flex justify-center items-start pt-6 flex-shrink-0 relative z-10">
                          <TimelineDot item={item} isFocused={isFocused} index={i} />
                        </div>

                        <div className="w-[calc(50%-30px)] pl-8">
                          {!isLeft && (
                            <MilestoneCard item={item} isFocused={isFocused} accentSide="left" />
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {filtered.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16 body-md"
                    style={{ color: "var(--text-3)" }}
                  >
                    No milestones in this category yet.
                  </motion.div>
                )}
              </motion.div>
            </div>

            {/* Mobile — single column with dots on the left */}
            <div className="md:hidden relative">
              <div
                className="absolute left-[7px] top-0 bottom-0 w-px"
                style={{ background: "var(--border)" }}
              />

              <motion.div layout className="space-y-6">
                <AnimatePresence mode="popLayout">
                  {filtered.map((item, i) => {
                    const id = `${item.year}-${item.title}`;
                    const isFocused = focusedId === id;
                    const isAnyFocused = focusedId !== null;

                    return (
                      <motion.div
                        key={id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: isAnyFocused && !isFocused ? 0.45 : 1,
                          y: 0,
                          scale: isFocused ? 1 : isAnyFocused ? 0.99 : 1,
                        }}
                        exit={{ opacity: 0, y: -10, scale: 0.97 }}
                        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                        className="relative flex gap-3 items-start"
                        onClick={() => handleFocus(id)}
                      >
                        <div className="flex-shrink-0 w-[15px] flex justify-center pt-6 relative z-10">
                          <TimelineDot item={item} isFocused={isFocused} index={i} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <MilestoneCard item={item} isFocused={isFocused} accentSide="left" />
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {filtered.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16 body-md"
                    style={{ color: "var(--text-3)" }}
                  >
                    No milestones in this category yet.
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>

          {/* Hint */}
          {focusedId && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-center"
            >
              <button
                onClick={() => setFocusedId(null)}
                className="btn btn-ghost text-xs"
                style={{ color: "var(--text-3)" }}
              >
                ← Show all milestones
              </button>
            </motion.div>
          )}
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="mb-16">
          <AnimatedSection className="mb-8">
            <p className="label mb-2">Technical Proficiency</p>
            <h2 className="heading-xl">Skills</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, i) => (
              <AnimatedSection key={skill.name} delay={i * 0.05}>
                <div className="card p-5" style={{ boxShadow: "var(--shadow-sm)" }}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium" style={{ color: "var(--text-1)" }}>{skill.name}</span>
                    <span className="body-sm font-semibold" style={{ color: "var(--accent)" }}>{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: i * 0.05, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <AnimatedSection>
          <div className="card p-10 text-center" style={{ boxShadow: "var(--shadow-sm)" }}>
            <h3 className="heading-lg mb-3">Interested in Collaborating?</h3>
            <p className="body-md max-w-md mx-auto mb-7">Research collaborations, academic opportunities, or just a conversation — always open to connecting with motivated people.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/contact" className="btn btn-primary px-5 py-2.5">Get in Touch</Link>
              <Link href="/projects" className="btn btn-secondary px-5 py-2.5">View Projects</Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </PageShell>
  );
}

function TimelineDot({ item, isFocused, index }: { item: Milestone; isFocused: boolean; index: number }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 380, damping: 24, delay: index * 0.05 }}
      className={item.latest ? "tl-dot-pulse" : ""}
      style={{
        width: isFocused ? 18 : 13,
        height: isFocused ? 18 : 13,
        borderRadius: "50%",
        background: item.color,
        border: "3px solid var(--surface)",
        boxShadow: isFocused ? `0 0 0 3px ${item.color}` : `0 0 0 2px ${item.color}50`,
        transition: "width 0.25s, height 0.25s, box-shadow 0.25s",
        flexShrink: 0,
      }}
    />
  );
}

function MilestoneCard({ item, isFocused, accentSide }: {
  item: Milestone;
  isFocused: boolean;
  accentSide: "left" | "right";
}) {
  return (
    <motion.div
      layout
      whileHover={!isFocused ? { y: -2 } : {}}
      className="card cursor-pointer select-none mb-0 text-left"
      style={{
        boxShadow: isFocused ? "var(--shadow-md)" : "var(--shadow-sm)",
        borderColor: isFocused ? `${item.color}50` : "var(--border)",
        borderLeftWidth: isFocused && accentSide === "left" ? 3 : 1,
        borderRightWidth: isFocused && accentSide === "right" ? 3 : 1,
        borderLeftColor: isFocused && accentSide === "left" ? item.color : undefined,
        borderRightColor: isFocused && accentSide === "right" ? item.color : undefined,
        transition: "border-color 0.25s, box-shadow 0.25s",
      }}
    >
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2 justify-start">
          <span
            className="text-xs font-bold px-2 py-0.5 rounded"
            style={{ background: `${item.color}15`, color: item.color }}
          >
            {item.year}
          </span>
          <span
            className="text-xs font-medium px-2 py-0.5 rounded"
            style={{ background: `${item.color}10`, color: item.color, border: `1px solid ${item.color}25` }}
          >
            {item.category}
          </span>
          {item.latest && (
            <span className="text-xs font-medium px-2 py-0.5 rounded" style={{ background: "rgba(37,99,235,0.08)", color: "var(--accent)", border: "1px solid rgba(37,99,235,0.2)" }}>
              Present
            </span>
          )}
        </div>

        <h3 className="text-sm font-semibold mb-1 leading-snug" style={{ color: "var(--text-1)" }}>
          {item.title}
        </h3>
        <p className="body-sm leading-relaxed" style={{ color: "var(--text-3)" }}>{item.summary}</p>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {isFocused && (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div className="mt-4 pt-4" style={{ borderTop: `1px solid ${item.color}20` }}>
                <p className="body-sm leading-relaxed mb-4">{item.desc}</p>
                {item.achievements && (
                  <ul className="space-y-1.5 mb-4 text-left">
                    {item.achievements.map((a) => (
                      <li key={a} className="body-sm flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: item.color }} />
                        {a}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-1.5 justify-start">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag" style={{ borderColor: `${item.color}25`, color: item.color, background: `${item.color}08` }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand hint */}
        {!isFocused && (
          <div
            className="mt-2 flex items-center gap-1 text-xs justify-start"
            style={{ color: "var(--text-3)" }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
            tap to expand
          </div>
        )}
      </div>
    </motion.div>
  );
}
