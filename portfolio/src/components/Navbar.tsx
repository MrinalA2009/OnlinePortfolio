"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: scrolled ? "var(--surface)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-14">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold transition-transform duration-200 group-hover:scale-105"
            style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
          >
            M
          </div>
          <span className="text-sm font-semibold" style={{ color: "var(--text-1)" }}>
            Mrinal Agarwal
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-1.5 text-sm rounded-md transition-colors duration-150"
                style={{
                  color: active ? "var(--text-1)" : "var(--text-2)",
                  fontWeight: active ? "500" : "400",
                }}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-md"
                    style={{ background: "var(--bg-subtle)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{null}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/contact" className="hidden md:inline-flex btn btn-primary text-sm">
            Get in Touch
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
            style={{ background: "var(--bg-subtle)", border: "1px solid var(--border)", color: "var(--text-2)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-4 flex flex-col gap-[4px]">
              <span className={`block h-[1.5px] rounded-full bg-current transition-all duration-250 ${mobileOpen ? "rotate-45 translate-y-[5.5px]" : ""}`} />
              <span className={`block h-[1.5px] rounded-full bg-current transition-all duration-250 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[1.5px] rounded-full bg-current transition-all duration-250 ${mobileOpen ? "-rotate-45 -translate-y-[5.5px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden"
            style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2.5 text-sm rounded-lg transition-colors"
                  style={{
                    color: pathname === link.href ? "var(--text-1)" : "var(--text-2)",
                    background: pathname === link.href ? "var(--bg-subtle)" : "transparent",
                    fontWeight: pathname === link.href ? "500" : "400",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 mt-1" style={{ borderTop: "1px solid var(--border)" }}>
                <Link href="/contact" className="btn btn-primary w-full justify-center">
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
