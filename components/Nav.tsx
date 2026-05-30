"use client";

import { useEffect, useState } from "react";
import { cx } from "@/lib/cx";
import { site } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";
import { ArrowRight } from "./icons";

const NAV_LINKS = [
  { href: "#mission", label: "Mission" },
  { href: "#metrics", label: "Token" },
  { href: "#impact", label: "Pledge" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#community", label: "Community" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={cx("nav", scrolled && "scrolled")}>
        <div className="nav-inner">
          <a className="brand" href="#top">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/tiger.png" alt="TigerAlpha logo" />
            <span className="name">
              Tiger<span>Alpha</span>
            </span>
          </a>
          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <ButtonLink href={site.links.buy} magnetic external>
            Buy $TIGAL
            <ArrowRight />
          </ButtonLink>
          <button
            className="nav-toggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
          </button>
        </div>
      </nav>

      <div className={cx("mobile-menu", open && "open")}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <ButtonLink href={site.links.buy} className="mt-2" external>
          Buy $TIGAL
        </ButtonLink>
      </div>
    </>
  );
}
