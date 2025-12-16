import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          teal: "#14b8a6",
          cyan: "#06b6d4",
          purple: "#8b5cf6",
          indigo: "#6366f1",
        },
        accent: {
          emerald: "#10b981",
          violet: "#7c3aed",
        },
        dark: {
          900: "#0f172a",
          800: "#1e293b",
          700: "#334155",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #14b8a6 0%, #6366f1 50%, #8b5cf6 100%)",
        "gradient-hero": "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
      },
      boxShadow: {
        "soft": "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "glow": "0 0 20px rgba(20, 184, 166, 0.3)",
        "glow-purple": "0 0 20px rgba(139, 92, 246, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;

