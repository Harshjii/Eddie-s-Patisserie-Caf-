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
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: {
          50: "#FFFDF9",
          100: "#FCF8F2",
          200: "#F5EBE0",
          300: "#E3D5CA",
          400: "#D5BDAF",
        },
        gold: {
          50: "#FDFBF7",
          100: "#F9F3E6",
          200: "#EADBB6",
          300: "#DCBE7D",
          400: "#C5A880",
          500: "#D4AF37",
          600: "#B89020",
        },
        chocolate: {
          300: "#8D7B68",
          400: "#605342",
          500: "#3C2F2F",
          700: "#2B1B17",
          900: "#1E110B",
        },
        pastelPink: {
          50: "#FFF8F9",
          100: "#FFF0F2",
          200: "#F9BEC7",
          300: "#F7CAD0",
          400: "#F28482",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 5s ease-in-out infinite",
        "float-fast": "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
