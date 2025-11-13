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
        "ghotso-primary": "#C8FF3D",
        "ghotso-accent": "#3EDCFF",
        "ghotso-bg": "#030712",
        "ghotso-bg-secondary": "#0B1120",
        "ghotso-panel": "#111827",
        "ghotso-text": "#E5E7EB",
        "ghotso-text-muted": "#9CA3AF",
        success: "#4ADE80",
        warning: "#FACC15",
        danger: "#F87171",
      },
      boxShadow: {
        "glow-primary": "0 0 8px rgba(200,255,61,0.5), 0 0 24px rgba(200,255,61,0.15)",
        "glow-accent": "0 0 8px rgba(62,220,255,0.5), 0 0 24px rgba(62,220,255,0.15)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

