"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { useToast } from "@/components/ToastProvider";

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      showToast("Email copied to clipboard");
      setTimeout(() => setCopied(false), 1800);
    } catch {
      showToast("Couldn't copy — copy it manually instead", "error");
    }
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy email address"
      className="flex h-8 w-8 items-center justify-center rounded-md border border-surface-border text-ink-muted transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-400"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}
