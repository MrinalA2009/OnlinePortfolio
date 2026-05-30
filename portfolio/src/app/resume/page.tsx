"use client";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import PageShell from "@/components/PageShell";

const extracurriculars = [
  {
    title: "Artificial Intelligence Research",
    role: "Lead Author",
    period: "2025 – Present",
    dot: "#2563EB",
    bullets: [
      "NeurIPS and IJCNLP-AACL Spotlighted Researcher",
      "2 papers in top 0.1% among 400+ PhD researchers and professionals",
      "Research cited by UPenn, Microsoft, and MBZUAI",
      "Researching LLM deception, detection, and injection robustness for agentic multi-agent systems",
      "Performs data analysis and large-scale experiment pipelines",
    ],
  },
  {
    title: "EHS Math Club",
    role: "President",
    period: "2023 – Present",
    dot: "#7C3AED",
    bullets: [
      "Raised over $2,000 for math education programs",
      "Leads 80+ students across tutoring, competitions, and lectures",
      "Organizes competitions, tutoring programs, and guest lectures",
      "Coordinates lesson planning and national competition preparation",
    ],
  },
  {
    title: "Competitive Mathematics",
    role: "Nationally + State Recognized",
    period: "2020 – Present",
    dot: "#059669",
    bullets: [
      "AMC top 5% nationally; AIME Qualifier",
      "Perfect scores on NOETIC and MOEMS",
      "First student from prior team to qualify to States MATHCOUNTS",
    ],
  },
  {
    title: "Web Development & Technologies",
    role: "Developer",
    period: "2022 – Present",
    dot: "#D97706",
    bullets: [
      "Designed DebateSim — AI-driven legislation analysis and debate trainer",
      "Building MathSim — a personalized adaptive math tutoring platform",
      "Experience with scalable data analysis and educational technology",
    ],
  },
  {
    title: "Public Forum Debate",
    role: "Nationally Ranked",
    period: "2024 – Present",
    dot: "#DC2626",
    bullets: [
      "Ranked 2nd in the Nation and 2nd in California",
      "National Sunvite Debate Champion (2025)",
      "Extensive foreign policy and defense research expertise",
    ],
  },
];

const volunteer = [
  {
    title: "Summer Math Bootcamp",
    role: "Founder",
    period: "2025 – Present",
    dot: "#2563EB",
    bullets: [
      "Founded and ran intensive mathematics bootcamp for 30+ students",
      "Raised over $2,000 for the EHS Math Club",
      "Designed full curriculum, 15+ lessons, and practice systems",
    ],
  },
  {
    title: "Fallon MATHCOUNTS",
    role: "Lead Instructor",
    period: "2023 – Present",
    dot: "#7C3AED",
    bullets: [
      "150+ tutoring hours; helped multiple students qualify to States",
      "Designed curriculum serving 200+ students",
      "Led 50+ advanced mathematics lessons",
    ],
  },
  {
    title: "KoolMath Institute",
    role: "Lead Volunteer",
    period: "2021 – 2025",
    dot: "#059669",
    bullets: [
      "200+ tutoring hours across multiple cohorts",
      "Helped 100+ students achieve national recognition",
      "Specialized in competition mathematics tutoring",
    ],
  },
];

const awards = [
  { name: "AP Scholar Award", year: "2025" },
  { name: "National Spanish Examination — 99th Percentile Gold", year: "2025" },
  { name: "National Sunvite Debate Champion", year: "2025" },
  { name: "All American Academic Award", year: "2025" },
  { name: "Varsity Badminton Captain Award", year: "2024 & 2025" },
  { name: "AwesomeMath Olympiad Algebra & Geometry Certified", year: "2025" },
  { name: "AIME Qualifier Honor Roll", year: "2024" },
  { name: "Git & GitHub Certified", year: "2024" },
];

const courses = [
  "AP Language & Composition",
  "AP Calculus BC",
  "AP United States History",
  "AP Computer Science Applications",
  "AP Physics C: Mechanics",
  "Honors Spanish 4",
];

const technicalSkills = ["Python", "Java", "HTML", "CSS", "LaTeX", "LangChain", "PyTorch", "HuggingFace", "OpenAI APIs"];
const softSkills = ["Leadership", "Public Speaking", "Critical Thinking", "Mathematical Reasoning", "Communication"];

export default function ResumePage() {
  return (
    <PageShell maxWidth="4xl">
        {/* Header */}
        <AnimatedSection className="mb-10">
          <div>
            <p className="label mb-2">Curriculum Vitae</p>
            <h1 className="heading-display">Resume</h1>
          </div>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection className="mb-8">
          <ResumeSection icon="🎓" title="Education">
            <div className="card p-7" style={{ boxShadow: "var(--shadow-sm)" }}>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-5">
                <div>
                  <h3 className="heading-md">Emerald High School</h3>
                  <p className="body-sm mt-0.5">Dublin, CA</p>
                </div>
                <div className="sm:text-right">
                  <span className="tag tag-accent">Graduating June 2027</span>
                  <div className="flex gap-4 mt-2">
                    <span className="body-sm">UW GPA: <strong style={{ color: "var(--text-1)" }}>3.96 / 4.0</strong></span>
                    <span className="body-sm">W GPA: <strong style={{ color: "var(--text-1)" }}>4.56</strong></span>
                  </div>
                </div>
              </div>
              <p className="body-sm font-medium mb-3" style={{ color: "var(--text-2)" }}>Current Coursework</p>
              <div className="flex flex-wrap gap-2">
                {courses.map((c) => (
                  <span key={c} className="tag">{c}</span>
                ))}
              </div>
            </div>
          </ResumeSection>
        </AnimatedSection>

        {/* Extracurriculars */}
        <AnimatedSection className="mb-8">
          <ResumeSection icon="⭐" title="Extracurricular Activities">
            <div className="space-y-3">
              {extracurriculars.map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.06}>
                  <ExperienceCard {...item} />
                </AnimatedSection>
              ))}
            </div>
          </ResumeSection>
        </AnimatedSection>

        {/* Volunteer */}
        <AnimatedSection className="mb-8">
          <ResumeSection icon="🤝" title="Volunteer & Work Experience">
            <div className="space-y-3">
              {volunteer.map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.06}>
                  <ExperienceCard {...item} />
                </AnimatedSection>
              ))}
            </div>
          </ResumeSection>
        </AnimatedSection>

        {/* Awards */}
        <AnimatedSection className="mb-8">
          <ResumeSection icon="🏆" title="Awards & Certifications">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {awards.map((a, i) => (
                <AnimatedSection key={a.name} delay={i * 0.05}>
                  <div className="card p-4 flex items-start gap-3" style={{ boxShadow: "var(--shadow-sm)" }}>
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ background: "var(--accent)" }}
                    />
                    <div>
                      <p className="text-sm font-medium leading-snug" style={{ color: "var(--text-1)" }}>{a.name}</p>
                      <p className="body-sm mt-0.5">{a.year}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </ResumeSection>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection className="mb-12">
          <ResumeSection icon="⚡" title="Skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card p-6" style={{ boxShadow: "var(--shadow-sm)" }}>
                <p className="label mb-4">Technical</p>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((s) => (
                    <span key={s} className="tag tag-accent">{s}</span>
                  ))}
                </div>
              </div>
              <div className="card p-6" style={{ boxShadow: "var(--shadow-sm)" }}>
                <p className="label mb-4" style={{ color: "#7C3AED" }}>Interpersonal</p>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((s) => (
                    <span key={s} className="tag" style={{ background: "rgba(124,58,237,0.07)", borderColor: "rgba(124,58,237,0.18)", color: "#7C3AED" }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </ResumeSection>
        </AnimatedSection>

    </PageShell>
  );
}

function ResumeSection({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span className="text-lg">{icon}</span>
        <h2 className="heading-md">{title}</h2>
        <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
      </div>
      {children}
    </div>
  );
}

function ExperienceCard({ title, role, period, dot, bullets }: {
  title: string; role: string; period: string; dot: string; bullets: string[];
}) {
  return (
    <motion.div
      whileHover={{ x: 2 }}
      transition={{ duration: 0.2 }}
      className="card p-6"
      style={{ boxShadow: "var(--shadow-sm)" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: dot }} />
          <h3 className="text-sm font-semibold" style={{ color: "var(--text-1)" }}>{title}</h3>
        </div>
        <div className="flex items-center gap-2 pl-4 sm:pl-0">
          <span className="body-sm font-medium">{role}</span>
          <span className="tag">{period}</span>
        </div>
      </div>
      <ul className="space-y-1.5 pl-4">
        {bullets.map((b) => (
          <li key={b} className="body-sm flex items-start gap-2">
            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--text-3)" }} />
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
