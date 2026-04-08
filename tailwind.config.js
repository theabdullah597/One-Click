/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#7B2FF7',
          magenta: '#C850C0',
          pink: '#E8468F',
          coral: '#F0724B',
          orange: '#F5A623',
          amber: '#FFCC33',
          blue: '#4FACFE',
          sky: '#00C6FB',
        },
        surface: {
          offwhite: '#FAF9FE',
          light: '#F5F3FA',
          dark: '#1a0533',
          footer: '#0d0620',
        },
        text: {
          dark: '#1A0A2E',
          mid: '#524868',
          light: '#8A7FA0',
        },
        border: '#EBE7F3',
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #7B2FF7 0%, #C850C0 30%, #E8468F 50%, #F0724B 75%, #F5A623 100%)',
        'hero-gradient': 'linear-gradient(135deg, #1a0533 0%, #2d1054 40%, #7b2ff7 100%)',
        'dark-gradient': 'linear-gradient(135deg, #1a0533 0%, #2d1054 50%, #4a1a8a 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
