"use client";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";
import Link from "next/link";

const timeline = [
  { year: "2020", title: "Competition Math Begins", desc: "Started competing nationally in NOETIC and MOEMS, earning perfect scores. Developed a deep love for mathematical proof and elegant problem-solving.", tags: ["NOETIC", "MOEMS"] },
  { year: "2021", title: "KoolMath Institute — Lead Volunteer", desc: "Began tutoring 100+ students in competition mathematics. Accumulated 200+ hours helping students earn national recognition.", tags: ["Tutoring", "Competition Math"] },
  { year: "2022", title: "Web Development & DebateSim", desc: "Started building full-stack web applications. Conceptualized DebateSim, an AI-powered platform for debate training and legislative analysis.", tags: ["Python", "HTML/CSS", "AI Tools"] },
  { year: "2023", title: "Math Club President & MATHCOUNTS States", desc: "Elected EHS Math Club President. Became the first student from the prior team to qualify to MATHCOUNTS States. Started tutoring at Fallon MATHCOUNTS.", tags: ["MATHCOUNTS", "Leadership"] },
  { year: "2024", title: "AIME Qualifier & Debate", desc: "Qualified for AIME (top 5% nationally). Entered competitive Public Forum Debate. Earned Git & GitHub certification. Became Varsity Badminton Captain.", tags: ["AIME", "Debate", "Certification"] },
  { year: "2025", title: "NeurIPS Spotlight & National Champion", desc: "AI research spotlighted at NeurIPS and IJCNLP-AACL — top 0.1% among 400+ PhD researchers. Ranked 2nd in Nation in Debate. National Sunvite Champion. Founded Summer Math Bootcamp. Earned AP Scholar Award.", tags: ["NeurIPS", "Research", "National Champion", "AP Scholar"] },
];

const interests = [
  { icon: "🧠", title: "Artificial Intelligence Research", desc: "Fascinated by the emergent behaviors of large language models — particularly deceptive alignment and robustness in multi-agent systems. I want to make AI safer and more interpretable." },
  { icon: "∑", title: "Higher Mathematics", desc: "I find beauty in mathematical proof. From olympiad geometry to real analysis, mathematics trains a mode of rigorous thinking I apply everywhere." },
  { icon: "🎙", title: "Debate & Public Discourse", desc: "Debate sharpened my ability to construct rigorous arguments, engage with complex foreign policy, and communicate clearly under pressure." },
  { icon: "💻", title: "Educational Technology", desc: "Technology should democratize access to quality education. DebateSim and MathSim are my attempts to scale excellent instruction to more students." },
];

const skills = [
  { name: "Python / PyTorch", level: 90 },
  { name: "LangChain / HuggingFace", level: 85 },
  { name: "AI Research & Experimentation", level: 88 },
  { name: "Mathematical Reasoning", level: 93 },
  { name: "Java", level: 76 },
  { name: "HTML / CSS / Web Dev", level: 82 },
  { name: "LaTeX", level: 80 },
  { name: "Public Speaking", level: 95 },
];

export default function AboutPage() {
  return (
    <div style={{ background: "var(--bg-base)" }} className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-5">

        {/* ── HEADER ── */}
        <AnimatedSection className="mb-16">
          <p className="label mb-3">About</p>
          <h1 className="heading-display mb-5">
            About <span className="gradient-text">Mrinal</span>
          </h1>
          <p className="body-lg max-w-xl">
            AI researcher, mathematician, debater, and developer — building at the intersection of technology and human potential.
          </p>
        </AnimatedSection>

        {/* ── BIO ── */}
        <AnimatedSection className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* Profile card */}
            <div className="lg:col-span-2">
              <div className="card p-8 text-center" style={{ boxShadow: "var(--shadow-sm)" }}>
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center text-4xl font-black"
                  style={{ background: "var(--accent-subtle)", border: "2px solid var(--accent-border)", color: "var(--accent)" }}
                >
                  M
                </div>
                <h2 className="heading-md mb-1">Mrinal Agarwal</h2>
                <p className="body-sm mb-1" style={{ color: "var(--accent)" }}>High School Junior</p>
                <p className="body-sm mb-5">Emerald High School · Dublin, CA</p>

                <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                  <div className="rounded-lg p-3" style={{ background: "var(--bg-subtle)" }}>
                    <div className="font-bold" style={{ color: "var(--text-1)" }}>3.96</div>
                    <div className="body-sm">UW GPA</div>
                  </div>
                  <div className="rounded-lg p-3" style={{ background: "var(--bg-subtle)" }}>
                    <div className="font-bold" style={{ color: "var(--text-1)" }}>4.56</div>
                    <div className="body-sm">W GPA</div>
                  </div>
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

            {/* Bio text */}
            <div className="lg:col-span-3 space-y-5">
              <div className="card p-7" style={{ boxShadow: "var(--shadow-sm)" }}>
                <h3 className="heading-md mb-4">Who I Am</h3>
                <div className="space-y-4 body-md">
                  <p>I&apos;m Mrinal Agarwal, a junior at Emerald High School in Dublin, California. I sit at the intersection of artificial intelligence research, competitive mathematics, software development, and public debate — fields that share a common thread: the pursuit of rigorous truth.</p>
                  <p>My research on large language model deception, detection, and injection robustness has been spotlighted at NeurIPS and IJCNLP-AACL, placing my work among the top 0.1% of submissions in a pool of over 400 PhD researchers and professionals. My research has been cited by the University of Pennsylvania, Microsoft, and MBZUAI.</p>
                  <p>In mathematics, I hold an AIME qualification, perfect scores on NOETIC and MOEMS, and a top 5% national AMC ranking. As EHS Math Club President, I lead 80+ students and have raised over $2,000 for math education.</p>
                  <p>In debate, I&apos;ve reached 2nd in the Nation and 2nd in California in Public Forum Debate, earned the National Sunvite Championship, and developed deep expertise in foreign policy and geopolitical analysis.</p>
                </div>
              </div>
              <div className="card p-7" style={{ boxShadow: "var(--shadow-sm)" }}>
                <h3 className="heading-md mb-3">Future Aspirations</h3>
                <p className="body-md">I aspire to pursue a degree in Computer Science or Mathematics at a top research university, and continue work at the frontier of AI safety and alignment. Long-term, I aim to lead an AI research lab focused on making advanced systems more transparent, robust, and aligned with human values — while continuing to build educational technology that scales excellent instruction to underserved communities.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ── STATS ── */}
        <AnimatedSection className="mb-16">
          <div className="card p-10" style={{ boxShadow: "var(--shadow-sm)" }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCounter end={3} label="Research Papers" description="NeurIPS · IJCNLP-AACL" />
              <StatCounter end={2} prefix="#" label="In Nation — Debate" description="Public Forum, 2025" />
              <StatCounter end={550} suffix="+" label="Tutoring Hours" description="Across all programs" />
              <StatCounter end={2000} suffix="+" prefix="$" label="Raised for Math Club" description="Bootcamp & events" />
            </div>
          </div>
        </AnimatedSection>

        {/* ── INTERESTS ── */}
        <AnimatedSection className="mb-16">
          <p className="label mb-3">Passions</p>
          <h2 className="heading-xl mb-8">What Drives Me</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {interests.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="card-lifted p-7"
                >
                  <div className="text-2xl mb-4">{item.icon}</div>
                  <h3 className="heading-md text-sm mb-2">{item.title}</h3>
                  <p className="body-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* ── SKILLS ── */}
        <AnimatedSection className="mb-16">
          <p className="label mb-3">Technical Proficiency</p>
          <h2 className="heading-xl mb-8">Skills</h2>
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
        </AnimatedSection>

        {/* ── TIMELINE ── */}
        <AnimatedSection>
          <p className="label mb-3">Journey</p>
          <h2 className="heading-xl mb-10">My Timeline</h2>
          <div className="relative pl-7">
            <div className="timeline-line" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 0.07}>
                  <div className="flex gap-5 items-start">
                    <div className="timeline-dot -ml-[3.5px] mt-0.5" />
                    <div className="flex-1 pb-2">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="label" style={{ fontSize: "10px" }}>{item.year}</span>
                        <h3 className="heading-md text-sm">{item.title}</h3>
                      </div>
                      <p className="body-sm leading-relaxed mb-3">{item.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── CTA ── */}
        <AnimatedSection className="mt-16">
          <div className="card p-10 text-center" style={{ boxShadow: "var(--shadow-sm)" }}>
            <h3 className="heading-lg mb-3">Interested in Collaborating?</h3>
            <p className="body-md max-w-md mx-auto mb-7">
              Research collaborations, academic opportunities, or just a conversation — I&apos;m always open to connecting with motivated people.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/contact" className="btn btn-primary px-5 py-2.5">Get in Touch</Link>
              <Link href="/projects" className="btn btn-secondary px-5 py-2.5">View Projects</Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
