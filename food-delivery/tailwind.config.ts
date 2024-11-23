import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        BrandGreen: "#18BA51",
        TextSecondary: "#272727",
        BrandBlue: "#0468C8",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Comfortaa: ["Comfortaa", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        customShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
