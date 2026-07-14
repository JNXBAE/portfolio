// Lightweight, dependency-free tracking for resume downloads.
// Stores a local counter/timestamp and logs an event you can wire up to
// real analytics (GA4, Plausible, PostHog, etc.) by replacing the body
// of trackResumeDownload.

export function trackResumeDownload(source: string) {
  try {
    const key = "resume_download_count";
    const count = Number(localStorage.getItem(key) ?? "0") + 1;
    localStorage.setItem(key, String(count));
    localStorage.setItem("resume_download_last", new Date().toISOString());
  } catch {
    // localStorage unavailable (e.g. private browsing) — fail silently
  }

  // TODO: send to real analytics, e.g.:
  // window.gtag?.("event", "resume_download", { source });
  // eslint-disable-next-line no-console
  console.log(`[analytics] resume_download`, { source, at: new Date().toISOString() });
}
