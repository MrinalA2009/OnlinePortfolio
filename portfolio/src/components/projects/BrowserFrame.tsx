"use client";
import ProjectImage from "./ProjectImage";
import type { ProjectImage as ProjectImageType } from "@/lib/projects-data";

export default function BrowserFrame({
  image,
  url,
}: {
  image: ProjectImageType;
  url?: string;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-md)",
      }}
    >
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: "var(--bg-subtle)", borderBottom: "1px solid var(--border)" }}
      >
        <span className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#EF4444" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#F59E0B" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#22C55E" }} />
        </span>
        <div
          className="flex-1 mx-2 px-3 py-1 rounded-md text-xs truncate"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            color: "var(--text-3)",
          }}
        >
          {url ?? "https://example.com"}
        </div>
      </div>
      <div className="p-2 pt-0">
        <div className="relative aspect-video w-full rounded-lg overflow-hidden" style={{ background: "var(--bg-subtle)" }}>
          <ProjectImage
            src={image.src}
            alt={image.alt}
            placeholderHint={image.placeholderHint}
            aspect="video"
            className="[&_figure]:!shadow-none [&_div]:!border-0 [&_div]:!shadow-none"
          />
        </div>
        {image.caption && (
          <p className="body-sm mt-2 px-2 text-center select-text">{image.caption}</p>
        )}
      </div>
    </div>
  );
}
