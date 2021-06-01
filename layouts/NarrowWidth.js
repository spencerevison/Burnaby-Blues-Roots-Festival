import styled from 'styled-components'
import { device } from '../styles/device'

/*-----------------------------------------------------------------------------
  StyledContainer
------------------------------------------------------------------------------*/
const StyledContainer = styled.div`
  background: ${({ theme }) => theme.colors.mainBg};
`

/*-----------------------------------------------------------------------------
  Inner Container
------------------------------------------------------------------------------*/
const InnerContainer = styled.div`
  max-width: 1664px;
  margin-left: auto;
  margin-right: auto;
  padding: 60px 20px;

  @media ${device.tablet} {
    padding: 120px 80px;
  }

  @media ${device.laptop} {
    padding: 120px 160px;
  }

  @media ${device.laptopL} {
    padding: 120px 240px;
  }
`

export default function Layout({ className, children }) {
  return (
    <StyledContainer className={className}>
      <InnerContainer>
        {children}
      </InnerContainer>
    </StyledContainer>
  )
}
