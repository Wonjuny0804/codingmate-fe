/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-main": "#4D30DC",
        secondary: "#C2F46F",
        monoBlack: "#000000",
        "monoBlack-500": "rgba(0,0,0,0.5)",
      },
      fontFamily: {
        UncutSans: ["UncutSans", "sans serif"],
      },
    },
  },
  plugins: [],
};
