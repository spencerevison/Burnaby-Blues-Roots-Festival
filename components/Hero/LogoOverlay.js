import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { device } from '../../styles/device'

/*-----------------------------------------------------------------------------
  Styled Container
------------------------------------------------------------------------------*/
const StyledContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  text-align: left;
`

/*-----------------------------------------------------------------------------
  Logo
------------------------------------------------------------------------------*/
const StyleImg = styled.img`
  width: 266px;
  height: 70px;
  max-width: none;

  @media ${device.mobileM} {
    width: 330px;
    height: 87px;
  }

  @media ${device.tablet} {
    width: 418px;
    height: 110px;
  }

  @media ${device.laptop} {
    width: 570px;
    height: 150px;
  }
`

/*-----------------------------------------------------------------------------
  Date / Location
------------------------------------------------------------------------------*/
const DateLocation = styled.div`
  margin-top: -14px;
  font-size: 10.5px;
  font-weight: ${({ theme }) => theme.font.weight.heavy};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.heroVideoLogo};

  @media ${device.mobileM} {
    font-size: 13px;
  }

  @media ${device.tablet} {
    font-size: 16.5px;
  }

  @media ${device.laptop} {
    margin-top: -20px;
    font-size: 22.5px;
  }
`

export default function LogoOverlay() {
  return (
    <StyledContainer>
      <Fade duration={1000} distance="30px" delay={400} bottom>
        <StyleImg src="/static/img/logo-landscape-light.svg" alt="" />
        <DateLocation>August 7-8, 2020 &nbsp;|&nbsp; Deer Lake Park</DateLocation>
      </Fade>
    </StyledContainer>
  )
}
