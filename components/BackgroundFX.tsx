"use client";

import { useEffect, useRef } from "react";

/**
 * Subtle background visual effects with animated gradient blobs and noise overlay.
 * Respects prefers-reduced-motion for accessibility.
 * Uses CSS animations for performance (no heavy JS libraries).
 */
export function BackgroundFX() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    const handleChange = () => {
      if (containerRef.current) {
        if (mediaQuery.matches) {
          containerRef.current.style.animationPlayState = "paused";
        } else {
          containerRef.current.style.animationPlayState = "running";
        }
      }
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="background-fx pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Animated gradient blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />
      
      {/* Subtle vignette */}
      <div className="vignette" />
    </div>
  );
}
