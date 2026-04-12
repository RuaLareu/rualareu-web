import type { Metadata } from "next";
import { SITE_URL } from "./constants";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage = "/og/og-default.jpg",
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "LegalService"],
  name: "RUA | LAREU - Estudio Jurídico Contable",
  description:
    "Estudio jurídico contable en Mar del Plata especializado en derecho laboral, comercial, civil y asesoramiento impositivo y contable.",
  url: SITE_URL,
  telephone: "+54-9-223-579-0012",
  email: "info@rualareu.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Almirante Brown 3071, Piso 2",
    addressLocality: "Mar del Plata",
    postalCode: "7600",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -38.0055,
    longitude: -57.5426,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "18",
    bestRating: "5",
    worstRating: "1",
  },
  founder: [
    {
      "@type": ["Person", "Attorney"],
      name: "Joaquín Rua",
      jobTitle: "Abogado - Socio Fundador",
      description: "Abogado matriculado especialista en Derecho Laboral y Comercial.",
    },
    {
      "@type": "Person",
      name: "Francisco Lareu",
      jobTitle: "Contador Público - Socio Fundador",
      description:
        "Contador Público matriculado especialista en planificación tributaria, auditoría y consultoría financiera.",
    },
  ],
};
