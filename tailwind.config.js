/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jusbrasil: {
          green: '#2e8b57', // Placeholder, will refine
          // Add other specific colors later
        }
      }
    },
  },
  plugins: [],
}
