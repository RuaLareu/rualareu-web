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
        primary: {
          DEFAULT: "#314A43",
          light: "#E8EFEC",
        },
        accent: "#C5A572",
        background: "#F8F6F3",
        text: {
          DEFAULT: "#1A1A1A",
          secondary: "#666666",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ['"Sackers Gothic Heavy"', "serif"],
        "sackers-heavy": ['"Sackers Gothic Heavy"', "serif"],
        "sackers-medium": ['"Sackers Gothic Medium"', "serif"],
        "sackers-light": ['"Sackers Gothic Light"', "serif"],
      },
      letterSpacing: {
        logo: "0.15em",
        wide: "0.08em",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
