/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          DEFAULT: '#034EA2',
          hover:   '#023d80',
          light:   '#0560c2',
        },
        'logo-blue': '#004CA0',
        'logo-sky': '#ACD3FF',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        inter: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        'tight-apple': '-0.025em',
        'normal-apple': '-0.01em',
      },
      fontFeatureSettings: {
        'apple': '"cv02", "cv03", "cv04", "cv11"',
      },
    },
  },
  plugins: [],
}