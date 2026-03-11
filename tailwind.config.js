/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Space Grotesk'", "sans-serif"],
        body: ["'Manrope'", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 60px -20px rgba(56, 189, 248, 0.65)"
      }
    }
  },
  plugins: []
};
