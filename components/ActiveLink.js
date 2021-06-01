import styled from 'styled-components'
import { withRouter } from 'next/router'

const StyledAnchor = styled.a`
  text-decoration: none;

  .no-touchevents &:hover {
    text-decoration: none;
  }
`

const ActiveLink = ({
  children, router, href, className, propClickHandler,
}) => {
  const active = router.pathname === href

  const handleClick = (e) => {
    e.preventDefault()
    if (!active) {
      router.push(href)
    }
    if (propClickHandler) {
      propClickHandler()
    }
  }

  return (
    <StyledAnchor href={href} onClick={handleClick} className={className}>
      {children}
    </StyledAnchor>
  )
}

export default withRouter(ActiveLink)
