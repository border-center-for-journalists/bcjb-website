/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicEvent {
        totalCount
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  const template = path.resolve("src/components/event/index.js")

  pages.data.allPrismicEvent.edges.forEach(edge => {
    createPage({
      path: `/events/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}