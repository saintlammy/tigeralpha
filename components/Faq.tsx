"use client";

import { useEffect, useRef, useState } from "react";
import { cx } from "@/lib/cx";
import { faqs, type Faq } from "@/lib/content";
import { Reveal } from "./Reveal";

function Item({ item, open, onToggle }: { item: Faq; open: boolean; onToggle: () => void }) {
  const aRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const a = aRef.current;
    if (!a) return;
    a.style.maxHeight = open ? a.scrollHeight + "px" : "0px";
  }, [open]);

  return (
    <div className={cx("faq-item", open && "open")}>
      <button type="button" className="faq-q" aria-expanded={open} onClick={onToggle}>
        {item.q} <span className="pm" />
      </button>
      <div className="faq-a" ref={aRef}>
        <div className="inner">{item.a}</div>
      </div>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq pad-y" id="faq">
      <div className="wrap">
        <Reveal className="eyebrow" style={{ justifyContent: "center", textAlign: "center" }}>
          FAQ
        </Reveal>
        <Reveal as="h2" className="section-title" style={{ marginTop: 18, textAlign: "center" }}>
          Questions, answered.
        </Reveal>
        <div className="faq-grid">
          {faqs.map((item, i) => (
            <Item
              key={item.q}
              item={item}
              open={open === i}
              onToggle={() => setOpen((cur) => (cur === i ? null : i))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
