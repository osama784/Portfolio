/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      colors: {
        "main-purple": "#5271ff",
        "main-black": "#0c1522b8",
        "secondary-purple": "#748cff",
        "light-gray": "#ffffffc4",
      },
      keyframes: {
        "move-sm": {
          "0%, 100%": {
            left: "calc(50% - 30rem)",
            top: "-10rem",
          },
          "30%": { left: "200px", top: "5rem" },
          "60%": { left: "0px", top: "-20rem" },
          "80%": { left: "50px", top: "10rem" },
        },

        move: {
          "0%, 100%": {
            left: "calc(50% - 11rem)",
            top: "-20rem",
          },
          "30%": { left: "700px", top: "5rem" },
          "60%": { left: "0px", top: "-30rem" },
          "80%": { left: "200px", top: "20rem" },
        },
      },
      animation: {
        move: "move 30s ease-in-out infinite",
        "move-sm": "move-sm 30s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
