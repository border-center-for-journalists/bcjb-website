import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import AboutComponent from "../components/homeabout/index"
import TalleresComponent from "../components/hometalleres/index"
import ContactComponent from "../components/contact/index"
import UneteComponent from "../components/homeunete/index"

import { ThemeProvider } from "styled-components"
import { Theme } from "../theme/theme"

const IndexPage = ({ data }) => {
  const postsData = data.allPrismicTesttype.edges
  const posts = postsData.map(post => (
    <div key={post.node.uid}>
      <h3>{post.node.data.title.text}</h3>
      <p>{post.node.data.content.text}</p>
      <p>
        <Link to={`/${post.node.uid}`}>Ver más /{post.node.uid}</Link>
      </p>
    </div>
  ))
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <SEO title="Inicio" keywords={[`Border Center`]} />
        <BannerComponent />
        <AboutComponent />
        <TalleresComponent />
        <ContactComponent />
        <UneteComponent />
      </Layout>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  query IndexPageQuery {
    allPrismicTesttype {
      edges {
        node {
          id
          uid
          data {
            title {
              html
              text
            }
            content {
              html
              text
            }
          }
        }
      }
    }
  }
`

export default IndexPage
