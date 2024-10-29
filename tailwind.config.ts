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
        // "responsive-s": "clamp(0.3rem, 1vw, 1.2rem)",
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
      },
    },
  },
  plugins: [containerQueries],
};
export default config;
