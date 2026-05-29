"use client";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const education = {
  school: "Emerald High School",
  location: "Dublin, CA",
  grad: "June 2027",
  gpa: { uw: "3.96 / 4.0", w: "4.56" },
  courses: [
    "AP Language & Composition",
    "AP Calculus BC",
    "AP United States History",
    "AP Computer Science Applications",
    "AP Physics C: Mechanics",
    "Honors Spanish 4",
  ],
};

const extracurriculars = [
  {
    title: "Artificial Intelligence Research",
    role: "Lead Author",
    period: "2025 – Present",
    color: "bg-blue-500",
    bullets: [
      "NeurIPS and IJCNLP-AACL Spotlighted Researcher",
      "2 papers selected in the top 0.1% of high school applicants among 400+ PhD researchers and professionals",
      "Research cited by UPenn, Microsoft, and MBZUAI",
      "Conducting research on LLM deception, detection, and injection robustness for agentic multi-agent systems",
      "Performs data analysis and large-scale experiment pipelines",
    ],
  },
  {
    title: "EHS Math Club",
    role: "President",
    period: "2023 – Present",
    color: "bg-purple-500",
    bullets: [
      "Raised over $2,000 for math education programs",
      "Leads over 80 students across tutoring, competitions, and lectures",
      "Organizes competitions, tutoring programs, and guest lectures",
      "Coordinates lesson planning and national competition preparation",
    ],
  },
  {
    title: "Competitive Mathematics",
    role: "Nationally + State Recognized",
    period: "2020 – Present",
    color: "bg-cyan-500",
    bullets: [
      "AMC top 5% nationally",
      "AIME Qualifier",
      "Perfect scores on NOETIC and MOEMS",
      "First student from prior team to qualify to States MATHCOUNTS",
    ],
  },
  {
    title: "Web Development & Technologies",
    role: "Developer",
    period: "2022 – Present",
    color: "bg-emerald-500",
    bullets: [
      "Designed DebateSim: AI-driven legislation analysis and debate trainer",
      "Building MathSim: a personalized math tutoring platform",
      "Experience with scalable data analysis and educational technology",
    ],
  },
  {
    title: "Public Forum Debate",
    role: "Nationally Ranked Debater",
    period: "2024 – Present",
    color: "bg-orange-500",
    bullets: [
      "Ranked 2nd in the Nation and 2nd in California",
      "Extensive foreign policy and defense research",
      "Strong public speaking and critical thinking skills",
    ],
  },
];

const volunteer = [
  {
    title: "Summer Math Bootcamp",
    role: "Founder",
    period: "2025 – Present",
    color: "bg-blue-400",
    bullets: [
      "Tutored 30+ students in competition mathematics",
      "Raised over $2,000 for the EHS Math Club",
      "Designed full curriculum and parent communications",
      "Created 15+ comprehensive lessons and practice systems",
    ],
  },
  {
    title: "Fallon MATHCOUNTS",
    role: "Lead Instructor",
    period: "2023 – Present",
    color: "bg-purple-400",
    bullets: [
      "Accumulated 150+ tutoring hours",
      "Helped multiple students qualify to MATHCOUNTS States",
      "Designed curriculum serving 200+ students",
      "Led 50+ advanced mathematics lessons",
    ],
  },
  {
    title: "KoolMath Institute",
    role: "Lead Volunteer",
    period: "2021 – 2025",
    color: "bg-cyan-400",
    bullets: [
      "Accumulated 200+ tutoring hours",
      "Helped 100+ students achieve national recognition",
      "Specialized in competition mathematics tutoring",
    ],
  },
];

const awards = [
  { name: "AP Scholar Award", year: "2025", icon: "🏅" },
  { name: "National Spanish Examination — 99th Percentile Gold", year: "2025", icon: "🥇" },
  { name: "Varsity Badminton Captain Award", year: "2024/25", icon: "🏸" },
  { name: "National Sunvite Debate Champion", year: "2025", icon: "🏆" },
  { name: "All American Academic Award", year: "2025", icon: "⭐" },
  { name: "Git & GitHub Certified", year: "2024", icon: "💻" },
  { name: "AwesomeMath Olympiad Algebra & Geometry Certified", year: "2025", icon: "📐" },
  { name: "AIME Qualifier Honor Roll", year: "2024", icon: "🔢" },
];

const skills = {
  technical: ["Python", "Java", "HTML", "CSS", "LaTeX", "LangChain", "PyTorch", "HuggingFace", "OpenAI APIs"],
  soft: ["Leadership", "Public Speaking", "Critical Thinking", "Mathematical Reasoning", "Communication"],
};

export default function ResumePage() {
  return (
    <div className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      <div className="fixed top-1/3 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* ── HEADER ── */}
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Curriculum Vitae</p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed mb-8">
            A full overview of my academic achievements, research, leadership, and skills.
          </p>
          {/* Download Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF Resume
          </motion.button>
        </AnimatedSection>

        {/* ── EDUCATION ── */}
        <AnimatedSection className="mb-10">
          <SectionHeader icon="🎓" label="Education" />
          <div className="glass rounded-2xl border border-blue-500/15 p-8 bg-gradient-to-br from-blue-600/8 to-transparent">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">{education.school}</h3>
                <p className="text-slate-400 text-sm">{education.location}</p>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium">
                  Graduating {education.grad}
                </span>
                <div className="mt-2 flex gap-4 justify-end text-sm">
                  <span className="text-slate-400">UW GPA: <span className="text-white font-semibold">{education.gpa.uw}</span></span>
                  <span className="text-slate-400">W GPA: <span className="text-white font-semibold">{education.gpa.w}</span></span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Current Coursework</p>
              <div className="flex flex-wrap gap-2">
                {education.courses.map((c) => (
                  <span key={c} className="px-3 py-1 text-xs rounded-lg bg-white/5 border border-white/8 text-slate-300">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ── EXTRACURRICULARS ── */}
        <AnimatedSection className="mb-10">
          <SectionHeader icon="🌟" label="Extracurricular Activities" />
          <div className="space-y-4">
            {extracurriculars.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="glass rounded-xl border border-white/6 p-6 hover:border-blue-500/20 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${item.color} flex-shrink-0`} />
                      <h3 className="font-bold text-white">{item.title}</h3>
                    </div>
                    <div className="flex items-center gap-3 pl-5 sm:pl-0">
                      <span className="text-xs text-slate-500 font-medium">{item.role}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/8 text-slate-400">{item.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-1.5 pl-5">
                    {item.bullets.map((b) => (
                      <li key={b} className="text-sm text-slate-400 flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5 flex-shrink-0">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* ── VOLUNTEER ── */}
        <AnimatedSection className="mb-10">
          <SectionHeader icon="🤝" label="Volunteer & Work Experience" />
          <div className="space-y-4">
            {volunteer.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="glass rounded-xl border border-white/6 p-6 hover:border-purple-500/20 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${item.color} flex-shrink-0`} />
                      <h3 className="font-bold text-white">{item.title}</h3>
                    </div>
                    <div className="flex items-center gap-3 pl-5 sm:pl-0">
                      <span className="text-xs text-slate-500 font-medium">{item.role}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/8 text-slate-400">{item.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-1.5 pl-5">
                    {item.bullets.map((b) => (
                      <li key={b} className="text-sm text-slate-400 flex items-start gap-2">
                        <span className="text-purple-500 mt-0.5 flex-shrink-0">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* ── AWARDS ── */}
        <AnimatedSection className="mb-10">
          <SectionHeader icon="🏆" label="Awards & Certifications" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {awards.map((award, i) => (
              <AnimatedSection key={award.name} delay={i * 0.06}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-xl border border-white/6 p-5 flex items-start gap-4 hover:border-yellow-500/15 transition-all duration-300"
                >
                  <span className="text-2xl flex-shrink-0">{award.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-white leading-snug">{award.name}</p>
                    <p className="text-xs text-slate-500 mt-1">{award.year}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* ── SKILLS ── */}
        <AnimatedSection className="mb-10">
          <SectionHeader icon="⚡" label="Skills" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass rounded-xl border border-white/6 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">Technical Skills</p>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((s) => (
                  <span key={s} className="px-3 py-1.5 text-xs rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="glass rounded-xl border border-white/6 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-4">Soft Skills</p>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((s) => (
                  <span key={s} className="px-3 py-1.5 text-xs rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ── Download again ── */}
        <AnimatedSection className="text-center">
          <div className="glass rounded-2xl border border-blue-500/15 p-10">
            <p className="text-white font-semibold text-lg mb-2">Want a printable version?</p>
            <p className="text-slate-400 text-sm mb-6">Download the full resume as a polished PDF.</p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Full Resume (PDF)
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

function SectionHeader({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-xl">{icon}</span>
      <h2 className="text-xl font-bold text-white">{label}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
    </div>
  );
}
