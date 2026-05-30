"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cx } from "@/lib/cx";
import { Reveal } from "./Reveal";

const STATEMENT =
  "Most meme coins end at speculation. TigerAlpha is built to turn community energy into transparent, real-world impact — fun, viral, and designed to do good.";
const ACCENTS = ["impact", "good", "transparent", "community"];

const SUPPORTS = [
  {
    title: "Community-owned",
    body: "Holders drive growth, direction, and culture — the pack decides where we go next.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Impact-first",
    body: "A share of ecosystem success funds charity — food, education, medical aid, development.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Radically transparent",
    body: "Every initiative documented publicly. On-chain treasury, open reporting, no rugs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M12 2l8 4v6c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export function Mission() {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [lit, setLit] = useState(0);
  const [armed, setArmed] = useState(false);

  const words = useMemo(
    () =>
      STATEMENT.split(/\s+/).map((w) => ({
        w,
        accent: ACCENTS.includes(w.toLowerCase().replace(/[.,]/g, "")),
      })),
    [],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      // arm on first client tick so the statement is readable without JS.
      setArmed(true);
      const r = el.getBoundingClientRect();
      const start = window.innerHeight * 0.82;
      const end = window.innerHeight * 0.32;
      const prog = (start - r.top) / (start - end);
      const n = Math.round(Math.max(0, Math.min(1, prog)) * words.length);
      setLit(n);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [words.length]);

  return (
    <section className="mission pad-y" id="mission">
      <div className="wrap">
        <Reveal className="eyebrow">The Mission</Reveal>
        <p ref={ref} className={cx("statement", armed && "armed")} style={{ marginTop: 26 }}>
          {words.map((x, i) => (
            <span key={i} className={cx("w", x.accent && "accent", armed && i < lit && "lit")}>
              {x.w}{" "}
            </span>
          ))}
        </p>
        <div className="mission-foot">
          {SUPPORTS.map((s, i) => (
            <Reveal key={s.title} className="mf" delay={i * 90}>
              <div className="ic">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
