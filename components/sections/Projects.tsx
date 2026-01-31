import { Github, ExternalLink } from "lucide-react";
import { projects, featuredProjects } from "@/data/projects";
import { TechTags } from "@/components/TechTag";

interface ProjectCardProps {
  project: (typeof projects)[0];
  featured?: boolean;
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`card-hover group relative rounded-lg border border-transparent p-6 ${
        featured
          ? "bg-[var(--color-bg-secondary)]"
          : "hover:bg-[var(--color-bg-secondary)]/50"
      } transition-all duration-200`}
    >
      {/* Header with title and links */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
            {project.title}
          </h3>
          {featured && project.metrics && (
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              {project.metrics.map((metric, idx) => (
                <span
                  key={idx}
                  className="text-xs text-[var(--color-text-tertiary)]"
                >
                  <span className="font-medium text-[var(--color-accent)]">
                    {metric.value}
                  </span>{" "}
                  {metric.label}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              <Github size={18} strokeWidth={1.5} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live`}
              className="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              <ExternalLink size={18} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm leading-normal text-[var(--color-text-secondary)]">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mt-4">
        <TechTags technologies={project.technologies} />
      </div>

      {/* Year */}
      <div className="mt-4 text-xs text-[var(--color-text-tertiary)]">
        {project.year}
      </div>
    </article>
  );
}

export function Projects() {
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="section scroll-mt-16"
      aria-label="Projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-[var(--color-bg-primary)]/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-text-primary)]">
          Projects
        </h2>
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-8">
          <div className="grid gap-4">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </div>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <div className="grid gap-4">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {/* GitHub Link */}
      <div className="mt-8">
        <a
          href="https://github.com/doguhanerbil"
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent group inline-flex items-center gap-2 text-sm font-medium"
        >
          <Github size={16} strokeWidth={1.5} />
          View all projects on GitHub
        </a>
      </div>
    </section>
  );
}
