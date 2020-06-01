import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"
import Footer from './footer'
import Header from "./header"
import "../styles/index.scss"
import layoutStyle from '../styles/layout.module.scss'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className={layoutStyle.container}>
        <div className = {layoutStyle.content}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
