import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personal } from "@/lib/data";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import ThemeScript from "@/components/ThemeScript";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://mohamedjubair.dev"; // TODO: replace with real deployed URL

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${personal.name} — Full Stack Developer`,
  description:
    "Portfolio of Mohamed Jubair K, a Full Stack Developer specializing in React, Next.js, Node.js, and applied AI/ML systems.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Mohamed Jubair K",
  ],
  authors: [{ name: personal.name }],
  openGraph: {
    title: `${personal.name} — Full Stack Developer`,
    description:
      "Portfolio of Mohamed Jubair K, a Full Stack Developer specializing in React, Next.js, Node.js, and applied AI/ML systems.",
    url: siteUrl,
    siteName: `${personal.name} Portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — Full Stack Developer`,
    description:
      "Portfolio of Mohamed Jubair K, a Full Stack Developer specializing in React, Next.js, Node.js, and applied AI/ML systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-sans bg-surface text-ink antialiased dark:bg-[#0A0F1C] dark:text-slate-100 transition-colors duration-300`}
      >
        <ScrollProgress />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
