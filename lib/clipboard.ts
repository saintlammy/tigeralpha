/**
 * Copy text to the clipboard, returning whether it actually succeeded.
 *
 * Tries the async Clipboard API first (needs a secure context — https or
 * localhost), then falls back to a hidden-textarea + execCommand for insecure
 * contexts and older browsers. Restores the user's prior selection on fallback.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof window !== "undefined" && window.isSecureContext && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fall through to the legacy path
    }
  }

  if (typeof document === "undefined") return false;

  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "-9999px";
    ta.style.opacity = "0";
    document.body.appendChild(ta);

    const selection = document.getSelection();
    const previous = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

    ta.select();
    ta.setSelectionRange(0, text.length);
    const ok = document.execCommand("copy");

    document.body.removeChild(ta);
    if (previous && selection) {
      selection.removeAllRanges();
      selection.addRange(previous);
    }
    return ok;
  } catch {
    return false;
  }
}
