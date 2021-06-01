import React from 'react'
import styled, { withTheme } from 'styled-components'
import Head from 'next/head'
import Layout from '../layouts/Main'
import global from '../site.config.json'
import HeroImage from '../components/Hero/HeroImage'
import Tickets from '../components/Tickets/Tickets'
import { getPage } from '../lib/api'

/*-----------------------------------------------------------------------------
  Styled Layout
------------------------------------------------------------------------------*/
const StyledLayout = styled(Layout)`
  background: ${({ theme }) => theme.colors.ticketsBg};
`

function TicketsPage({ theme, page }) {
  const heroUrl = page.heroImage ? page.heroImage.url : global.defaultHero

  return (
    <div>
      <Head>
        <title>{page.title} | {global.title}</title>
      </Head>
      <HeroImage title={page.title} imageSrc={`${heroUrl}?duotone=${theme.image.duotoneHero}&duotone-alpha=30`} />
      <StyledLayout>
        <Tickets />
      </StyledLayout>
    </div>
  );
}

export default withTheme(TicketsPage)

export async function getStaticProps({ preview = null }) {
  const page = (await getPage(preview, 'tickets'))
  return {
    props: { page },
  }
}
