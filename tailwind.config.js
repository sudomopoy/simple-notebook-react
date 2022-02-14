module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  plugins: [],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#A16AE8',
      'primary-dark': '#4120A9',
      'primary-hover': '#A1A9FE',
      'secondary': '#F6D4D2',
      'white': '#FFF',
      'gray-300': '#E0E0E0',
      'gray-700': '#535353',
      'gray-900': '#212121',
      'background': "#f7f7f7",
      'black': '#000',
      'danger': '#F32013',
      'danger-hover': '#CA0B00',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'circ': '500px',
        'md': "25px",
      }
    }
  }
}
