"use client";

import { useEffect, useRef } from "react";

type Pt = { x: number; y: number; vx: number; vy: number; r: number };
type Shard = { x: number; y: number; size: number; rot: number; vr: number; vx: number; vy: number; op: number };

const COL_LINE = "rgba(245,138,60,";

/** Animated low-poly background: drifting nodes + links + orange triangle shards. */
export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let pts: Pt[] = [];
    let shards: Shard[] = [];
    let raf = 0;

    const build = () => {
      pts = [];
      const n = Math.round((W * H) / 26000);
      for (let i = 0; i < n; i++) {
        pts.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 1.6 + 0.6,
        });
      }
      shards = [];
      for (let i = 0; i < 7; i++) {
        shards.push({
          x: Math.random() * W,
          y: Math.random() * H,
          size: Math.random() * 70 + 40,
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.002,
          vy: (Math.random() - 0.5) * 0.12,
          vx: (Math.random() - 0.5) * 0.12,
          op: Math.random() * 0.05 + 0.02,
        });
      }
    };

    const resize = () => {
      const DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      build();
    };

    const tri = (s: Shard) => {
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(s.rot);
      ctx.beginPath();
      ctx.moveTo(0, -s.size);
      ctx.lineTo(s.size * 0.87, s.size * 0.5);
      ctx.lineTo(-s.size * 0.87, s.size * 0.5);
      ctx.closePath();
      ctx.strokeStyle = COL_LINE + s.op * 2.4 + ")";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = COL_LINE + s.op + ")";
      ctx.fill();
      ctx.restore();
    };

    const frame = () => {
      ctx.clearRect(0, 0, W, H);
      shards.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.rot += s.vr;
        if (s.x < -120) s.x = W + 120;
        if (s.x > W + 120) s.x = -120;
        if (s.y < -120) s.y = H + 120;
        if (s.y > H + 120) s.y = -120;
        tri(s);
      });
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.hypot(dx, dy);
          if (d < 130) {
            const a = (1 - d / 130) * 0.22;
            ctx.strokeStyle = "rgba(160,170,185," + a * 0.5 + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      pts.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(245,138,60,.6)";
        ctx.fill();
      });
      raf = requestAnimationFrame(frame);
    };

    resize();
    frame();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas id="hero-canvas" ref={ref} />;
}
