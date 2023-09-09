/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      grey: "#303030",
      lightgrey: "#979797",
      black: "#000000",
      whiteopacity75: "hsl(0, 0%, 100%, 75%)",
      blackopcity75: "hsl(0, 0%, 0%, 75%)",
      white: "#ffffff",
    },
    extend: {
      backgroundImage: {
        "day-bg-desktop": "url('/src/assets/desktop/bg-image-daytime.jpg')",
        "night-bg-desktop": "url('/src/assets/desktop/bg-image-nightime.jpg')",
        "day-bg-tablet": "url('/src/assets/tablet/bg-image-daytime.jpg')",
        "night-bg-tablet": "url('/src/assets/tablet/bg-image-nightime.jpg')",
        "day-bg-mobile": "url('/src/assets/mobile/bg-image-daytime.jpg')",
        "night-bg-mobile": "url('/src/assets/mobile/bg-image-nightime.jpg')",
      },
    },
  },
  plugins: [],
};
