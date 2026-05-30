"use client";
import Image from "next/image";
import portrait from "@/assets/mrinal-portrait.png";

const WIDTH = 804;
const HEIGHT = 1072;

/**
 * Professional portrait for the About page.
 * Static import ensures correct URLs on GitHub Pages (basePath).
 */
export default function PortraitPhoto({ className = "" }: { className?: string }) {
  return (
    <figure className={`portrait-photo ${className}`}>
      <div
        className="overflow-hidden rounded-2xl w-full"
        style={{
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow-md)",
          background: "var(--bg-subtle)",
        }}
      >
        <Image
          src={portrait}
          alt="Mrinal Agarwal — professional portrait"
          width={WIDTH}
          height={HEIGHT}
          priority
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 380px"
          className="w-full h-auto block object-contain object-top max-h-[min(72vh,640px)]"
        />
      </div>
      <figcaption className="body-sm mt-3 text-center" style={{ color: "var(--text-3)" }}>
        Mrinal Agarwal · Emerald High School
      </figcaption>
    </figure>
  );
}
