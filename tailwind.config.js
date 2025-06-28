/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'lora': ['Lora', 'serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        'cream': {
          50: '#fefdf8',
          100: '#fdf8e6',
          200: '#faf0cc',
          300: '#f6e7b3',
          400: '#f2de99',
          500: '#eed580',
          600: '#eacc66',
          700: '#e6c34d',
          800: '#e2ba33',
          900: '#deb11a',
        },
      },
      backgroundImage: {
        'paisley-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23f97316\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};