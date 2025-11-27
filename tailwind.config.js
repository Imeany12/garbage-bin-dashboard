/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors for bin fill level status
        'bin-low': '#22c55e',      // green-500 - < 50% full
        'bin-medium': '#eab308',   // yellow-500 - 50-75% full
        'bin-high': '#f97316',     // orange-500 - 75-90% full
        'bin-full': '#ef4444',     // red-500 - > 90% full
      },
    },
  },
  plugins: [],
}
