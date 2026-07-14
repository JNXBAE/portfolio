"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Achievements() {
  return (
    <section id="achievements" className="border-t border-surface-border py-20 sm:py-28 dark:border-slate-800">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading comment="// 05 — achievements" title="Achievements" />

        <div className="mb-12 grid grid-cols-2 gap-6 rounded-2xl border border-surface-border bg-surface-subtle p-8 sm:grid-cols-4 dark:border-slate-800 dark:bg-slate-900/30">
          <AnimatedCounter value={3} label="Symposium Prizes" />
          <AnimatedCounter value={5} suffix="+" label="Presentations" />
          <AnimatedCounter value={2} label="National Awards" />
          <AnimatedCounter value={3} label="Featured Projects" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card-elevate flex gap-4 rounded-2xl border border-surface-border bg-white p-6 dark:border-slate-800 dark:bg-slate-900/40"
            >
              <span className="text-3xl leading-none">{a.emoji}</span>
              <div>
                <h3 className="font-display text-sm font-semibold text-ink dark:text-white">
                  {a.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted dark:text-slate-400">
                  {a.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
