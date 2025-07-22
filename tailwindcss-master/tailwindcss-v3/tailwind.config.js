/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        grayf6: "#f6f7f9",
        gray90: "#90a3bf",
        errored: "#ed3f3f",
        primary: "#0bab7c",
      },
      borderRadius: {
        10: "10px",
      },
      screens: {
        sm: "480px",
      },
    },
  },
  plugins: [],
};
