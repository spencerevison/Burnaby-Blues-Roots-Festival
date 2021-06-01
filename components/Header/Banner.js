import styled from 'styled-components'
import { lighten } from 'polished'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { device } from '../../styles/device'

/*-----------------------------------------------------------------------------
  Styled Container
------------------------------------------------------------------------------*/
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.bannerBg};
  color: ${({ theme }) => theme.colors.banner};

  @media ${device.laptop} {
    padding: 10px 40px;
    font-size: 20px;
  }
`

/*-----------------------------------------------------------------------------
  Icon
------------------------------------------------------------------------------*/
const Icon = styled(FontAwesomeIcon)`
  flex: 0 0 30px;
  height: 30px;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.bannerIcon};
`;

/*-----------------------------------------------------------------------------
  Styled Link
------------------------------------------------------------------------------*/
const StyledAnchor = styled.a`
  cursor: pointer;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.bannerIcon};

  .no-touchevents &:hover {
    color: ${({ theme }) => lighten(0.1, theme.colors.bannerIcon)};
  }
`

export default function Banner() {
  return (
    <StyledContainer>
      <Icon icon={faExclamationCircle} />
      <div>The City of Burnaby has made the difficult decision to cancel the 2020 edition of the Burnaby Blues + Roots Festival. <Link href="/2020-refunds"><StyledAnchor>View refund Information</StyledAnchor></Link></div>
    </StyledContainer>
  )
}
