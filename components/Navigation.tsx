"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    // Observe all sections
    navigation.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden lg:block" aria-label="In-page navigation">
      <ul className="flex flex-col gap-4">
        {navigation.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`nav-link group flex items-center gap-4 py-1 ${
                activeSection === item.id ? "active" : ""
              }`}
            >
              <span className="nav-indicator" />
              <span
                className={`nav-text text-xs font-medium uppercase tracking-widest transition-colors duration-150 ${
                  activeSection === item.id
                    ? "text-[var(--color-text-primary)]"
                    : "text-[var(--color-text-tertiary)]"
                }`}
              >
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
