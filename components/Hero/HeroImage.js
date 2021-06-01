import styled from 'styled-components'
import { device } from '../../styles/device'
import Heading from './Heading'
import ParallaxImage from './ParallaxImage'
import ScrollCta from './ScrollCta'

/*-----------------------------------------------------------------------------
  Container
------------------------------------------------------------------------------*/
const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 100px);
  background-size: cover;
  overflow: hidden;

  &:after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 0.4;
  }

  @media ${device.mobileXL} {
    height: calc(100vh - 70px);
  }

  h1 {
    @media ${device.laptop} {
      width: 66%;
    }
  }
`

export default function HeroImage({ title, imageSrc, verticalAlign = 'bottom' }) {
  return (
    <StyledContainer>
      <ParallaxImage imageSrc={imageSrc} verticalAlign={verticalAlign} />
      <Heading title={title} />
      <ScrollCta />
    </StyledContainer>
  )
}
