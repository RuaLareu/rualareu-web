import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RUA | LAREU - Estudio Jurídico Contable en Mar del Plata",
    template: "%s | RUA | LAREU - Estudio Jurídico Contable",
  },
  description:
    "Estudio jurídico contable en Mar del Plata. Asesoramiento laboral, comercial, impositivo y contable. Soluciones claras para decisiones seguras.",
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
      "Estudio jurídico contable en Mar del Plata. Asesoramiento laboral, comercial, impositivo y contable. Soluciones claras para decisiones seguras.",
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
      "Estudio jurídico contable en Mar del Plata. Asesoramiento laboral, comercial, impositivo y contable.",
    images: ["/og/og-default.jpg"],
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
    <html lang="es-AR" className={inter.variable}>
      <body className="antialiased bg-background text-text">{children}</body>
    </html>
  );
}
