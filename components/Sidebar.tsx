import { siteConfig } from "@/data/site";
import { Navigation } from "./Navigation";
import { SocialLinks } from "./SocialLinks";

export function Sidebar() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[320px] lg:flex-col lg:justify-between lg:py-24 lg:px-6">
      <div>
        {/* Profile */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
            {siteConfig.name}
          </h1>
          <h2 className="mt-3 text-lg font-medium text-[var(--color-text-secondary)]">
            {siteConfig.title}
          </h2>
          <p className="mt-2 text-sm text-[var(--color-text-tertiary)]">
            {siteConfig.location}
          </p>
        </div>


        {/* Navigation */}
        <Navigation />
      </div>

      {/* Social Links */}
      <div className="mt-8 lg:mt-0">
        <SocialLinks />
      </div>
    </header>
  );
}
