import React from 'react'
import Head from 'next/head'
import Layout from '../layouts/FullWidth'
import Headliners from '../components/Artists/Headliners'
import global from '../site.config.json'
import HeroVideo from '../components/Hero/HeroVideo'
import Curator from '../components/Curator'
import Touts from '../components/Touts/Touts'
import { getHeadliners } from '../lib/api'


export default function Index({ headliners = [] }) {
  return (
    <div>
      <Head>
        <title>{global.title}</title>
      </Head>
      <Layout>
        <HeroVideo />
        <Headliners headliners={headliners} />
        <Touts />
        <Curator />
      </Layout>
    </div>
  );
}

export async function getStaticProps({ preview = null }) {
  const headliners = (await getHeadliners(preview, '005289,CBC3BB', 60))
  return {
    props: { headliners },
  }
}
