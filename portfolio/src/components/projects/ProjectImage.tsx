"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import ImagePlaceholder from "./ImagePlaceholder";

type Props = {
  src: string;
  alt: string;
  placeholderHint: string;
  caption?: string;
  priority?: boolean;
  aspect?: "video" | "square" | "auto";
  className?: string;
};

const aspectClass = {
  video: "aspect-video",
  square: "aspect-square",
  auto: "aspect-auto min-h-[200px]",
};

export default function ProjectImage({
  src,
  alt,
  placeholderHint,
  caption,
  priority = false,
  aspect = "video",
  className = "",
}: Props) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = failed;

  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`project-image-frame group ${className}`}
    >
      <div
        className={`relative overflow-hidden rounded-xl ${aspectClass[aspect]} w-full`}
        style={{
          background: "var(--bg-subtle)",
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        {showPlaceholder ? (
          <ImagePlaceholder hint={placeholderHint} label={alt} />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      {caption && (
        <figcaption className="body-sm mt-2.5 text-center select-text">{caption}</figcaption>
      )}
    </motion.figure>
  );
}
