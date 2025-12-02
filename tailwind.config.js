/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          teal: '#009986',
          tealLight: '#e6f5f3',
          dot: '#F76D4D',
          orange: '#F76D4D',
          bg: '#eaf4f5',
          active: '#efffff',
          text: '#334155',
          dark: '#1e293b',
          gray: '#64748b'
        }
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'modal': '0 20px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.3s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [],

}
