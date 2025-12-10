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
          green: '#007A5F', // Updated primary color
          // Add other specific colors later
        }
      }
    },
  },
  plugins: [],
}
