/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'bannerTransform': {
          '0%': { transform: 'translateX(-30%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      },
      animation: {
        'bannerText': 'bannerTransform 1s ease-in-out'
      },
    },
  },
  plugins: [],
}

