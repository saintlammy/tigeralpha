"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { cx } from "@/lib/cx";

type Props = {
  href: string;
  variant?: "primary" | "ghost";
  /** magnetic pull toward the cursor (disabled for reduced motion / touch) */
  magnetic?: boolean;
  external?: boolean;
  className?: string;
  children: ReactNode;
};

/** Pill button/link. Primary adds a shine sweep; `magnetic` adds cursor pull. */
export function ButtonLink({
  href,
  variant = "primary",
  magnetic = false,
  external = false,
  className,
  children,
}: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const mx = (e.clientX - r.left - r.width / 2) * 0.3;
    const my = (e.clientY - r.top - r.height / 2) * 0.4;
    el.style.transform = `translate(${mx}px, ${my}px)`;
  }

  function onLeave() {
    const el = ref.current;
    if (el) el.style.transform = "";
  }

  const ext = external ? { target: "_blank", rel: "noopener" } : {};

  return (
    <a
      ref={ref}
      href={href}
      className={cx("btn", variant === "primary" ? "btn-primary" : "btn-ghost", className)}
      onMouseMove={magnetic ? onMove : undefined}
      onMouseLeave={magnetic ? onLeave : undefined}
      {...(magnetic ? { "data-magnet": "" } : {})}
      {...ext}
    >
      {variant === "primary" && <span className="shine" />}
      {children}
    </a>
  );
}
