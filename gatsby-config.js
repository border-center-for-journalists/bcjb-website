if (process.env.NODE_ENV === "development") {
  require("dotenv").config({
    path: `${process.env.NODE_ENV}.env`,
  })
}

const languages = require("./src/languages/index")

module.exports = {
  pathPrefix: "/gatsbyPrismic",
  siteMetadata: {
    title: `Border Center`,
    description: `Border Center project`,
    author: `@spaceshiplabs`,
    siteUrl: process.env.SITE_URL,
    languages,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: __dirname + "/src/images",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Border Center`,
        short_name: `starter`,
        start_url: `/es`,
        // background_color: `#663399`,
        // theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `static/favicon.ico`, // This path is relative to the root of the site.
        icons: [],
      },
    },
    {
      //Using this instead of gaysby-source-prismic https://github.com/angeloashmore/gatsby-source-prismic/issues/53#issuecomment-455538301
      resolve: `gatsby-source-prismic-rich-text-fields`,
      options: {
        repositoryName: `developmentprismic`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
        forceRichTextFields: {
          document_type: "content",
        },
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false,
        prefixDefault: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `sitemap.xml`,
        exclude: ['/preview'],
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
