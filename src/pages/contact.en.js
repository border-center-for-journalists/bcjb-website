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
  const metakeywords = page.metakeywords.text || ContextEn.texts.keywords
  const contentResume = page.content.text
    ? page.content.text.slice(0, 200)
    : false
  const metadescription =
    page.metadescription.text || contentResume || ContextEn.texts.description
  const title = page.title.text || ContextEn.texts.title
  return (
    <Context.Provider value={ContextEn}>
      <Layout langKey="en">
        <SEO
          lang="en"
          title={title}
          keywords={metakeywords}
          description={metadescription}
        />
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
