import { ArrowUpRight } from "lucide-react";
import { experiences } from "@/data/experience";
import { TechTags } from "@/components/TechTag";

export function Experience() {
  return (
    <section
      id="experience"
      className="section scroll-mt-16"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-[var(--color-bg-primary)]/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-text-primary)]">
          Experience
        </h2>
      </div>

      <div className="space-y-12">
        {experiences.map((exp) => (
          <article
            key={exp.id}
            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-6 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            {/* Date range */}
            <header className="z-10 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-tertiary)] sm:col-span-2">
              <span>{exp.startDate}</span>
              <span className="mx-2">—</span>
              <span>{exp.endDate}</span>
            </header>

            {/* Content */}
            <div className="z-10 sm:col-span-6">
              {/* Title & Company */}
              <h3 className="font-medium leading-snug">
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-baseline text-[var(--color-text-primary)] hover:text-[var(--color-accent)] focus-visible:text-[var(--color-accent)]"
                  >
                    <span>
                      {exp.title}
                      <span className="mx-2 text-[var(--color-text-tertiary)]">·</span>
                      {exp.company}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="ml-1 inline-block transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </a>
                ) : (
                  <span className="text-[var(--color-text-primary)]">
                    {exp.title}
                    <span className="mx-2 text-[var(--color-text-tertiary)]">·</span>
                    {exp.company}
                  </span>
                )}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-normal text-[var(--color-text-secondary)]">
                {exp.description}
              </p>

              {/* Key Metrics */}
              {exp.achievements && exp.achievements.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-baseline gap-2 text-sm"
                    >
                      <span className="font-semibold text-[var(--color-accent)]">
                        {achievement.metric}
                      </span>
                      <span className="text-[var(--color-text-tertiary)]">
                        {achievement.impact}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Technologies */}
              <div className="mt-4">
                <TechTags technologies={exp.technologies} />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Resume Link */}
      <div className="mt-12">
        <a
          href="/Ahmet%20Doguhan%20Erbil%20CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent group inline-flex items-center gap-1 text-sm font-medium"
        >
          View Full Resume
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </section>
  );
}
