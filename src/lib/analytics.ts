export const GA_MEASUREMENT_ID = "G-YKJHWDY1EL";

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Dispara un evento de Google Analytics 4 de forma segura.
 * No-op en SSR o si gtag.js no terminó de cargar.
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params ?? {});
}
