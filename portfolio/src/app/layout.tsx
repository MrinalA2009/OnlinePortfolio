import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/lib/ThemeProvider";

export const metadata: Metadata = {
  title: "Mrinal Agarwal — AI Researcher, Mathematician & Developer",
  description:
    "Portfolio of Mrinal Agarwal — NeurIPS spotlighted AI researcher, nationally ranked debater, AMC/AIME mathematician, and full-stack developer from Emerald High School.",
  authors: [{ name: "Mrinal Agarwal" }],
};

// Prevents flash of wrong theme on initial render.
// Runs synchronously before React hydrates.
const themeScript = `
(function(){
  try {
    var s = localStorage.getItem('theme');
    var d = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', s || d);
  } catch(e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
