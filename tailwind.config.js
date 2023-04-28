/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
				current: 'currentColor',
        primary: '#4ec3f5',
        secondary: "#06212f"
      },
      fontFamily:{
        primary: 'Electrolize',
        secondary: "Montserrat",
      }

    },
  },
  plugins: [
    require("daisyui")
  ],
}

