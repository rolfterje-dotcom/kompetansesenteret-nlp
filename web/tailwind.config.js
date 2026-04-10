/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfbf6',
          100: '#faf6ec',
          200: '#f3ead6',
        },
        clay: {
          50: '#fbf2ec',
          100: '#f3dcc9',
          200: '#e5b896',
          300: '#d49668',
          400: '#c07a47',
          500: '#a86238',
          600: '#8a4d2a',
          700: '#6b3b20',
        },
        sage: {
          50: '#f2f5f0',
          100: '#dde6d8',
          200: '#bccdb4',
          300: '#95b08a',
          400: '#708f65',
          500: '#54724b',
          600: '#3f5838',
        },
        ink: {
          700: '#3a2f27',
          800: '#2a221c',
          900: '#1a1410',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -15px rgba(107, 59, 32, 0.25)',
      },
    },
  },
  plugins: [],
};
