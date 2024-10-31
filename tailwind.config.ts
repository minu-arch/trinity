import type { Config } from "tailwindcss";
import containerQueries from "@tailwindcss/container-queries";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      imageRendering: {
        pixelated: "pixelated",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      translate: {
        "custom-open": "-55%, 2%",
        "custom-closed": "-54%, -100%",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        s: "360px",
        xs: "420px",
      },
      fontSize: {
        "responsive-xs": "clamp(0.5rem, 1.3vw, 1.7rem)",
        "responsive-sm": "clamp(1rem, 2vw, 2.5rem)",
        "responsive-md": "clamp(1.7rem, 3.5vw, 3rem)",
        "responsive-lg": "clamp(2rem, 6vw, 4rem)",
      },
      colors: {
        colored: "#f7f7f5",
        coloree: "#eeeeee",
        colorgreen: "#2d5736",
        acmeinc: "#adb5b2",
        clrtitle: "#113b29",
        clrnavbar: "#5b7253",
        clrparagraph: "#366740",
        bgtext: "#e9e9e9",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["focus"], // Ensure focus variant is enabled
    },
  },
  plugins: [containerQueries, require("tailwindcss-animate")],
};
export default config;
