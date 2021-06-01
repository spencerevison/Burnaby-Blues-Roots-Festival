import React from 'react'
import { withTheme } from 'styled-components'
import Head from 'next/head'
import Layout from '../layouts/NarrowWidth'
import global from '../site.config.json'
import HeroImage from '../components/Hero/HeroImage'
import { getPage } from '../lib/api'

function ContactUs({ theme, page }) {
  const heroUrl = page.heroImage ? page.heroImage.url : global.defaultHero
  return (
    <div>
      <Head>
        <title>{page.title} | {global.title}</title>
      </Head>
      <HeroImage title={page.title} imageSrc={`${heroUrl}?duotone=${theme.image.duotoneHero}&duotone-alpha=30`} />
      <Layout>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </Layout>
    </div>
  );
}

export default withTheme(ContactUs)

export async function getStaticProps({ preview = null }) {
  const page = (await getPage(preview, 'contact-us'))
  return {
    props: { page },
  }
}
