import styled from 'styled-components'
import { timingFunctions } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF, faInstagram, faTwitter, faSpotify,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const StyledAnchor = styled.a`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.social};
  background-color: ${({ theme }) => theme.colors.socialBg};

  svg {
    transition: all 300ms ${timingFunctions('easeOutSine')};
  }

  .touchevents & {
    width: 45px;
  }

  .no-touchevents &:hover {
    color: ${({ theme }) => theme.colors.socialHover};
    background-color: ${({ theme }) => theme.colors.socialBgHover};

    svg {
      transform: scale(1.3);
    }
  }
`

const Icon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  color: inherit;
`;

function Social({ className, noEmail }) {
  const emailAnchor = noEmail ? '' : <StyledAnchor href="mailto:bluesroots@burnaby.ca" target="_blank"><Icon icon={faEnvelope} size="xs" /></StyledAnchor>

  return (
    <Container className={className}>
      <StyledAnchor href="https://www.instagram.com/burnaby_bluesroots/" target="_blank">
        <Icon icon={faInstagram} size="xs" />
      </StyledAnchor>
      <StyledAnchor href="https://open.spotify.com/user/pex02oz4sk9sr0k5j2kaqwlu5/playlist/5SnpHMRIUHFxNDG4tZLOLK?si=C7FkaEBMQj6Xy7n-tW9Drg" target="_blank">
        <Icon icon={faSpotify} size="xs" />
      </StyledAnchor>
      <StyledAnchor href="https://www.facebook.com/BurnabyBlues" target="_blank">
        <Icon icon={faFacebookF} size="xs" />
      </StyledAnchor>
      <StyledAnchor href="https://twitter.com/BurnabyBlues" target="_blank">
        <Icon icon={faTwitter} size="xs" />
      </StyledAnchor>
      {emailAnchor}
    </Container>
  )
}

export default Social
