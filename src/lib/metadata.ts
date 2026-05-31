import type { Metadata } from "next";
import { SITE_URL } from "./constants";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
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
      type: "article",
      // og:image cascadea desde src/app/opengraph-image.png
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      // twitter:image cascadea desde src/app/opengraph-image.png
    },
  };
}

export function generateArticleSchema(post: {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  author: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        url: `${SITE_URL}/blog/${post.slug}`,
        author: {
          "@type": "Organization",
          name: "RUA | LAREU - Estudio Jurídico Contable",
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: "RUA | LAREU - Estudio Jurídico Contable",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/rua-lareu-logo-clasico.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/blog/${post.slug}`,
        },
        articleSection: post.category,
        inLanguage: "es-AR",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Publicaciones",
            item: `${SITE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `${SITE_URL}/blog/${post.slug}`,
          },
        ],
      },
    ],
  };
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "LegalService", "AccountingService"],
  name: "RUA | LAREU - Estudio Jurídico Contable",
  description:
    "Estudio jurídico contable en Mar del Plata especializado en derecho laboral, comercial, civil y asesoramiento impositivo y contable.",
  url: SITE_URL,
  telephone: "+54-9-223-697-2421",
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
