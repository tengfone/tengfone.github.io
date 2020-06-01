import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import footerStyles from '../styles/footer.module.scss'

function Footer() {
  const data = useStaticQuery(graphql`
    query{
        site {
          siteMetadata{
            author
          }
        }
      }
    `)

  return (
    <footer className={footerStyles.footer}>
      <p>Created & Designed By {data.site.siteMetadata.author} © 2020</p>
    </footer>
  )
}

export default Footer