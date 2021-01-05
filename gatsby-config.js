module.exports = {
  siteMetadata: {
    title: `GamingWorth`,
    author: {
      name: `putcut`,
      summary: `オタク`,
    },
    description: `ゲーム(esports)のことを中心に好きなことを話すポッドキャストです。`,
    siteUrl: `https://gamingworth.net/`,
    social: {
      twitter: `putcutt`,
    },
    appleUrl: `https://itunes.apple.com/jp/podcast/gamingworth/id1336050155?mt=2`,
    googleUrl: `https://podcasts.google.com/feed/aHR0cHM6Ly9nYW1pbmd3b3J0aC5uZXQvZmVlZC54bWw?hl=ja`,
    spotifyUrl: `https://open.spotify.com/show/2IIEZFfkXSvRPOlN3dgvgg`,
    androidUrl: `https://www.subscribeonandroid.com/gamingworth.net/feed.xml`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/post`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-audio`,
            options: {
              preload: `auto`,
              loop: false,
              controls: true,
              muted: false,
              autoplay: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        setup: options => ({
          ...options,
          custom_namespaces: {
            itunes: 'http://www.itunes.com/dtds/podcast-1.0.dtd',
            media: 'http://search.yahoo.com/mrss/',
          },
          custom_elements: [
            { 'itunes:author': 'putcut' },
            { 'itunes:image': {
              _attr: {
                href: 'https://gamingworth/artwork.png'
              }
            }},
            { 'itunes:category': [
              { _attr: {
                text: 'Leisure'
              }},
              { 'itunes:category': {
                _attr: {
                  text: 'Video Games'
                }
              }},
              { 'itunes:category': {
                _attr: {
                  text: 'Animation & Manga'
                }
              }},
            ]},
            { 'itunes:explicit': 'clean' },
            { 'itunes:owner': [
              { 'itunes:name': 'putcut' },
              { 'itunes:email': 'putcutpoint@gmail.com' },
            ]},
          ],
        }),
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  title: edge.node.fields.slug.replace(/\//g, '') + `. ` + edge.node.frontmatter.title,
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  enclosure: {url:site.siteMetadata.siteUrl + edge.node.frontmatter.file, length:edge.node.frontmatter.filesize, type:'audio/mp3'},
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      fields { slug }
                      frontmatter {
                        title
                        date
                        description
                        file
                        filesize
                      }
                    }
                  }
                }
              }
            `,
            output: "/feed.xml",
            title: "GamingWorth",
            description: "ゲーム(esports)のことを中心に好きなことを話すポッドキャストです。",
            site_url: "https://gamingworth.net/",
            language: "ja",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
