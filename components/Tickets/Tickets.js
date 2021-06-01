import styled from 'styled-components'
import { device } from '../../styles/device'
import TicketCard from './TicketCard'
import IconBird from '../../svg/ticket-early-bird.svg'
import IconSingle from '../../svg/ticket-single.svg'
import IconPack from '../../svg/ticket-pack.svg'
import IconKids from '../../svg/ticket-kids.svg'
import IconWeekend from '../../svg/ticket-weekend.svg'
import IconWeekendPack from '../../svg/ticket-weekend-pack.svg'

/*-----------------------------------------------------------------------------
  Styled Container
------------------------------------------------------------------------------*/
const StyledContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: -20px;

  @media ${device.tablet} {
    margin-right: -20px;
  }
`

export default function Tickets() {
  return (
    <StyledContainer>
      <TicketCard title="Early Bird Ticket" description={[<h4 key={1}>Friday, <span style={{ whiteSpace: 'nowrap' }}>August 7</span></h4>, '1000 tickets available']} price="$45" href="https://www.ticketmaster.ca/event/1100584BCC814FD8">
        <IconBird />
      </TicketCard>
      <TicketCard title="Early Bird Ticket" description={[<h4 key={1}>Saturday, <span style={{ whiteSpace: 'nowrap' }}>August 8</span></h4>, '1000 tickets available']} price={['$62', <sup key={2}> .75</sup>]} href="https://www.ticketmaster.ca/event/1100584BCC924FE5">
        <IconBird />
      </TicketCard>
      <TicketCard title="2 Day Event Pass" description={[<h4 key={1}>Access Friday & Saturday</h4>]} price={['$96', <sup key={2}> .25</sup>]} href="https://www.ticketmaster.ca/event/110058468B1D33E0">
        <IconWeekend />
      </TicketCard>
      <TicketCard title="4-Pack 2 Day Event Pass" description={[<h4 key={1}>Access Friday & Saturday</h4>]} price="$360" href="https://www.ticketmaster.ca/event/110058468B1D33E0">
        <IconWeekendPack />
      </TicketCard>
      <TicketCard title="4-Pack Tickets" description={[<h4 key={1}>Friday, <span style={{ whiteSpace: 'nowrap' }}>August 7</span></h4>]} price="$161" href="https://www.ticketmaster.ca/event/1100584BCC814FD8">
        <IconPack />
      </TicketCard>
      <TicketCard title="4-Pack Tickets" description={[<h4 key={1}>Saturday, <span style={{ whiteSpace: 'nowrap' }}>August 8</span></h4>]} price={['$227', <sup key={2}> .52</sup>]} href="https://www.ticketmaster.ca/event/1100584BCC924FE5">
        <IconPack />
      </TicketCard>
      <TicketCard title="General Admission Ticket" description={[<h4 key={1}>Friday, <span style={{ whiteSpace: 'nowrap' }}>August 7</span></h4>]} price={['$50', <sup key={2}> .75</sup>]} href="https://www.ticketmaster.ca/event/1100584BCC814FD8">
        <IconSingle />
      </TicketCard>
      <TicketCard title="General Admission Ticket" description={[<h4 key={1}>Saturday, <span style={{ whiteSpace: 'nowrap' }}>August 8</span></h4>]} price={['$74', <sup key={2}> .25</sup>]} href="https://www.ticketmaster.ca/event/1100584BCC924FE5">
        <IconSingle />
      </TicketCard>
      <TicketCard title="Day of Show Ticket" description={[<h4 key={1}>Friday, <span style={{ whiteSpace: 'nowrap' }}>August 7</span></h4>]} price={['$62', <sup key={2}> .75</sup>]} href="https://www.ticketmaster.ca/event/1100584BCC814FD8">
        <IconSingle />
      </TicketCard>
      <TicketCard title="Day of Show Ticket" description={[<h4 key={1}>Saturday, <span style={{ whiteSpace: 'nowrap' }}>August 8</span></h4>]} price={['$84', <sup key={2}> .75</sup>]} href="https://www.ticketmaster.ca/event/1100584BCC924FE5">
        <IconSingle />
      </TicketCard>
      <TicketCard title="Children 12 & Under" description="Free with accompanying adult. Pick up at Festival Box Office." price="$0" href="#">
        <IconKids />
      </TicketCard>
    </StyledContainer>
  )
}
