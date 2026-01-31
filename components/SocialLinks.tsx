"use client";

import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { socials } from "@/data/socials";

// Brand icons from react-icons, utility icons from lucide
const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  medium: FaMediumM,
  mail: Mail,
  "file-text": FileText,
} as const;

// Brand icons (react-icons) vs Lucide icons need different rendering
const brandIcons = new Set(["github", "linkedin", "medium"]);

export function SocialLinks() {
  return (
    <div className="flex items-center gap-5">
      {socials.map((social) => {
        const Icon = iconMap[social.icon];
        const isExternal = social.url.startsWith("http");
        const isBrandIcon = brandIcons.has(social.icon);

        return (
          <a
            key={social.name}
            href={social.url}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={social.ariaLabel}
            className="text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-all duration-200 hover:scale-110"
          >
            {isBrandIcon ? (
              <Icon className="w-5 h-5" />
            ) : (
              <Icon size={20} strokeWidth={1.5} />
            )}
          </a>
        );
      })}
    </div>
  );
}
