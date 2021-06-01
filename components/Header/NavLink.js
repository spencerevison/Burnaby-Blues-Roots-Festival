import React from 'react'
import { timingFunctions } from 'polished'
import styled from 'styled-components'
import Link from 'next/link'

/*-----------------------------------------------------------------------------
  Link anchor styling
------------------------------------------------------------------------------*/
const StyledAnchor = styled.a`
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

  &:after {
    content: ".";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0;
    color: transparent;
    height: 1px;
    background: ${({ theme }) => theme.colors.primary};
    transition: all .2s ${timingFunctions('easeOutSine')};
  }

  .no-touchevents &&:hover {
    color: ${({ theme }) => theme.colors.linkHover};

    &:after {
      width: calc(100% - 20px);
    }
  }
`

export default function NavLink({
  href, title, className, callback,
}) {
  return (
    <Link href={href} passHref>
      <StyledAnchor className={className} onClick={callback}>{title}</StyledAnchor>
    </Link>
  )
}
