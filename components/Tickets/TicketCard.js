import styled from 'styled-components'
import { timingFunctions } from 'polished';
import { device } from '../../styles/device'

/*-----------------------------------------------------------------------------
  Styled Anchor
------------------------------------------------------------------------------*/
const StyledAnchor = styled.a`
  width: 100%;
  max-width: 630px;
  display: flex;
  margin-bottom: 20px;
  border-radius: 6px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.ticketsCardBg};
  text-decoration: none;
  transition: transform 300ms ${timingFunctions('easeOutQuad')}, background 300ms ${timingFunctions('easeOutQuad')}, box-shadow 300ms ${timingFunctions('easeOutQuad')};

  * {
    color: ${({ theme }) => theme.colors.ticketsText};
  }

  .no-touchevents &:hover {
    transform: translateY(-6px);
    background: ${({ theme }) => theme.colors.ticketsCardBgHover};
    box-shadow: 0 7px 10px ${({ theme }) => theme.colors.ticketsShadowHover};
  }

  @media ${device.tablet} {
    margin-right: 20px;
    flex: 0 1 auto;
    flex-basis: calc(50% - 20px);
  }
`

/*-----------------------------------------------------------------------------
  Ticket Left
------------------------------------------------------------------------------*/
const TicketLeft = styled.div`
  flex: 1 1 auto;
  flex-basis: calc(100% - 60px);
  padding: 20px;
  border-right: 1px dashed ${({ theme }) => theme.colors.ticketsDivider};
`

/*-----------------------------------------------------------------------------
  Title
------------------------------------------------------------------------------*/
const Title = styled.h3`
  font-size: 21px;
  text-transform: uppercase;

  @media ${device.mobileM} {
    font-size: 25px;
  }

  @media ${device.mobileL} {
    font-size: 30px;
  }

  @media ${device.tablet} {
    font-size: 28px;
  }

  @media ${device.tabletL} {
    font-size: 35px;
  }

  @media ${device.laptop} {
    font-size: 45px;
  }
`

/*-----------------------------------------------------------------------------
  Description
------------------------------------------------------------------------------*/
const Description = styled.div`
  @media ${device.tablet} {
    font-size: 22px;
  }

  h4 {
    display: block;
    font-size: 16px;
    text-transform: uppercase;

    @media ${device.tablet} {
      font-size: 18px;
    }

    @media ${device.tabletL} {
      font-size: 23px;
    }

    @media ${device.laptop} {
      font-size: 30px;
    }
  }
`

/*-----------------------------------------------------------------------------
  Ticket Right
------------------------------------------------------------------------------*/
const TicketRight = styled.div`
  flex: 0 0 55px;
  padding: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: content-box;

  @media ${device.mobileL} {
   flex-basis: 90px;
  }

  @media ${device.laptop} {
   flex-basis: 105px;
  }

  @media ${device.laptopL} {
   flex-basis: 110px;
  }
`

/*-----------------------------------------------------------------------------
  Price
------------------------------------------------------------------------------*/
const Price = styled.div`
  margin-bottom: 10px;
  font-weight: ${({ theme }) => theme.font.weight.heavy};
  font-size: 16px;
  text-transform: uppercase;

  @media ${device.mobileL} {
    font-size: 27px;
  }

  @media ${device.laptopL} {
    font-size: 33px;
  }

  sup {
    font-size: 47%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
    top: -6px;

    @media ${device.mobileL} {
      top: -10px;
    }

    @media ${device.laptopL} {
      top: -12px;
    }
  }
`

/*-----------------------------------------------------------------------------
  Icon
------------------------------------------------------------------------------*/
const Icon = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.ticketsText};

  svg {
    height: 55px;
    path, rect {
      fill: ${({ theme }) => theme.colors.ticketsIcon};
      stroke: ${({ theme }) => theme.colors.ticketsIcon};
    }

    @media ${device.mobileL} {
      height: 90px;
    }

    @media ${device.laptop} {
      height: 105px;
    }

    @media ${device.laptopL} {
      height: 110px;
    }
  }
`

export default function TicketCard({
  title, description, price, children, href,
}) {
  return (
    <StyledAnchor href={href}>
      <TicketLeft>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TicketLeft>
      <TicketRight>
        <Price>{price}</Price>
        <Icon>{children}</Icon>
      </TicketRight>
    </StyledAnchor>
  )
}
