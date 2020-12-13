import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function replaceTitle(str) {
  return (str.replace(/\//g, '') + `. `)
}

const Index = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout
      location={location}
      data={data}
    >
      <SEO title="All posts" />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <small>{post.frontmatter.date}</small>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{replaceTitle(post.fields.slug)}{title}</span>
                    </Link>
                  </h2>
                </header>
                <section>
                  <p itemProp="description">
                    {`${post.frontmatter.description} とかの話。`}
                  </p>
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
        appleUrl
        googleUrl
        spotifyUrl
        androidUrl
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          description
        }
      }
    }
  }
`
