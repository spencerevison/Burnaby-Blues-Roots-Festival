import React from 'react'
import { withTheme } from 'styled-components'
import Head from 'next/head'
import Layout from '../../layouts/FullWidth'
import global from '../../site.config.json'
import HeroImage from '../../components/Hero/HeroImage'
import { getAllArtists, getPage } from '../../lib/api'
import Lineup from '../../components/Artists/Lineup'

function LineupPage({ theme, page, artists }) {
  const heroUrl = page.heroImage ? page.heroImage.url : global.defaultHero
  return (
    <div>
      <Head>
        <title>{page.title} | {global.title}</title>
      </Head>
      <HeroImage title={page.title} imageSrc={`${heroUrl}?duotone=${theme.image.duotoneHero}&duotone-alpha=30`} />
      <Layout>
        <Lineup artists={artists} />
      </Layout>
    </div>
  );
}

export default withTheme(LineupPage)

export async function getStaticProps({ preview = null }) {
  const artists = (await getAllArtists(preview, '005289,CBC3BB', 60))
  const page = (await getPage(preview, 'lineup'))
  return {
    props: { page, artists },
  }
}
