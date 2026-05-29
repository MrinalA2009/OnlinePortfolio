import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

export const metadata: Metadata = {
  title: "Mrinal Agarwal — AI Researcher, Mathematician & Developer",
  description:
    "Portfolio of Mrinal Agarwal — NeurIPS spotlighted AI researcher, nationally ranked debater, AMC/AIME mathematician, and full-stack developer.",
  keywords: [
    "Mrinal Agarwal",
    "AI Research",
    "Machine Learning",
    "Mathematics",
    "Debate",
    "Portfolio",
    "NeurIPS",
    "LLM",
  ],
  authors: [{ name: "Mrinal Agarwal" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen" style={{ background: "var(--bg-primary)" }}>
        <CursorGlow />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
