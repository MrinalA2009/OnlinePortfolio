import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { ThemeProvider } from "@/lib/ThemeProvider";

// next/font handles preloading, subsetting, and font-display:swap automatically.
// No render-blocking network request unlike a CSS @import.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Mrinal Agarwal's Online Portfolio",
    template: "%s — Mrinal Agarwal's Online Portfolio",
  },
  description:
    "Portfolio of Mrinal Agarwal — NeurIPS spotlighted AI researcher, nationally ranked Public Forum debater, AIME qualifier, and builder of DebateSim and MathSim.",
  authors: [{ name: "Mrinal Agarwal" }],
};

// Light mode is the default. Stored user preference takes precedence.
// System preference (dark) is only used if the user has explicitly set it via the toggle.
const themeScript = `
(function(){
  try {
    var s = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', s || 'light');
  } catch(e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
