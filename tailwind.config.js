const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", 
            "./src/**/*.{js,jsx,ts,tsx}",
            "./screens/**/*.{js,jsx,ts,tsx}",
            "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: '#f25f4c',
      secondary: '#e53170',
      light: '#fffffe',
      dark: '#0f0e17',
      background: '#f3f4f6',
      lightgray: '#6b7280'
      
    },
  },
  plugins: [],
}