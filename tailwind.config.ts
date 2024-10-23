import type { Config } from "tailwindcss";
import containerQueries from "@tailwindcss/container-queries";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        "responsive-xs": "clamp(1rem, 1vw, 1.5rem)",
        "responsive-sm": "clamp(1.5rem, 2.5vw, 2rem)",
        "responsive-md": "clamp(1.5rem, 4vw, 4rem)",
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
      },
    },
  },
  plugins: [containerQueries],
};
export default config;
