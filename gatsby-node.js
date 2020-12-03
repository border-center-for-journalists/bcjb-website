/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const languages = require("./src/languages/index")
const moment = require('moment')
const postsPerPage = 10

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
    langWithCode: getLangWithCode(page.context.langKey),
    todayDate: moment().format('YYYY-MM-DD HH:mm:ss')
  }

  createPage({
    ...page,
    context: newContext,
  })

  createRedirect({
    fromPath: `/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/es`,
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const createPageSingle = (edge, section, template) => {
    createPage({
      path: `/${getLangUrl(edge.node.lang)}/${section}/${edge.node.uid}/`,
      component: template,
      context: {
        uid: edge.node.uid,
        lang: edge.node.lang,
        langWithCode: edge.node.lang,
      },
    })
  }

  const createPagePagination = (edges, section, lang, template) => {
    const pages = Math.ceil(edges.length / postsPerPage)

    Array.from({ length: pages }).forEach((_, i) => {
      // if (i > 0) {
      createPage({
        path: i === 0 ? `/${lang}/${section}` : `/${lang}/${section}/${i + 1}/`,
        component: template,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          totalPages: pages,
          currentPage: i + 1,
          lang: lang,
          langWithCode: getLangWithCode(lang),
        },
      })
      // }
    })
  }

  const pagesEn = await graphql(`
    {
      allPrismicEvent(filter: { lang: { eq: "en-us" } }) {
        totalCount
        edges {
          node {
            internal {
              type
            }
            uid
            lang
            data {
              type
            }
          }
        }
      }
      allPrismicNoticia(
        filter: { lang: { eq: "en-us" } }
        sort: { fields: [data___custom_publication_date], order: DESC }
      ) {
        totalCount
        edges {
          node {
            internal {
              type
            }
            uid
            lang
          }
        }
      }
      allPrismicAnnouncement(
        filter: { lang: { eq: "en-us" } }
        sort: { fields: [data___custom_publication_date], order: DESC }
      ) {
        totalCount
        edges {
          node {
            internal {
              type
            }
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
            internal {
              type
            }
            uid
            lang
            data {
              type
            }
          }
        }
      }
      allPrismicNoticia(
        filter: { lang: { eq: "es-mx" } }
        sort: { fields: [data___custom_publication_date], order: DESC }
      ) {
        totalCount
        edges {
          node {
            internal {
              type
            }

            uid
            lang
          }
        }
      }
      allPrismicAnnouncement(
        filter: { lang: { eq: "es-mx" } }
        sort: { fields: [data___custom_publication_date], order: DESC }
      ) {
        totalCount
        edges {
          node {
            internal {
              type
            }

            uid
            lang
          }
        }
      }
    }
  `)

  const postTemplate = path.resolve("src/components/blog/single-post.js")
  const blogTemplate = path.resolve("src/containers/blog.js")
  const announcementsTemplate = path.resolve("src/containers/announcement.js")
  const announcementTemplate = path.resolve("src/components/announcement/single.js")

  pagesEn.data.allPrismicNoticia.edges.forEach(edge => {
    createPageSingle(edge, "blog", postTemplate)
  })
  pagesEs.data.allPrismicNoticia.edges.forEach(edge => {
    createPageSingle(edge, "blog", postTemplate)
  })
  createPagePagination(
    pagesEs.data.allPrismicNoticia.edges,
    "blog",
    "es",
    blogTemplate
  )
  createPagePagination(
    pagesEn.data.allPrismicNoticia.edges,
    "blog",
    "en",
    blogTemplate
  )

  pagesEn.data.allPrismicAnnouncement.edges.forEach(edge => {
    createPageSingle(edge, "announcement", announcementTemplate)
  })
  pagesEs.data.allPrismicAnnouncement.edges.forEach(edge => {
    createPageSingle(edge, "announcement", announcementTemplate)
  })
  createPagePagination(
    pagesEs.data.allPrismicAnnouncement.edges,
    "announcements",
    "es",
    announcementsTemplate
  )
  createPagePagination(
    pagesEn.data.allPrismicAnnouncement.edges,
    "announcements",
    "en",
    announcementsTemplate
  )

  const eventTemplate = path.resolve("src/components/event/index.js")
  const eventPaginationTemplate = path.resolve("src/containers/calendar.js")
  const calendarEn = pagesEn.data.allPrismicEvent.edges.filter(
    e => e.node.data.type !== 'Programa'
  )
  const calendarEs = pagesEs.data.allPrismicEvent.edges.filter(
    e => e.node.data.type !== 'Programa'
  )

  pagesEn.data.allPrismicEvent.edges.forEach(edge => {
    createPageSingle(edge, "events", eventTemplate)
  })
  pagesEs.data.allPrismicEvent.edges.forEach(edge => {
    createPageSingle(edge, "events", eventTemplate)
  })
  createPagePagination(
    calendarEs,
    "calendar",
    "es",
    eventPaginationTemplate
  )
  createPagePagination(
    calendarEn,
    "calendar",
    "en",
    eventPaginationTemplate
  )

  const workshopPaginationTemplate = path.resolve("src/containers/workshops.js")
  const WORKSHOP_TYPE = "Taller"
  const WEBINAR_TYPE = "Webinar"
  const PANEL_TYPE = "Panel"
  const PANELVIRTUAL_TYPE = "Panel virtual"
  const pagesEnWorkshops = pagesEn.data.allPrismicEvent.edges.filter(
    e => (
      e.node.data.type === WORKSHOP_TYPE
      || e.node.data.type === WEBINAR_TYPE
      || e.node.data.type === PANEL_TYPE
      || e.node.data.type === PANELVIRTUAL_TYPE
    )
  )

  createPagePagination(
    pagesEnWorkshops,
    "workshops",
    "en",
    workshopPaginationTemplate
  )

  const pagesEsWorkshops = pagesEs.data.allPrismicEvent.edges.filter(
    e => (
      e.node.data.type === WORKSHOP_TYPE
      || e.node.data.type === WEBINAR_TYPE
      || e.node.data.type === PANEL_TYPE
      || e.node.data.type === PANELVIRTUAL_TYPE
    )
  )
  createPagePagination(
    pagesEsWorkshops,
    "workshops",
    "es",
    workshopPaginationTemplate
  )

  const programsPaginationTemplate = path.resolve("src/containers/programs.js")
  const PROGRAM_TYPE = "Programa"
  const pagesEnPrograms = pagesEn.data.allPrismicEvent.edges.filter(
    e => e.node.data.type === PROGRAM_TYPE
  )

  createPagePagination(
    pagesEnPrograms,
    "programs",
    "en",
    programsPaginationTemplate
  )

  const pagesEsPrograms = pagesEs.data.allPrismicEvent.edges.filter(
    e => e.node.data.type === PROGRAM_TYPE
  )
  createPagePagination(
    pagesEsPrograms,
    "programs",
    "es",
    programsPaginationTemplate
  )
}
