/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Source Sans 3", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right, rgba(245,245,245,.8), rgba(245,245,245,.8)), url('./src/assets/hero-bg.svg')",
      },
      colors: {
        "davy-grey": "#555555",
        "vivid-yellow": "#FACF0F",
        "very-light-gray": "#FAFAFA",
        "very-very-light-gray": "#F0F0F0",
      },
      width: {
        75: "18.75rem",
        137.5: "34.375rem",
        200: "50rem",
        187.5: "46.875rem",
        225: "56.25rem",
      },
      height: {
        75: "18.75rem",
        137.5: "34.375rem",
        200: "50rem",
        187.5: "46.875rem",
        225: "56.25rem",
      },
    },
  },
  plugins: [],
};
