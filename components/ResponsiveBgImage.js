import styled from 'styled-components'
import { timingFunctions } from 'polished'
import { device } from '../styles/device'
import { fadeIn } from '../styles/keyframes'

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  animation: ${fadeIn} 200ms ${timingFunctions('easeOutSine')} 0s;
  background-image: url("${(props) => props.imageSrc}&w=375");

  @media (-webkit-min-device-pixel-ratio: 2) {
    background-image: url("${(props) => props.imageSrc}&w=375&dpr=2");
  }

  @media (-webkit-min-device-pixel-ratio: 3) {
    background-image: url("${(props) => props.imageSrc}&w=375&dpr=3");
  }

  // MobileM
  @media ${device.mobileM} {
    background-image: url("${(props) => props.imageSrc}&w=425&dpr=1");
  }

  @media ${device.mobileM} and (-webkit-min-device-pixel-ratio: 2) {
    background-image: url("${(props) => props.imageSrc}&w=425&dpr=2");
  }

  @media ${device.mobileM} and (-webkit-min-device-pixel-ratio: 3) {
    background-image: url("${(props) => props.imageSrc}&w=425&dpr=3");
  }

  // MobileL
  @media ${device.mobileL} {
    background-image: url("${(props) => props.imageSrc}&w=525&dpr=1");
  }

  @media ${device.mobileL} and (-webkit-min-device-pixel-ratio: 2) {
    background-image: url("${(props) => props.imageSrc}&w=525&dpr=2");
  }

  @media ${device.mobileL} and (-webkit-min-device-pixel-ratio: 3) {
    background-image: url("${(props) => props.imageSrc}&w=525&dpr=3");
  }

  // MobileXL
  @media ${device.mobileXL} {
    background-image: url("${(props) => props.imageSrc}&w=768&dpr=1");
  }

  @media ${device.mobileXL} and (-webkit-min-device-pixel-ratio: 2) {
    background-image: url("${(props) => props.imageSrc}&w=768&dpr=2");
  }

  @media ${device.mobileXL} and (-webkit-min-device-pixel-ratio: 3) {
    background-image: url("${(props) => props.imageSrc}&w=768&dpr=3");
  }

  // Tablet
  @media ${device.tablet} {
    background-image: url("${(props) => props.imageSrc}&w=1024&dpr=1");
  }

  @media ${device.tablet} and (-webkit-min-device-pixel-ratio: 2) {
    background-image: url("${(props) => props.imageSrc}&w=1024&dpr=2");
  }

  @media ${device.tablet} and (-webkit-min-device-pixel-ratio: 3) {
    background-image: url("${(props) => props.imageSrc}&w=1024&dpr=3");
  }

  // Laptop
  @media ${device.laptop} {
    background-image: url("${(props) => props.imageSrc}&w=1440&dpr=1");
  }

  @media ${device.laptop} and (-webkit-min-device-pixel-ratio: 2) {
    background-image: url("${(props) => props.imageSrc}&w=1440&dpr=2");
  }

  @media ${device.laptop} and (-webkit-min-device-pixel-ratio: 3) {
    background-image: url("${(props) => props.imageSrc}&w=1440&dpr=3");
  }

  // LaptopL
  @media ${device.laptopL} {
    background-image: url("${(props) => props.imageSrc}&w=2560&dpr=1");
  }

  @media ${device.laptopL} and (-webkit-min-device-pixel-ratio: 2) {
    background-image: url("${(props) => props.imageSrc}&w=2560&dpr=2");
  }

  @media ${device.laptopL} and (-webkit-min-device-pixel-ratio: 3) {
    background-image: url("${(props) => props.imageSrc}&w=2560&dpr=3");
  }

  //PORTRAIT
  //-----------------------------------------------------------------
  @media (orientation: portrait) {
    background-image: url("${(props) => props.imageSrc}&h=568&dpr=1");
  }

  @media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
    background-image: url("${(props) => props.imageSrc}&h=568&dpr=2");
  }

  @media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3) {
    background-image: url("${(props) => props.imageSrc}&h=568&dpr=3");
  }

  @media (orientation: portrait) and (min-height: 569px) {
    background-image: url("${(props) => props.imageSrc}&h=667&dpr=1");
  }

  @media (orientation: portrait) and (min-height: 569px) and (-webkit-min-device-pixel-ratio: 2) {
    background-image: url("${(props) => props.imageSrc}&h=667&dpr=2");
  }

  @media (orientation: portrait) and (min-height: 569px) and (-webkit-min-device-pixel-ratio: 3) {
    background-image: url("${(props) => props.imageSrc}&h=667&dpr=3");
  }

  @media (orientation: portrait) and (min-height: 667px) {
    background-image: url("${(props) => props.imageSrc}&h=812&dpr=1");
  }

  @media (orientation: portrait) and (min-height: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    background-image: url("${(props) => props.imageSrc}&h=812&dpr=2");
  }

  @media (orientation: portrait) and (min-height: 667px) and (-webkit-min-device-pixel-ratio: 3) {
    background-image: url("${(props) => props.imageSrc}&h=812&dpr=3");
  }

  @media (orientation: portrait) and (min-height: 812px) {
    background-image: url("${(props) => props.imageSrc}&h=1024&dpr=1");
  }

  @media (orientation: portrait) and (min-height: 812px) and (-webkit-min-device-pixel-ratio: 2) {
    background-image: url("${(props) => props.imageSrc}&h=1024&dpr=2");
  }

  @media (orientation: portrait) and (min-height: 812px) and (-webkit-min-device-pixel-ratio: 3) {
    background-image: url("${(props) => props.imageSrc}&h=1024&dpr=3");
  }

  @media (orientation: portrait) and (min-height: 1024px) {
    background-image: url("${(props) => props.imageSrc}&h=1200&dpr=1");
  }

  @media (orientation: portrait) and (min-height: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
    background-image: url("${(props) => props.imageSrc}&h=1200&dpr=2");
  }

  @media (orientation: portrait) and (min-height: 1024px) and (-webkit-min-device-pixel-ratio: 3) {
    background-image: url("${(props) => props.imageSrc}&h=1200&dpr=3");
  }
`

export default function ResponsiveBgImage({ imageSrc, children }) {
  return (
    <StyledContainer imageSrc={`${imageSrc}&fit=max`}>
      {children}
    </StyledContainer>
  )
}
