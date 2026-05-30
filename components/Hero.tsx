"use client";

import { useEffect, useRef, useState } from "react";
import { cx } from "@/lib/cx";
import { site } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";
import { CopyButton } from "./CopyButton";
import { HeroCanvas } from "./HeroCanvas";
import { ArrowRight } from "./icons";

export function Hero() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const visualRef = useRef<HTMLDivElement | null>(null);
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [go, setGo] = useState<boolean[]>([false, false, false]);
  const [videoReady, setVideoReady] = useState(false);

  /* headline reveal on mount (staggered) */
  useEffect(() => {
    const timers = [0, 1, 2].map((i) =>
      setTimeout(() => setGo((g) => g.map((v, idx) => (idx === i ? true : v))), 180 + i * 120),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  /* parallax (mouse + scroll) + orbiting dots — all reduced-motion gated */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const stage = stageRef.current;
    const visual = visualRef.current;

    const onMouse = (e: MouseEvent) => {
      if (!stage) return;
      const dx = e.clientX / window.innerWidth - 0.5;
      const dy = e.clientY / window.innerHeight - 0.5;
      stage.style.transform = `translate(${dx * 22}px, ${dy * 22}px)`;
    };
    const onScroll = () => {
      if (!visual) return;
      const y = window.scrollY;
      if (y < window.innerHeight) visual.style.transform = `translateY(${y * 0.12}px)`;
    };

    window.addEventListener("mousemove", onMouse);
    window.addEventListener("scroll", onScroll, { passive: true });

    let raf = 0;
    let t = 0;
    const dots = dotsRef.current.filter(Boolean);
    const loop = () => {
      t += 0.006;
      if (stage) {
        const R = stage.offsetWidth * 0.5 + 16;
        dots.forEach((d, i) => {
          const a = t * (i % 2 ? -1 : 1) + i * ((Math.PI * 2) / dots.length);
          d.style.transform = `translate(${Math.cos(a) * R}px, ${Math.sin(a) * R}px)`;
        });
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  /* video fade-in once data is ready (avoids poster/logo flash) */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // The `muted` JSX prop isn't reliably applied to the DOM property, so browsers
    // block autoplay and the frame stays frozen/dark. Set it imperatively and start
    // playback ourselves (ignore the rejection that fires under reduced-data modes).
    v.muted = true;
    void v.play().catch(() => {});
    const ready = () => setVideoReady(true);
    if (v.readyState >= 2) ready();
    v.addEventListener("loadeddata", ready);
    v.addEventListener("playing", ready);
    return () => {
      v.removeEventListener("loadeddata", ready);
      v.removeEventListener("playing", ready);
    };
  }, []);

  const lines = [
    <>The apex of</>,
    <>meme culture</>,
    <>
      with <em className="g">real impact</em>
    </>,
  ];

  return (
    <header className="hero" id="top">
      <HeroCanvas />
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="wrap">
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="hero-badge">
              <span className="dot" />
              Live on <b>BNB Smart Chain</b>
            </div>
            <h1>
              {lines.map((l, i) => (
                <span key={i} className={cx("line", go[i] && "go")}>
                  <span>{l}</span>
                </span>
              ))}
            </h1>
            <p className="hero-sub">
              TigerAlpha is a community-powered token where viral energy funds real-world good —
              transparent charity, on-chain governance, and a pack that grows together.
            </p>
            <div className="hero-cta">
              <ButtonLink href={site.links.buy} magnetic external>
                Buy $TIGAL
                <ArrowRight />
              </ButtonLink>
              <ButtonLink href="#impact" variant="ghost">
                See the pledge
              </ButtonLink>
            </div>
            <div className="contract">
              <span className="lbl">CONTRACT</span>
              <code>{site.contract}</code>
              <CopyButton value={site.contract} />
            </div>
          </div>

          <div className="hero-visual" ref={visualRef}>
            <div className="tiger-stage" ref={stageRef}>
              <div className="ring r2" />
              <div className="ring" />
              <div className="halo" />
              <div className={cx("tiger-video", videoReady && "ready")}>
                <video
                  ref={videoRef}
                  src="/assets/tiger-hero.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                />
                {/* reduced-motion fallback (shown via CSS, percentage-sized — plain <img>) */}
                <img className="vid-fallback" src="/assets/tiger.png" alt="TigerAlpha geometric tiger emblem" />
                <div className="vid-vignette" />
                <div className="vid-rim" />
              </div>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="orbit-dot"
                  ref={(el) => {
                    if (el) dotsRef.current[i] = el;
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-hint">
        <div className="mouse" />
        Scroll
      </div>
    </header>
  );
}
