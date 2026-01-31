"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  Mail,
  FileText,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { siteConfig } from "@/data/site";

type FormState = "idle" | "loading" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// Direct connect links
const directLinks = [
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=doguhanerbil@gmail.com",
    icon: Mail,
    isLucide: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmet-doguhan-erbil",
    icon: FaLinkedinIn,
    isLucide: false,
  },
  {
    name: "GitHub",
    href: "https://github.com/doguhanerbil",
    icon: FaGithub,
    isLucide: false,
  },
  {
    name: "Medium",
    href: "https://medium.com/@doguhanerbil",
    icon: FaMediumM,
    isLucide: false,
  },
  {
    name: "Resume",
    href: siteConfig.resumeUrl,
    icon: FileText,
    isLucide: true,
  },
];

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [serverError, setServerError] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Mouse parallax effect for glow
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isReducedMotion || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  }, [isReducedMotion]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || isReducedMotion) return;
    
    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove, isReducedMotion]);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = (formData: FormData): FormErrors => {
    const newErrors: FormErrors = {};
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || name.trim().length === 0) {
      newErrors.name = "Name is required";
    }

    if (!email || email.trim().length === 0) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!message || message.trim().length === 0) {
      newErrors.message = "Message is required";
    } else if (message.trim().length < 10) {
      newErrors.message = "At least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setServerError("");
    setFormState("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          honeypot: formData.get("website"),
        }),
      });

      const data = await response.json();

      if (response.status === 429) {
        throw new Error("Too many requests. Please wait a moment and try again.");
      }

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setFormState("success");
      formRef.current?.reset();
    } catch (error) {
      setServerError(error instanceof Error ? error.message : "Something went wrong");
      setFormState("error");
    }
  };

  const resetForm = () => {
    setFormState("idle");
    setErrors({});
    setServerError("");
  };

  return (
    <section
      id="contact"
      className="section scroll-mt-16"
      aria-label="Contact"
    >
      {/* Section Header - Mobile only */}
      <div className="sticky top-0 z-20 -mx-6 mb-6 bg-[var(--color-bg-primary)]/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-text-primary)]">
          Contact
        </h2>
      </div>

      {/* Centered Form Layout */}
      <div className="mx-auto max-w-xl">
        {/* Minimal Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-2">
            Get in Touch
          </h3>
          <p className="text-[var(--color-text-secondary)]">
            Send me a message and I&apos;ll get back to you.
          </p>
        </div>

        {/* Form Card */}
        <div
          ref={cardRef}
          className="glass-card relative overflow-hidden"
          style={!isReducedMotion ? {
            "--mouse-x": `${mousePosition.x}px`,
            "--mouse-y": `${mousePosition.y}px`,
          } as React.CSSProperties : undefined}
        >
          {/* Mouse-following glow */}
          {!isReducedMotion && (
            <div 
              className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(217, 119, 6, 0.1), transparent 40%)`,
              }}
              aria-hidden="true"
            />
          )}

          {/* Success State */}
          {formState === "success" ? (
            <div className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                <CheckCircle size={32} className="text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                Message Sent!
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-6">
                Thanks for reaching out. I&apos;ll get back to you within 24–48 hours.
              </p>
              <button
                onClick={resetForm}
                className="text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 space-y-5"
              noValidate
            >
              {/* Honeypot - hidden from users */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Name Field */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
                >
                  Full Name <span className="text-[var(--color-accent)]">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="John Doe"
                  className={`contact-input ${errors.name ? "contact-input-error" : ""}`}
                  disabled={formState === "loading"}
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <div id="name-error" className="error-chip" role="alert">
                    <AlertCircle size={12} />
                    {errors.name}
                  </div>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
                >
                  Email <span className="text-[var(--color-accent)]">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="john@example.com"
                  className={`contact-input ${errors.email ? "contact-input-error" : ""}`}
                  disabled={formState === "loading"}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <div id="email-error" className="error-chip" role="alert">
                    <AlertCircle size={12} />
                    {errors.email}
                  </div>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
                >
                  Message <span className="text-[var(--color-accent)]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className={`contact-input resize-none ${errors.message ? "contact-input-error" : ""}`}
                  disabled={formState === "loading"}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <div id="message-error" className="error-chip" role="alert">
                    <AlertCircle size={12} />
                    {errors.message}
                  </div>
                )}
              </div>

              {/* Server Error */}
              {formState === "error" && serverError && (
                <div className="flex items-center gap-2 text-sm bg-red-500/10 border border-red-500/20 text-red-300 px-4 py-3 rounded-xl" role="alert">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formState === "loading"}
                className="contact-submit-btn group"
              >
                {formState === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Direct Connect - Compact */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[var(--color-text-tertiary)] mb-4">
            Prefer another platform? Reach me here:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {directLinks.map((link) => {
              const isExternal = link.href.startsWith("http");
              const Icon = link.icon;
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={link.name}
                  className="inline-flex items-center gap-2 h-9 px-4 text-sm font-medium text-[var(--color-text-secondary)] bg-white/[0.03] border border-white/[0.06] rounded-full hover:text-[var(--color-text-primary)] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]"
                >
                  {link.isLucide ? (
                    <Icon size={16} strokeWidth={1.5} />
                  ) : (
                    <Icon className="w-4 h-4" />
                  )}
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
