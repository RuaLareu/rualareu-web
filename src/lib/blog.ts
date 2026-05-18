import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  author: string;
  tags: string[];
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title ?? "",
      date: data.date ?? "",
      category: data.category ?? "",
      excerpt: data.excerpt ?? "",
      author: data.author ?? "",
      tags: Array.isArray(data.tags) ? data.tags : [],
      content,
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    category: data.category ?? "",
    excerpt: data.excerpt ?? "",
    author: data.author ?? "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    content,
  };
}

export function getLatestPosts(count: number): BlogPost[] {
  return getAllPosts().slice(0, count);
}

// Agrupación de categorías para la home (1 jurídica + 2 contables, etc.)
const JURIDIC_CATEGORIES = new Set([
  "Civil",
  "Familia",
  "Laboral",
  "Consumidor",
  "Societario",
  "Salud",
  "Propiedad Intelectual",
]);
const CONTABLE_CATEGORIES = new Set([
  "Contable",
  "Impositivo",
  "Comercio Exterior",
  "Compliance",
  "Laboral-Contable",
]);

export function getLatestPostsBalanced(
  juridicCount: number,
  contableCount: number
): BlogPost[] {
  const all = getAllPosts();
  const juridicos = all
    .filter((p) => JURIDIC_CATEGORIES.has(p.category))
    .slice(0, juridicCount);
  const contables = all
    .filter((p) => CONTABLE_CATEGORIES.has(p.category))
    .slice(0, contableCount);
  return [...juridicos, ...contables].sort((a, b) => (a.date > b.date ? -1 : 1));
}
