import styled from 'styled-components'
import { timingFunctions } from 'polished'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share'

/*-----------------------------------------------------------------------------
  Container
------------------------------------------------------------------------------*/
const StyledContainer = styled.div`
  display: flex;
  align-items: center;

  span, button {
    margin-right: 10px;
  }

  svg {
    circle {
      fill: ${({ theme }) => theme.colors.shareBg};
      transition: all 300ms ${timingFunctions('easeOutQuint')};
    }

    path {
      fill: ${({ theme }) => theme.colors.share};
      transition: all 300ms ${timingFunctions('easeOutQuint')};
    }
  }

  .no-touchevents & button:hover {
    svg {
      circle {
        fill: ${({ theme }) => theme.colors.share};
      }

      path {
        fill: ${({ theme }) => theme.colors.shareBg};
      }
    }
  }
`

export default function Share({ className, title }) {
  const url = process.browser ? window.location.href : ''

  return (
    <StyledContainer className={className}>
      <span>Share:</span>
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </StyledContainer>
  )
}
