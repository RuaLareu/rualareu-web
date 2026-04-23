import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Publicaciones",
  description:
    "Artículos de análisis jurídico y contable sobre derecho laboral, impuestos, sociedades, derecho civil y temas de actualidad legal en Argentina.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Publicaciones | RUA | LAREU",
    description:
      "Artículos de análisis jurídico y contable sobre derecho laboral, impuestos, sociedades, derecho civil y temas de actualidad legal en Argentina.",
    url: `${SITE_URL}/blog`,
    inLanguage: "es-AR",
    publisher: {
      "@type": "LegalService",
      name: "RUA | LAREU - Estudio Jurídico Contable",
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: posts.map((post, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="font-sackers-light text-white/70 text-[10px] sm:text-xs tracking-[0.3em] mb-4">
              Análisis jurídico y contable
            </p>
            <h1 className="font-sackers-heavy text-3xl sm:text-4xl lg:text-5xl mb-6">
              Publicaciones
            </h1>
            <div className="w-12 h-px bg-white/30 mx-auto mb-6" />
            <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Análisis de temas de actualidad en derecho laboral, impuestos, sociedades
              y otras áreas de práctica.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <BlogContent posts={posts} />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
