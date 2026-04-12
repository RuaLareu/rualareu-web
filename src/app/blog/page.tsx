import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Blog | RUA | LAREU - Estudio Jurídico Contable",
  description:
    "Artículos y novedades legales e impositivas de RUA | LAREU. Información útil sobre derecho laboral, comercial, impuestos y más.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <div className="pt-24 bg-primary text-white text-center py-16">
          <div className="max-w-2xl mx-auto px-6">
            <p className="font-sackers-light text-accent text-xs tracking-[0.3em] mb-4">
              Novedades e información
            </p>
            <h1 className="font-sackers-heavy text-4xl sm:text-5xl">Blog</h1>
            <div className="w-12 h-px bg-accent mx-auto mt-6" />
          </div>
        </div>

        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-text-secondary text-center text-sm">
              Próximamente — los artículos del blog estarán disponibles aquí.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
