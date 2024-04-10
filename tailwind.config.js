import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
  },
  darkMode: "class",
 plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors:{
            primary:"#0072f5",
          }
        },
        dark: {
          colors:{
            primary:"#0072f5",
          }
        },
      }
    }),
  ],
};
