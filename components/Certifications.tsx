"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { certifications } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-surface-border bg-surface-subtle py-20 sm:py-28 dark:border-slate-800 dark:bg-slate-900/20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading comment="// 06 — certifications" title="Certifications" />

        <div className="grid gap-5 sm:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card-elevate flex items-center gap-3 rounded-2xl border border-surface-border bg-white p-5 dark:border-slate-800 dark:bg-slate-900/40"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <BadgeCheck size={18} />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-ink dark:text-white">
                  {cert.title}
                </p>
                <p className="text-xs text-ink-muted dark:text-slate-400">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
