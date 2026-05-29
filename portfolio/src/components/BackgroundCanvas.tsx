"use client";
import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

// Subtle constellation background — theme-aware, mouse-reactive.
// Restrained: ~55 dots, slow drift, gentle mouse repulsion, low-opacity lines.
export default function BackgroundCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respect user's reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animId: number;
    const COUNT = 55;
    const dots: Dot[] = [];
    const mouse = { x: -999, y: -999 };

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => { mouse.x = -999; mouse.y = -999; };

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    for (let i = 0; i < COUNT; i++) {
      dots.push({
        x: Math.random() * w(),
        y: Math.random() * h(),
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        size: Math.random() * 1.2 + 0.4,
        opacity: Math.random() * 0.4 + 0.15,
      });
    }

    const getColors = () => {
      const dark = document.documentElement.getAttribute("data-theme") === "dark";
      return {
        // Light mode: blue-tinted dots (not grey-black)
        dot: dark
          ? (a: number) => `rgba(160,190,255,${a * 0.9})`
          : (a: number) => `rgba(37,99,235,${a * 0.45})`,
        line: dark
          ? (a: number) => `rgba(140,180,255,${a})`
          : (a: number) => `rgba(37,99,235,${a * 0.6})`,
      };
    };

    const MAX_DIST = 115;
    const REPEL_RADIUS = 85;

    const draw = () => {
      const cw = w();
      const ch = h();
      ctx.clearRect(0, 0, cw, ch);
      const { dot, line } = getColors();

      for (const d of dots) {
        // Mouse repulsion
        const dx = d.x - mouse.x;
        const dy = d.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPEL_RADIUS && dist > 0) {
          const force = ((REPEL_RADIUS - dist) / REPEL_RADIUS) * 0.28;
          d.vx += (dx / dist) * force;
          d.vy += (dy / dist) * force;
        }

        d.vx *= 0.98;
        d.vy *= 0.98;
        d.vx = Math.max(-0.45, Math.min(0.45, d.vx));
        d.vy = Math.max(-0.45, Math.min(0.45, d.vy));
        d.x += d.vx;
        d.y += d.vy;

        // Soft wrap
        if (d.x < -10) d.x = cw + 10;
        if (d.x > cw + 10) d.x = -10;
        if (d.y < -10) d.y = ch + 10;
        if (d.y > ch + 10) d.y = -10;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fillStyle = dot(d.opacity);
        ctx.fill();
      }

      // Constellation connections
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const opacity = (1 - dist / MAX_DIST) * 0.07;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = line(opacity);
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full ${className}`}
      aria-hidden
    />
  );
}
