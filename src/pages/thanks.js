import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThanksPage = () => (
  <Layout>
    <SEO title="Thank You Page" />
    <h1>Thank you!</h1>
    <p>I will get back to you as soon as I can.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThanksPage