/**
 * Writing/Articles data - Links to Medium posts or other publications
 * These will be displayed in the Writing section
 */

export type Article = {
    id: string;
    title: string;
    description: string;
    url: string;
    publishedAt: string;
    readTime?: string;
    platform: "medium" | "dev.to" | "hashnode" | "personal";
    tags: string[];
    featured?: boolean;
};

export const articles: Article[] = [
  {
    id: "ddd-what-it-is-and-why-it-matters",
    title: "Domain Driven Design (DDD): What It Is and Why It Matters",
    description:
      "An introduction to Domain-Driven Design and why it helps manage complexity in real-world systems.",
    url: "https://medium.com/@doguhanerbil/domain-driven-design-ddd-what-it-is-and-why-it-matters-942c4d21807c",
    publishedAt: "2025-11-19",
    readTime: "6 min read",
    platform: "medium",
    tags: ["DDD", "Architecture", "Backend"],
    featured: true,
  },
];


// Helper to get featured articles
export const featuredArticles = articles.filter((a) => a.featured);
