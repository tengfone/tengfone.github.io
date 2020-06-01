import React from "react"
import Head from '../components/head'
import Layout from "../components/layout"
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <Head title="404" />
    <div style={{ margintop: '5rem' }}>
      <h1 style={{ color: '#64DEF7', marginTop: '5rem'}}>Page Not Found</h1>
      <p style = {{fontSize: '70px'}}>Whoops, Head <Link to="/" style={{ color: '#64DEF7', textDecoration: 'none'}}>Back?</Link></p>
    </div>
  </Layout>
)

export default NotFoundPage
