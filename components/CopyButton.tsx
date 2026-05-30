"use client";

import { useEffect, useRef, useState } from "react";
import { CopyIcon } from "./icons";

/** Copies `value` to the clipboard; swaps the label to "Copied" (green) for 1.4s. */
export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      /* clipboard may be unavailable (insecure context) — fail silently */
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1400);
  }

  return (
    <button
      type="button"
      className="copy-btn"
      onClick={copy}
      style={copied ? { color: "var(--success-2)" } : undefined}
      aria-label="Copy contract address"
    >
      <CopyIcon />
      <span className="lbl-txt">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
