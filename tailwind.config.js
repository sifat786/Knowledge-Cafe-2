/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      // Disable the default container sizes based on screen sizes
      'sm': '350px',
      'md': false,
      'lg': '1280px',
    },

    extend: {},
  },
  plugins: [],
}