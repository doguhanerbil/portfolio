import { ArrowUpRight, PenLine } from "lucide-react";
import { articles } from "@/data/writing";

export function Writing() {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section
      id="writing"
      className="section scroll-mt-16"
      aria-label="Writing"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-[var(--color-bg-primary)]/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-text-primary)]">
          Writing
        </h2>
      </div>

      <div className="space-y-6">
        {articles.map((article) => (
          <article key={article.id} className="group">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block card-hover rounded-lg p-4 -m-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  {/* Year - display as block element */}
                  <p className="text-xs font-semibold text-[var(--color-text-tertiary)] mb-2">
                    {article.publishedAt}
                  </p>

                  {/* Title */}
                  <h3 className="font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                    <span className="inline-flex items-baseline gap-1">
                      {article.title}
                      <ArrowUpRight
                        size={14}
                        className="inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-normal">
                    {article.description}
                  </p>

                  {/* Meta */}
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-[var(--color-text-tertiary)]">
                    {article.readTime && <span>{article.readTime}</span>}
                    <span className="capitalize">{article.platform}</span>
                  </div>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>

      {/* Medium Link */}
      <div className="mt-8">
        <a
          href="https://medium.com/@doguhanerbil"
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent group inline-flex items-center gap-2 text-sm font-medium"
        >
          <PenLine size={16} strokeWidth={1.5} />
          Read more on Medium
        </a>
      </div>
    </section>
  );
}
