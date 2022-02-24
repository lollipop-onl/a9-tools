module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx", "./hooks/**/*.ts"],
  theme: {
    fontFamily: {
      body: ["Zen Kaku Gothic Antique", "sans-serif"],
    },
    extend: {
      transitionProperty: {
        sizing: "width, height, max-height, padding, margin",
      },
    },
  },
  plugins: [],
};
