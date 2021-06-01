import styled from 'styled-components'
import ArtistCard from './ArtistCard'
import Heading from '../Heading'
import { device } from '../../styles/device'

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
`

/*-----------------------------------------------------------------------------
  Artists
------------------------------------------------------------------------------*/
const ArtistsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

export default function Headliners({ headliners }) {
  return (
    <StyledContainer name="headliners">
      <Heading>Featuring</Heading>
      <ArtistsContainer>
        {headliners.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} showDay />
        ))}
      </ArtistsContainer>
    </StyledContainer>
  )
}
