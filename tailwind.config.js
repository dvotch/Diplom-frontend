/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      gridTemplateColumns: {
        root: "320px 1fr 160px",
        statement: "200px 1fr",
        achievementList: "160px 240px 1fr 320px",
        organizationCard: "160px 150px 1fr 120px",
      },
      gridTemplateRows: {
        root: "135px 1fr 160px",
        statement: "50px 60px 1fr",
        organizationCard: "40px 1fr 60px",
      },
      colors: { sub: { 100: "#8392A5" } },
      backgroundColor: { hr: "#AFAFAF" },
    },
  },
  plugins: [],
};
