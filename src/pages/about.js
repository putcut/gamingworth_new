import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ data, location }) => {
  return (
    <Layout location={location} data={data}>
      <SEO title="about" />
      <p>
        GamingWorthは、主にゲームについて好きなように話すPodcastです。
        ゲームの他に、アニメや漫画、オタクが日々を過ごす中で気になった話題などを取り上げて話しています。
        esportsの事も良く話します。
      </p>
      <h3>話し手</h3>
      <h5><a href={`https://twitter.com/${data.site.siteMetadata.social?.twitter || ``}`}>putcut</a></h5>
      <p style={{ marginLeft: "0.5rem" }}>Podcast企画者、運営者。主に進行役。</p>
      <h5><a href={`https://twitter.com/hukuzoumoguro`}>mozk</a></h5>
      <p style={{ marginLeft: "0.5rem" }}>putcutによって召喚された。主に聞き役。</p>
    </Layout>
  )
}

export default About

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
        social {
          twitter
        }
      }
    }
  }
`