/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4b00ff",
          secondary: "#00ac72",
          accent: "#ff0000",
          neutral: "#1b1b1b",
          "base-100": "#113436",
          info: "#00dffd",
          success: "#00bc74",
          warning: "#f81300",
          error: "#ff74a3",
        },
      },
    ],
  },
};
