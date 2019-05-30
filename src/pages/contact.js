import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import ContactComponent from "../components/contact/index"
import MapComponent from "../components/contact/map"

import { ThemeProvider } from "styled-components"
import { Theme } from "../theme/theme"

const ContactPage = ({}) => {
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <SEO title="Contacto" keywords={[`Border Center`]} />
        <BannerComponent />
        <ContactComponent />
        <MapComponent />
      </Layout>
    </ThemeProvider>
  )
}

export default ContactPage
