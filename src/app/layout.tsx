import type { Metadata } from "next";
import { Montserrat, Lora } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RUA | LAREU - Estudio Jurídico Contable en Mar del Plata",
    template: "%s | RUA | LAREU - Estudio Jurídico Contable",
  },
  description:
    "Estudio jurídico y contable en Mar del Plata. Asesoramiento en derecho laboral, civil, familia, defensa del consumidor, contabilidad, impuestos y sociedades.",
  keywords: [
    "estudio jurídico contable",
    "abogados Mar del Plata",
    "contador Mar del Plata",
    "asesoramiento laboral",
    "asesoramiento impositivo",
    "Mar del Plata",
    "Buenos Aires",
    "Argentina",
  ],
  authors: [{ name: "RUA | LAREU Estudio Jurídico Contable" }],
  creator: "RUA | LAREU",
  publisher: "RUA | LAREU",
  metadataBase: new URL("https://rualareu.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://rualareu.com",
    siteName: "RUA | LAREU - Estudio Jurídico Contable",
    title: "RUA | LAREU - Estudio Jurídico Contable en Mar del Plata",
    description:
      "Estudio jurídico y contable en Mar del Plata. Asesoramiento en derecho laboral, civil, familia, defensa del consumidor, contabilidad, impuestos y sociedades.",
    images: [
      {
        url: "/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "RUA | LAREU - Estudio Jurídico Contable",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RUA | LAREU - Estudio Jurídico Contable en Mar del Plata",
    description:
      "Estudio jurídico y contable en Mar del Plata. Asesoramiento en derecho laboral, civil, familia, defensa del consumidor, contabilidad, impuestos y sociedades.",
    images: ["/og/og-default.jpg"],
  },
  icons: {
    icon: [
      { url: "/images/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/images/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${montserrat.variable} ${lora.variable}`}>
      <body className="antialiased bg-background text-text">{children}</body>
    </html>
  );
}
