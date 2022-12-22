/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "4s rotate linear infinite"
      },
      keyframes: {
        "rotate": {
          "from": {
            "transform": "rotate(360deg)",
          },
          "to" :{
            "transform": "rotate(0deg)"
          }
        }
      },
      backgroundImage: {
        "glow1": "conic-gradient(from 180deg at 50% 50%,#16abff33 0deg,#0885ff33 55deg,#54d6ff33 120deg,#0071ff33 160deg,transparent 360deg)",
        "glow2": "radial-gradient(rgba(91, 33, 182, 1), rgba(255, 255, 255, 0))",
        "glow-border": "linear-gradient(90deg, #1f005c, #5b0060, #870160, #ac255e, #ca485c, #e16b5c, #f39060, #ffb56b)",
        "glow-rotate": "linear-gradient(to bottom right,rgba(239,245,249, 1),rgba(228,232,233, 1))"
      },
      translate: {
        "z": "translateZ(0)"
      }
    },
  },
  plugins: [],
}