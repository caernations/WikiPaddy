/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          950: '#0A0A0F',
          900: '#12121A',
          800: '#1C1C26',
          700: '#2A2A38',
        },
        accent: {
          50:  '#EEF0FF',
          200: '#C4CAFF',
          400: '#7C86FF',
          500: '#5B67F5',
          600: '#4950E6',
          700: '#3B3EC4',
        },
        warm: {
          400: '#FFB26B',
          500: '#FF8A3D',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(91,103,245,0.25), 0 20px 60px -20px rgba(91,103,245,0.45)',
        warm: '0 20px 60px -20px rgba(255,138,61,0.5)',
        card: '0 1px 2px rgba(15,15,30,0.04), 0 10px 30px -12px rgba(15,15,30,0.12)',
        cardDark: '0 1px 2px rgba(0,0,0,0.4), 0 20px 60px -20px rgba(0,0,0,0.6)',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        gradientShift: 'gradientShift 8s ease infinite',
      },
    },
  },
  plugins: [],
}
