/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#67e8f9',
        dark: '#0f172a',
        secondary: '#64748b',
        lime: '#84cc16'
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

