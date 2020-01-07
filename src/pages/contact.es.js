import React, { useState, useEffect } from "react"
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
  const contactData = data.allPrismicMenu.edges[0].node.data
  const metakeywords = page.metakeywords.text || ContextEs.texts.keywords
  const contentResume = page.content.text
    ? page.content.text.slice(0, 200)
    : false
  const metadescription =
    page.metadescription.text || contentResume || ContextEs.texts.description
  const title = page.title.text || ContextEs.texts.title
  const image = page.cover && page.cover.url ? page.cover.url : false
  return (
    <Context.Provider value={ContextEs}>
      <Layout langKey="es">
        <SEO
          lang="es"
          title={title}
          keywords={metakeywords}
          description={metadescription}
          image={image}
        />
        <BannerComponent data={page} />
        <ContactComponent location={location} data={page} contactData={contactData} />
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

    allPrismicMenu(filter: { uid: { eq: "bc_menu" }, lang: { eq: "es-mx" } }) {
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

export default ContactEsPage
