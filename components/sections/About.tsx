import { about } from "@/data/site";

export function About() {
  // Split about text into paragraphs
  const paragraphs = about.split("\n\n");

  return (
    <section
      id="about"
      className="section scroll-mt-16"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-[var(--color-bg-primary)]/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-text-primary)]">
          About
        </h2>
      </div>
      
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-[var(--color-text-secondary)] leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
