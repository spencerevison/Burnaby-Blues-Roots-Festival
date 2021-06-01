import { createGlobalStyle } from 'styled-components'
import { timingFunctions, darken } from 'polished'
import { device } from './device'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.font.family.primary};
    font-size: 16px;
    font-weight: ${({ theme }) => theme.font.weight.normal};
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.backgroundBody};
  }

  a {
    color: ${({ theme }) => theme.colors.link};
    transition: all 200ms ease;

    .no-touchevents &:hover {
      color: ${({ theme }) => theme.colors.linkHover};
    }

    &:focus {
      outline-color: ${({ theme }) => theme.colors.highlight};
    }
  }

  p {
    margin-bottom: 20px;
  }

  img {
    max-width: 100%;
  }

  ul {
    list-style: disc;
    margin: 0 0 20px 18px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 40px 0 20px;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.font.family.headings};
    font-weight: ${({ theme }) => theme.font.weight.heavy};
    color: ${({ theme }) => theme.colors.headings};
  }

  h1, .h1 {
    margin: 0;
    font-size: 50px;
    color: ${({ theme }) => theme.colors.heroImageText};

    @media ${device.laptop} {
      font-size: 75px;
    }
  }

  h2, .h2 {
    font-size: 30px;
  }

  h3, .h3 {
    font-size: 20px;
  }

  h4, .h4 {
    font-size: 18px;
  }

  hr {
    margin: 30px 0;
  }

  strong, b {
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  small {
    font-size: smaller;
  }

  button {
    padding: 14px 20px 13px;
    cursor: pointer;
    border-radius: 3px;
    border: 0;
    text-decoration: none;
    text-transform: uppercase;
    line-height: 1;
    font-size: 16px;
    font-family: ${({ theme }) => theme.font.family.primary};
    font-weight: ${({ theme }) => theme.font.weight.normal};
    color: ${({ theme }) => theme.colors.btn};
    background-color: ${({ theme }) => theme.colors.btnBg};
    transition: all 200ms ${timingFunctions('easeOutQuad')};

    .no-touchevents &:hover {
      color: ${({ theme }) => theme.colors.btnHover} !important;
      background-color: ${({ theme }) => theme.colors.btnBgHover} !important;
      text-decoration: none;
      transform: translateY(-5px);
    }

    &.light {
      color: ${({ theme }) => theme.colors.lightBtn};
      background-color: ${({ theme }) => theme.colors.lightBtnBg};

      .no-touchevents &:hover {
        background-color: ${({ theme }) => theme.colors.lightBtnBgHover};
      }
    }

    &.highlight {
      font-weight: ${({ theme }) => theme.font.weight.bold};
      color: ${({ theme }) => theme.colors.highlightBtn};
      background-color: ${({ theme }) => theme.colors.highlightBtnBg};

      .no-touchevents &:hover {
        color: ${({ theme }) => theme.colors.highlightBtn} !important;
        background-color: ${({ theme }) => theme.colors.highlightBtnBgHover} !important;
      }
    }
  }

  .no-wrap {
    white-space: nowrap;
  }

  /*-----------------------------------------------------------------------------
    Hidden Accessible
  ------------------------------------------------------------------------------*/
  .hidden-accessible {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
    font-size: 0;
    background: transparent;
    cursor: pointer;
  }

  /*-----------------------------------------------------------------------------
    Dynamic Font Loading (hide until font is loaded)
  ------------------------------------------------------------------------------*/
  h1, h2, h3, h4, h5, h6, p, span, ul, ol {
    opacity: 0;
    transition: opacity .3s ${timingFunctions('easeOutSine')};

    .primary-font-loaded &, .primary-font-timeout & {
      opacity: 1;
    }
  }

  /*-----------------------------------------------------------------------------
    React Reveal Fix
  ------------------------------------------------------------------------------*/
  .react-reveal {
    opacity: 0;
  }

  /*-----------------------------------------------------------------------------
    Nprogress
  ------------------------------------------------------------------------------*/
  #nprogress {
    .spinner-icon {
      border-left-color: ${({ theme }) => theme.colors.progressSpinner} !important;
      border-right-color: ${({ theme }) => theme.colors.progressSpinner} !important;
      border-top-color: ${({ theme }) => theme.colors.progressSpinner} !important;
    }

    .spinner {
      display: none;

      @media ${device.laptop} {
        display: block;
        transform: translateX(0) !important;
        top: 19px !important;
        right: 10px !important;
      }

        @media ${device.laptopM} {
          top: 26px !important;
        }
    }

    .bar {
      background: linear-gradient(90deg, ${({ theme }) => theme.colors.progressBar} 70%, ${({ theme }) => darken(0.2, theme.colors.progressBar)} 100%) !important;
    }

    .peg {
      display: none !important;
    }
  }

  /*-----------------------------------------------------------------------------
    Headroom
  ------------------------------------------------------------------------------*/
  .headroom {
    top: 0;
    left: 0;
    right: 0;
    z-index: 900;
  }

  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
  }

  .headroom--scrolled {
    transition: transform 200ms ${timingFunctions('easeOutSine')};
  }

  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
  }

  .headroom--pinned,
  .keep-pinned &.headroom {
    position: fixed;
    transform: translateY(0%);
  }

  /*-----------------------------------------------------------------------------
    Bootstrap
  ------------------------------------------------------------------------------*/
  .collapse:not(.show) {
    display: none;
  }

  .collapsing {
    position: relative;
    height: 0;
    overflow: hidden;
    transition: height 0.35s ease;
  }
`
export default GlobalStyles
