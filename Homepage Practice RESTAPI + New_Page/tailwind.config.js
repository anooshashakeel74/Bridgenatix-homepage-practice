/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo", "Segoe UI", "Arial", "sans-serif"],
        playfair: ["Playfair Display", "Georgia", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        brand: "#ee4c1f",
        "brand-1":"#F4511E",
        "brand-2": "#ec4b1f",
        "brand-3": "#f15221",
        "brand-dark": "#050523",
        ink: "#1f1f24",
        muted: "#565b66",
      },
      keyframes: {
        scrollTicker: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-50%,0,0)" },
        },
        floatBadge: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        workCircularOrbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        popupScaleEntrance: {
          "0%": { opacity: "0", transform: "scale(0.8) translateY(20px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        ticker: "scrollTicker 40s linear infinite",
        floatBadge: "floatBadge 5s ease-in-out infinite",
        orbit: "workCircularOrbit 28s linear infinite",
        popupIn: "popupScaleEntrance 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards",
      },
    },
  },
  plugins: [],
};