/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import favicon from "../../static/favicon.ico"
const defaultImage = require("../theme/images/periodistas.png")

function SEO({ description, lang, meta, keywords, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )


  const metaDescription = description || site.siteMetadata.metadescription;

  const metaTitle = title || site.siteMetadata.metatitle;

  const url = window.location.href;

  // console.log(keywords || site.siteMetadata.metakeywords);

  const lan = (lang == 'es')? 'es-mx' : lang

  return (
    <Helmet
      htmlAttributes={{
        lan
      }}
      title={title}
      titleTemplate={`%s | ${metaTitle}`}
      meta={[
        {
          name: `title`,
          content: metaTitle,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: image || defaultImage,
        },
        {
          property: `author`,
          content: `Border Center`
        },
        {
          property: `publisher`,
          content: `Border Center`
        },
        {
          property: `robots`,
          content: `index`
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords,
              }
            : []
        )
        .concat(meta)}
      link={[
        { rel: "icon", type: "image/ico", href: `${favicon}` },
        { rel: "shortcut icon", type: "image/ico", href: `${favicon}` },
      ]}
    >
      <link rel="canonical" href={url} />
      <link
        href="https://fonts.googleapis.com/css?family=Aleo:300,400,400i,700&display=swap"
        rel="stylesheet"
      />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-149357897-1"></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-149357897-1');`}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: ``,
  description: ``,
  image: defaultImage,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default SEO
