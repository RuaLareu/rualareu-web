"use client";

import { useEffect } from "react";
import Script from "next/script";
import { GA_MEASUREMENT_ID, trackEvent } from "@/lib/analytics";

/**
 * Google Analytics 4 + tracking automático de clicks en tel: y wa.me.
 *
 * Carga gtag.js con strategy="afterInteractive" y monta un único listener
 * delegado en `document` que captura todos los clicks sobre <a href="tel:..."
 * y <a href="*wa.me*" (incluyendo enlaces dentro de artículos del blog).
 * Esto evita tener que instrumentar cada componente individualmente.
 *
 * El envío del formulario de contacto se trackea por separado desde
 * ContactForm.tsx (no es un click sobre un anchor).
 */
export default function GoogleAnalytics() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { phone: href.replace(/^tel:/, "") });
      } else if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        trackEvent("whatsapp_click", { url: href });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
