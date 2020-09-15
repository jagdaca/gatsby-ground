import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <h1>Services Offered</h1>
    <p>Web Dev.</p>
    <p>QA.</p>
	<p>Data Analysis.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <p>insert image here</p>
    </div>
    <Link to="/contact/">Contact Me</Link> <br />
  </Layout>
)

export default ServicesPage