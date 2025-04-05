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
        "dark-bg": "#1F1D2B",
        "active-bg": "#252836",
        "accent": "#EB966A",
        "active-bg/50": "rgba(37, 40, 54, 0.5)",
        "accent/20": "rgba(235, 150, 106, 0.2)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
