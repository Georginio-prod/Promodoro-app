/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgp: '#1E213F',
        bgbtn: '#161932',
        bgbout:'#F87070'
      }
    },
  },
  plugins: [],
}

