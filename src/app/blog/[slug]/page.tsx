import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { generatePageMetadata, generateArticleSchema } from "@/lib/metadata";
import { MDXContent } from "@/components/ui/MDXContent";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    ogImage: `/blog/${post.slug}/opengraph-image`,
  });
}

function estimateReadTime(content: string): number {
  return Math.max(1, Math.ceil(content.split(/\s+/).length / 220));
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();

  // Related: same category first, then others, exclude current
  const sameCategory = allPosts.filter((p) => p.slug !== post.slug && p.category === post.category);
  const otherPosts = allPosts.filter((p) => p.slug !== post.slug && p.category !== post.category);
  const related = [...sameCategory, ...otherPosts].slice(0, 3);

  const readTime = estimateReadTime(post.content);
  const articleSchema = generateArticleSchema(post);

  return (
    <>
      {/* Schema JSON-LD: Article + BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 bg-primary text-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-white/40 text-xs mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white/70 transition-colors">Publicaciones</Link>
              <span>/</span>
              <span className="text-white/70 truncate max-w-[200px]">{post.title}</span>
            </nav>

            <span className="inline-block text-white/70 text-[10px] font-sackers-light tracking-[0.2em] mb-4">
              {post.category}
            </span>
            <h1 id="post-title" className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-5 text-white/50 text-sm">
              <span className="flex items-center gap-1.5">
                <User size={14} />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {post.date}
              </span>
              <span className="text-white/30">·</span>
              <span>{readTime} min de lectura</span>
            </div>
          </div>
        </section>

        {/* Article */}
        <section className="section-padding bg-background">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <article role="article" aria-labelledby="post-title" className="prose-custom">
              <MDXContent source={post.content} />
            </article>

            <div className="mt-16 pt-8 border-t border-primary/20">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors"
              >
                <ArrowLeft size={14} />
                Volver a publicaciones
              </Link>
            </div>
          </div>
        </section>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="section-padding bg-white">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
              <ScrollAnimation className="mb-10">
                <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl mb-2">
                  Publicaciones relacionadas
                </h2>
                <div className="w-8 h-px bg-accent mt-4" />
              </ScrollAnimation>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {related.map((p, i) => (
                  <ScrollAnimation key={p.slug} delay={i * 80}>
                    <Link
                      href={`/blog/${p.slug}`}
                      aria-label={`Leer: ${p.title}`}
                      className="group flex flex-col bg-background border border-primary/15 hover:border-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
                    >
                      <div className="h-1 bg-primary group-hover:bg-primary/80 transition-colors duration-200" />
                      <div className="flex flex-col flex-1 p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-[#314A43] text-[10px] font-sackers-light tracking-[0.2em]">
                            {p.category}
                          </span>
                          <span className="w-px h-3 bg-primary-light" />
                          <span className="text-text-secondary text-xs">{p.date}</span>
                        </div>
                        <h3 className="font-semibold text-text text-[15px] leading-snug group-hover:text-[#314A43] transition-colors">
                          {p.title}
                        </h3>
                        <p className="text-text-secondary text-xs leading-relaxed mt-2 line-clamp-2 flex-1">
                          {p.excerpt}
                        </p>
                        <div className="mt-4 flex items-center gap-1.5 text-[#314A43] text-xs font-medium">
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
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
