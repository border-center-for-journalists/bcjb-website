import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import ContactComponent from "../components/contact/index"
import MapComponent from "../components/contact/map"

import { Context, ContextEs } from "../languages/context"

const ContactEsPage = props => {
  const { data, location } = props
  const page = data.prismicLandingPages.data

  return (
    <Context.Provider value={ContextEs}>
      <Layout langKey="es">
        <SEO title="Contacto" keywords={[`Border Center`]} />
        <BannerComponent data={page} />
        <ContactComponent location={location} data={page} />
        <MapComponent />
      </Layout>
    </Context.Provider>
  )
}

export const pageQuery = graphql`
  query ContactEsPageQuery {
    prismicLandingPages(uid: { eq: "contact" }, lang: { eq: "es-mx" }) {
      ...landingPageDataFragment
    }
  }
`

export default ContactEsPage
