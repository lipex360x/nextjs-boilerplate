export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },

  color: {
    white: '#f5f5f5',
    black: '#1d1d1b',

    gray900: '#121214',
    gray800: '#202024',
    gray400: '#8D8D99',
    gray300: '#c4c4cc',
    gray100: '#e1e1e6',

    green500: '#00875f',
    green300: '#00b37e'
  },

  font: {
    family: "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

    light: 300,
    normal: 400,
    bold: 700,

    size: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },

  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },

  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },

  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const