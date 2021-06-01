import styled, { withTheme } from 'styled-components'
import { SimpleImg } from 'react-simple-img';

const StyledImage = styled(SimpleImg)`
  max-width: 100%;
  box-sizing: border-box;
`
function LazyImage({
  src, alt, width, height, theme, outline, alpha = 60,
}) {
  const baseUrl = `${src}?${theme.image.duotone}&auto=format,compress,enhance&ch=Width,DPR,Save-Data&fit=crop&duotone-alpha=${alpha}`
  const srcUrl = `${baseUrl}&q=45&w=${width}&h=${height}`
  const placeholderUrl = `${baseUrl}&q=1&w=${width / 1}&h=${height / 1}&blur=30`
  return (
    <StyledImage
      srcSet={`${srcUrl} 1x, ${srcUrl}&dpr=2 2x, ${srcUrl}&dpr=3 3x`}
      src={srcUrl}
      placeholder={placeholderUrl}
      width={width}
      height={height}
      applyAspectRatio="true"
      alt={alt}
      outline={outline}
    />
  )
}

export default withTheme(LazyImage)
