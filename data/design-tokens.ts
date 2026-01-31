/**
 * DESIGN TOKENS
 * ============================================
 * 
 * This file documents the design system for reference.
 * Actual values are configured in tailwind.config.ts
 * 
 * IMPORTANT: This design is ORIGINAL and does NOT copy the reference.
 * We use a distinct warm neutral palette with copper/bronze accents
 * instead of the reference's cool blue-green scheme.
 */

// ============================================
// COLOR PALETTE - "Warm Studio" Theme
// ============================================
// A sophisticated warm palette that communicates
// reliability, maturity, and calm confidence.

export const colors = {
    // Background layers (dark mode)
    background: {
        primary: "#0F0F0F",      // Deep charcoal - main background
        secondary: "#171717",    // Elevated surfaces
        tertiary: "#1F1F1F",     // Cards, modals
        hover: "#262626",        // Hover states
    },

    // Background layers (light mode)
    backgroundLight: {
        primary: "#FAFAF9",      // Stone-50 - warm white
        secondary: "#F5F5F4",    // Subtle gray
        tertiary: "#FFFFFF",     // Pure white for cards
        hover: "#E7E5E4",        // Hover states
    },

    // Text hierarchy
    text: {
        primary: "#FAFAFA",      // Main headings - near white
        secondary: "#A3A3A3",    // Body text - warm gray
        tertiary: "#737373",     // Muted text - subtle
        inverse: "#0F0F0F",      // For light mode
    },

    // Accent colors - Copper/Bronze inspired
    accent: {
        primary: "#D97706",      // Amber-600 - main accent
        secondary: "#B45309",    // Amber-700 - hover/active
        tertiary: "#F59E0B",     // Amber-500 - highlights
        muted: "#78350F",        // Amber-900 - subtle backgrounds
    },

    // Semantic colors
    semantic: {
        success: "#22C55E",      // Green-500
        error: "#EF4444",        // Red-500
        warning: "#F59E0B",      // Amber-500
        info: "#3B82F6",         // Blue-500
    },

    // Border colors
    border: {
        subtle: "#262626",       // Dark mode subtle border
        default: "#404040",      // Default border
        focus: "#D97706",        // Focus ring
    },
};

// ============================================
// TYPOGRAPHY SCALE
// ============================================
// Using "DM Sans" as primary and "JetBrains Mono" for code
// (Different from reference which uses Inter)

export const typography = {
    fonts: {
        sans: '"DM Sans", system-ui, -apple-system, sans-serif',
        mono: '"JetBrains Mono", ui-monospace, monospace',
    },

    sizes: {
        xs: "0.75rem",      // 12px - small labels
        sm: "0.875rem",     // 14px - body small
        base: "1rem",       // 16px - body
        lg: "1.125rem",     // 18px - lead text
        xl: "1.25rem",      // 20px - section titles
        "2xl": "1.5rem",    // 24px - subsections
        "3xl": "1.875rem",  // 30px - section headers
        "4xl": "2.25rem",   // 36px - page titles
        "5xl": "3rem",      // 48px - hero name
        "6xl": "3.75rem",   // 60px - large hero
    },

    weights: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
    },

    lineHeights: {
        tight: "1.2",       // Headlines
        snug: "1.375",      // Subheadings
        normal: "1.5",      // Body text
        relaxed: "1.625",   // Long-form content
    },

    letterSpacing: {
        tight: "-0.025em",  // Headlines
        normal: "0",        // Body
        wide: "0.05em",     // Labels, caps
    },
};

// ============================================
// SPACING SCALE (Custom, not default Tailwind)
// ============================================

export const spacing = {
    px: "1px",
    0: "0",
    0.5: "0.125rem",     // 2px
    1: "0.25rem",        // 4px
    2: "0.5rem",         // 8px
    3: "0.75rem",        // 12px
    4: "1rem",           // 16px
    5: "1.25rem",        // 20px
    6: "1.5rem",         // 24px
    8: "2rem",           // 32px
    10: "2.5rem",        // 40px
    12: "3rem",          // 48px
    14: "3.5rem",        // 56px
    16: "4rem",          // 64px
    20: "5rem",          // 80px
    24: "6rem",          // 96px
    32: "8rem",          // 128px
};

// ============================================
// LAYOUT DIMENSIONS
// ============================================

export const layout = {
    sidebar: {
        width: "320px",            // Fixed sidebar width
        widthMobile: "100%",       // Full width on mobile
        padding: "2rem",           // Internal padding
    },

    content: {
        maxWidth: "672px",         // Max content width
        padding: "1.5rem",         // Horizontal padding
        paddingLarge: "3rem",      // Large screens
    },

    breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
    },
};

// ============================================
// ANIMATIONS & TRANSITIONS
// ============================================

export const motion = {
    // Transition durations
    duration: {
        instant: "0ms",
        fast: "150ms",
        normal: "200ms",
        slow: "300ms",
        slower: "500ms",
    },

    // Easing functions
    easing: {
        default: "cubic-bezier(0.4, 0, 0.2, 1)",     // ease-out
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },

    // Animation keyframes (to be used in CSS)
    keyframes: {
        fadeIn: {
            from: { opacity: 0 },
            to: { opacity: 1 },
        },
        slideUp: {
            from: { opacity: 0, transform: "translateY(10px)" },
            to: { opacity: 1, transform: "translateY(0)" },
        },
        pulse: {
            "0%, 100%": { opacity: 1 },
            "50%": { opacity: 0.5 },
        },
    },
};

// ============================================
// SHADOWS & EFFECTS
// ============================================

export const effects = {
    shadows: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        default: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        glow: "0 0 20px rgb(217 119 6 / 0.3)",  // Accent glow
    },

    borderRadius: {
        none: "0",
        sm: "0.25rem",       // 4px
        default: "0.375rem", // 6px
        md: "0.5rem",        // 8px
        lg: "0.75rem",       // 12px
        xl: "1rem",          // 16px
        full: "9999px",
    },
};

// ============================================
// Z-INDEX SCALE
// ============================================

export const zIndex = {
    base: 0,
    above: 10,
    sticky: 50,
    fixed: 100,
    overlay: 200,
    modal: 300,
    tooltip: 400,
};
