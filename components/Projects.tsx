"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Search } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";

const FILTERS = ["All", "Full Stack", "AI / Research"] as const;


function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className="group card-elevate flex flex-col overflow-hidden rounded-2xl border border-surface-border bg-white dark:border-slate-800 dark:bg-slate-900/40"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      className="card-elevate flex flex-col overflow-hidden rounded-2xl border border-surface-border bg-white dark:border-slate-800 dark:bg-slate-900/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={index === 0}
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="mb-2 w-fit rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] text-accent">
          {project.category}
        </span>
        <h3 className="font-display text-lg font-semibold text-ink dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted dark:text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-surface-border px-2 py-0.5 font-mono text-[11px] text-ink-muted dark:border-slate-700 dark:text-slate-400"
            >
              {t}
            </span>
          ))}
        </div>

        <details className="mt-4 group">
          <summary className="cursor-pointer text-xs font-semibold text-accent">
            Key features &amp; challenges
          </summary>
          <div className="mt-3 space-y-3 text-xs leading-relaxed text-ink-muted dark:text-slate-400">
            <div>
              <p className="mb-1 font-semibold text-ink dark:text-slate-200">Key features</p>
              <ul className="list-disc space-y-1 pl-4">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-1 font-semibold text-ink dark:text-slate-200">Challenges solved</p>
              <ul className="list-disc space-y-1 pl-4">
                {project.challenges.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </details>

        <div className="mt-5 flex gap-2.5 pt-2">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-surface-border py-2 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-200"
            >
              <Github size={14} /> Code
            </a>
          ) : (
            <span
              title="Add repository URL in lib/data.ts"
              className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-1.5 rounded-lg border border-dashed border-surface-border py-2 text-xs font-semibold text-ink-faint dark:border-slate-700"
            >
              <Github size={14} /> Code (add link)
            </span>
          )}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-accent py-2 text-xs font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          ) : (
            <span
              title="Add live demo URL in lib/data.ts"
              className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-1.5 rounded-lg border border-dashed border-surface-border py-2 text-xs font-semibold text-ink-faint dark:border-slate-700"
            >
              <ExternalLink size={14} /> Demo (add link)
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesFilter = filter === "All" || p.category === filter;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        q === "" ||
        p.title.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <section id="projects" className="border-t border-surface-border py-20 sm:py-28 dark:border-slate-800">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          comment="// 03 — projects"
          title="Featured Projects"
          description="A mix of production-style full-stack builds and applied AI research."
        />

        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  filter === f
                    ? "border-accent bg-accent text-white"
                    : "border-surface-border text-ink-muted hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-400"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tech..."
              className="w-full rounded-lg border border-surface-border bg-white py-2 pl-9 pr-3 text-sm text-ink outline-none placeholder:text-ink-faint focus:border-accent dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-sm text-ink-muted dark:text-slate-400">No projects match your search.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
