import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-6xl font-bold text-[var(--color-text-primary)]">
        404
      </h1>
      <h2 className="mt-4 text-xl font-medium text-[var(--color-text-secondary)]">
        Page Not Found
      </h2>
      <p className="mt-2 text-[var(--color-text-tertiary)]">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[var(--color-bg-secondary)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-bg-hover)]"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>
    </div>
  );
}
