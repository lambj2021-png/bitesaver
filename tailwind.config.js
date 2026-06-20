/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F97316', // vibrant orange
          dark: '#EA580C',
        },
        charcoal: {
          DEFAULT: '#121212',
          light: '#1E1E1E',
        }
      },
    },
  },
  plugins: [],
}
