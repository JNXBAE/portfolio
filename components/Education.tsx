"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="border-t border-surface-border py-20 sm:py-28 dark:border-slate-800">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading comment="// 07 — education" title="Education" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="card-elevate flex flex-col gap-4 rounded-2xl border border-surface-border bg-white p-7 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:bg-slate-900/40"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-ink dark:text-white">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm text-ink-muted dark:text-slate-400">
                {education.institution || (
                  <span className="italic text-ink-faint">
                    {/* TODO: add institution name in lib/data.ts */}
                    Institution name — add in lib/data.ts
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="flex gap-6 sm:text-right">
            <div>
              <p className="text-xs uppercase tracking-wide text-ink-faint">CGPA</p>
              <p className="font-mono text-lg font-semibold text-accent">{education.cgpa}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-ink-faint">Duration</p>
              <p className="font-mono text-lg font-semibold text-ink dark:text-white">
                {education.duration}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
