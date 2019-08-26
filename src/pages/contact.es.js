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
  const metakeywords = page.metakeywords.text || ContextEs.texts.keywords
  const contentResume = page.content.text
    ? page.content.text.slice(0, 200)
    : false
  const metadescription =
    page.metadescription.text || contentResume || ContextEs.texts.description
  const title = page.title.text || ContextEs.texts.title
  return (
    <Context.Provider value={ContextEs}>
      <Layout langKey="es">
        <SEO
          lang="es"
          title={title}
          keywords={metakeywords}
          description={metadescription}
        />
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
