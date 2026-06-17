export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B2B5E',
        'primary-mid': '#2E4A9E',
        accent: '#F5C518',
        dark: '#0D1A3A',
        light: '#F8F9FC',
        tx: '#1A1A2E',
        'tx-muted': '#6B7280',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
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
