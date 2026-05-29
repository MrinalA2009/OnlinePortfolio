"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const contactMethods = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "smmrinal2009@gmail.com",
    href: "mailto:smmrinal2009@gmail.com",
    color: "text-blue-400",
    border: "border-blue-500/20 hover:border-blue-500/40",
    bg: "bg-blue-500/8",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "mrinal-agarwal-71017535a",
    href: "https://www.linkedin.com/in/mrinal-agarwal-71017535a/",
    color: "text-blue-500",
    border: "border-blue-600/20 hover:border-blue-600/40",
    bg: "bg-blue-600/8",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "(510) 971-0053",
    href: "tel:5109710053",
    color: "text-cyan-400",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    bg: "bg-cyan-500/8",
  },
];

const inquiryTypes = [
  "Research Collaboration",
  "University / Admissions",
  "Internship / Employment",
  "Tutoring / Education",
  "Speaking / Debate",
  "General Inquiry",
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiry: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      <div className="fixed top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-1/3 left-1/4 w-[400px] h-[400px] bg-purple-700/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3">Get In Touch</p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re a research lab, admissions office, recruiter, or fellow student — I&apos;d love to hear from you.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatedSection direction="right">
              <div className="glass rounded-2xl border border-white/6 p-8">
                <h2 className="text-lg font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactMethods.map((method) => (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      target={method.label === "LinkedIn" ? "_blank" : undefined}
                      rel={method.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                      whileHover={{ x: 4 }}
                      className={`flex items-center gap-4 p-4 rounded-xl border ${method.border} ${method.bg} transition-all duration-200 group`}
                    >
                      <div className={`${method.color} flex-shrink-0`}>{method.icon}</div>
                      <div>
                        <div className="text-xs text-slate-500 mb-0.5">{method.label}</div>
                        <div className="text-sm text-slate-300 group-hover:text-white transition-colors">{method.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="glass rounded-2xl border border-white/6 p-8">
                <h3 className="text-sm font-bold text-white mb-4">Open To</h3>
                <ul className="space-y-2">
                  {[
                    "AI Safety & ML Research Collaborations",
                    "University / Program Inquiries",
                    "Educational Technology Partnerships",
                    "Mathematics Competitions & Coaching",
                    "Speaking & Debate Engagements",
                    "Software / Full-Stack Projects",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="glass rounded-2xl border border-white/6 p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Location</p>
                <p className="text-white font-semibold">Dublin, California</p>
                <p className="text-slate-400 text-sm mt-1">Bay Area · Open to remote collaboration worldwide</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <AnimatedSection direction="left">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl border border-emerald-500/20 p-12 text-center"
                >
                  <div className="text-6xl mb-6">✅</div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
                    Thank you for reaching out. I&apos;ll get back to you as soon as possible — typically within 24–48 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", subject: "", message: "", inquiry: "" }); }}
                    className="mt-8 px-6 py-3 rounded-xl text-sm font-semibold glass border border-white/8 text-slate-300 hover:text-white hover:border-blue-500/30 transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass rounded-2xl border border-white/6 p-8 space-y-6"
                >
                  <h2 className="text-xl font-bold text-white">Send a Message</h2>

                  {/* Inquiry type */}
                  <div>
                    <label className="text-xs font-medium text-slate-400 mb-2 block">Type of Inquiry</label>
                    <div className="flex flex-wrap gap-2">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormState((f) => ({ ...f, inquiry: type }))}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 ${
                            formState.inquiry === type
                              ? "bg-blue-500/20 border-blue-500/40 text-blue-300"
                              : "border-white/8 text-slate-500 hover:text-slate-300 hover:border-white/20"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="Your Name"
                      type="text"
                      value={formState.name}
                      onChange={(v) => setFormState((f) => ({ ...f, name: v }))}
                      placeholder="Jane Smith"
                      required
                    />
                    <FormField
                      label="Email Address"
                      type="email"
                      value={formState.email}
                      onChange={(v) => setFormState((f) => ({ ...f, email: v }))}
                      placeholder="jane@example.com"
                      required
                    />
                  </div>

                  <FormField
                    label="Subject"
                    type="text"
                    value={formState.subject}
                    onChange={(v) => setFormState((f) => ({ ...f, subject: v }))}
                    placeholder="Research collaboration opportunity"
                    required
                  />

                  <div>
                    <label className="text-xs font-medium text-slate-400 mb-2 block">Message <span className="text-red-400">*</span></label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState((f) => ({ ...f, message: e.target.value }))}
                      required
                      rows={5}
                      placeholder="Tell me about your project, opportunity, or question..."
                      className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-white/6 transition-all duration-200 resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl font-semibold text-white btn-shimmer shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
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

function FormField({
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-slate-400 mb-2 block">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/40 focus:bg-white/6 transition-all duration-200"
      />
    </div>
  );
}
