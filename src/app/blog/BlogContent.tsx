"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle, Search } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import type { BlogPost } from "@/lib/blog";

function estimateReadTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 220));
}

function normalize(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function FeaturedCard({ post, readTime }: { post: BlogPost; readTime: number }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white border border-primary/15 border-l-4 border-l-accent hover:border-accent hover:shadow-lg transition-all duration-300 mb-10"
    >
      <div className="p-8 lg:p-10">
        <span className="font-sackers-light text-[#314A43] text-[10px] tracking-[0.3em] block mb-4">
          Publicación destacada
        </span>
        <div className="flex items-center flex-wrap gap-3 mb-4">
          <span className="text-[#314A43] text-[10px] font-sackers-light tracking-[0.2em]">
            {post.category}
          </span>
          <span className="w-px h-3 bg-primary-light" />
          <span className="text-text-secondary text-xs">{post.date}</span>
          <span className="w-px h-3 bg-primary-light" />
          <span className="text-text-secondary text-xs">{post.author}</span>
          <span className="w-px h-3 bg-primary-light" />
          <span className="text-text-secondary text-xs">{readTime} min de lectura</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-text leading-snug mb-4 group-hover:text-[#314A43] transition-colors max-w-3xl">
          {post.title}
        </h2>
        <p className="text-text-secondary text-sm sm:text-[15px] leading-relaxed line-clamp-3 mb-5 max-w-3xl">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-1.5 text-[#314A43] text-sm font-medium">
          Leer publicación
          <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
        </div>
      </div>
    </Link>
  );
}

function PostCard({
  post,
  author,
  readTime,
  delay,
}: {
  post: BlogPost;
  author: string;
  readTime: number;
  delay: number;
}) {
  return (
    <ScrollAnimation delay={delay}>
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col bg-white border border-primary/15 hover:border-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
      >
        <div className="h-1 bg-primary group-hover:bg-primary/80 transition-colors duration-200" />
        <div className="flex flex-col flex-1 p-6">
          <div className="flex items-center flex-wrap gap-3 mb-4">
            <span className="text-[#314A43] text-[10px] font-sackers-light tracking-[0.2em]">
              {post.category}
            </span>
            <span className="w-px h-3 bg-primary-light" />
            <span className="text-text-secondary text-xs">{post.date}</span>
            <span className="w-px h-3 bg-primary-light" />
            <span className="text-text-secondary text-xs">{author}</span>
          </div>
          <h3 className="font-semibold text-text text-[15px] leading-snug mb-3 group-hover:text-[#314A43] transition-colors">
            {post.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed flex-1 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="mt-5 flex items-center justify-between">
            <span className="text-text-secondary/50 text-xs">{readTime} min de lectura</span>
            <span className="flex items-center gap-1.5 text-[#314A43] text-xs font-medium">
              Leer más
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
            </span>
          </div>
        </div>
      </Link>
    </ScrollAnimation>
  );
}

function NewsletterBlock() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      setError("Ingresá un email válido.");
      return;
    }
    setError("");
    setSubscribed(true);
  };

  return (
    <div className="bg-white p-6 border border-primary/15">
      <h3 className="font-sackers-medium text-[10px] tracking-[0.2em] text-primary mb-3">
        Newsletter
      </h3>

      {subscribed ? (
        <p className="text-text-secondary text-sm leading-relaxed">
          ¡Gracias! Te mantendremos informado.
        </p>
      ) : (
        <>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Recibí análisis jurídicos y novedades legales en tu email.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              placeholder="tu@email.com"
              aria-label="Email"
              className="w-full border border-primary/20 px-3 py-2 text-sm text-text placeholder:text-text-secondary/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors duration-200"
            />
            {error && (
              <p className="text-[11px] text-red-600 mt-1.5">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-primary text-white text-sm py-2.5 hover:bg-primary/90 mt-2 transition-colors duration-200"
            >
              Suscribirme
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default function BlogContent({ posts }: { posts: BlogPost[] }) {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    setVisibleCount(6);
  }, [activeFilter, searchQuery]);

  const byCategory = activeFilter === "Todos"
    ? posts
    : posts.filter((p) => p.category === activeFilter);

  const normalizedQuery = normalize(searchQuery.trim());
  const filtered = normalizedQuery === ""
    ? byCategory
    : byCategory.filter(
        (p) =>
          normalize(p.title).includes(normalizedQuery) ||
          normalize(p.excerpt).includes(normalizedQuery)
      );

  const areas = [
    "Todos",
    ...Array.from(new Set(posts.map((p) => p.category))).sort((a, b) => a.localeCompare(b, "es")),
  ];

  // Popular topics: aggregate tags across all posts, sort by frequency, take top 8.
  // Fallback to a default list if no tags are defined.
  const tagCounts = new Map<string, number>();
  posts.forEach((p) => {
    p.tags.forEach((tag) => {
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
    });
  });
  const popularTopics = tagCounts.size > 0
    ? Array.from(tagCounts.entries())
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "es"))
        .slice(0, 8)
        .map(([tag]) => tag)
    : ["Despidos", "Monotributo", "ART", "Consumidor", "Divorcios", "SAS", "Amparos", "Facturación"];

  const handleTopicClick = (topic: string) => {
    if (searchQuery === topic) {
      setSearchQuery("");
    } else {
      setSearchQuery(topic);
      setActiveFilter("Todos");
    }
  };

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

      {/* Main content */}
      <div className="lg:col-span-3">

        {/* Search */}
        <div className="relative mb-4">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar publicaciones..."
            aria-label="Buscar publicaciones"
            className="w-full bg-white border border-primary/20 pl-11 pr-4 py-2.5 text-sm text-text placeholder:text-text-secondary/60 hover:border-accent focus:border-accent focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors duration-200"
          />
        </div>

        {/* Filters */}
        <div
          role="group"
          aria-label="Filtrar por categoría"
          className="flex flex-wrap gap-2 mb-12"
        >
          {areas.map((area) => {
            const isActive = activeFilter === area;
            return (
              <button
                key={area}
                type="button"
                onClick={() => setActiveFilter(area)}
                aria-pressed={isActive}
                className={`text-xs px-4 py-2 border transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-text-secondary border-primary/20 hover:border-accent hover:text-accent"
                }`}
              >
                {area}
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-text-secondary py-12">
            {normalizedQuery !== ""
              ? "No se encontraron publicaciones para tu búsqueda."
              : "No hay publicaciones en esta categoría todavía."}
          </p>
        ) : (
          <>
            {featured && (
              <FeaturedCard post={featured} readTime={estimateReadTime(featured.content)} />
            )}

            {rest.length > 0 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.slice(0, visibleCount).map((post, i) => (
                    <PostCard
                      key={post.slug}
                      post={post}
                      author={post.author}
                      readTime={estimateReadTime(post.content)}
                      delay={i * 60}
                    />
                  ))}
                </div>
                {visibleCount < rest.length && (
                  <div className="flex justify-center mt-10">
                    <button
                      onClick={() => setVisibleCount((c) => c + 6)}
                      className="border border-primary/20 hover:border-accent text-sm text-text-secondary hover:text-accent px-8 py-3 transition-all duration-200"
                    >
                      Cargar más publicaciones
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-1">
        <div className="lg:sticky lg:top-24 space-y-8">

          {/* Popular topics */}
          <div className="bg-white p-6 border border-primary/15">
            <h3 className="font-sackers-medium text-[10px] tracking-[0.2em] text-primary mb-5">
              Temas
            </h3>
            <div
              role="group"
              aria-label="Temas populares"
              className="flex flex-wrap gap-2"
            >
              {popularTopics.map((topic) => {
                const isActive = searchQuery === topic;
                return (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => handleTopicClick(topic)}
                    aria-pressed={isActive}
                    className={`text-xs px-3 py-1.5 border transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-white border-primary"
                        : "bg-primary-light text-text-secondary border-transparent hover:text-primary"
                    }`}
                  >
                    {topic}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Newsletter */}
          <NewsletterBlock />

          {/* CTA */}
          <div className="bg-primary p-6 text-center">
            <p className="font-sackers-medium text-[10px] tracking-[0.2em] text-white/90 mb-4">
              ¿Necesitás asesoramiento?
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Consultanos sobre cualquiera de los temas que publicamos.
            </p>
            <a
              href="https://wa.me/5492235790012?text=Hola%2C%20me%20contacto%20desde%20la%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary text-sm font-semibold w-full py-3 rounded hover:bg-white/90 transition-all duration-300"
            >
              <MessageCircle size={16} />
              Consultanos
            </a>
          </div>

        </div>
      </aside>

    </div>
  );
}
