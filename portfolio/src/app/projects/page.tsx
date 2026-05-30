"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import PageShell from "@/components/PageShell";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import { projects } from "@/lib/projects-data";

export default function ProjectsPage() {
  return (
    <PageShell maxWidth="6xl">
      <AnimatedSection className="mb-12">
        <p className="label mb-3">Portfolio</p>
        <h1 className="heading-display mb-5">Projects</h1>
        <p className="body-lg max-w-2xl select-text">
          Research papers and live platforms — each with dedicated visuals, screenshots, and system documentation.
        </p>
      </AnimatedSection>

      {/* Quick navigation cards */}
      <AnimatedSection className="mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((p) => (
            <PreviewCard key={p.id} project={p} />
          ))}
        </div>
      </AnimatedSection>

      {/* Full showcases */}
      <div>
        {projects.map((project, index) => (
          <ProjectShowcase key={project.id} project={project} index={index} />
        ))}
      </div>

      <AnimatedSection>
        <div className="card p-10 text-center mt-8" style={{ boxShadow: "var(--shadow-sm)" }}>
          <h3 className="heading-lg mb-3">Contact</h3>
          <p className="body-md max-w-md mx-auto mb-7 select-text">
            For research, collaboration, or technical discussion.
          </p>
          <Link href="/contact" className="btn btn-primary px-6 py-2.5 inline-flex">
            Get in touch
          </Link>
        </div>
      </AnimatedSection>
    </PageShell>
  );
}

function PreviewCard({ project }: { project: (typeof projects)[0] }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <a
      href={`#${project.id}`}
      className="card overflow-hidden block transition-shadow hover:shadow-md"
      style={{ boxShadow: "var(--shadow-sm)" }}
    >
      <div className="relative aspect-[16/10] w-full" style={{ background: "var(--bg-subtle)" }}>
        {!imgFailed ? (
          <Image
            src={project.hero.src}
            alt=""
            fill
            unoptimized
            sizes="(max-width: 640px) 100vw, 25vw"
            className="object-cover object-top"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center text-xs px-3 text-center"
            style={{ color: "var(--text-3)" }}
          >
            {project.title}
          </div>
        )}
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: project.accentColor }}
        />
      </div>
      <div className="p-4">
        <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--text-1)" }}>
          {project.title}
        </p>
        <p className="body-sm line-clamp-2">{project.tagline}</p>
      </div>
    </a>
  );
}
