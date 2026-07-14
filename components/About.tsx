"use client";

import { motion } from "framer-motion";
import { GraduationCap, Compass, Sparkles } from "lucide-react";
import { about, personal } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const cards = [
  {
    icon: GraduationCap,
    title: "Background",
    text: about.summary,
  },
  {
    icon: Compass,
    title: "Career Objective",
    text: about.objective,
  },
  {
    icon: Sparkles,
    title: "Development Philosophy",
    text: about.philosophy,
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-surface-border py-20 sm:py-28 dark:border-slate-800">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          comment="// 01 — about"
          title="Building things end to end"
          description={`${personal.degree} · ${personal.duration} · CGPA ${personal.cgpa}`}
        />

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-elevate rounded-2xl border border-surface-border bg-white p-6 dark:border-slate-800 dark:bg-slate-900/40"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <card.icon size={18} />
              </div>
              <h3 className="mb-2 font-display text-base font-semibold text-ink dark:text-white">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-muted dark:text-slate-400">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
