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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `developmentprismic`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
