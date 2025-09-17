/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple-600': 'hsl(246, 80%, 60%)',

        'work-orange-300': 'hsl(15, 100%, 70%)',
        'play-blue-300': 'hsl(195, 74%, 62%)',
        'study-pink-400': 'hsl(348, 100%, 68%)',
        'exercise-green-400': 'hsl(145, 58%, 55%)',
        'social-purple-700': 'hsl(264, 64%, 52%)',
        'selfcare-yellow-300': 'hsl(43, 84%, 65%)',

        'navy-950': 'hsl(226, 43%, 10%)',
        'navy-900': 'hsl(235, 46%, 20%)',
        'purple-500': 'hsl(236, 40%, 35%)',
        'navy-200': 'hsl(236, 100%, 87%)',
        'white': 'hsl(0, 0%, 95%)',
      }
    },
  },
  plugins: [],
}

