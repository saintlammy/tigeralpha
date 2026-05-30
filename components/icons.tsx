import type { SVGProps } from "react";

/* Shared inline icons (no icon library — matches the design handoff). */

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} {...props}>
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export function CopyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </svg>
  );
}

export function TelegramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.94 4.3 18.7 19.6c-.24 1.08-.88 1.34-1.78.84l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.99.48l.35-5 9.1-8.22c.4-.35-.08-.55-.62-.2L6.21 13.1l-4.85-1.52c-1.06-.33-1.08-1.06.22-1.57l18.94-7.3c.88-.32 1.65.2 1.42 1.6z" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.24 2H21l-7.5 8.57L22 22h-6.8l-5.32-6.96L3.8 22H1l8.02-9.17L2 2h6.96l4.81 6.36L18.24 2zm-2.39 17.5h1.5L7.66 3.96H6.05L15.85 19.5z" />
    </svg>
  );
}

export function DiscordIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.32 4.37A19.8 19.8 0 0 0 15.45 3l-.25.5a16.5 16.5 0 0 1 4.32 1.45 13.5 13.5 0 0 0-16.04 0A16.5 16.5 0 0 1 7.8 3.5L7.55 3a19.8 19.8 0 0 0-4.87 1.37C-.5 9.06-.5 13.62.28 18.1a19.9 19.9 0 0 0 6.04 3.04l.78-1.3a12.9 12.9 0 0 1-2.04-.98l.5-.37a14.2 14.2 0 0 0 12.88 0l.5.37c-.65.38-1.34.71-2.04.98l.78 1.3a19.9 19.9 0 0 0 6.04-3.04c.93-5.2-.4-9.72-3.4-13.73zM8.52 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.95-2.42 2.16-2.42 1.2 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42zm6.96 0c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.95 2.42-2.16 2.42z" />
    </svg>
  );
}
