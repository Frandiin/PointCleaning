/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const plugins = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
      },
    },
  },
  plugins: [
    plugins(({ addBase }) => {
      addBase({
        "h1,h2": {
          fontFamily: "Poppins",
          fontWeight: "bold",

          fontSize: "30px",
          color: "#1479bc",
        },
        p: { fontFamily: "Poppins", fontSize: "24px" },
        a: { fontWeight: "bold", color: "white" },

        "*::-webkit-scrollbar": { width: "6px", height: "6px" },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#00000063",
          borderRadius: "10px",
        },
        "*::-webkit-scrollbar-track-piece": {
          backgroundColor: "transparent",
          borderRadius: "10px",
        },
      });
    }),
  ],
};
