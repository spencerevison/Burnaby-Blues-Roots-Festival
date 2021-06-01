import React from 'react'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'
import ResponsiveBgImage from '../ResponsiveBgImage'
import PlaceholderImage from './PlaceholderImage'
import { device } from '../../styles/device'

/*-----------------------------------------------------------------------------
  Styled Container
------------------------------------------------------------------------------*/
const StyledContainer = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 70px);
  min-height: 320px;
  overflow: hidden;

  @media ${device.mobileXL} {
    height: calc(100vh - 70px);
  }
`

/*-----------------------------------------------------------------------------
  Styled Parallax
------------------------------------------------------------------------------*/
const StyledParallax = styled(Parallax)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`

/*-----------------------------------------------------------------------------
  BG Image Container
------------------------------------------------------------------------------*/
const BgImageContainer = styled.div`
  div {
    width: 100vw;
    height: 100vh;
    background-position: ${(props) => props.verticalAlign} center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export default class ParallaxImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollReset: false,
    }
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ scrollReset: true }) }, 0)
  }

  render() {
    const { scrollReset } = this.state
    const { imageSrc, verticalAlign } = this.props
    let parallax = ''

    if (scrollReset) {
      parallax = (
        <StyledParallax y={[-30, 30]}>
          <BgImageContainer verticalAlign={verticalAlign}>
            <ResponsiveBgImage imageSrc={`${imageSrc}&auto=compress,format&q=45`} />
          </BgImageContainer>
        </StyledParallax>
      )
    }

    return (
      <StyledContainer>
        <PlaceholderImage imageSrc={`${imageSrc}`} />
        {parallax}
      </StyledContainer>
    )
  }
}
