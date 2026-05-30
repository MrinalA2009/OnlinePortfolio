"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import PageShell from "@/components/PageShell";
import Link from "next/link";
import { projects } from "@/lib/projects-data";

function LinkIcon({ icon }: { icon: string }) {
  if (icon === "github")
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    );
  if (icon === "paper")
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    );
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

export default function ProjectsPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedProject = projects.find((p) => p.id === selected);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <PageShell>
      <AnimatedSection className="mb-14">
        <p className="label mb-3">Portfolio</p>
        <h1 className="heading-display mb-5">Projects</h1>
        <p className="body-lg max-w-2xl select-text">
          Two published AI research papers and two live platforms. Click any project to explore the full story.
        </p>
      </AnimatedSection>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        {projects.map((p, i) => (
          <AnimatedSection key={p.id} delay={i * 0.08}>
            <motion.div
              layoutId={`project-${p.id}`}
              onClick={() => setSelected(p.id)}
              whileHover={{ y: -4, boxShadow: "var(--shadow-md)" }}
              transition={{ duration: 0.2 }}
              className="card cursor-pointer overflow-hidden h-full"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              <div className="h-0.5 w-full" style={{ background: p.accentColor }} />

              <div className="p-7">
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded"
                        style={{
                          background: `${p.accentColor}12`,
                          color: p.accentColor,
                          border: `1px solid ${p.accentColor}25`,
                        }}
                      >
                        {p.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-3)" }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.statusDot }} />
                        {p.status}
                      </span>
                    </div>
                    <div>
                      <h2 className="heading-md">{p.title}</h2>
                      <p className="body-sm mt-0.5">{p.tagline}</p>
                    </div>
                  </div>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{
                      background: `${p.accentColor}10`,
                      border: `1px solid ${p.accentColor}25`,
                      color: p.accentColor,
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <p className="body-sm leading-relaxed mb-5 select-text">{p.brief}</p>

                {p.venue && (
                  <p className="body-sm mb-4" style={{ color: "var(--text-3)" }}>
                    Venue: {p.venue}
                  </p>
                )}

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.technologies.slice(0, 4).map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                  {p.technologies.length > 4 && (
                    <span className="tag" style={{ color: "var(--text-3)" }}>
                      +{p.technologies.length - 4}
                    </span>
                  )}
                </div>

                <p className="text-xs font-medium" style={{ color: p.accentColor }}>
                  Click to explore →
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </motion.div>

      <AnimatedSection>
        <div className="card p-10 text-center" style={{ boxShadow: "var(--shadow-sm)" }}>
          <h3 className="heading-lg mb-3">Contact</h3>
          <p className="body-md max-w-md mx-auto mb-7 select-text">For research, collaboration, or technical discussion.</p>
          <Link href="/contact" className="btn btn-primary px-6 py-2.5 inline-flex">
            Get in touch
          </Link>
        </div>
      </AnimatedSection>

      <AnimatePresence>
        {selected && selectedProject && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60]"
              style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
              onClick={() => setSelected(null)}
              aria-hidden="true"
            />

            <div
              className="fixed inset-0 z-[70] flex items-start justify-center p-4 md:p-10 pointer-events-none overflow-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
            >
              <motion.div
                layoutId={`project-${selected}`}
                className="pointer-events-auto w-full max-w-3xl my-auto"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <div className="h-0.5" style={{ background: selectedProject.accentColor }} />

                <div className="p-7 pb-0">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded"
                          style={{
                            background: `${selectedProject.accentColor}12`,
                            color: selectedProject.accentColor,
                            border: `1px solid ${selectedProject.accentColor}25`,
                          }}
                        >
                          {selectedProject.type}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-3)" }}>
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: selectedProject.statusDot }} />
                          {selectedProject.status}
                        </span>
                        <span className="body-sm" style={{ color: "var(--text-3)" }}>
                          {selectedProject.period}
                        </span>
                      </div>
                      <div>
                        <h2 id="project-dialog-title" className="heading-lg">
                          {selectedProject.title}
                        </h2>
                        <p className="body-sm mt-0.5">{selectedProject.fullTitle}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelected(null)}
                      aria-label="Close project details"
                      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                      style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)", color: "var(--text-2)" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.18, duration: 0.3 }}
                  className="px-7 pb-7"
                >
                  {selectedProject.venue && selectedProject.id !== "zedd" && (
                    <p className="body-sm mb-5" style={{ color: "var(--text-3)" }}>
                      {selectedProject.venue}
                    </p>
                  )}

                  <p className="body-md leading-relaxed mb-7 select-text">{selectedProject.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
                    {[
                      { label: "Objective", content: selectedProject.objective },
                      { label: "Approach", content: selectedProject.approach },
                      { label: "Impact", content: selectedProject.impact },
                    ].map(({ label, content }) => (
                      <div
                        key={label}
                        className="rounded-xl p-4"
                        style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)" }}
                      >
                        <p className="label mb-2" style={{ color: selectedProject.accentColor }}>
                          {label}
                        </p>
                        <p className="body-sm leading-relaxed select-text">{content}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mb-7">
                    <p className="label mb-3" style={{ color: "var(--text-3)" }}>
                      Architecture
                    </p>
                    <div
                      className="rounded-xl p-5 font-mono text-xs overflow-x-auto"
                      style={{
                        background: "var(--bg-subtle)",
                        border: "1px solid var(--border)",
                        color: "var(--text-2)",
                        lineHeight: 1.9,
                      }}
                    >
                      {selectedProject.diagram.map((line, i) => (
                        <div key={i} className="whitespace-pre">
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-7">
                    {selectedProject.technologies.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary text-xs"
                        style={
                          link.icon === "globe"
                            ? {
                                background: `${selectedProject.accentColor}12`,
                                borderColor: `${selectedProject.accentColor}30`,
                                color: selectedProject.accentColor,
                              }
                            : undefined
                        }
                      >
                        <LinkIcon icon={link.icon} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </PageShell>
  );
}
