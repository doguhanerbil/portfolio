/**
 * Projects data - Based on GitHub repositories
 * Featured projects (featured: true) will appear in a highlighted section
 */

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  year: number;
  metrics?: {
    label: string;
    value: string;
  }[];
};

export const projects: Project[] = [
  {
    id: "mini-tasks",
    title: "Mini Tasks",
    description:
      "A full-stack task management application with Spring Boot REST API, JWT authentication, PostgreSQL, and a minimal React frontend. Dockerized with CI/CD via GitHub Actions.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "Docker", "JWT"],
    githubUrl: "https://github.com/doguhanerbil/mini-tasks",
    liveUrl: undefined,
    imageUrl: undefined,
    featured: true,
    year: 2025,
    metrics: [
      { label: "Focus", value: "Full Stack + Auth" },
      { label: "Stack", value: "Spring Boot + React" },
    ],
  },
  {
    id: "crypto-blog",
    title: "Crypto Blog",
    description:
      "A content-focused blog platform with SEO-optimized structure, clean typography, and responsive design for cryptocurrency and blockchain topics.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/doguhanerbil/crypto-blog",
    liveUrl: undefined,
    imageUrl: undefined,
    featured: true,
    year: 2025,
    metrics: [
      { label: "Focus", value: "Content + SEO" },
      { label: "Stack", value: "Next.js + TS" },
    ],
  },
  {
    id: "turborepo",
    title: "Turborepo Playground",
    description:
      "Monorepo architecture experiment exploring Turborepo for scalable workspace organization, shared packages, and optimized build caching.",
    technologies: ["Turborepo", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/doguhanerbil/turborepo",
    liveUrl: undefined,
    imageUrl: undefined,
    featured: true,
    year: 2025,
    metrics: [
      { label: "Focus", value: "Monorepo Architecture" },
      { label: "Stack", value: "Turbo + TS" },
    ],
  },
];

// Helper to get featured projects
export const featuredProjects = projects.filter((p) => p.featured);

// Helper to get non-featured projects
export const otherProjects = projects.filter((p) => !p.featured);
