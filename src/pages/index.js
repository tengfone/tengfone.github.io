import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from '../components/head'
import Index from '../styles/index.module.scss'
import Layout from "../components/layout"

function IndexPage() {

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
    <Layout>
      <Head title="Home" />
      <div className={Index.about}>
        <h1 className={Index.greetings} >TengFone's GitHub Loader Page</h1>
        <p style= {{marginTop: `10rem`,}}>The only thing I did on GitHub Pages is currently <a href="https://tengfone.github.io/me/">my portfolio</a></p>
      </div>
    </Layout>
  )
}

export default IndexPage

// https://colors.eva.design/ // #1C1C1C