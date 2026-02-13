import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0B0B0B",
          secondary: "#111111",
          tertiary: "#181818",
          card: "#141414",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A0A0A0",
          muted: "#666666",
        },
        accent: {
          DEFAULT: "#38BDF8",      // soft cyan
          hover: "#7DD3FC",
          dim: "rgba(56, 189, 248, 0.1)",
          border: "rgba(56, 189, 248, 0.2)",
        },
        border: {
          DEFAULT: "#1E1E1E",
          light: "#2A2A2A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "display": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-sm": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-mobile": ["2rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "heading": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "heading-mobile": ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "subheading": ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "section": "7rem",
        "section-sm": "4rem",
        "section-xs": "2.5rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
