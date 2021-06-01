import styled from 'styled-components'
import { timingFunctions } from 'polished'

const hamburgerSize = 36;

/*-----------------------------------------------------------------------------
  Container
------------------------------------------------------------------------------*/
const StyledContainer = styled.div`
  position: relative;
  width: ${hamburgerSize}px;
  height: ${hamburgerSize}px;
  border-radius: ${hamburgerSize / 2}px;
  transition: opacity 1s ${timingFunctions('easeOutQuint')} .25s, transform 1s ${timingFunctions('easeOutQuint')} .25s;
`

/*-----------------------------------------------------------------------------
  Line
------------------------------------------------------------------------------*/
const Line = styled.div`
  position: absolute;
  left: 10px;
  width: ${hamburgerSize / 2}px;
  height: 2px;
  margin: 3px auto;
  transform: rotate(0deg);
  background-color: ${({ theme }) => theme.colors.text};
  transition: .25s ${timingFunctions('easeOutSine')};

  &:nth-child(1) {
    top: 11px;
  }

  &:nth-child(2),
  &:nth-child(3) {
    top: 16px;
  }

  &:nth-child(4) {
    top: 21px;
  }

  .is-open & {
    &:nth-child(1),
    &:nth-child(4) {
      top: 16px;
      width: 0;
      left: 50%;
    }

    &:nth-child(2) {
      transform: rotate(45deg);
    }

    &:nth-child(3) {
      transform: rotate(-45deg);
    }
  }
`

export default function HamburgerBtn({ className, onClick, menuOpen }) {
  return (
    <StyledContainer className={`${className}${menuOpen ? ' is-open' : ''}`} onClick={onClick}>
      <Line />
      <Line />
      <Line />
      <Line />
    </StyledContainer>
  )
}
