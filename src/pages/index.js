import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>Hi people</h1>
    <p>Welcome to Gatsby with Contenful backend.</p>
    <p>to be continued ...</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <Link to="/products/">VIsit our Products</Link>
  </Layout>
)

export default IndexPage
