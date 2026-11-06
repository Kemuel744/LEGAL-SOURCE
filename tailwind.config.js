/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
    },
    extend: {
      colors: {
        brand: {
          navy: '#01325B',
          deep: '#003D66',
          ink: '#0B2A4A',
          green: '#2E8D29',
          'green-dark': '#24701F',
          'green-light': '#EAF4E8',
          sky: '#F3F8FC',
          border: '#E2EAF2',
          muted: '#5A6B7B',
        },
        logo: {
          yellow: '#F4B400',
          orange: '#E8752A',
          red: '#D94A3D',
          purple: '#7B4EA3',
          blue: '#2C7FB8',
          teal: '#1E9AA0',
          green: '#5AA843',
        },
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1240px',
        'content-xl': '1520px',
        'content-4k': '1800px',
      },
      boxShadow: {
        card: '0 10px 30px -18px rgba(1, 50, 91, 0.35)',
        header: '0 6px 24px -18px rgba(1, 50, 91, 0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
        'fade-in': 'fade-in 0.3s ease-out both',
      },
    },
  },
  plugins: [],
}
