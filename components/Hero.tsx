"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { personal, roles } from "@/lib/data";
import { trackResumeDownload } from "@/lib/analytics";
import TypingEffect from "@/components/TypingEffect";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24 pb-16"
    >
      {/* Ambient grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 20%, black 40%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] -z-10 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px]"
      />

      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-label mb-5"
        >
          {"// hello world"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl dark:text-white"
        >
          {personal.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 h-8 text-xl font-medium text-accent sm:text-2xl"
        >
          <TypingEffect words={roles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg dark:text-slate-400"
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href={personal.resumeFile}
            download
            onClick={() => trackResumeDownload("hero")}
            className="btn-ripple inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download size={16} />
            Download Resume
          </a>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-xl border border-surface-border px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-100"
          >
            <Mail size={16} />
            Get in Touch
          </button>

          <div className="ml-1 flex items-center gap-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border text-ink-muted transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-300"
            >
              <Github size={18} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border text-ink-muted transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-300"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex items-center gap-2 text-xs text-ink-faint"
        >
          <ArrowDown size={14} className="animate-bounce" />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
