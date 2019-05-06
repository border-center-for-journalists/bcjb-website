import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

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
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Noticias desde prismic</h1>
      {posts}
    </Layout>
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
