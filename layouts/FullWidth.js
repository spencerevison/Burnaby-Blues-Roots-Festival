import styled from 'styled-components'

/*-----------------------------------------------------------------------------
  Styled Container
------------------------------------------------------------------------------*/
const StyledContainer = styled.div`

`

export default function Layout({ children }) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}
