import React from "react"
import { Link } from "gatsby"

const Layout = ({ data, children }) => {
  const title = data.site.siteMetadata.title

  return (
    <div>
      <header className="global-header">
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1> 
        <div className="header-content">
          <div>
            <p>{data.site.siteMetadata.description}</p>
            <Link to="/about/">このPodcastについて</Link>
          </div>
          <div className="subscribe">
            <h1>購読</h1>
              <ul>
                <li><a href={`${data.site.siteMetadata.siteUrl}/feed.xml`}>RSS</a></li>
                <li><a href={data.site.siteMetadata.appleUrl}>Apple Podcasts</a></li>
                <li><a href={data.site.siteMetadata.googleUrl}>Google Podcasts</a></li>
                <li><a href={data.site.siteMetadata.spotifyUrl}>Spotify</a></li>
                <li><a href={data.site.siteMetadata.androidUrl}>Android</a></li>
              </ul>
          </div>
        </div>
      </header>
      <hr />
      <main className="main-wrapper">{children}</main>
      <footer className="global-footer">
        <div>
          <div className="subscribe">
          </div>
        </div>
        <div>
          © 2018 -{` `}{title}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
