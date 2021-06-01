import styled from 'styled-components'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook, faInstagram, faTwitter, faSpotify,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { device } from '../../styles/device'

/*-----------------------------------------------------------------------------
  Container
------------------------------------------------------------------------------*/
const StyledContainer = styled.div`
  @media ${device.mobileM} {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
`

/*-----------------------------------------------------------------------------
  Icon
------------------------------------------------------------------------------*/
const Icon = styled(FontAwesomeIcon)`
  height: 20px;
  margin-right: 7px;
  color: inherit;
`;

/*-----------------------------------------------------------------------------
  Website Anchor
------------------------------------------------------------------------------*/
const StyledAnchor = styled.a`
 display: flex;
 align-items: center;
 margin: 10px 0;
 text-decoration: none;
 font-weight: ${({ theme }) => theme.font.weight.bold};

  @media ${device.mobileM} {
    &:not(:last-child):after {
      content: "//";
      margin: 0 15px;
    }
  }
`

export default function Links({
  website, instagram, facebook, twitter, spotify, className,
}) {
  const websiteEl = website ? <StyledAnchor href={website} target="_blank"><Icon icon={faGlobe} />Official Website</StyledAnchor> : ''
  const instagramEl = instagram ? <StyledAnchor href={instagram} target="_blank"><Icon icon={faInstagram} />Instagram</StyledAnchor> : ''
  const facebookEl = facebook ? <StyledAnchor href={facebook} target="_blank"><Icon icon={faFacebook} />Facebook</StyledAnchor> : ''
  const twitterEl = twitter ? <StyledAnchor href={twitter} target="_blank"><Icon icon={faTwitter} />Twitter</StyledAnchor> : ''
  const spotifyEl = spotify ? <StyledAnchor href={spotify} target="_blank"><Icon icon={faSpotify} />Spotify</StyledAnchor> : ''

  return (
    <StyledContainer className={className}>
      {websiteEl}
      {instagramEl}
      {facebookEl}
      {twitterEl}
      {spotifyEl}
    </StyledContainer>
  )
}
