# TigerAlpha ($TIGAL) — Landing Site

A faithful, production-ready rebuild of the TigerAlpha marketing landing page from the
design handoff, in **Next.js 16 (App Router) + TypeScript + Tailwind v4**.

## Run it

```bash
npm install      # already installed in this checkout
npm run dev      # http://localhost:3000
npm run build    # production build (static prerender)
npm run start    # serve the production build
npm run lint     # eslint (flat config)
```

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16, App Router, static prerender |
| Language | TypeScript (strict) |
| Styling | Tailwind v4 (CSS-first `@theme`) + bespoke component CSS in `app/globals.css` |
| Fonts | `next/font/google` — self-hosted Space Grotesk + Manrope (no layout shift) |
| Animation | Dependency-free: IntersectionObserver + rAF, ported from the original `motion.js` |
| Hosting | Vercel-ready (also static-exportable) |

The design tokens live in `:root` and are mirrored into Tailwind's `@theme`, so utilities
like `bg-ink`, `text-orange-bright`, and `font-display` are available alongside the bespoke
classes. The signature "facet" clip-path, gradients, and keyframes stay in plain CSS where
Tailwind is the wrong tool.

## Structure

```text
app/
  layout.tsx        fonts, metadata, OpenGraph/Twitter, theme-color
  page.tsx          composes the sections
  globals.css       design tokens (@theme) + full component/responsive CSS
components/
  Nav, Hero, HeroCanvas, Marquee, Mission, Tokenomics, Pledge,
  Ecosystem, Roadmap, Community, Faq, CtaBand, Footer   (one per section)
  Reveal, CountUp, CopyButton, ScrollProgress, ButtonLink  (shared primitives)
  icons.tsx         inline SVG icons (no icon library)
lib/
  site.ts           identity + outbound links (the swap-before-launch config)
  content.ts        section copy/data (stats, tax split, roadmap, FAQ, ecosystem)
  cx.ts             classNames helper
public/assets/      tiger.png, tiger-hero.mp4
```

Every interaction respects `prefers-reduced-motion` (reveals show instantly; canvas, parallax,
orbit dots, count-ups, and the hero video are disabled/simplified).

## Design-review fixes applied during the rebuild

1. **Tax contradiction resolved.** The FAQ no longer claims "zero buy/sell tax" — it now states
   the transparent 9% tax split three ways, consistent with the tokenomics tax card.
2. **Pledge cause-card icons styled.** The handoff CSS had dropped `.pcard .ic`; icons are
   correctly sized here.
3. **Broken SVG logo dropped.** `uploads/Logo icon.svg` was a non-functional Figma export
   (empty embedded raster); the site uses `tiger.png`.
4. **Tokenomics matched to the live design file.** The bundled handoff README was stale; the
   design HTML (the team's Claude Design edits) is the source of truth. Stats show the live BscScan
   numbers — Max Supply 555.56T · Holders 423 · Burned 20% · Tax 9% — with the superseded handoff
   placeholder set kept as `HANDOFF_PLACEHOLDER_STATS` in `lib/content.ts` for reference.
5. **Mission statement is readable without JS** (progressive enhancement) instead of starting dim.

## Wire before launch (centralized in `lib/site.ts` / `lib/content.ts`)

- **Buy / DEX link** — `site.links.buy` (currently `#`).
- **Discord invite** — `site.links.discord` (currently `#`).
- **Production domain** — `metadataBase` in `app/layout.tsx`.
- **Tokenomics** — now live BscScan values (`tokenStats`); the note hardcodes a `May 30 2026`
  snapshot — refresh `tokenStats` + the Tokenomics note when the on-chain numbers move.
- The footer disclaimer still calls metrics "illustrative placeholders" (kept verbatim from the
  design); revisit once you're comfortable presenting the BscScan figures as live.

## Recommended next optimizations

- Swap the decorative brand `<img>` tags for `next/image`, and compress/poster the 6 MB hero
  video to improve mobile LCP.
- When the roadmap's web3 features land, add `wagmi` + `viem` for wallet connect / live on-chain data.
