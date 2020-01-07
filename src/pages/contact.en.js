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
  const contactData = data.allPrismicMenu.edges[0].node.data
  const metakeywords = page.metakeywords.text || ContextEn.texts.keywords
  const contentResume = page.content.text
    ? page.content.text.slice(0, 200)
    : false
  const metadescription =
    page.metadescription.text || contentResume || ContextEn.texts.description
  const title = page.title.text || ContextEn.texts.title
  const image = page.cover && page.cover.url ? page.cover.url : false
  return (
    <Context.Provider value={ContextEn}>
      <Layout langKey="en">
        <SEO
          lang="en"
          title={title}
          keywords={metakeywords}
          description={metadescription}
          image={image}
        />
        <BannerComponent data={page} />
        <ContactComponent data={page} location={location} contactData={contactData} />
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
    allPrismicMenu(filter: { uid: { eq: "bc_menu" }, lang: { eq: "en-us" } }) {
      edges {
        node {
          uid
          lang
          data {
            phone {
              text
            }
            address {
              text
            }
            email_to
          }
        }
      }
    }
  }
`

export default ContactPage
