"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type CopyEmailProps = {
  email: string;
};

export function CopyEmail({ email }: CopyEmailProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }

    setTimeout(() => {
      setStatus("idle");
    }, 2000);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex min-h-11 items-center gap-2 border border-bone/40 px-4 font-mono text-[12px] uppercase tracking-[0.14em] text-bone transition-colors hover:border-bone hover:bg-bone hover:text-charcoal focus-ring-dark"
    >
      {status === "copied" ? (
        <Check size={14} aria-hidden="true" />
      ) : (
        <Copy size={14} aria-hidden="true" />
      )}
      <span aria-live="polite" aria-atomic="true">
        {status === "copied"
          ? "Copied"
          : status === "failed"
            ? "Copy failed — select it manually"
            : "Copy"}
      </span>
    </button>
  );
}
