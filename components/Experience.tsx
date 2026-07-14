"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-surface-border bg-surface-subtle py-20 sm:py-28 dark:border-slate-800 dark:bg-slate-900/20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          comment="// 04 — experience"
          title="Experience Timeline"
          description="Hands-on work across full-stack engineering and applied AI research."
        />

        <div className="relative border-l border-surface-border pl-8 dark:border-slate-700">
          {experience.map((item, i) => (
            <motion.div
              key={item.title + item.org}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[41px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-white dark:bg-slate-900" />
              <div className="rounded-2xl border border-surface-border bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink dark:text-white">
                    {item.title}
                  </h3>
                  <span className="font-mono text-xs text-ink-faint">{item.period}</span>
                </div>
                <p className="mt-0.5 text-sm font-medium text-accent">{item.org}</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-ink-muted dark:text-slate-400">
                  {item.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-surface-border px-2 py-0.5 font-mono text-[11px] text-ink-muted dark:border-slate-700 dark:text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
