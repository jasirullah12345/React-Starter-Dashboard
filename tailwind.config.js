/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        'primary': '#3b82f6',
        'secondary': '#4b5563',
      }
    },
  },
  plugins: [],
}
