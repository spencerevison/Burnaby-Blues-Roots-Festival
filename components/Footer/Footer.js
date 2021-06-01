import styled from 'styled-components'
import { timingFunctions } from 'polished';
import { animateScroll as scroll } from 'react-scroll'
import Social from '../Social'
import { device } from '../../styles/device'
import ArrowSVG from '../../svg/arrow-up.svg'

const itemMargin = 5;

/*-----------------------------------------------------------------------------
  Footer
------------------------------------------------------------------------------*/
const StyledFooter = styled.footer`
  width: 100%;
  overflow: hidden;
  border-top: 2px solid ${({ theme }) => theme.colors.footerBorder};
`

/*-----------------------------------------------------------------------------
  Container
------------------------------------------------------------------------------*/
const FlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: -${itemMargin}px;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.footerText};
  background-color: ${({ theme }) => theme.colors.footerBackground};

  @media ${device.laptop} {
    padding: 20px 40px;
  }
`

/*-----------------------------------------------------------------------------
  Logo Anchor
------------------------------------------------------------------------------*/
const LogoAnchor = styled.a`
  flex: 0 1 100px;
  margin: ${itemMargin}px;

  @media ${device.mobileM} {
    flex-basis: auto;
  }
`

/*-----------------------------------------------------------------------------
  Logo Image
------------------------------------------------------------------------------*/
const LogoImage = styled.img`
  height: 50px;
`

/*-----------------------------------------------------------------------------
  Arrow
------------------------------------------------------------------------------*/
const ArrowAnchor = styled.a`
  flex: 1 1 100%;
  cursor: pointer;
  text-align: center;

  svg {
    height: 35px;
    transition: transform 300ms ${timingFunctions('easeOutSine')};

    path {
      stroke: ${({ theme }) => theme.colors.footerText};
    }
  }

  .no-touchevents &:hover {
    svg {
      transform: translateY(-10px);
    }
  }

  @media ${device.tablet} {
    padding-top: 30px;
    margin-bottom: -40px;
  }
`

/*-----------------------------------------------------------------------------
  Legal
------------------------------------------------------------------------------*/
const Legal = styled.small`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 1 100%;
  margin: ${itemMargin}px;
  font-size: 12px;
  text-transform: uppercase;
  text-align: left;

  div {
    flex: 0 1 auto;
    margin-bottom: 10px;

    &:first-child {
      @media ${device.mobileM} {
        padding-right: 20px;
      }
    }
  }
`

/*-----------------------------------------------------------------------------
  Luminate
------------------------------------------------------------------------------*/
const LuminateAnchor = styled.a`
  display: block;
`

function scrollToTop() {
  scroll.scrollToTop({ duration: 500 })
}

export default function Header() {
  return (
    <StyledFooter>
      <FlexContainer>
        <ArrowAnchor onClick={scrollToTop}>
          <ArrowSVG />
        </ArrowAnchor>
        <LogoAnchor href="https://www.burnaby.ca/" target="_blank" rel="noopener noreferrer">
          <LogoImage src="/static/img/burnaby-logo-dark.svg" alt="City of Burnaby" />
        </LogoAnchor>
        <Social />
        <Legal>
          <div>© 2020 · Burnaby Blues + Roots Festival</div>
          <div>
            <LuminateAnchor href="https://www.luminateapps.com/custom-work/" target="_blank">Site by Luminate</LuminateAnchor>
          </div>
        </Legal>
      </FlexContainer>
    </StyledFooter>
  )
}
