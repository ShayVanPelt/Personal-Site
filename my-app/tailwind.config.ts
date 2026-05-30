import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        display: "var(--font-display)",
      },
      colors: {
        surface: {
          DEFAULT: "#141210",
          raised: "#1c1917",
          border: "rgba(245, 245, 244, 0.08)",
        },
        accent: {
          DEFAULT: "#9333ea",
          muted: "#a855f7",
          dim: "rgba(147, 51, 234, 0.15)",
        },
      },
      animation: {
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
      keyframes: {
        "move-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "move-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(245,245,244,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,244,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
  plugins: [],
};
export default config;
