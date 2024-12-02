/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Red Hat Text", "sans-serif"],
      },
      colors: {
        "dark-brown": "#483A37",
        "normal-brown": "#716764",
        "normal-grey": "#928D8B",
        "light-brown": "#C08778",
        "light-white": "#FCF8F5",
        "light-peach": "#E7AB91",
      },
    },
  },
  plugins: [],
};
