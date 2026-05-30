"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

const fmt = (n: number, d: number) =>
  n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });

/** Count-up number that animates (cubic ease, ~1.7s) when scrolled into view. */
export function CountUp({ to, decimals = 0, prefix = "", suffix = "", className }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [text, setText] = useState(() => prefix + fmt(0, decimals) + suffix);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let started = false;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting || started) return;
          started = true;
          io.unobserve(e.target);
          // reduced motion: jump straight to the final value, no animation.
          if (reduce) {
            setText(prefix + fmt(to, decimals) + suffix);
            return;
          }
          const dur = 1700;
          const t0 = performance.now();
          const step = (now: number) => {
            const p = Math.min((now - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setText(prefix + fmt(to * eased, decimals) + suffix);
            if (p < 1) raf = requestAnimationFrame(step);
          };
          raf = requestAnimationFrame(step);
        }),
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, decimals, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
