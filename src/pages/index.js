import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import SideBySide from "../components/side-by-side";
import Columns from "../components/columns";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <SideBySide />
    <Columns />
    <Columns />
    <Columns />
    <Columns />
  </Layout>
)

export default IndexPage
