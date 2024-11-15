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
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Comfortaa: ["Comfortaa", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
