import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js, ts, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          background: "#f4f2ea",
          border: "#c7c4bc",
        },
        text: {
          primary: "#130807",
          secondary: "#60514f",
        },

        navbar: {
          background: "#f4f2ea",
          border: "#dcd7c9",
          hover: "#db6371",
          text: {
            primary: "#554e4b",
            secondary: "#fff",
          },
        },
      },
    },
  },
} satisfies Config;
