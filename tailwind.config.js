/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        lightblack: '#212529',
        blue: '#0866C6',
        indigo: '#6610f2',
        purple: '#6f42c1',
        pink: '#e83e8c',
        red: '#DC3545',
        orange: '#f27510',
        yellow: '#F49917',
        darkGreen: '#009900',
        green: '#23BF08',
        teal: '#1CAF9A',
        cyan: '#17A2B8',
        white: '#fff',
        gray: '#6c757d',
        greenSupLight: '#90ee90',
        darkGray: '#343a40',
        primary: '#0866C6',
        secondary: '#6c757d',
        success: '#23BF08',
        info: '#17A2B8',
        warning: '#F49917',
        danger: '#DC3545',
        light: '#f8f9fa',
        dark: '#343a40',
        ground: '#e9ecef'
      },
    },
  },
  plugins: [],
}


