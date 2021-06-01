import styled from 'styled-components'
import React from 'react'
import { timingFunctions } from 'polished'
import Headroom from 'react-headroom'
import { device } from '../../styles/device'
import Social from '../Social'
import HamburgerMenu from './HamburgerMenu'
import Masthead from './Masthead'
import HamburgerBtn from './HamburgerBtn'
import NavDesktop from './NavDesktop'
import Banner from './Banner'

/*-----------------------------------------------------------------------------
  Styled Header
------------------------------------------------------------------------------*/
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  transition: background-color 600ms ${timingFunctions('easeOutQuint')};

  @media ${device.mobileXL} {
    flex-wrap: nowrap;
  }

  @media ${device.laptop} {
    padding: 10px 40px;
  }
`

/*-----------------------------------------------------------------------------
  Masthead
------------------------------------------------------------------------------*/
const StyledMasthead = styled(Masthead)`
  flex: 0 1 129px;
  height: 34px;

  @media ${device.laptopM} {
    flex: 0 1 190px;
    height: 50px;
  }
`

/*-----------------------------------------------------------------------------
  Date & location container
------------------------------------------------------------------------------*/
const InfoContainer = styled.div`
  margin-left: 10px;
  font-size: 11px;
  line-height: 1.3;
  font-weight: ${({ theme }) => theme.font.weight.heavy};
  letter-spacing: -0.7px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.headerText};

  @media ${device.laptopM} {
    margin-top: 2px;
    font-size: 13px;
    line-height: 1.5;
  }

  span {
    display: block;
  }
`

/*-----------------------------------------------------------------------------
  Desktop Nav
------------------------------------------------------------------------------*/
const StyledNavDesktop = styled(NavDesktop)`
  && {
    display: none;
    flex: 1 1 auto;
    margin: 0 10px -2px 0;

    @media ${device.laptop} {
      display: flex;
    }
  }
`

/*-----------------------------------------------------------------------------
  Styled Social
------------------------------------------------------------------------------*/
const StyledSocial = styled(Social)`
  display: none;
  margin-left: auto;

  @media ${device.laptop} {
    display: flex;
  }
`

/*-----------------------------------------------------------------------------
  Styled Hamburger Button
------------------------------------------------------------------------------*/
const StyledHamburgerBtn = styled(HamburgerBtn)`
  display: block;
  flex: 0 0 auto;
  margin: -1px -10px 0 auto;

  @media ${device.laptop} {
    display: none;
  }
`

/*-----------------------------------------------------------------------------
  Header
------------------------------------------------------------------------------*/
export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  onMenuStateChange = (isOpen) => {
    this.setState({ menuOpen: isOpen })
  }

  render() {
    const { menuOpen } = this.state
    return (
      <div>
        <HamburgerMenu menuOpen={menuOpen} onMenuStateChange={this.onMenuStateChange} />
        <Headroom disableInlineStyles className={menuOpen ? 'keep-pinned' : ''}>
          <StyledHeader>
            <StyledMasthead onMenuStateChange={this.onMenuStateChange} />
            <InfoContainer>
              <span>August 7-8, 2020</span>
              <span>Deer Lake Park</span>
            </InfoContainer>
            <StyledNavDesktop />
            <StyledSocial noEmail />
            <StyledHamburgerBtn onClick={() => this.onMenuStateChange(!menuOpen)} menuOpen={menuOpen} />
          </StyledHeader>
          <Banner />
        </Headroom>
      </div>
    )
  }
}
