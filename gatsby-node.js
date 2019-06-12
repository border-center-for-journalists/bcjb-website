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

  const createPageSingle = (edge, section, template) => {
    createPage({
      path: `/${getLangUrl(edge.node.lang)}/${section}/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
        langWithCode: edge.node.lang,
      },
    })
  }

  const createPagePagination = (edges, postsPerPage, section, template) => {
    const pages = Math.ceil(edges.length / postsPerPage)
    console.log("PAGES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", section, pages)
    Array.from({ length: pages }).forEach((_, i) => {
      if (i > 0) {
        console.log("PAGE________________________________________", section, i)
        createPage({
          path: `/${section}/${i + 1}`,
          component: template,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            totalPages: pages,
            currentPage: i + 1,
          },
        })
      }
    })
  }

  const pagesEn = await graphql(`
    {
      allPrismicEvent(filter: { lang: { eq: "en-us" } }) {
        totalCount
        edges {
          node {
            uid
            lang
          }
        }
      }
      allPrismicNoticia(filter: { lang: { eq: "en-us" } }) {
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
  const pagesEs = await graphql(`
    {
      allPrismicEvent(filter: { lang: { eq: "es-mx" } }) {
        totalCount
        edges {
          node {
            uid
            lang
          }
        }
      }
      allPrismicNoticia(filter: { lang: { eq: "es-mx" } }) {
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
  const blogEsTemplate = path.resolve("src/conponents/blog/index.js")
  const blogEnTemplate = path.resolve("src/pages/blog.es.js")

  pagesEn.data.allPrismicNoticia.edges.forEach(edge => {
    createPageSingle(edge, "blog", postTemplate)
  })
  pagesEs.data.allPrismicNoticia.edges.forEach(edge => {
    createPageSingle(edge, "blog", postTemplate)
  })
  createPagePagination(
    pagesEs.data.allPrismicNoticia.edges,
    2,
    "blog",
    blogEsTemplate
  )
  createPagePagination(
    pagesEn.data.allPrismicNoticia.edges,
    2,
    "blog",
    blogEsTemplate
  )

  const eventTemplate = path.resolve("src/components/event/index.js")
  const eventEsTemplate = path.resolve("src/components/calendar/index.js")
  const eventEnTemplate = path.resolve("src/pages/calendar.en.js")

  pagesEn.data.allPrismicEvent.edges.forEach(edge => {
    createPageSingle(edge, "events", eventTemplate)
  })
  pagesEs.data.allPrismicEvent.edges.forEach(edge => {
    createPageSingle(edge, "events", eventTemplate)
  })
  createPagePagination(
    pagesEs.data.allPrismicEvent.edges,
    2,
    "calendar",
    eventEsTemplate
  )
  createPagePagination(
    pagesEn.data.allPrismicEvent.edges,
    2,
    "calendar",
    eventEsTemplate
  )
}
