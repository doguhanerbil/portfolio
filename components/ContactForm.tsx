"use client";

import { useState, useRef } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [serverError, setServerError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

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
      newErrors.email = "Please enter a valid email address";
    }

    if (!message || message.trim().length === 0) {
      newErrors.message = "Message is required";
    } else if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
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
          honeypot: formData.get("website"), // Honeypot field
        }),
      });

      const data = await response.json();

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

  if (formState === "success") {
    return (
      <div className="contact-card p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-4">
          <CheckCircle size={32} className="text-green-500" />
        </div>
        <h3 className="text-xl font-medium text-[var(--color-text-primary)] mb-2">
          Message Sent!
        </h3>
        <p className="text-[var(--color-text-secondary)] mb-6">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
        <button
          onClick={resetForm}
          className="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form 
      ref={formRef}
      onSubmit={handleSubmit} 
      className="contact-card p-6 sm:p-8"
      noValidate
    >
      {/* Honeypot field - hidden from users, bots will fill this */}
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

      {/* Name field */}
      <div className="mb-5">
        <label 
          htmlFor="name" 
          className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
        >
          Full Name <span className="text-[var(--color-accent)]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          className={`form-input ${errors.name ? "form-input-error" : ""}`}
          disabled={formState === "loading"}
        />
        {errors.name && (
          <p className="form-error">{errors.name}</p>
        )}
      </div>

      {/* Email field */}
      <div className="mb-5">
        <label 
          htmlFor="email" 
          className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
        >
          Email <span className="text-[var(--color-accent)]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="john@example.com"
          className={`form-input ${errors.email ? "form-input-error" : ""}`}
          disabled={formState === "loading"}
        />
        {errors.email && (
          <p className="form-error">{errors.email}</p>
        )}
      </div>

      {/* Message field */}
      <div className="mb-6">
        <label 
          htmlFor="message" 
          className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2"
        >
          Message <span className="text-[var(--color-accent)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Leave your message here — I'll get back to you as soon as possible."
          className={`form-input resize-none ${errors.message ? "form-input-error" : ""}`}
          disabled={formState === "loading"}
        />
        {errors.message && (
          <p className="form-error">{errors.message}</p>
        )}
      </div>

      {/* Server error */}
      {formState === "error" && serverError && (
        <div className="mb-6 flex items-center gap-2 text-sm text-red-400 bg-red-500/10 px-4 py-3 rounded-lg">
          <AlertCircle size={16} />
          {serverError}
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={formState === "loading"}
        className="btn-primary w-full sm:w-auto"
      >
        {formState === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
