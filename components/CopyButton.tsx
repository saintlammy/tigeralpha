"use client";

import { useEffect, useRef, useState } from "react";
import { copyToClipboard } from "@/lib/clipboard";
import { CopyIcon } from "./icons";

type Status = "idle" | "copied" | "error";

/** Copies `value` to the clipboard; the label reflects the *actual* result. */
export function CopyButton({ value }: { value: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  async function handleCopy() {
    const ok = await copyToClipboard(value);
    setStatus(ok ? "copied" : "error");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 1600);
  }

  const label = status === "copied" ? "Copied" : status === "error" ? "Copy failed" : "Copy";
  const color =
    status === "copied" ? "var(--success-2)" : status === "error" ? "#ff6b6b" : undefined;

  return (
    <button
      type="button"
      className="copy-btn"
      onClick={handleCopy}
      style={color ? { color } : undefined}
      aria-label="Copy contract address"
    >
      <CopyIcon />
      <span className="lbl-txt" aria-live="polite">
        {label}
      </span>
    </button>
  );
}
