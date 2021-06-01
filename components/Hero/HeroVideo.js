import styled, { withTheme } from 'styled-components'
import ReactPlayer from 'react-player'
import { device } from '../../styles/device'
import LogoOverlay from './LogoOverlay'
import ParallaxImage from './ParallaxImage'
import ScrollCta from './ScrollCta'

/*-----------------------------------------------------------------------------
  Styled Container
------------------------------------------------------------------------------*/
const StyledContainer = styled.div`
  position: relative;
  height: calc(100vh - 100px);
  min-height: 320px;
  overflow: hidden;

  @media ${device.mobileXL} {
    height: calc(100vh - 70px);
  }

  @media ${device.laptop} {
    height: 55.8vw;
    max-height: calc(100vh - 70px);
  }

  @media (min-aspect-ratio: 16/9) and ${device.laptop} {
    height: calc(100vh - 70px);
  }
`

/*-----------------------------------------------------------------------------
  Overlay Container
------------------------------------------------------------------------------*/
const OverlayContainer = styled.div`
  &:after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: calc(100vh - 70px);
    min-height: 320px;
    z-index: 5;
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 0.5;
  }
`

/*-----------------------------------------------------------------------------
  Parallax Container
------------------------------------------------------------------------------*/
const ParallaxContainer = styled.div`
  @media ${device.laptop} {
    display: none;
  }
`

/*-----------------------------------------------------------------------------
  Video Container
------------------------------------------------------------------------------*/
const VideoContainer = styled.div`
  display: none;
  position: relative;
  height: calc(100vh - 70px);
  overflow: hidden;

  @media ${device.laptop} {
    display: block;
  }
`

/*-----------------------------------------------------------------------------
  Styled Video
------------------------------------------------------------------------------*/
const StyledVideo = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  z-index: 2;
`

/*-----------------------------------------------------------------------------
  Poster Image
------------------------------------------------------------------------------*/
const PosterImage = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 55.8vw;
  z-index: 1;

  @media ${device.laptop} {
    background: url("https://www.datocms-assets.com/19825/1579044677-hero-poster-desktop.png?q=20&auto=format") no-repeat top center;
    background-size: cover;
  }
`

/*-----------------------------------------------------------------------------
  Placeholder Image
------------------------------------------------------------------------------*/
const PlaceholderImage = styled.img`
  width: 100vw;
`

function HeroVideo({ theme }) {
  return (
    <StyledContainer>
      <OverlayContainer>
        <ParallaxContainer>
          <ParallaxImage imageSrc={`https://www.datocms-assets.com/19825/1581050177-bruno-reyna-7ykwldbkgei-unsplash.jpg?duotone=${theme.image.duotoneHero}&duotone-alpha=60`} />
        </ParallaxContainer>
        <VideoContainer>
          <PlaceholderImage src="https://www.datocms-assets.com/19825/1578616881-hero-poster-desktop.jpg?w=700&q=1&blur=200&auto=format&fit=clip" alt="" />
          <PosterImage />
          <StyledVideo url="/static/video/burnaby_q22.mp4" playing loop muted width="100vw" height="auto" />
        </VideoContainer>
      </OverlayContainer>
      <LogoOverlay />
      <ScrollCta />
    </StyledContainer>
  )
}

export default withTheme(HeroVideo)
