import { GA_MEASUREMENT_ID } from "@/data/portfolio";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Loads gtag.js once, if a measurement ID is configured. */
export function initAnalytics() {
  if (typeof window === "undefined") return;
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID.startsWith("G-XXXX")) return;
  if (window.gtag) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  const gtag = (...args: unknown[]) => {
    window.dataLayer!.push(args);
  };
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
}
