/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const plugins = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      fontSize: {
        h1: ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["2rem", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["1.75rem", { lineHeight: "1.4", fontWeight: "600" }],
        h4: ["1.5rem", { lineHeight: "1.5", fontWeight: "600" }],
        h5: ["1.25rem", { lineHeight: "1.6", fontWeight: "600" }],
        h6: ["1rem", { lineHeight: "1.7", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.5" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
      },
      colors: {
        primary: {
          DEFAULT: "#1479bc",
          dark: "#0d5a8a",
          light: "#1a8fd1",
        },
        secondary: "#567EBB",
        accent: "#DCE0E6",
        background: "#F5F5F5",
        text: "#1A1A1A",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [
    plugins(({ addBase }) => {
      addBase({
        h1: {
          "@apply text-h1 text-primary": {},
        },
        h2: {
          "@apply text-h2 text-primary": {},
        },
        h3: {
          "@apply text-h3 text-primary": {},
        },
        h4: {
          "@apply text-h4 text-primary": {},
        },
        h5: {
          "@apply text-h5 text-primary": {},
        },
        h6: {
          "@apply text-h6 text-primary": {},
        },
        p: {
          "@apply text-body": {},
        },
        a: {
          "@apply font-semibold": {},
        },
        "*::-webkit-scrollbar": {
          width: "6px",
          height: "6px",
        },
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
