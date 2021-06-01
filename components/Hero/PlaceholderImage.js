import styled from 'styled-components'

/*-----------------------------------------------------------------------------
  Styled Placeholder
------------------------------------------------------------------------------*/
const StyledPlaceholderImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: auto;
  min-width: 100vw;
  max-width: none;
  min-height: 100vh;
  z-index: 1;
`

export default function PlaceholderImage({ imageSrc }) {
  return (
    <StyledPlaceholderImage src={`${imageSrc}&w=700&q=1&blur=200&auto=format&fit=clip`} alt="" />
  )
}
