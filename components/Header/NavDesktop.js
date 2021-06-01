import styled from 'styled-components'
import React from 'react'
import NavDropdown from './NavDropdown'
import NavLink from './NavLink'
import global from '../../site.config.json'
import { device } from '../../styles/device'

/*-----------------------------------------------------------------------------
  Styled Container
------------------------------------------------------------------------------*/
const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

/*-----------------------------------------------------------------------------
  Styled NavLink
------------------------------------------------------------------------------*/
const StyledNavLink = styled(NavLink)`
  padding: 10px 12px;
  font-size: 14px;

  @media ${device.laptopM} {
    padding: 10px 16px;
    font-size: 16px;
  }
`


export default function NavDesktop({ className }) {
  return (
    <StyledContainer className={className}>
      {global.nav.map((item) => {
        if (item.children) {
          return <NavDropdown key={item.title} item={item} />
        }
        return <StyledNavLink key={item.title} title={item.title} href={item.path} />
      })}
    </StyledContainer>
  )
}
