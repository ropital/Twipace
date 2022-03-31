module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        twitter: {
          normal: "#1DA1F2",
          dark: "#1d83c2",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
