import { darken, lighten } from 'polished'

const burnabyColors = {
  // Primary
  darkslategray: '#006649',
  navy: '#005289',
  yellowgreen: '#76BC43',
  darkcyan: '#0080A2',

  // Auxillary
  brown: '#79242F',
  crimson: '#CF3338',
  chocolate: '#D36127',
  lightcoral: '#F26D78',
  gold: '#FFC52F',
  cornflowerblue: '#6DA9DC',
  darkslateblue: '#742F8A',
  darkkhaki: '#BD9A5F',
  teal: '#00867C',
  swamp: '#D4D755',
  warmgray: '#CBC3BB',

  // Festival Colors
  khaki: '#f9d963',
  almostblack: '#252122',
  nearlywhite: '#fdfdfd',

  // Misc.
  gray: '#bfbfbf',
}

const colormap = {
  primary: burnabyColors.navy,
  secondary: burnabyColors.darkslategray,
  highlight: burnabyColors.khaki,
  duoToneLight: '#ffffff',
  duoToneDark: burnabyColors.darkslategray,
  gray: burnabyColors.gray,
  grayMediumLight: lighten(0.15, burnabyColors.gray),
  grayLight: lighten(0.22, burnabyColors.gray),
  grayMediumDark: darken(0.1, burnabyColors.gray),
  grayDark: darken(0.21, burnabyColors.gray),
  black: burnabyColors.almostblack,
  white: burnabyColors.nearlywhite,
}

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 3, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 32, // rem
      md: 61, // rem
      lg: 64, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75, // em
    },
  },
  spacing: {
    header: {
      margin: '0 -7%',
    },
  },
  colors: {
    backgroundHeader: colormap.black,
    backgroundBody: colormap.grayLight,
    primary: colormap.primary,
    secondary: colormap.secondary,
    text: colormap.black,
    highlight: colormap.highlight,
    lightGray: colormap.grayLight,
    backgroundFooter: colormap.primary,
    link: colormap.primary,
    linkHover: lighten(0.1, colormap.primary),
    btnBg: colormap.primary,
    btnBgHover: lighten(0.05, colormap.primary),
    btn: colormap.white,
    btnHover: colormap.white,
    social: colormap.highlight,
    socialBg: colormap.primary,
    socialHover: colormap.primary,
    socialBgHover: colormap.primary,
  },
  logo: {
    headerDesktop: '/static/img/logo-landscape-light.svg',
  },
  image: {
    duotone: `"${colormap.duoToneLight.substr(1)},${colormap.duoToneDark.substr(1)}"`,
    duotoneAlpha: 30,
  },
  font: {
    family: {
      primary: "'Montserrat', sans-serif",
      headings: "'Source Serif Pro', serif",
    },
    weight: {
      normal: 300,
      bold: 500,
      heavy: 700,
    },
  },
}

export default theme
