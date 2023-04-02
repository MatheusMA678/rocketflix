/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#C12A23",
        blue: "#1E46A3",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
};
