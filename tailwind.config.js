/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Source Sans 3", "sans-serif"],
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
