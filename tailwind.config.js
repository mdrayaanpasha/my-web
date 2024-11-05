/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      // Overwrite Tailwind's default colors for testing
      primary: "#2e2e2e",
      white: "#ffffff",   // re-define `white`
      // include other Tailwind colors if needed
    },
  },
  plugins: [],
}

