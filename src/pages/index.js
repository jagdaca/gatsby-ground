import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi!</h1>
    <p>This is a demo website.</p>
    <p>Don't dead, open inside.</p>
	<p>I'm Jacob, web developer.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image filename="gatsby-astronaut.png" alt="the gatsby astronout" />
    </div>
    <Link to="/services/">Service</Link> <br />
	<Link to="/contact/">Contact Me</Link> <br />
  </Layout>
)

export default IndexPage
