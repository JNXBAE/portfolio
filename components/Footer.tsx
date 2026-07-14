import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-surface-border py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 px-5 sm:flex-row sm:justify-between sm:px-8">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="text-ink-faint transition-colors hover:text-accent"
          >
            <Mail size={16} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-faint transition-colors hover:text-accent"
          >
            <Github size={16} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-faint transition-colors hover:text-accent"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
