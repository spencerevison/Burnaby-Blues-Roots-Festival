import styled from 'styled-components'
import ScrollLock from 'react-scrolllock'
import { darken } from 'polished'
import { Accordion, Card } from 'react-bootstrap'
import NavLink from './NavLink'
import Social from '../Social'
import global from '../../site.config.json'

/*-----------------------------------------------------------------------------
  Overlay
------------------------------------------------------------------------------*/
const Overlay = styled.div`
  position: fixed;
  top: 55px;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease 0s;
  transform: ${({ menuOpen }) => (menuOpen ? 'none' : 'translate3d(100%, 0px, 0px)')};
  opacity: ${({ menuOpen }) => (menuOpen ? '1' : '0')};
`

/*-----------------------------------------------------------------------------
  Menu
------------------------------------------------------------------------------*/
const Menu = styled.div`
  position: fixed;
  top: 55px;
  right: 0;
  width: 100%;
  height: calc(100% - 55px);
  z-index: 1100;
  overflow: auto;
  transition: all 0.5s ease 0s;
  transform: ${({ menuOpen }) => (menuOpen ? 'none' : 'translate3d(100%, 0px, 0px)')};
  background: ${({ theme }) => theme.colors.headerBackground};
`

/*-----------------------------------------------------------------------------
  StyledNavLink
------------------------------------------------------------------------------*/
const StyledNavLink = styled(NavLink)`
  position: static;
  display: block;
  padding: 15px 20px;
  font-weight: ${({ theme }) => theme.font.weight.bold};

  &:after {
    display: none;
  }
`

/*-----------------------------------------------------------------------------
  Styled Card
------------------------------------------------------------------------------*/
const StyledCard = styled(Card)`
  width: 100%;
  overflow: hidden;
`

/*-----------------------------------------------------------------------------
  Styled Toggle
------------------------------------------------------------------------------*/
const StyledToggle = styled.a`
  display: block;
  padding: 15px 20px;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

/*-----------------------------------------------------------------------------
  Styled Card Body (Child Links)
------------------------------------------------------------------------------*/
const StyledCardBody = styled(Card.Body)`
  margin: 0 -10px;
  padding: 1px 0 1px 20px;
  box-shadow: inset 0 0 7px 0 rgba(0, 0, 0, 0.75);
  background: ${({ theme }) => darken(0.01, theme.colors.backgroundBody)};
`

/*-----------------------------------------------------------------------------
  Styled Child Nav Link
------------------------------------------------------------------------------*/
const StyledChildNavLink = styled(StyledNavLink)`
  color: ${({ theme }) => theme.colors.headerText};
`

/*-----------------------------------------------------------------------------
  Social
------------------------------------------------------------------------------*/
const StyledSocial = styled(Social)`
  display: inline-flex;
  margin: 10px 0 0 12px;
`

export default function HamburgerMenu({ onMenuStateChange, menuOpen }) {
  return (
    <div>
      <ScrollLock isActive={menuOpen} />
      <Overlay menuOpen={menuOpen} />
      <Menu menuOpen={menuOpen}>
        <Accordion>
          {global.nav.map((item, itemIndex) => {
            if (item.children) {
              return (
                <StyledCard key={item.title}>
                  <Card.Header>
                    <Accordion.Toggle as={StyledToggle} variant="link" eventKey={itemIndex}>
                      {item.title}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={itemIndex}>
                    <StyledCardBody>
                      {item.children.map((child) => (
                        <StyledChildNavLink key={child.title} title={child.title} href={child.path} callback={() => { onMenuStateChange(false) }} />
                      ))}
                    </StyledCardBody>
                  </Accordion.Collapse>
                </StyledCard>
              )
            }
            return <StyledNavLink key={item.title} title={item.title} href={item.path} callback={() => { onMenuStateChange(false) }} />
          })}
        </Accordion>
        <StyledSocial />
      </Menu>
    </div>
  )
}
