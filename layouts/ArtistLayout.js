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
  padding: 40px 20px 60px;

  @media ${device.tablet} {
    padding: 0 80px 120px;
  }

  @media ${device.laptop} {
    padding: 0 160px 120px;
  }

  @media ${device.laptopL} {
    padding: 0 240px 120px;
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
