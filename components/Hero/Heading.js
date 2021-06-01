import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { device } from '../../styles/device'

const StyledContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  right: 20px;
  transform: translateY(-50%);
  z-index: 4;

  @media ${device.laptop} {
    left: 40px;
  }
`

/*-----------------------------------------------------------------------------
  Heading
------------------------------------------------------------------------------*/
const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.colors.heroImageText};
  text-transform: uppercase;
`

export default function Heading({ title }) {
  return (
    <StyledContainer>
      <Fade duration={1000} distance="30px" delay={400} bottom ssrFadeout>
        <StyledH1>{title}</StyledH1>
      </Fade>
    </StyledContainer>
  )
}
