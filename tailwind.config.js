/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        root: "320px 1fr",
        statement: "200px 1fr",
        achievementList: "160px 240px 1fr 160px",
      },
      gridTemplateRows: {
        root: "135px 1fr",
        statement: "50px 60px 1fr",
      },
      colors: { sub: { 100: "#8392A5" } },
      backgroundColor: { hr: "#AFAFAF" },
    },
  },
  plugins: [],
};
