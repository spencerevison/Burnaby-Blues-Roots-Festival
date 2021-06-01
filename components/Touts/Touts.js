import styled from 'styled-components'
import Tout from './Tout'
import { device } from '../../styles/device'

/*-----------------------------------------------------------------------------
  Tout Container
------------------------------------------------------------------------------*/
const ToutContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: -4px;

  @media ${device.laptop} {
    margin-top: -1px;
  }

  & > a {
    position: relative;
    flex: 1 1 100%;
    overflow: hidden;
    margin-top: 4px;

    &:first-child {
      flex: 0 0 100%;
    }

    @media ${device.tablet} {
      flex: 1 1 calc(50% - 4px);
      margin-top: 4px;

      &:nth-child(2) {
        margin-right: 4px;
      }
    }

    @media ${device.laptop} {
      flex: 1 1 calc(33% - 4px);
      margin-top: 4px;

      &:nth-child(2),
      &:nth-child(3) {
        margin-right: 4px;
      }
    }
  }
`

export default function Touts() {
  return (
    <ToutContainer>
      {/*<Tout title="Tickets" href="/tickets" btnText="Buy Tickets" imgSrc="https://www.datocms-assets.com/19825/1586390190-crowdgrass1.jpg" />*/}
      <Tout title="Festival Info" href="/festival-info" imgSrc="https://www.datocms-assets.com/19825/1585769605-eric-rothermel-foko4dpxamq-unsplash.jpg" />
      <Tout title="Location" href="/getting-here" imgSrc="https://www.datocms-assets.com/19825/1585769423-spencer-watson-vlw2gjqhlge-unsplash.jpg" />
      <Tout title="Lineup" href="/lineup" imgSrc="https://www.datocms-assets.com/19825/1581050176-mike-palmowski-luhaf4vgncs-unsplash.jpg" />
    </ToutContainer>
  )
}
