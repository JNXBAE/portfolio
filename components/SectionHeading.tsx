"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  comment,
  title,
  description,
}: {
  comment: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10 max-w-2xl sm:mb-14"
    >
      <p className="section-label mb-3">{comment}</p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[15px] leading-relaxed text-ink-muted dark:text-slate-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}
