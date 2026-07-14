"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-border text-ink-muted hover:text-accent hover:border-accent transition-colors dark:border-slate-700 dark:text-slate-300"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
