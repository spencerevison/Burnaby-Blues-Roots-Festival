import 'isomorphic-unfetch'
import theme from '../styles/ThemeLight'

const API_URL = process.env.GRAPHQL_URL
const API_TOKEN = process.env.DATO_API_TOKEN

const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`

const artistProperties = `
  id
  slug
  title
  bio(markdown: true)
  website
  instagram
  twitter
  spotify
  order
  featured
  day {
    id,
    title,
    date
  }
  image {
    url
    responsiveImage(imgixParams: {
      fit: crop,
      ar: "3:2",
      w: 1980,
      q: 45,
      duotone: $duotone,
      duotoneAlpha: $duotoneAlpha,
    }) {
      ...responsiveImageFragment
    }
  }
`

async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(API_URL + (preview ? '/preview' : ''), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getAllArtists(preview) {
  const data = await fetchAPI(
    `
    query AllArtistsQuery($duotone: String, $duotoneAlpha: IntType) {
      allArtists(orderBy: position_ASC) {
        ${artistProperties}
      }
    }

    ${responsiveImageFragment}
    `,
    {
      preview,
      variables: {
        duotone: theme.image.duotone,
        duotoneAlpha: theme.image.duotoneAlpha,
      },
    },
  )
  return data?.allArtists
}

export async function getHeadliners(preview) {
  const data = await fetchAPI(
    `
    query HeadlinersQuery($duotone: String, $duotoneAlpha: IntType) {
      allArtists(filter: {headliner: {eq: "true"}}, orderBy: position_ASC) {
        ${artistProperties}
      }
    }

    ${responsiveImageFragment}
    `,
    {
      preview,
      variables: {
        duotone: theme.image.duotone,
        duotoneAlpha: theme.image.duotoneAlpha,
      },
    },
  )
  return data?.allArtists
}

export async function getArtist(preview, slug) {
  const data = await fetchAPI(
    `
    query ArtistQuery($duotone: String, $duotoneAlpha: IntType, $slug: String) {
      artist(filter: {slug: {eq: $slug}}) {
        ${artistProperties}
      }
    }

    ${responsiveImageFragment}
    `,
    {
      preview,
      variables: {
        duotone: theme.image.duotone,
        duotoneAlpha: theme.image.duotoneAlpha,
        slug,
      },
    },
  )
  return data?.artist
}

export async function getPage(preview, slug) {
  const data = await fetchAPI(
    `
    query PageQuery($slug: String) {
        page(filter: {slug: {eq: $slug}}) {
          content(markdown: true)
          title
          slug
          heroImage {
            url
          }
        }
    }`,
    {
      preview,
      variables: {
        slug,
      },
    },
  )
  return data?.page
}


export async function getAllFaqs(preview) {
  const data = await fetchAPI(
    `
    query FaqQuery {
      allFaqs(orderBy: position_ASC) {
        id
        answer(markdown: true)
        question
      }
    }`,
    {
      preview,
    },
  )
  return data?.allFaqs
}
