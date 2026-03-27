export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "900px",
        fontFamily: {
          heading: ["monospace"],
        },
      },
    },
  },
  plugins: [],
};
