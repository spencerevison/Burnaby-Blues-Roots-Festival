import styled from 'styled-components'
import { Image } from 'react-datocms'
import Link from 'next/link'
import { timingFunctions } from 'polished';
import { device } from '../../styles/device'

/*-----------------------------------------------------------------------------
  Styled Anchor
------------------------------------------------------------------------------*/
const StyledAnchor = styled.a`
  position: relative;
  display: block;
  flex: 1 1 100%;
  margin-bottom: 4px;
  text-align: left;
  cursor: pointer;

  @media ${device.laptop} {
    flex-basis: calc(50% - 1px);
    margin-bottom: 1px;
    margin-right: 1px;


    // If there's an odd number, then make the first card full width
    &:nth-last-child(odd):first-child {
      flex-basis: 100%;
    }
  }

  .no-touchevents &:hover {
    img {
      transform: scale(1.1);
    }

    & > div:after {
      opacity: 0.1;
    }
  }
`

/*-----------------------------------------------------------------------------
  Styled Heading
------------------------------------------------------------------------------*/
const StyledHeading = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 1;

  && h3 {
    margin-top: 0;
    font-size: 30px;
    font-weight: ${({ theme }) => theme.font.weight.heavy};
    line-height: 1.2;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.artistheading};

    @media ${device.tablet} {
      font-size: 50px;
    }
  }

  && h4 {
    margin-top: 0;
    font-size: 18px;
    line-height: 0.2;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.artistsubheading};

    @media ${device.tablet} {
      font-size: 30px;
    }
  }
`

/*-----------------------------------------------------------------------------
  Styled Image
------------------------------------------------------------------------------*/
const StyledImage = styled(Image)`
  display: block !important;
  z-index: 0;
  width: 100%;
  max-width: none !important;

  div {
    padding-top: 66.66% !important; // Hack to force container resize for react-datocms (needs to match aspect-ratio)
  }

  img {
    width: 100%;
    transition: all 1.5s ${timingFunctions('easeOutQuint')};
  }

  @media ${device.laptop} {
    div {
        // If there's an odd number, then make the first card half the height (because it's full width)
        ${StyledAnchor}:nth-last-child(odd):first-child & {
          padding-top: 33.33% !important;
        }
    }

    img, picture {
      // If there's an odd number, then move up a bit
      ${StyledAnchor}:nth-last-child(odd):first-child & {
        top: -15% !important;
      }
    }
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.artistoverlay};
    opacity: 0.3;
    transition: all 1s ${timingFunctions('easeOutSine')};
  }
`

export default function ArtistCard({ className, artist, showDay }) {
  const subheading = showDay ? <h4>{artist.day.title}</h4> : ''

  return (
    <Link href="/lineup/[slug]" as={`/lineup/${artist.slug}`} passHref>
      <StyledAnchor className={className}>
        <StyledHeading>
          <h3>{artist.title}</h3>
          {subheading}
        </StyledHeading>
        <StyledImage data={artist.image.responsiveImage} />
      </StyledAnchor>
    </Link>
  )
}
