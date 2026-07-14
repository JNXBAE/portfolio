"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/lib/useActiveSection";
import ThemeToggle from "@/components/ThemeToggle";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_LINKS.map((l) => l.id));

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-surface-border/70 bg-white/80 backdrop-blur-md dark:bg-[#0A0F1C]/80 dark:border-slate-800/70">
      <nav className="mx-auto flex max-w-content items-center justify-between px-5 py-3.5 sm:px-8">
        <button
          onClick={() => handleClick("hero")}
          className="font-display text-[15px] font-semibold tracking-tight text-ink dark:text-white"
        >
          Jubair<span className="text-accent">.</span>dev
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={cn(
                "relative px-3 py-2 text-[13.5px] font-medium transition-colors",
                active === link.id
                  ? "text-accent"
                  : "text-ink-muted hover:text-ink dark:text-slate-400 dark:hover:text-white"
              )}
            >
              {link.label}
              {active === link.id && (
                <span className="absolute left-3 right-3 -bottom-[1px] h-[2px] rounded-full bg-accent" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => handleClick("contact")}
            className="hidden rounded-lg bg-accent px-4 py-2 text-[13px] font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98] sm:inline-block"
          >
            Contact
          </button>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-border text-ink md:hidden dark:border-slate-700 dark:text-slate-200"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-surface-border bg-white px-5 py-3 md:hidden dark:bg-[#0A0F1C] dark:border-slate-800">
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={cn(
                  "py-2.5 text-left text-sm font-medium",
                  active === link.id ? "text-accent" : "text-ink-muted dark:text-slate-400"
                )}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
