"use client";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectImage from "./ProjectImage";
import BrowserFrame from "./BrowserFrame";
import type { ProjectData } from "@/lib/projects-data";

function LinkIcon({ icon }: { icon: string }) {
  if (icon === "github")
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    );
  if (icon === "paper")
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    );
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
    </svg>
  );
}

export default function ProjectShowcase({ project, index }: { project: ProjectData; index: number }) {
  const liveUrl = project.links.find((l) => l.icon === "globe")?.href;

  const textBlock = (
    <div className="flex flex-col justify-center">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span
          className="text-xs font-medium px-2 py-0.5 rounded"
          style={{
            background: `${project.accentColor}12`,
            color: project.accentColor,
            border: `1px solid ${project.accentColor}30`,
          }}
        >
          {project.type}
        </span>
        <span className="flex items-center gap-1.5 text-xs body-sm">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.statusDot }} />
          {project.status}
        </span>
        <span className="body-sm">{project.period}</span>
      </div>

      <h2 className="heading-xl mb-2" id={project.id}>
        {project.title}
      </h2>
      <p className="body-md mb-1 select-text">{project.fullTitle}</p>
      {project.venue && project.id !== "zedd" && (
        <p className="body-sm mb-4" style={{ color: "var(--text-3)" }}>
          {project.venue}
        </p>
      )}

      <p className="body-lg mb-6 select-text">{project.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {[
          { label: "Objective", content: project.objective },
          { label: "Approach", content: project.approach },
          { label: "Impact", content: project.impact },
        ].map(({ label, content }) => (
          <div
            key={label}
            className="rounded-lg p-4"
            style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)" }}
          >
            <p className="label mb-2">{label}</p>
            <p className="body-sm leading-relaxed select-text">{content}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.technologies.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary text-xs"
            style={
              link.icon === "globe"
                ? {
                    background: `${project.accentColor}12`,
                    borderColor: `${project.accentColor}30`,
                    color: project.accentColor,
                  }
                : undefined
            }
          >
            <LinkIcon icon={link.icon} />
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );

  const heroBlock = (
    <div>
      <p className="label mb-3">Project preview</p>
      <ProjectImage
        src={project.hero.src}
        alt={project.hero.alt}
        placeholderHint={project.hero.placeholderHint}
        caption={project.hero.caption}
        priority={index === 0}
        aspect="video"
      />
    </div>
  );

  return (
    <AnimatedSection delay={index * 0.05}>
      <article
        className="mb-24 pb-24 last:mb-0 last:pb-0"
        style={{ borderBottom: index < 3 ? "1px solid var(--border)" : undefined }}
      >
        {/* Hero row — alternating layout */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-14`}
        >
          {project.imageOnLeft ? (
            <>
              {heroBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {heroBlock}
            </>
          )}
        </div>

        {/* Screenshot gallery */}
        <div className="mb-14">
          <h3 className="heading-md mb-6">Screenshot gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {project.gallery.map((img) => (
              <ProjectImage
                key={img.src}
                src={img.src}
                alt={img.alt}
                placeholderHint={img.placeholderHint}
                caption={img.caption}
                aspect="video"
              />
            ))}
          </div>
        </div>

        {/* Research visuals */}
        {project.researchVisuals && (
          <div className="mb-14">
            <h3 className="heading-md mb-2">Research visuals</h3>
            <p className="body-sm mb-6 select-text">
              Architecture diagrams, experiment figures, benchmarks, and paper excerpts.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {project.researchVisuals.map((img) => (
                <ProjectImage
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  placeholderHint={img.placeholderHint}
                  caption={img.caption}
                  aspect="video"
                />
              ))}
            </div>
          </div>
        )}

        {/* Platform mockup */}
        {project.mockup && (
          <div className="mb-14">
            <h3 className="heading-md mb-6">{project.mockup.title}</h3>
            <div className={`grid gap-6 ${project.mockup.images.length > 1 ? "grid-cols-1 lg:grid-cols-2" : ""}`}>
              {project.mockup.images.map((img) =>
                project.mockup?.browserStyle ? (
                  <BrowserFrame key={img.src} image={img} url={liveUrl} />
                ) : (
                  <ProjectImage
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    placeholderHint={img.placeholderHint}
                    caption={img.caption}
                    aspect="video"
                  />
                )
              )}
            </div>
          </div>
        )}

        {/* Architecture */}
        <div>
          <h3 className="heading-md mb-4">System overview</h3>
          <div
            className="rounded-xl p-5 font-mono text-xs overflow-x-auto select-text"
            style={{
              background: "var(--bg-subtle)",
              border: "1px solid var(--border)",
              color: "var(--text-2)",
              lineHeight: 1.9,
            }}
          >
            {project.diagram.map((line, i) => (
              <div key={i} className="whitespace-pre">
                {line}
              </div>
            ))}
          </div>
        </div>
      </article>
    </AnimatedSection>
  );
}
