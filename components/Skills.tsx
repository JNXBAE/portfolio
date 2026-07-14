"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillCategories } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-surface-border bg-surface-subtle py-20 sm:py-28 dark:border-slate-800 dark:bg-slate-900/20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          comment="// 02 — skills"
          title="Technical Skills"
          description="Tools and technologies I use to design, build, and ship full-stack and AI-driven products."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = (Icons[cat.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Code2;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="card-elevate rounded-2xl border border-surface-border bg-white p-6 dark:border-slate-800 dark:bg-slate-900/40"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-base font-semibold text-ink dark:text-white">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-surface-border bg-surface-subtle px-2.5 py-1 font-mono text-xs text-ink-muted dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
