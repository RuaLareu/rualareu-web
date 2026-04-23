import Link from "next/link";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { getLatestPosts } from "@/lib/blog";

export default function BlogPreview() {
  const posts = getLatestPosts(3);

  if (posts.length === 0) return null;

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <ScrollAnimation className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5 mb-12">
          <div>
            <p className="font-sackers-light text-accent text-[10px] sm:text-xs tracking-[0.32em] mb-4">
              Novedades
            </p>
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
              Publicaciones
            </h2>
            <div className="w-12 h-px bg-accent mt-6" />
          </div>
          <Link
            href="/blog"
            className="flex-shrink-0 text-sm text-text-secondary hover:text-primary transition-colors"
          >
            Ver todas las publicaciones →
          </Link>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <ScrollAnimation key={post.slug} delay={i * 80}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-background border border-primary/15 hover:border-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-1 bg-primary group-hover:bg-primary/80 transition-colors duration-200" />
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-accent text-[10px] font-sackers-light tracking-[0.2em]">
                      {post.category}
                    </span>
                    <span className="w-px h-3 bg-primary-light" />
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
                    <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
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
