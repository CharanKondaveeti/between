/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playpen: ["Playpen Sans", "cursive"],
        gtsuper: ["gtsuper"],
        gtMedium: ["gtsuperMed"],
        poppins: ["Poppins", "sans-serif"], // Specify a fallback generic font
      },
      colors: {
        "custom-yellow": "#FFC017",
      },
      gridTemplateRows: {
        12: "repeat(12, minmax(0, 1fr))",
      },
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))",
      },
      height: {
        "70vh": "70vh",
        "85vh": "85vh",
        "100p": "100%",
      },
      // animations
      // keyframes: {
      //   blink: {
      //     "0%, 100%": { opacity: 0 },
      //     "50%": { opacity: 1 },
      //   },
      // },
      animation: {
        blink: "blink 10s ease-in-out infinite backwards 5s",
      },
    },
  },
  plugins: [],
};
