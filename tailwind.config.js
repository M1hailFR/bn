/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

module.exports = {
  content: ['./index.html', './src/**/*.{vue,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },
    screens: {
      xs: '400px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
      '2xl': '1640px',
    },
    colors: {
      transparent: 'transparent',
      none: 'none',
      primary: '#7fc7ff', //#2A3B4D
      secondary: '#7fc7ff',
      white: 'white',
      black: 'black',
      gray: {
        100: '#E0E0E0',
        200: '#E5E5E5',
        300: '#D8D8D8',
        400: '#C0C0C0',
        500: '#A3A9B1',
        600: '#999999',
        700: '#808080',
        800: '#666666',
        900: '#5C5C5C',
      },
      red: {
        100: '#fff5f5',
        200: '#fed7d7',
        300: '#feb2b2',
        400: '#fc8181',
        500: '#f56565',
        600: '#e53e3e',
        700: '#c53030',
        800: '#9b2c2c',
        900: '#742a2a',
      },
    },
    backgroundImage: {
      'gradient-primary':
        'linear-gradient(45deg, #0084d1 16%, #00bcff 84%);',
      'gradient-1': 'linear-gradient(45deg, #2A3B4D 0%, rgba(0,59,47) 100%);',
      'gradient-2': 'linear-gradient(45deg, rgba(0,59,47) 0%, #2A3B4D 100%)',
      'gradient-3': 'linear-gradient(45deg, #5C5C5C 0%, #2A3B4D 100%)',
      'gradient-4': 'linear-gradient(90deg, #7fc7ff 0%, #bbbbbb 100%)',
      'gradient-5': 'linear-gradient(45deg, rgba(0,59,47) 0%, #2A3B4D 100%)',
      'gradient-6': 'linear-gradient(90deg, #ffeb3b 0%, #9e9e9e 100%)',
    },
    boxShadow: {
      base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      none: '0 0 #0000',
      100: '0px 5px 5px rgba(0, 0, 0, 0.05)',
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        '.border-image-1': {
          borderImageSlice: '1',
        },
        '.border-image-2': {
          borderImageSlice: '2',
        },
        '.border-image-primary': {
          borderImageSource: theme('backgroundImage.gradient-primary'),
        },
      })
    }),
  ],
}
