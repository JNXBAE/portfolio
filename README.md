# Mohamed Jubair K — Full Stack Developer Portfolio

A modern, responsive portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Built for Full Stack / MERN Stack / Software Engineer / Web Developer / Backend Developer applications.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in NEXT_PUBLIC_FORMSPREE_ENDPOINT — see below
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> **Note:** this environment builds fonts (`Inter`, `Poppins`, `JetBrains Mono`) via `next/font/google`, which needs internet access to Google Fonts at build/dev time. This is normal on your machine, Vercel, or any CI with outbound internet — no local font files are required.

## Contact form (Formspree)

The contact form sends messages straight to your inbox via [Formspree](https://formspree.io) — no custom backend required. Free tier covers 50 submissions/month.

1. Go to [formspree.io](https://formspree.io) and sign up (or sign in).
2. Create a new form and set its recipient email to **jubair247987@gmail.com**.
3. Formspree gives you an endpoint that looks like `https://formspree.io/f/xxxxxxxx` — copy it.
4. Create `.env.local` from the template and paste it in:
   ```bash
   cp .env.example .env.local
   ```
   ```env
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
   ```
5. Restart the dev server (`npm run dev`) so the new env var is picked up.
6. On first real submission, Formspree emails you a confirmation link — click it once to activate the form.
7. On Vercel: add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` under **Project Settings → Environment Variables** with the same value, then redeploy.

**How it works:** `components/Contact.tsx` validates Name, Email, Subject, and Message client-side, then POSTs directly to your Formspree endpoint from the browser with `Accept: application/json` (so Formspree returns JSON instead of redirecting). Success clears the form and shows a toast; failures (network issues, Formspree validation errors, or a missing env var) show an error toast and leave your input intact so nothing is lost.

There's no server-side code involved and no secret to protect — the Formspree endpoint is a public form URL by design, safe to ship in the client bundle. Formspree's own spam filtering (honeypot + optional reCAPTCHA, configurable in your form's dashboard) protects it from abuse.

## Scripts

| Command         | Description                     |
| ---------------- | -------------------------------- |
| `npm run dev`     | Start the dev server             |
| `npm run build`   | Production build                 |
| `npm run start`   | Serve the production build       |
| `npm run lint`    | Run ESLint                       |

## Project structure

```
.env.example         Template for NEXT_PUBLIC_FORMSPREE_ENDPOINT
app/
  layout.tsx        Root layout, fonts, SEO metadata
  page.tsx           Assembles all sections
  globals.css         Tailwind + base styles
  sitemap.ts          Generated sitemap
components/
  Navbar.tsx, Hero.tsx, About.tsx, Skills.tsx, Projects.tsx,
  Experience.tsx, Achievements.tsx, Certifications.tsx, Education.tsx,
  Resume.tsx, Contact.tsx, Footer.tsx
  ThemeToggle.tsx, ScrollProgress.tsx, ScrollToTop.tsx, TypingEffect.tsx,
  AnimatedCounter.tsx, CopyEmailButton.tsx, ToastProvider.tsx,
  SectionHeading.tsx, ThemeScript.tsx
lib/
  data.ts             All resume content — single source of truth
  analytics.ts         Resume download tracking helper
  useActiveSection.ts  Nav scroll-spy hook
  utils.ts             Small shared helpers
public/
  resume/              Resume PDF (placeholder included — replace it)
  images/projects/     Project screenshots (add real images here)
  robots.txt
```

## Before you deploy — required TODOs

Everything below is a real placeholder, clearly marked with `// TODO` comments in the code. No content was invented — the original brief didn't include these, so they need your input:

1. **Resume PDF** — replace `public/resume/Mohamed_Jubair_K_Resume.pdf` (currently a placeholder file) with your real resume. Keep the filename, or update `personal.resumeFile` in `lib/data.ts`.
2. **GitHub / LinkedIn URLs** — set real profile URLs in `lib/data.ts` (`personal.github`, `personal.linkedin`).
3. **Project screenshots** — add images to `public/images/projects/` and swap the `ProjectImagePlaceholder` component in `components/Projects.tsx` for a real `next/image`. See the README in that folder for sizing guidance.
4. **Project repo / demo links** — add `github` / `demo` URLs per project in `lib/data.ts` (`projects` array). Cards show a disabled "add link" state until these are filled in.
5. **Institution name** — add your college/university name to `education.institution` in `lib/data.ts`.
6. **Contact form** — set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in `.env.local` (see [Contact form (Formspree)](#contact-form-formspree) above). The form won't send anywhere until this is set.
7. **Site URL** — replace the placeholder `https://mohamedjubair.dev` in `app/layout.tsx` and `app/sitemap.ts` with your real deployed domain once you have one.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. Once deployed, update the site URL TODOs above with your real Vercel/custom domain.

## Features implemented

- Hero with typing-effect role rotation, resume download, and contact CTA
- About, Skills (icon cards), Projects (filter + search), Experience timeline
- Achievements with animated counters, Certifications, Education
- Resume section + tracked downloads (`lib/analytics.ts`)
- Contact form (client-validated, sends via Formspree — no backend needed) + copy-email button + toast notifications
- Dark/light mode (no-flash, persisted to `localStorage`)
- Scroll progress bar, scroll-to-top button, active nav-link highlighting
- Scroll-triggered fade/slide animations (Framer Motion), card hover elevation, button ripple
- SEO metadata, Open Graph/Twitter cards, `sitemap.xml`, `robots.txt`
- Accessible: visible focus states, semantic landmarks, `prefers-reduced-motion` respected
- Fully responsive, mobile-first layout

## Design notes

Theme follows the brief: white background, dark ink text, blue accent (`#2563EB`), Inter/Poppins typography, Apple/Linear/Vercel/Stripe-inspired restraint. The signature detail is the monospace `// 0X — section` comment label used to introduce each section — a nod to the developer's own vernacular (code comments) rather than a generic numbered marker.
