import styled from 'styled-components'
import { timingFunctions } from 'polished';
import { animateScroll as scroll } from 'react-scroll'
import ArrowSVG from '../../svg/arrow-up.svg'

const StyledContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  padding: 10px 20px;
  transform: translate(-50%, 0) rotate(180deg);
  z-index: 20;
  cursor: pointer;
  
  svg {
    transition: transform 300ms ${timingFunctions('easeOutSine')};
    path {
      stroke: ${({ theme }) => theme.colors.heroVideoLogo};
    }
  }
  
  .no-touchevents &:hover {
    svg {
      transform: translateY(-10px);
    }
  }
`

const StyledArrowSVG = styled(ArrowSVG)`
  height: 35px;
`

function handleClick() {
  scroll.scrollTo(window.innerHeight, { duration: 500 })
}

export default function ScrollCta() {
  return (
    <StyledContainer onClick={handleClick}>
      <StyledArrowSVG />
    </StyledContainer>
  )
}
