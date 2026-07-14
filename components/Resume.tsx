"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { personal } from "@/lib/data";
import { trackResumeDownload } from "@/lib/analytics";

export default function Resume() {
  return (
    <section id="resume" className="border-t border-surface-border bg-surface-subtle py-20 sm:py-24 dark:border-slate-800 dark:bg-slate-900/20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6 rounded-3xl border border-surface-border bg-white px-6 py-14 text-center dark:border-slate-800 dark:bg-slate-900/40"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <FileText size={26} />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl dark:text-white">
              Want the full picture?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-ink-muted dark:text-slate-400">
              Download my resume for a complete summary of my skills, projects, and education.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={personal.resumeFile}
              download
              onClick={() => trackResumeDownload("resume-section")}
              className="btn-ripple inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download size={16} />
              Download Resume (PDF)
            </a>
            <a
              href={personal.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-surface-border px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-100"
            >
              Preview
            </a>
          </div>
          <p className="font-mono text-[11px] text-ink-faint">
            {/* TODO: upload the real PDF at /public/resume/ and update lib/data.ts */}
            resume.pdf placeholder — add your file at public/resume/
          </p>
        </motion.div>
      </div>
    </section>
  );
}
