"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface NavSection {
  id: string;
  label: string;
}

export default function SectionNav({ sections }: { sections: NavSection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [sections]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3"
      aria-label="Section navigation"
    >
      {sections.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            aria-label={`Jump to ${label}`}
            className="group relative flex items-center justify-end gap-2.5"
          >
            {/* Label — appears on hover */}
            <motion.span
              initial={false}
              animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 4 }}
              className="text-xs font-medium select-none pointer-events-none"
              style={{ color: isActive ? "var(--text-1)" : "var(--text-3)" }}
            >
              {label}
            </motion.span>
            <span
              className="absolute right-full mr-2 text-xs font-medium whitespace-nowrap select-none pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: "var(--text-2)" }}
            >
              {!isActive && label}
            </span>
            {/* Pill */}
            <motion.div
              animate={{
                width: isActive ? 22 : 6,
                background: isActive ? "var(--accent)" : "var(--text-3)",
                opacity: 1,
              }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: 6, borderRadius: 3, flexShrink: 0 }}
            />
          </button>
        );
      })}
    </nav>
  );
}
