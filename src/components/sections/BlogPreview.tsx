import Link from "next/link";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const posts = [
  {
    slug: "despido-sin-causa-indemnizacion",
    category: "Laboral",
    title: "Despido sin causa: todo lo que tenés que saber sobre tu indemnización",
    excerpt:
      "Si te despidieron sin causa, tenés derecho a una indemnización que incluye varios rubros. Te explicamos cómo se calcula y qué pasos seguir.",
    date: "15 Mar 2025",
  },
  {
    slug: "monotributo-responsable-inscripto-cuando-cambiar",
    category: "Impositivo",
    title: "¿Cuándo conviene pasar de monotributo a responsable inscripto?",
    excerpt:
      "El cambio de categoría fiscal es una decisión importante. Analizamos los factores clave para determinar cuál es el momento indicado para tu negocio.",
    date: "8 Feb 2025",
  },
  {
    slug: "sas-srl-mejor-opcion-nuevo-negocio",
    category: "Comercial",
    title: "SAS o SRL: ¿cuál es la mejor opción para tu nuevo negocio?",
    excerpt:
      "Dos de las formas societarias más usadas en Argentina. Comparamos ventajas, costos y tiempos para ayudarte a elegir bien desde el inicio.",
    date: "20 Ene 2025",
  },
];

export default function BlogPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Header ── */}
        <ScrollAnimation className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5 mb-12">
          <div>
            <p className="font-sackers-light text-accent text-[10px] sm:text-xs tracking-[0.32em] mb-4">
              Novedades
            </p>
            <h2 className="font-sackers-heavy text-primary text-3xl sm:text-4xl lg:text-5xl">
              Blog
            </h2>
            <div className="w-12 h-px bg-accent mt-6" />
          </div>
          <Link
            href="/blog"
            className="flex-shrink-0 text-sm text-text-secondary hover:text-primary transition-colors"
          >
            Ver todos los artículos →
          </Link>
        </ScrollAnimation>

        {/* ── Post cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <ScrollAnimation key={post.slug} delay={i * 80}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white border border-gray-100 hover:border-accent/20 hover:shadow-sm transition-all duration-200"
              >
                {/* Color bar top */}
                <div className="h-1 bg-primary group-hover:bg-accent transition-colors duration-200" />

                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-accent text-[10px] font-sackers-light tracking-[0.2em]">
                      {post.category}
                    </span>
                    <span className="w-px h-3 bg-gray-200" />
                    <span className="text-text-secondary text-xs">{post.date}</span>
                  </div>
                  <h3 className="font-semibold text-text text-[15px] leading-snug mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-accent text-xs font-medium">
                    Leer más
                    <span
                      className="group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>

      </div>
    </section>
  );
}
