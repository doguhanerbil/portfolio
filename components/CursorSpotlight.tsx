"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * Cursor-following spotlight effect inspired by Brittany Chiang's portfolio.
 * Uses CSS custom properties and requestAnimationFrame for optimal performance.
 * Respects prefers-reduced-motion for accessibility.
 */
export function CursorSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const rafIdRef = useRef<number | null>(null);
  const isVisibleRef = useRef(true);
  const isReducedMotionRef = useRef(false);

  // Update CSS variables with requestAnimationFrame for performance
  const updateSpotlightPosition = useCallback(() => {
    if (spotlightRef.current && !isReducedMotionRef.current) {
      spotlightRef.current.style.setProperty(
        "--mx",
        `${mousePositionRef.current.x}px`
      );
      spotlightRef.current.style.setProperty(
        "--my",
        `${mousePositionRef.current.y}px`
      );
    }
    rafIdRef.current = null;
  }, []);

  // Handle mouse movement - only stores position, RAF handles actual update
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };

      // Only schedule RAF if one isn't pending
      if (rafIdRef.current === null) {
        rafIdRef.current = requestAnimationFrame(updateSpotlightPosition);
      }
    },
    [updateSpotlightPosition]
  );

  // Handle mouse enter/leave for opacity transitions
  const handleMouseEnter = useCallback(() => {
    isVisibleRef.current = true;
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = "1";
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    isVisibleRef.current = false;
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = "0";
    }
  }, []);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    isReducedMotionRef.current = mediaQuery.matches;

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotionRef.current = e.matches;
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = e.matches ? "0" : "1";
      }
    };

    // Check for mobile/touch devices - disable on small screens for performance
    const isMobileOrTouch =
      window.matchMedia("(max-width: 768px)").matches ||
      "ontouchstart" in window;

    if (isMobileOrTouch || mediaQuery.matches) {
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = "0";
      }
      return;
    }

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    mediaQuery.addEventListener("change", handleReducedMotionChange);

    // Set initial position to center
    if (spotlightRef.current) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      spotlightRef.current.style.setProperty("--mx", `${centerX}px`);
      spotlightRef.current.style.setProperty("--my", `${centerY}px`);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      mediaQuery.removeEventListener("change", handleReducedMotionChange);

      // Cancel any pending animation frame
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

  return (
    <div
      ref={spotlightRef}
      className="cursor-spotlight"
      aria-hidden="true"
      style={
        {
          "--mx": "50%",
          "--my": "50%",
        } as React.CSSProperties
      }
    />
  );
}
