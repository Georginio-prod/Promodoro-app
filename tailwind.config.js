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
        bgbout:'#F87070',
        ft:'#D7E0FF',
        fth:'#1E213F',
        cercle:'#0E112A',
        cercle1:'#2E325A',
        pop: '#0A0C1C',
        input: '#EFF1FA',
        bgbout1:'#D881F8',
        bgbout2:'#70F3F8'

      },

      letterSpacing: {
        space:'15px',
        num:'-5px',
        num1: '5px'
      }
    },
  },
  plugins: [],
}

