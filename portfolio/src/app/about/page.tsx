"use client";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";

const timeline = [
  {
    year: "2020",
    title: "Competitive Math Journey Begins",
    desc: "Started competing in AMC, NOETIC, and MOEMS. Achieved perfect scores and earned national recognition in elementary mathematics competitions.",
    color: "bg-blue-500",
    tags: ["NOETIC", "MOEMS", "AMC"],
  },
  {
    year: "2021",
    title: "KoolMath Institute — Lead Volunteer",
    desc: "Began tutoring 100+ students in competition mathematics, accumulating 200+ tutoring hours and helping students achieve national recognition.",
    color: "bg-purple-500",
    tags: ["Tutoring", "Leadership", "Competition Math"],
  },
  {
    year: "2022",
    title: "Web Development Begins",
    desc: "Started building full-stack web applications. Began conceptualizing DebateSim, an AI-driven debate training platform.",
    color: "bg-cyan-500",
    tags: ["Python", "HTML/CSS", "JavaScript"],
  },
  {
    year: "2023",
    title: "Math Club President & MATHCOUNTS States",
    desc: "Elected EHS Math Club President. Became the first student from the prior team to qualify to MATHCOUNTS States. Started tutoring at Fallon MATHCOUNTS.",
    color: "bg-emerald-500",
    tags: ["MATHCOUNTS", "Leadership", "AMC"],
  },
  {
    year: "2024",
    title: "AIME Qualifier & Debate Ascension",
    desc: "Qualified for AIME (top 5% nationally). Entered competitive Public Forum Debate. Earned Git & GitHub certification. Launched varsity badminton career.",
    color: "bg-orange-500",
    tags: ["AIME", "Debate", "Certification"],
  },
  {
    year: "2025",
    title: "NeurIPS Spotlight & National Champion",
    desc: "Achieved NeurIPS and IJCNLP-AACL spotlight status for AI research. Ranked 2nd in Nation in Debate. Won National Sunvite Championship. Founded Summer Math Bootcamp. Earned AP Scholar Award.",
    color: "bg-blue-400",
    tags: ["NeurIPS", "Research", "National Champion"],
  },
];

const interests = [
  {
    icon: "🧠",
    title: "Artificial Intelligence Research",
    desc: "Fascinated by the emergent behaviors of large language models, particularly deceptive alignment and robustness in agentic multi-agent systems. My research aims to make AI safer and more reliable.",
  },
  {
    icon: "∑",
    title: "Higher Mathematics",
    desc: "I find beauty in mathematical proofs and elegant problem-solving. From olympiad geometry to real analysis, mathematics trains a mode of thinking that I apply everywhere.",
  },
  {
    icon: "🎙",
    title: "Debate & Public Discourse",
    desc: "Debate has sharpened my ability to construct rigorous arguments, engage with complex foreign policy issues, and communicate ideas under pressure.",
  },
  {
    icon: "💻",
    title: "Building Educational Tools",
    desc: "I believe technology should democratize access to quality education. DebateSim and MathSim are my attempts to build tools that scale excellent instruction.",
  },
];

const skills = [
  { name: "Python / PyTorch", level: 90 },
  { name: "LangChain / HuggingFace", level: 85 },
  { name: "AI Research & Experimentation", level: 88 },
  { name: "Mathematical Reasoning", level: 92 },
  { name: "Java", level: 78 },
  { name: "HTML / CSS / Web Dev", level: 82 },
  { name: "LaTeX", level: 80 },
  { name: "Public Speaking", level: 95 },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      {/* Background glows */}
      <div className="fixed top-1/4 right-0 w-[500px] h-[500px] bg-purple-700/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* ── PAGE HEADER ── */}
        <AnimatedSection className="text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Get to know me</p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            About <span className="gradient-text">Mrinal</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            AI researcher, mathematician, debater, and developer — building at the intersection of technology and human potential.
          </p>
        </AnimatedSection>

        {/* ── BIO CARD ── */}
        <AnimatedSection className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Avatar / Visual */}
            <div className="lg:col-span-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass rounded-3xl border border-blue-500/15 p-8 text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-700/10 pointer-events-none" />
                <div className="relative z-10">
                  {/* Avatar placeholder */}
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-5xl font-black text-white shadow-xl shadow-blue-500/30">
                    M
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-1">Mrinal Agarwal</h2>
                  <p className="text-blue-400 text-sm font-medium mb-4">High School Junior</p>
                  <p className="text-slate-400 text-sm">Emerald High School, Dublin CA</p>
                  <p className="text-slate-400 text-sm">Class of 2027 · GPA: 3.96 UW / 4.56 W</p>

                  <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
                    <a
                      href="mailto:smmrinal2009@gmail.com"
                      className="flex items-center gap-2 text-xs text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      smmrinal2009@gmail.com
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mrinal-agarwal-71017535a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bio text */}
            <div className="lg:col-span-3 space-y-6">
              <div className="glass rounded-2xl border border-white/6 p-8">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-gradient-to-b from-blue-400 to-purple-500 inline-block" />
                  Who I Am
                </h3>
                <div className="space-y-4 text-slate-400 text-sm leading-relaxed">
                  <p>
                    I&apos;m Mrinal Agarwal, a junior at Emerald High School in Dublin, California. I sit at the intersection of artificial intelligence research, competitive mathematics, software development, and public debate — fields that, to me, all share a common thread: the pursuit of rigorous truth.
                  </p>
                  <p>
                    My research on large language model deception, detection mechanisms, and injection robustness has been spotlighted at NeurIPS and IJCNLP-AACL, placing my work among the top 0.1% of submissions from a pool of over 400 PhD researchers and professionals. I&apos;m proud that my research has been cited by institutions like the University of Pennsylvania, Microsoft, and MBZUAI.
                  </p>
                  <p>
                    In mathematics, I&apos;ve qualified for the AIME, achieved perfect scores on NOETIC and MOEMS, and ranked in the top 5% nationally on the AMC. As president of the EHS Math Club, I lead 80+ students and have raised over $2,000 to support math education programs.
                  </p>
                  <p>
                    In competitive debate, I&apos;ve reached the 2nd rank in the nation and in California in Public Forum Debate, earned the National Sunvite Championship, and developed a deep expertise in foreign policy, defense policy, and geopolitical analysis.
                  </p>
                </div>
              </div>

              <div className="glass rounded-2xl border border-white/6 p-8">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500 inline-block" />
                  Future Aspirations
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I aspire to pursue a degree in Computer Science or Mathematics at a top university and continue research at the frontier of AI safety and alignment. Long-term, I aim to build or lead an AI research lab focused on making advanced AI systems more transparent, robust, and aligned with human values. I also plan to continue developing educational technology that scales excellent instruction to underserved communities.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ── STATS ── */}
        <AnimatedSection className="mb-20">
          <div className="glass rounded-3xl border border-blue-500/10 p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { end: 3, suffix: "", prefix: "#", label: "Research Papers", description: "NeurIPS · IJCNLP-AACL" },
                { end: 2, suffix: "nd", prefix: "", label: "In Nation — Debate", description: "Public Forum 2025" },
                { end: 550, suffix: "+", prefix: "", label: "Total Tutoring Hours", description: "Across all programs" },
                { end: 2000, suffix: "+", prefix: "$", label: "Raised for Math Club", description: "Through bootcamp & events" },
              ].map((s) => (
                <StatCounter key={s.label} {...s} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── INTERESTS ── */}
        <AnimatedSection className="mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">Passions</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            What <span className="gradient-text">Drives Me</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {interests.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl border border-white/6 p-7 hover:border-blue-500/20 transition-all duration-300"
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* ── SKILLS ── */}
        <AnimatedSection className="mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">Technical Proficiency</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {skills.map((skill, i) => (
              <AnimatedSection key={skill.name} delay={i * 0.07}>
                <div className="glass rounded-xl border border-white/6 p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-white">{skill.name}</span>
                    <span className="text-xs text-blue-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.07, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* ── TIMELINE ── */}
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            My <span className="gradient-text">Timeline</span>
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-purple-500/30 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 0.1}>
                  <div className={`flex flex-col md:flex-row gap-6 items-start ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                    {/* Card */}
                    <div className="flex-1 ml-12 md:ml-0">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="glass rounded-2xl border border-white/6 p-6 hover:border-blue-500/20 transition-all duration-300"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`w-2 h-2 rounded-full ${item.color}`} />
                          <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">{item.year}</span>
                        </div>
                        <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 text-xs rounded-md bg-white/5 border border-white/8 text-slate-400">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:flex items-center justify-center w-10 flex-shrink-0 relative">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: i * 0.1 + 0.3 }}
                        className={`w-4 h-4 rounded-full ${item.color} border-4 border-[#020408] shadow-lg`}
                      />
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
