import styled from 'styled-components'
import { device } from '../styles/device'

/*-----------------------------------------------------------------------------
  StyledContainer
------------------------------------------------------------------------------*/
const StyledContainer = styled.div`
  padding: 60px 20px;
  background: ${({ theme }) => theme.colors.mainBg};

  @media ${device.tablet} {
    padding: 120px 40px;
  }

  @media ${device.laptopL} {
    padding: 120px 60px;
  }
`

/*-----------------------------------------------------------------------------
  Inner Container
------------------------------------------------------------------------------*/
const InnerContainer = styled.div`
  max-width: 1664px;
  margin: 0 auto;
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
