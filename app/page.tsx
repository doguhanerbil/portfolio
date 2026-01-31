import {
  Sidebar,
  About,
  Experience,
  Projects,
  Writing,
  Contact,
} from "@/components";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Fixed Sidebar */}
        <Sidebar />

        {/* Scrollable Content */}
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Writing />
          <Contact />

          {/* Footer */}
          <footer className="py-16 text-sm text-[var(--color-text-tertiary)]">
            <p>
              © {new Date().getFullYear()} Ahmet Doguhan Erbil. Built with{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
              >
                Next.js
              </a>{" "}
              and{" "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
              >
                Tailwind CSS
              </a>
              .
            </p>
          </footer>

        </main>
      </div>
    </div>
  );
}
