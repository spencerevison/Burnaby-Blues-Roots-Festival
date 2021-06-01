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
  bridalhealth: '#FFFBF6',
}

const colormap = {
  primary: burnabyColors.navy,
  secondary: burnabyColors.darkcyan,
  highlight: burnabyColors.gold,
  duoToneLight: burnabyColors.warmgray,
  duoToneDark: burnabyColors.navy,
  gray: burnabyColors.gray,
  grayMediumLight: lighten(0.12, burnabyColors.gray),
  grayLight: lighten(0.22, burnabyColors.gray),
  grayMediumDark: darken(0.1, burnabyColors.gray),
  grayDark: darken(0.4, burnabyColors.gray),
  warmGray: burnabyColors.warmgray,
  black: burnabyColors.almostblack,
  white: burnabyColors.nearlywhite,
  beige: burnabyColors.bridalhealth,
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
    // General
    primary: colormap.primary,
    secondary: colormap.secondary,
    highlight: colormap.highlight,

    gray: colormap.gray,
    grayMediumLight: colormap.grayMediumLight,
    grayLight: colormap.grayLight,
    grayMediumDark: colormap.grayMediumDark,
    grayDark: colormap.grayDark,

    // Text
    text: colormap.black,
    headings: colormap.grayDark,

    // Body
    backgroundBody: colormap.beige,

    // Layouts
    mainBg: colormap.beige,

    // Progress
    progressBar: colormap.highlight,
    progressSpinner: colormap.highlight,

    // Header
    headerBackground: colormap.beige,
    headerText: colormap.grayDark,
    headerLogoHover: lighten(0.07, colormap.primary),
    bannerBg: colormap.primary,
    banner: colormap.white,
    bannerIcon: colormap.highlight,

    // Footer
    footerText: colormap.black,
    footerBackground: colormap.beige,
    footerBorder: 'transparent',

    // Buttons & Links
    link: colormap.primary,
    linkHover: lighten(0.1, colormap.primary),
    btnBg: colormap.primary,
    btnBgHover: lighten(0.1, colormap.primary),
    btn: colormap.white,
    btnHover: colormap.white,
    lightBtnBg: colormap.white,
    lightBtn: colormap.black,
    lightBtnBgHover: darken(0.05, colormap.white),
    highlightBtnBg: colormap.highlight,
    highlightBtn: colormap.primary,
    highlightBtnBgHover: lighten(0.15, colormap.highlight),

    // Hero Video
    heroVideoLogo: colormap.white,

    // Hero Image
    heroImageText: colormap.white,

    // Touts
    toutHeading: colormap.white,
    toutOverlay: colormap.black,

    // Newsletter
    newsBg: 'linear-gradient(149deg, rgba(0,82,137,1) 31%, rgba(59,122,131,1) 100%)',
    newsText: colormap.white,
    newsHeading: colormap.white,
    newsMessage: colormap.highlight,

    // Social
    social: colormap.black,
    socialBg: 'transparent',
    socialHover: colormap.black,
    socialBgHover: 'transparent',

    // FAQ
    faqToggleBg: colormap.primary,
    faqToggle: colormap.white,
    faqToggleBgHover: lighten(0.1, colormap.primary),
    faqToggleHover: colormap.white,

    // Share
    share: colormap.white,
    shareBg: colormap.grayDark,

    // Artist Cards
    artistheading: colormap.white,
    artistsubheading: colormap.grayMediumLight,
    artistoverlay: colormap.primary,

    // Tickets
    ticketsBg: colormap.warmGray,
    ticketsText: colormap.primary,
    ticketsCardBg: colormap.grayLight,
    ticketsCardBgHover: colormap.white,
    ticketsShadowHover: lighten(0.3, colormap.black),
    ticketsDivider: colormap.black,
    ticketsIcon: colormap.highlight,

    // Gradients
    gradients: {
      beige: `linear-gradient(120deg, ${lighten(0, colormap.beige)}, ${colormap.white}, ${colormap.beige}, ${lighten(0.05, colormap.warmGray)})`,
      beigeLandscape: `linear-gradient(105deg, ${darken(0.05, colormap.beige)}, ${colormap.white}, ${colormap.beige}, ${lighten(0.05, colormap.warmGray)})`,
    },
  },
  logo: {
    headerDesktop: '/static/img/logo-landscape-dark.svg',
  },
  image: {
    duotoneBg: `${colormap.primary.substr(1)},${colormap.white.substr(1)}`,
    duotone: `"${colormap.duoToneDark.substr(1)},${colormap.duoToneLight.substr(1)}"`,
    duotoneQuery: `duotone=${colormap.duoToneDark.substr(1)},${colormap.duoToneLight.substr(1)}`,
    duotoneHero: `${colormap.duoToneDark.substr(1)},${colormap.duoToneLight.substr(1)}`,
    duotoneAlpha: 40,
  },
  font: {
    family: {
      primary: "'Montserrat', sans-serif",
      headings: "'Montserrat', sans-serif",
      secondary: "'Source Serif Pro', serif",
    },
    weight: {
      light: 300,
      normal: 400,
      bold: 600,
      heavy: 800,
    },
  },
}

export default theme
