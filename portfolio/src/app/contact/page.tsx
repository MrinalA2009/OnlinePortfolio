"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const inquiryTypes = [
  "Research Collaboration",
  "University / Admissions",
  "Internship / Employment",
  "Tutoring / Education",
  "Debate / Speaking",
  "General Inquiry",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", inquiry: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1100));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div style={{ background: "var(--bg-base)" }} className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-5">

        {/* Header */}
        <AnimatedSection className="mb-14">
          <p className="label mb-3">Get in Touch</p>
          <h1 className="heading-display mb-5">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h1>
          <p className="body-lg max-w-xl">
            Whether you&apos;re a research lab, admissions office, recruiter, or fellow student — I&apos;d love to hear from you.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatedSection direction="right">
              <div className="card p-7" style={{ boxShadow: "var(--shadow-sm)" }}>
                <h2 className="heading-md mb-5">Contact</h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                      label: "Email",
                      value: "smmrinal2009@gmail.com",
                      href: "mailto:smmrinal2009@gmail.com",
                    },
                    {
                      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
                      label: "LinkedIn",
                      value: "mrinal-agarwal-71017535a",
                      href: "https://www.linkedin.com/in/mrinal-agarwal-71017535a/",
                      external: true,
                    },
                    {
                      icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.7A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z"/></svg>,
                      label: "Phone",
                      value: "(510) 971-0053",
                      href: "tel:5109710053",
                    },
                  ].map((m) => (
                    <motion.a
                      key={m.label}
                      href={m.href}
                      target={m.external ? "_blank" : undefined}
                      rel={m.external ? "noopener noreferrer" : undefined}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.18 }}
                      className="flex items-center gap-4 p-3.5 rounded-xl transition-colors group"
                      style={{ border: "1px solid var(--border)", color: "var(--text-2)" }}
                    >
                      <span style={{ color: "var(--accent)" }}>{m.icon}</span>
                      <div>
                        <p className="body-sm mb-0.5" style={{ color: "var(--text-3)" }}>{m.label}</p>
                        <p className="text-sm font-medium" style={{ color: "var(--text-1)" }}>{m.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.08}>
              <div className="card p-7" style={{ boxShadow: "var(--shadow-sm)" }}>
                <h3 className="heading-md text-sm mb-4">Open To</h3>
                <ul className="space-y-2.5">
                  {[
                    "AI Safety & ML Research Collaborations",
                    "University & Program Inquiries",
                    "Educational Technology Partnerships",
                    "Mathematics Competitions & Coaching",
                    "Debate & Speaking Engagements",
                    "Software / Full-Stack Projects",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 body-sm">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.12}>
              <div className="card p-6" style={{ boxShadow: "var(--shadow-sm)" }}>
                <p className="label mb-2">Location</p>
                <p className="text-sm font-semibold" style={{ color: "var(--text-1)" }}>Dublin, California</p>
                <p className="body-sm mt-1">Bay Area · Open to remote collaboration</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <AnimatedSection direction="left">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card p-14 text-center"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <div className="text-5xl mb-6">✅</div>
                  <h3 className="heading-md mb-3">Message Sent!</h3>
                  <p className="body-md max-w-xs mx-auto mb-8">
                    Thank you for reaching out. I&apos;ll respond within 24–48 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "", inquiry: "" }); }}
                    className="btn btn-secondary"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="card p-8 space-y-6"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <h2 className="heading-md">Send a Message</h2>

                  {/* Inquiry type */}
                  <div>
                    <label className="body-sm font-medium mb-2.5 block" style={{ color: "var(--text-2)" }}>Type of Inquiry</label>
                    <div className="flex flex-wrap gap-2">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setForm((f) => ({ ...f, inquiry: type }))}
                          className="tag transition-all duration-150"
                          style={form.inquiry === type
                            ? { background: "var(--accent-subtle)", borderColor: "var(--accent-border)", color: "var(--accent)" }
                            : {}}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Your Name" type="text" value={form.name} onChange={(v) => setForm((f) => ({ ...f, name: v }))} placeholder="Jane Smith" required />
                    <Field label="Email Address" type="email" value={form.email} onChange={(v) => setForm((f) => ({ ...f, email: v }))} placeholder="jane@example.com" required />
                  </div>

                  <Field label="Subject" type="text" value={form.subject} onChange={(v) => setForm((f) => ({ ...f, subject: v }))} placeholder="Research collaboration opportunity" required />

                  <div>
                    <label className="body-sm font-medium mb-2 block" style={{ color: "var(--text-2)" }}>
                      Message <span style={{ color: "#DC2626" }}>*</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      required
                      rows={5}
                      placeholder="Tell me about your project, opportunity, or question..."
                      className="w-full px-4 py-3 rounded-xl text-sm resize-none transition-all duration-150"
                      style={{
                        background: "var(--bg-subtle)",
                        border: "1px solid var(--border)",
                        color: "var(--text-1)",
                        outline: "none",
                      }}
                      onFocus={(e) => { e.target.style.borderColor = "var(--accent)"; e.target.style.background = "var(--surface)"; }}
                      onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.background = "var(--bg-subtle)"; }}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary w-full justify-center py-3 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, type, value, onChange, placeholder, required }: {
  label: string; type: string; value: string;
  onChange: (v: string) => void; placeholder: string; required?: boolean;
}) {
  return (
    <div>
      <label className="body-sm font-medium mb-2 block" style={{ color: "var(--text-2)" }}>
        {label} {required && <span style={{ color: "#DC2626" }}>*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-150"
        style={{
          background: "var(--bg-subtle)",
          border: "1px solid var(--border)",
          color: "var(--text-1)",
          outline: "none",
        }}
        onFocus={(e) => { e.target.style.borderColor = "var(--accent)"; e.target.style.background = "var(--surface)"; }}
        onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.background = "var(--bg-subtle)"; }}
      />
    </div>
  );
}
