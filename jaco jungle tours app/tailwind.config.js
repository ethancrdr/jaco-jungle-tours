export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          50: '#fff7ed', // Warm Orange 50
          100: '#ffedd5', // Warm Orange 100
          500: '#f97316', // Sunset Orange (Primary)
          600: '#ea580c', // Darker Sunset
          900: '#7c2d12', // Deep Brown/Red
        },
        'accent': {
          500: '#f59e0b', // Golden Amber
          600: '#d97706', // Darker Amber
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem', // Slightly less rounded, more premium
      },
    },
  },
  plugins: [],
}

