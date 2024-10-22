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
        "responsive-sm": "clamp(1rem, 3vw, 1.5rem)",
        "responsive-md": "clamp(1.5rem, 4vw, 4rem)",
        "responsive-lg": "clamp(2rem, 6vw, 4rem)",
      },
      colors: {
        colored: "#eceeed",
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
