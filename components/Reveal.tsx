"use client";

import { useCallback, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cx } from "@/lib/cx";

type RevealProps = {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  /** ms delay (use index * 90 for staggered groups) */
  delay?: number;
  /** clip-path reveal instead of fade+rise */
  clip?: boolean;
  style?: CSSProperties;
  id?: string;
  /** anchor props (when as="a") */
  href?: string;
  target?: string;
  rel?: string;
};

/**
 * Fade/rise (or clip) an element into view on scroll.
 * Mirrors the original `[data-reveal]` behavior; the CSS lives in globals.css
 * and respects `prefers-reduced-motion` (elements show instantly).
 */
export function Reveal({
  as: Tag = "div",
  children,
  className,
  delay = 0,
  clip = false,
  style,
  id,
  href,
  target,
  rel,
}: RevealProps) {
  const [shown, setShown] = useState(false);

  const ref = useCallback((node: Element | null) => {
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(node);
  }, []);

  const Comp = Tag;
  const dataAttr = clip ? { "data-reveal-clip": "" } : { "data-reveal": "" };

  return (
    <Comp
      ref={ref}
      id={id}
      href={href}
      target={target}
      rel={rel}
      className={cx(shown ? "in" : null, className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...dataAttr}
    >
      {children}
    </Comp>
  );
}
