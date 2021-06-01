import React from 'react'
import styled from 'styled-components'
import { timingFunctions } from 'polished'
import { device } from '../../styles/device'
import NavLink from './NavLink'

/*-----------------------------------------------------------------------------
  Styled Dropdown
------------------------------------------------------------------------------*/
const StyledDropdown = styled.div`
  position: relative;
`

/*-----------------------------------------------------------------------------
  Styled Toggle
------------------------------------------------------------------------------*/
const StyledToggle = styled.div`
  display: block;
  padding: 10px 12px;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

  @media ${device.laptopM} {
    font-size: 16px;
  }

  .no-touchevents &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

/*-----------------------------------------------------------------------------
  Dropdown Menu
------------------------------------------------------------------------------*/
const StyledDropdownMenu = styled.ul`
  && {
    position: absolute;
    top: 40px;
    left: -10px;
    box-sizing: content-box;
    min-width: 165px;
    padding-bottom: 10px;
    margin-left: 0;
    list-style: none;
    background: ${({ theme }) => theme.colors.headerBackground};
    transition: all .2s ${timingFunctions('easeOutSine')};
    max-height: ${({ isOpen }) => (isOpen ? '205px' : '0')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};

    @media ${device.laptopM} {
      padding-bottom: 20px;
    }

    .headroom--unpinned & {
      display: none !important;
    }

    li {
      transition: opacity .2s ${timingFunctions('easeOutSine')} ${({ isOpen }) => (isOpen ? '0.1s' : '0s')};
      opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    }
  }
`

/*-----------------------------------------------------------------------------
  Styled Child NavLink
------------------------------------------------------------------------------*/
const StyledChildNavLink = styled(NavLink)`
  display: block;
  margin: 0;
  padding: 10px 20px;
  font-size: 14px;

  @media ${device.laptopM} {
    font-size: 16px;
  }
`

export default class NavDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      isOpening: false,
    }
  }

  handleOpen = () => {
    this.setState({ isOpen: true, isOpening: true })

    // Set isOpening to block click from causing it to close
    setTimeout(() => {
      this.setState({ isOpening: false })
    }, 100)
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }

  handleToggle = () => {
    const { isOpen, isOpening } = this.state

    // Don't toggle if in the process of opening (from focus)
    if (!isOpening) {
      this.setState({ isOpen: !isOpen })
    }
  }

  render() {
    const { isOpen } = this.state
    const { item, className } = this.props

    return (
      <StyledDropdown
        className={className}
        onMouseEnter={this.handleOpen}
        onMouseLeave={this.handleClose}
        onFocus={this.handleOpen}
        onBlur={this.handleClose}
        onClick={this.handleToggle}
      >
        <StyledToggle>
          {item.title}
        </StyledToggle>
        <StyledDropdownMenu isOpen={isOpen}>
          {item.children.map((child) => (
            <li key={child.title}><StyledChildNavLink title={child.title} href={child.path} callback={this.handleClose} /></li>
          ))}
        </StyledDropdownMenu>
      </StyledDropdown>
    )
  }
}
