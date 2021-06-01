import React from 'react'
import styled, { withTheme } from 'styled-components'
import Head from 'next/head'
import GoogleMapReact from 'google-map-react'
import Layout from '../layouts/NarrowWidth'
import global from '../site.config.json'
import { getPage } from '../lib/api'
import { device } from '../styles/device'
import ButtonLink from '../components/ButtonLink'

/*-----------------------------------------------------------------------------
  Styled Container
------------------------------------------------------------------------------*/
const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 55px);

  @media ${device.tablet} {
    height: calc(100vh - 70px);
  }
`

/*-----------------------------------------------------------------------------
  Map Overlay
------------------------------------------------------------------------------*/
const MapOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: calc(100% - 40px);
  padding: 20px;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3);
  color: white;

  @media ${device.tablet} {
    width: auto;
    padding: 40px;
  }
`

/*-----------------------------------------------------------------------------
  Styled Heading
------------------------------------------------------------------------------*/
const StyledHeading = styled.h1`
  font-size: 35px;
  margin-bottom: 10px;

  @media ${device.mobileL} {
    font-size: 49px;
  }

  @media ${device.laptop} {
    font-size: 75px;
  }
`

/*-----------------------------------------------------------------------------
  StyledButtonLink
------------------------------------------------------------------------------*/
const StyledButtonLink = styled(ButtonLink)`
  display: inline-block;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weight.normal};
`

function GettingHere({ page }) {
  return (
    <div>
      <Head>
        <title>{page.title} | {global.title}</title>
      </Head>
      <StyledContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
          defaultCenter={{ lat: 49.2339299, lng: -122.9796048 }}
          defaultZoom={16}
        />
        <MapOverlay>
          <StyledHeading>{page.title}</StyledHeading>
          <StyledButtonLink useAnchor target="_blank" href="https://www.google.com/maps/dir//Deer+Lake+Park,+6450+Deer+Lake+Dr,+Burnaby,+BC+V5E+2L8,+Canada/@49.2339299,-122.9796048,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x548676553e935a55:0x7e66fa8c89ea0258!2m2!1d-122.9774161!2d49.2339299!3e0">Get Directions</StyledButtonLink>
        </MapOverlay>
      </StyledContainer>
      <Layout>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </Layout>
    </div>
  );
}

export default withTheme(GettingHere)

export async function getStaticProps({ preview = null }) {
  const page = (await getPage(preview, 'getting-here'))
  return {
    props: { page },
  }
}
