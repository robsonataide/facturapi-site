import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#2C3E50",
          light: "#3d5166",
          dark: "#1e2b38",
        },
        green: {
          DEFAULT: "#28A745",
          light: "#34c65a",
          dark: "#1e7e34",
        },
        bg: {
          DEFAULT: "#F8FAF9",
          dark: "#eef3f0",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
