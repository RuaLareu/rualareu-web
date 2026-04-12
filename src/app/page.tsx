import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import PartnersSection from "@/components/sections/PartnersSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import BlogPreview from "@/components/sections/BlogPreview";
import CtaBanner from "@/components/sections/CtaBanner";
import ContactSection from "@/components/sections/ContactSection";
import { localBusinessSchema } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "RUA | LAREU - Estudio Jurídico Contable en Mar del Plata",
  description:
    "Estudio jurídico contable en Mar del Plata. Asesoramiento laboral, comercial, impositivo y contable. Respuestas claras para decisiones seguras.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD: LocalBusiness + AggregateRating */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Header />

      <main>
        {/* 1 — Hero (full viewport) */}
        <Hero />

        {/* 2 — Estudio (quiénes somos) */}
        <AboutSection />

        {/* 3 — Servicios (jurídicos + contables) */}
        <ServicesGrid />

        {/* 3.5 — CTA banner with background photo */}
        <CtaBanner />

        {/* 4 — Socios */}
        <PartnersSection />

        {/* 5 — Reseñas Google */}
        <ReviewsSection />

        {/* 6 — Blog preview */}
        <BlogPreview />

        {/* 7 — Contacto */}
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
