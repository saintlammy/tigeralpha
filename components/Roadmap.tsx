"use client";

import { useEffect, useRef } from "react";
import { roadmap } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Roadmap() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const fill = fillRef.current;
    if (!wrap || !fill) return;

    const update = () => {
      const r = wrap.getBoundingClientRect();
      const mid = window.innerHeight * 0.55;
      const p = Math.max(0, Math.min(1, (mid - r.top) / r.height));
      fill.style.height = p * 100 + "%";
      const fillY = r.top + r.height * p;
      phaseRefs.current.forEach((ph) => {
        if (!ph) return;
        const node = ph.querySelector(".node");
        if (!node) return;
        const nr = node.getBoundingClientRect();
        ph.classList.toggle("active", nr.top < fillY + 4);
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="road pad-y" id="roadmap">
      <div className="wrap">
        <Reveal className="eyebrow">Roadmap</Reveal>
        <Reveal as="h2" className="section-title" style={{ marginTop: 18 }}>
          The path to a
          <br />
          global pack.
        </Reveal>
        <div className="road-wrap" ref={wrapRef}>
          <div className="road-line">
            <div className="fill" ref={fillRef} />
          </div>

          {roadmap.map((phase, i) => (
            <div
              className="phase"
              key={phase.title}
              ref={(el) => {
                phaseRefs.current[i] = el;
              }}
            >
              <div className="node" />
              <div className="ptop">
                <span className="ph">{phase.title}</span>
                <span className={`pstate ${phase.state}`}>{phase.stateLabel}</span>
              </div>
              <p className="plead">{phase.lead}</p>
              <ul>
                {phase.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
