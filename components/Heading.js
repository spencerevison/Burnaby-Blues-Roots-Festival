import styled from 'styled-components'
import { device } from '../styles/device'

/*-----------------------------------------------------------------------------
  Container
------------------------------------------------------------------------------*/
const StyledContainer = styled.div`
  padding: 40px 0;
  text-align: center;
  background: ${({ theme }) => theme.colors.gradients.beige};

  @media (orientation: landscape) {
    background: ${({ theme }) => theme.colors.gradients.beigeLandscape};
  }

  @media ${device.tablet} {
    padding: 80px 0;
  }
`

/*-----------------------------------------------------------------------------
  Heading
------------------------------------------------------------------------------*/
const StyledHeading = styled.h2`
  margin-bottom: 0;
  text-transform: uppercase;
  font-size: 45px;
  color: ${({ theme }) => theme.colors.primary};
  background: -webkit-linear-gradient(110deg, ${({ theme }) => theme.colors.primary} 35%, ${({ theme }) => theme.colors.highlight} 99%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &::after {
    content: " ";
    display: block;
    height: 3px;
    width: 42px;
    margin: 25px auto 0;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @media ${device.mobileL} {
    font-size: 55px;
  }

  @media ${device.tablet} {
    font-size: 75px;
  }
`

export default function Heading({ children, className }) {
  return (
    <StyledContainer className={className}>
      <StyledHeading><span>{children}</span></StyledHeading>
    </StyledContainer>
  )
}
