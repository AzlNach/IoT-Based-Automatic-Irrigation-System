/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Crimson Pro', 'serif'],
        'sans': ['Inter', 'sans-serif']
      },
      colors: {
        'earth': {
          50: '#faf8f5',
          100: '#f4f0e8',
          200: '#e8dcc8',
          300: '#d9c4a0',
          400: '#c8a875',
          500: '#b89254',
          600: '#a67c47',
          700: '#8b653c',
          800: '#715336',
          900: '#5c442e'
        },
        'tech': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e'
        }
      }
    },
  },
  plugins: [],
}
