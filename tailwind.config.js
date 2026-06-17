export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F1F45',
        'primary-mid': '#1B2B5E',
        accent: '#F5A800',
        'accent-dark': '#D48900',
        dark: '#070E1C',
        light: '#F4F7FC',
        white: '#FFFFFF',
        tx: '#1A1A2E',
        'tx-muted': '#64748B',
        border: '#E5E7EB',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
      },
      letterSpacing: {
        tight: '-0.018em',
      },
      lineHeight: {
        relaxed: '1.7',
      },
    },
  },
  plugins: [],
}
