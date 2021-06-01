import styled, { withTheme } from 'styled-components'
import { SimpleImg } from 'react-simple-img'
import { timingFunctions } from 'polished'
import Link from 'next/link'
import { device } from '../../styles/device'


/*-----------------------------------------------------------------------------
  Image
------------------------------------------------------------------------------*/
const StyledSimpleImg = styled(SimpleImg)`
  position: absolute;
  height: 320px;
  padding: 0 !important;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.toutOverlay};
    opacity: 0.3;
    transition: all 1s ${timingFunctions('easeOutSine')};
  }

  img {
    object-fit: cover;
    transition: all 1.5s ${timingFunctions('easeOutQuint')};

    @media ${device.laptopM} {
      height: 450px !important;
    }
  }

  .no-touchevents &:hover {
    img {
      transform: scale(1.1);
    }

    &:after {
      opacity: 0;
    }
  }
`

/*-----------------------------------------------------------------------------
  Heading
------------------------------------------------------------------------------*/
const StyledHeading = styled.h3`
  position: absolute;
  top: ${({ isMain }) => (isMain ? 'calc(50% - 25px)' : '50%')};
  width: calc(100% - 40px);
  margin: 0 20px;
  transform: translateY(-50%);
  z-index: 1;
  text-align: center;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.toutHeading};
  pointer-events: none;

  @media ${device.mobileXL} {
    font-size: 45px;
  }

  @media ${device.tablet} {
    font-size: 50px;
  }

  @media ${device.laptop} {
    font-size: ${({ isMain }) => (isMain ? '70px' : '50px')};
  }
`

/*-----------------------------------------------------------------------------
  Button
------------------------------------------------------------------------------*/
const StyledButton = styled.button`
  position: absolute;
  display: inline-block;
  top: calc(50% + 45px);
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  width: auto;
  pointer-events: none;
`

function Tout({
  theme, imgSrc, href, title, btnText,
}) {
  const imgHeight = 320
  const isMain = btnText != null
  let btnEl; let imgWidth
  if (isMain) {
    btnEl = <StyledButton className="light" type="button">{btnText}</StyledButton>
    imgWidth = 1920
  } else {
    imgWidth = 1024
  }

  const baseUrl = `${imgSrc}?${theme.image.duotoneQuery}&sat=-50&con=-20&fit=crop&crop=faces&auto=format,compress,enhance&ch=Width,DPR,Save-Data&fit=crop&duotone-alpha=30`
  const srcUrl = `${baseUrl}&q=45&w=${imgWidth}&h=${imgHeight}`
  const placeholderUrl = `${baseUrl}&q=100&w=${imgWidth / 10}&h=${imgHeight / 10}&blur=50`

  return (
    <Link href={href} passHref>
      <a>
        <StyledHeading isMain={isMain}>{title}</StyledHeading>
        {btnEl}
        <StyledSimpleImg
          srcSet={`${srcUrl} 1x, ${srcUrl}&dpr=2 2x, ${srcUrl}&dpr=3 3x`}
          src={srcUrl}
          placeholder={placeholderUrl}
          width={imgWidth}
          height={imgHeight}
          applyAspectRatio="true"
          alt=""
        />
      </a>
    </Link>
  )
}

export default withTheme(Tout)
