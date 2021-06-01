import styled from 'styled-components'
import { timingFunctions } from 'polished'
import Link from 'next/link'

/*-----------------------------------------------------------------------------
  Default styling
------------------------------------------------------------------------------*/
const StyledAnchor = styled.a`
  display: block;
  padding: 11px 17px 10px;
  border-radius: 3px;
  text-decoration: none;
  text-transform: uppercase;
  line-height: 1;
  font-weight: ${({ theme }) => theme.font.weight.normal};
  color: ${({ theme }) => theme.colors.btn};
  background-color: ${({ theme }) => theme.colors.btnBg};
  transition: background-color 300ms ${timingFunctions('easeOutSine')};

  .no-touchevents &&:hover {
    color: ${({ theme }) => theme.colors.btnHover};
    background-color: ${({ theme }) => theme.colors.btnBgHover};
    text-decoration: none;
  }
`

export default function ButtonLink({
  href, children, className, useAnchor, target,
}) {
  let link = (
    <Link href={href} passHref>
      <StyledAnchor className={className}>{children}</StyledAnchor>
    </Link>
  )

  if (useAnchor) {
    link = <StyledAnchor className={className} target={target} href={href}>{children}</StyledAnchor>
  }
  return link
}
