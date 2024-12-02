/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Red Hat Text", "sans-serif"],
      },
      colors: {
        "pale-silk": "#FCF8F5",
        "dark-wood": "#483A37",
        "warm-taup": "#716764",
        "soft-stone": "#928D8B",
        "soft-clay": "#E7AB91",
        "terra-cotta": "#C08778",
        "brick-red": "#B94825",
        "burnt-sienna": "#C73B0E",
      },
    },
  },
  plugins: [],
};
