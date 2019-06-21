import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import ContactComponent from "../components/contact/index"
import MapComponent from "../components/contact/map"

import { Context, ContextEn } from "../languages/context"

const ContactPage = ({ data, location }) => {
  const page = data.prismicLandingPages.data

  return (
    <Context.Provider value={ContextEn}>
      <Layout langKey="es">
        <SEO title={page.title.text} keywords={[`Border Center`]} />
        <BannerComponent data={page} />
        <ContactComponent data={page} location={location} />
        <MapComponent />
      </Layout>
    </Context.Provider>
  )
}

export const pageQuery = graphql`
  query ContactPageQuery {
    prismicLandingPages(uid: { eq: "contact" }, lang: { eq: "en-us" }) {
      ...landingPageDataFragment
    }
  }
`

export default ContactPage
