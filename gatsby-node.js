/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const languages = require("./src/languages/index")

const getLangUrl = zone => {
  return languages.langsWithCode[zone]
}

const getLangWithCode = langKey => {
  const l = {
    es: "es-mx",
    en: "en-us",
  }
  return l[langKey] ? l[langKey] : langKey
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage, createRedirect } = actions

  deletePage(page)

  const newContext = {
    ...page.context,
    langWithCode: getLangWithCode[page.context.langKey],
  }

  createPage({
    ...page,
    context: newContext,
  })

  createRedirect({
    fromPath: `/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/en`,
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicEvent {
        totalCount
        edges {
          node {
            uid
            lang
          }
        }
      }
      allPrismicNoticia {
        totalCount
        edges {
          node {
            uid
            lang
          }
        }
      }
    }
  `)

  const postTemplate = path.resolve("src/components/blog/single-post.js")

  pages.data.allPrismicNoticia.edges.forEach(edge => {
    createPage({
      path: `/${getLangUrl(edge.node.lang)}/blog/${edge.node.uid}`,
      component: postTemplate,
      context: {
        uid: edge.node.uid,
        langWithCode: edge.node.lang,
      },
    })
  })

  const eventTemplate = path.resolve("src/components/event/index.js")

  pages.data.allPrismicEvent.edges.forEach(edge => {
    createPage({
      path: `/${getLangUrl(edge.node.lang)}/events/${edge.node.uid}`,
      component: eventTemplate,
      context: {
        uid: edge.node.uid,
        langWithCode: edge.node.lang,
      },
    })
  })
}
