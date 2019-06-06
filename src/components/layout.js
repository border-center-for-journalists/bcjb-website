/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import { Wrapper, Content } from "../theme/index.styled"
import HeaderComponent from "./header/index"
import SidebarComponent from "./sidebar/index"
import FooterComponent from "./footer/index"
import "../theme/layout.css"
import "../theme/style.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <HeaderComponent siteTitle={data.site.siteMetadata.title} />
        <SidebarComponent />
        <Content>
          {children}
          <FooterComponent />
        </Content>
      </Wrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
