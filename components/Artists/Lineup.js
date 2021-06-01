import styled from 'styled-components'
import ArtistCard from './ArtistCard'
import Heading from '../Heading'
import { device, size } from '../../styles/device'

/*-----------------------------------------------------------------------------
  Container
------------------------------------------------------------------------------*/
const StyledContainer = styled.div`
  width: 100%;
  overflow: hidden;
  text-align: center;

  @media ${device.laptop} {
    margin-right: -1px;
  }

  @media ${device.desktop} {
    background: none;
  }
`

/*-----------------------------------------------------------------------------
  Artists
------------------------------------------------------------------------------*/
const ArtistsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  max-width: ${size.desktop};
  margin: 0 auto;
`

/*-----------------------------------------------------------------------------
  Styled Heading
------------------------------------------------------------------------------*/
const StyledHeading = styled(Heading)`
`

export default function Lineup({ artists }) {
  const fridayArtists = artists.filter((artist) => artist.day.title === 'Friday')
  const saturdayArtists = artists.filter((artist) => artist.day.title === 'Saturday')

  return (
    <StyledContainer>
      <StyledHeading>Friday, <span className="no-wrap">August 7</span></StyledHeading>
      <ArtistsContainer>
        {fridayArtists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </ArtistsContainer>
      <StyledHeading>Saturday, <span className="no-wrap">August 8</span></StyledHeading>
      <ArtistsContainer>
        {saturdayArtists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </ArtistsContainer>
    </StyledContainer>
  )
}
