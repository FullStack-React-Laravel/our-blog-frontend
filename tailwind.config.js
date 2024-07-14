/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#000436",
          800: "#010751",
          700: "#020b7e",
          600: "#000ebe",
        },
      },
      gridTemplateColumns: {
        card: "repeat(auto-fill, minmax(300px, 1fr))",
      },
      transitionProperty: {
        height: "height",
      },
      brightness: {
        25: "25%",
      },
    },
  },
  plugins: [],
};
