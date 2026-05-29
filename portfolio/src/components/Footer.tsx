import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-blue-500/10 mt-0">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">
                M
              </div>
              <span className="font-semibold text-white">Mrinal Agarwal</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              AI researcher, mathematician, debater, and developer. Building the future through research and innovation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:smmrinal2009@gmail.com"
                  className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                >
                  smmrinal2009@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mrinal-agarwal-71017535a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <span className="text-sm text-slate-400">(510) 971-0053</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Mrinal Agarwal. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Dublin, CA · Emerald High School · Class of 2027
          </p>
        </div>
      </div>
    </footer>
  );
}
