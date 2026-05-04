import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          elevated: "var(--bg-elevated)",
          grouped: "var(--bg-grouped)",
        },
        surface: "var(--surface)",
        border: "var(--border)",
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          on: "var(--accent-on)",
        },
        gold: "var(--gold)",
        success: "var(--success)",
        warning: "var(--warning)",
        danger: "var(--danger)",
      },
      fontFamily: {
        display: [
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "Helvetica Neue",
          "sans-serif",
        ],
        text: [
          "SF Pro Text",
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "Helvetica Neue",
          "sans-serif",
        ],
        mono: [
          "SF Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "monospace",
        ],
      },
      fontSize: {
        display: ["2.75rem", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }],
        "title-1": ["2rem", { lineHeight: "1.15", letterSpacing: "-0.020em", fontWeight: "700" }],
        "title-2": ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "600" }],
        "title-3": ["1.25rem", { lineHeight: "1.25", letterSpacing: "-0.010em", fontWeight: "600" }],
        headline: ["1.0625rem", { lineHeight: "1.3", letterSpacing: "-0.005em", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.45", letterSpacing: "0", fontWeight: "400" }],
        callout: ["0.9375rem", { lineHeight: "1.4", fontWeight: "500" }],
        subhead: ["0.875rem", { lineHeight: "1.4", fontWeight: "500" }],
        footnote: ["0.8125rem", { lineHeight: "1.4", fontWeight: "400" }],
        caption: ["0.6875rem", { lineHeight: "1.3", letterSpacing: "0.020em", fontWeight: "500" }],
      },
      spacing: {
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "24px",
        "6": "32px",
        "7": "48px",
        "8": "64px",
        "9": "96px",
      },
      borderRadius: {
        xs: "6px",
        sm: "10px",
        md: "14px",
        lg: "20px",
        xl: "28px",
      },
      boxShadow: {
        "elev-1": "0 1px 2px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.04)",
        "elev-2": "0 4px 12px rgba(0,0,0,0.06)",
        "elev-3": "0 12px 32px rgba(0,0,0,0.08)",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      transitionDuration: {
        "180": "180ms",
        "220": "220ms",
        "280": "280ms",
      },
    },
  },
  plugins: [],
};

export default config;
