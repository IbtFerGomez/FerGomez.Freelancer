/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Esta línea es la que le dice a Tailwind que lea tus componentes
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#050505',
        'soft-glass': 'rgba(255, 255, 255, 0.03)',
        'logic-blue': '#3b82f6', 
        'bio-green': '#10b981',
      },
    },
  },
  plugins: [],
}