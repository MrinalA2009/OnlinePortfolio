import Link from "next/link";
import { navLinks } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer
      className="mt-0"
      style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold"
                style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
              >
                M
              </div>
              <span className="text-sm font-semibold" style={{ color: "var(--text-1)" }}>
                Mrinal Agarwal
              </span>
            </div>
            <p className="body-sm max-w-52 leading-relaxed select-text">
              AI research, mathematics, debate, and software development.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="label mb-4">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="body-sm hover:text-[var(--text-1)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label mb-4">Connect</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:smmrinal2009@gmail.com"
                  className="body-sm hover:text-[var(--accent)] transition-colors"
                >
                  smmrinal2009@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mrinal-agarwal-71017535a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-sm hover:text-[var(--accent)] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <span className="body-sm">(510) 971-0053</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="rule mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="body-sm">© {new Date().getFullYear()} Mrinal Agarwal. All rights reserved.</p>
          <p className="body-sm">Emerald High School · Dublin, CA · Class of 2027</p>
        </div>
      </div>
    </footer>
  );
}
