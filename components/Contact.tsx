"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { personal } from "@/lib/data";
import { useToast } from "@/components/ToastProvider";
import CopyEmailButton from "@/components/CopyEmailButton";
import SectionHeading from "@/components/SectionHeading";

type FormState = { name: string; email: string; subject: string; message: string };
type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: "", email: "", subject: "", message: "" };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Formspree endpoint, e.g. https://formspree.io/f/xxxxxxxx
// Set NEXT_PUBLIC_FORMSPREE_ENDPOINT in .env.local — see .env.example.
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!form.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (form.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_REGEX.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.subject.trim()) {
    errors.subject = "Please add a subject.";
  }

  if (!form.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const { showToast } = useToast();

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Clear a field's error as soon as the person starts fixing it
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      showToast("Please fix the highlighted fields.", "error");
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      showToast(
        "Contact form isn't configured yet — email me directly instead.",
        "error"
      );
      // eslint-disable-next-line no-console
      console.error(
        "Missing NEXT_PUBLIC_FORMSPREE_ENDPOINT. Add it to .env.local — see .env.example."
      );
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          // Sent as the form's display title in Formspree notification emails
          _subject: `Portfolio contact: ${form.subject}`,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        const message =
          data?.errors?.map((err: { message: string }) => err.message).join(" ") ||
          "Formspree rejected the submission.";
        throw new Error(message);
      }

      showToast("Message sent — I'll get back to you soon.");
      setForm(initialState);
      setErrors({});
    } catch (err) {
      showToast(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please email me directly instead.",
        "error"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-surface-border py-20 sm:py-28 dark:border-slate-800">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          comment="// 08 — contact"
          title="Let's build something"
          description="Open to Full Stack, MERN Stack, Software Engineer, Web Developer, and Backend Developer roles."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between rounded-xl border border-surface-border bg-white p-4 dark:border-slate-800 dark:bg-slate-900/40">
              <div className="flex items-center gap-3">
                <Mail size={17} className="text-accent" />
                <span className="text-sm text-ink dark:text-slate-200">{personal.email}</span>
              </div>
              <CopyEmailButton email={personal.email} />
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-surface-border bg-white p-4 dark:border-slate-800 dark:bg-slate-900/40">
              <Phone size={17} className="text-accent" />
              <span className="text-sm text-ink dark:text-slate-200">{personal.phone}</span>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-surface-border bg-white p-4 dark:border-slate-800 dark:bg-slate-900/40">
              <MapPin size={17} className="text-accent" />
              <span className="text-sm text-ink dark:text-slate-200">{personal.location}</span>
            </div>

            <div className="flex gap-3 pt-1">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-surface-border bg-white py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-200"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-surface-border bg-white py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-200"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-surface-border bg-white p-6 dark:border-slate-800 dark:bg-slate-900/40"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-ink-muted dark:text-slate-400">
                  Name
                </label>
                <input
                  id="name"
                  required
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className={`w-full rounded-lg border bg-surface-subtle px-3.5 py-2.5 text-sm text-ink outline-none focus:border-accent dark:bg-slate-800 dark:text-slate-100 ${
                    errors.name ? "border-red-400 dark:border-red-500" : "border-surface-border dark:border-slate-700"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ink-muted dark:text-slate-400">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className={`w-full rounded-lg border bg-surface-subtle px-3.5 py-2.5 text-sm text-ink outline-none focus:border-accent dark:bg-slate-800 dark:text-slate-100 ${
                    errors.email ? "border-red-400 dark:border-red-500" : "border-surface-border dark:border-slate-700"
                  }`}
                  placeholder="you@company.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-ink-muted dark:text-slate-400">
                Subject
              </label>
              <input
                id="subject"
                required
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                value={form.subject}
                onChange={(e) => updateField("subject", e.target.value)}
                className={`w-full rounded-lg border bg-surface-subtle px-3.5 py-2.5 text-sm text-ink outline-none focus:border-accent dark:bg-slate-800 dark:text-slate-100 ${
                  errors.subject ? "border-red-400 dark:border-red-500" : "border-surface-border dark:border-slate-700"
                }`}
                placeholder="Full Stack Developer opportunity"
              />
              {errors.subject && (
                <p id="subject-error" className="mt-1 text-xs text-red-500">
                  {errors.subject}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-ink-muted dark:text-slate-400">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                className={`w-full resize-none rounded-lg border bg-surface-subtle px-3.5 py-2.5 text-sm text-ink outline-none focus:border-accent dark:bg-slate-800 dark:text-slate-100 ${
                  errors.message ? "border-red-400 dark:border-red-500" : "border-surface-border dark:border-slate-700"
                }`}
                placeholder="Tell me about the role or project..."
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-red-500">
                  {errors.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="btn-ripple inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
            >
              {submitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
