import styled from 'styled-components'
import React from 'react'
import { device } from '../styles/device'

/*-----------------------------------------------------------------------------
  Styled Container
------------------------------------------------------------------------------*/
const StyledForm = styled.form`
  max-width: 906px;
  margin: 60px auto;
  padding: 50px 30px;
  text-align: center;
  background: ${({ theme }) => theme.colors.newsBg};
`

/*-----------------------------------------------------------------------------
  Styled Heading
------------------------------------------------------------------------------*/
const StyledHeading = styled.h2`
  margin-top: 0;
  font-size: 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors.newsHeading};

  @media ${device.laptop} {
    font-size: 40px;
  }
`

/*-----------------------------------------------------------------------------
  Styled Subheading
------------------------------------------------------------------------------*/
const StyledSubheading = styled.p`
  margin: 20px 0 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors.newsText};
`

/*-----------------------------------------------------------------------------
  Styled Input
------------------------------------------------------------------------------*/
const StyledInput = styled.input`
  width: 100%;
  max-width: 376px;
  padding: 16px;
  background-color: $color-white;
  border: 0;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
`

/*-----------------------------------------------------------------------------
  StyledButton
------------------------------------------------------------------------------*/
const StyledButton = styled.button`
  display: block;
  margin: 30px auto 0;
`

/*-----------------------------------------------------------------------------
  Message
------------------------------------------------------------------------------*/
const Message = styled.div`
  margin: 20px auto;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.newsMessage};
`

export default class Newsletter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msg: '', email: '' }
  }

  handleChange = (event) => {
    this.setState({ email: event.target.value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { email } = this.state
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    }
    console.log(requestOptions)
    try {
      const response = await fetch('/.netlify/functions/subscribe', requestOptions)
      const data = await response.json()
      if (data.statusCode === 200) {
        this.setState({
          msg: 'Your email address has been added to the list!',
          email: '',
        })
      } else if (data.title === 'Member Exists') {
        this.setState({ msg: data.detail.replace('Use PUT to insert or update list members.', '') })
      } else if (data.title === 'Invalid Resource') {
        this.setState({ msg: data.detail })
      }
    } catch (err) {
      this.setState({ msg: err.msg })
    }
  }

  render() {
    const { msg, email } = this.state
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledHeading>Sign Up <span className="no-wrap">For Our</span> <span className="no-wrap">Mailing List</span></StyledHeading>
        <StyledSubheading>Get Burnaby Blues + Roots announcements and updates first.</StyledSubheading>
        <Message>{msg}</Message>
        <label htmlFor="email" className="hidden-accessible">Email</label>
        <StyledInput type="email" name="email" id="email" value={email} onChange={this.handleChange} placeholder="Your Email Address" required />
        <StyledButton type="submit" className="highlight">Subscribe</StyledButton>
      </StyledForm>
    )
  }
}
