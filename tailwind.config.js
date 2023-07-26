/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Source Sans 3", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "linear-gradient(to right, rgba(245,245,245,.8), rgba(245,245,245,.8)), url('./src/assets/hero.svg')",
      },
      colors: {
        "anti-flash-white": "#F0F0F0",
        "dim-gray": "#716A6A",
        night: "#121212",
        seasalt: "#FAFAFA",
        "violet-blue": "#3943B7",
      },
    },
  },
  plugins: [],
};
