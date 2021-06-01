import Head from 'next/head'
import styled, { withTheme } from 'styled-components'
import Layout from '../../layouts/ArtistLayout'
import { getArtist, getAllArtists } from '../../lib/api'
import global from '../../site.config.json'
import HeroImage from '../../components/Hero/HeroImage'
import Share from '../../components/Share'
import Links from '../../components/Artists/Links'
import { device } from '../../styles/device'


/*-----------------------------------------------------------------------------
  Layout
------------------------------------------------------------------------------*/
const StyledLayout = styled(Layout)`
  background-color: ${({ theme }) => theme.colors.artistBg};

  @media ${device.tablet} {
    padding: 35px 40px;
  }

  @media ${device.laptopL} {
    padding: 60px 60px;
  }
`

/*-----------------------------------------------------------------------------
  Share
------------------------------------------------------------------------------*/
const StyledShare = styled(Share)`
`

/*-----------------------------------------------------------------------------
  Links
------------------------------------------------------------------------------*/
const StyledLinks = styled(Links)`
`

/*-----------------------------------------------------------------------------
  Scheduled
------------------------------------------------------------------------------*/
const Scheduled = styled.div`
  font-size: 25px;
`

const StyledDate = styled.span`
  white-space: nowrap;
`

function Artist({ theme, artist }) {
  const bio = artist.bio ? <span><hr /><div dangerouslySetInnerHTML={{ __html: artist.bio }} /></span> : ''

  return (
    <div>
      <Head>
        <title>{artist.title} | {global.title}</title>
      </Head>
      <HeroImage title={artist.title} imageSrc={`${artist.image.url}?duotone=${theme.image.duotoneHero}&duotone-alpha=30`} verticalAlign="center" />
      <StyledLayout>
        <StyledShare title={`${artist.title} | ${global.title}`} />
        <hr />
        <Scheduled>{artist.day.title}, <StyledDate>{artist.day.date}</StyledDate></Scheduled>
        <hr />
        <StyledLinks facebook={artist.facebook} website={artist.website} instagram={artist.instagram} twitter={artist.twitter} spotify={artist.spotify} />
        {bio}
      </StyledLayout>
    </div>
  );
}

export default withTheme(Artist)

/*-----------------------------------------------------------------------------
  Static props
------------------------------------------------------------------------------*/
export async function getStaticProps({ params, preview = null }) {
  const artist = (await getArtist(preview, params.slug))
  return {
    props: {
      preview,
      artist,
    },
  }
}

/*-----------------------------------------------------------------------------
  Static paths
------------------------------------------------------------------------------*/
export async function getStaticPaths() {
  const allArtists = await getAllArtists()
  return {
    paths: allArtists?.map((artist) => `/lineup/${artist.slug}`) || [],
    fallback: false,
  }
}
