/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { sub: { 100: "#8392A5" } },
      backgroundColor: { hr: "#AFAFAF" },
    },
  },
  plugins: [],
};
