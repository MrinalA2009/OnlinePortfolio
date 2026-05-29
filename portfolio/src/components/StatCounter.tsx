"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  description?: string;
}

export default function StatCounter({ end, suffix = "", prefix = "", duration = 2000, label, description }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm font-semibold text-white/80 mb-1">{label}</div>
      {description && <div className="text-xs text-slate-500 max-w-32 mx-auto">{description}</div>}
    </div>
  );
}
