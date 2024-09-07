/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue' : '#2500ff'
      },
      backgroundImage: {
        'project-grid' : "url('/src/assets/project-background.svg')",
        'project-grid-wide' : "url('../src/assets/project-background-wide.svg')"
      },
      fontFamily: {
        'primaryRegular' : ['Regular']
      }
    },
  },
  plugins: [],
}