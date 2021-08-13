const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        seaweed: "#087E8B",
        burgundy: "#7B0828",
        teagreen: "#D4EAC8",
        lincolngreen: "#165214",
        yellowmunsell: "#EFCC00",
      },
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
      },
      animation: {
        blob: "blob 10s infinite",
        blob2: "blob2 13s infinite",
        blob3: "blob3 11s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        blob2: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(-20px, -10px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-100px, -20px) scale(0.8)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        blob3: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(-5px, 90px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-10px, 10px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
