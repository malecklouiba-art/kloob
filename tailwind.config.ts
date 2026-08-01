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
        // Base sombre premium
        ink: {
          DEFAULT: "#0A0B0D", // noir profond, fond principal
          950: "#08090A",
          900: "#0A0B0D",
          800: "#111318",
          700: "#181B21",
          600: "#22262E",
          500: "#2E333D",
          400: "#454B57",
        },
        // Blanc cassé — texte
        bone: {
          DEFAULT: "#F3F1EA",
          muted: "#B9B7B0",
          faint: "#7C7A75",
        },
        // Accent unique : bleu nuit électrique sécurité
        // Luminosité calibrée pour rester en contraste AA à la fois en texte sur fond
        // sombre (labels) et en texte foncé sur bouton (cf. components/Button.tsx)
        accent: {
          DEFAULT: "#4C86F5",
          50: "#EFF4FF",
          100: "#D7E5FF",
          200: "#AFCBFF",
          300: "#85AEFF",
          400: "#6899FA",
          500: "#4C86F5",
          600: "#3868D1",
          700: "#294FA3",
          800: "#1C3874",
          900: "#11234A",
          glow: "rgba(76, 134, 245, 0.35)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"],
        body: ["var(--font-body)", "-apple-system", "sans-serif"],
      },
      fontSize: {
        "hero": ["clamp(2.75rem, 6vw, 6rem)", { lineHeight: "0.98", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-1": ["clamp(2.25rem, 4.5vw, 3.75rem)", { lineHeight: "1.02", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-2": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.015em", fontWeight: "700" }],
        "display-3": ["clamp(1.375rem, 2vw, 1.75rem)", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "600" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      borderRadius: {
        xs: "6px",
        sm: "10px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
      boxShadow: {
        "elev-1": "0 1px 2px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04)",
        "elev-2": "0 8px 24px rgba(0,0,0,0.35)",
        "elev-3": "0 24px 64px rgba(0,0,0,0.5)",
        "accent-glow": "0 0 0 1px rgba(76,134,245,0.4), 0 8px 32px rgba(76,134,245,0.18)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(243,241,234,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(243,241,234,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(76,134,245,0.14), transparent 60%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      transitionTimingFunction: {
        sharp: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 32s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
