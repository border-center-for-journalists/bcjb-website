import React, { Component } from "react"
import { Rows, Row } from "../../theme/index.styled"
import {
  Sidebar,
  Social,
  Hamburguer,
  Menu,
  Overlay,
  LangItem,
} from "./index.styled"
import { formatMenuItems } from "../../services/utils"
import { Context } from "../../languages/context"
import { StaticQuery, graphql } from "gatsby"

class SidebarComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }
  componentDidMount() {
    this.setState({
      menuOpen: false,
    })
  }
  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen,
    })
  }
  render() {
    const menuItems = this.props.menuData.menu_main
    if (!menuItems) {
      return <ul />
    }
    const items = formatMenuItems(menuItems)

    return (
      <Sidebar>
        <Hamburguer
          onClick={() => {
            this.toggleMenu()
          }}
          className={this.state.menuOpen ? "open" : ""}
        >
          <i />
        </Hamburguer>
        <Overlay
          onClick={() => {
            this.toggleMenu()
          }}
          className={this.state.menuOpen ? "open" : ""}
        />
        <Menu className={this.state.menuOpen ? "open" : ""}>
          <ul>
            {items &&
              items.map((item, index) => (
                <li key={index}>
                  <a href={item.item_url.url}>{item.item_title.text}</a>
                </li>
              ))}
          </ul>

          <Rows align="space-between">
            <Row>
              <Social
                bigger
                href={this.props.menuData.facebook_url.url}
                className="icon-facebook"
              />
              <Social
                href={this.props.menuData.twitter_url.url}
                className="icon-twitter"
              />
              <Social
                href={this.props.menuData.youtube_url.url}
                className="icon-youtube"
              />
            </Row>
            <Row>
              <p>
                <LangItem selected={this.props.lang === "en"} href="/en">
                  {this.props.lang === "en" ? 'English' : 'Inglés'}
                </LangItem>
              </p>
              <p>
                <LangItem selected={this.props.lang === "es"} href="/es">
                  {this.props.lang === "es" ? 'Español' : 'Spanish'}
                </LangItem>
              </p>
            </Row>
          </Rows>
        </Menu>
        <Social
          bigger
          href={this.props.menuData.facebook_url.url}
          className="icon-facebook"
        />
        <Social
          href={this.props.menuData.twitter_url.url}
          className="icon-twitter"
        />
        <Social
          href={this.props.menuData.youtube_url.url}
          className="icon-youtube"
        />
      </Sidebar>
    )
  }
}

const SidebarLangContainer = data => {
  const menuEdgeSpanish = data.allPrismicMenu.edges.find(
    e => e.node.lang === "es-mx"
  )
  const menuEdgeEnglish = data.allPrismicMenu.edges.find(
    e => e.node.lang === "en-us"
  )

  return (
    <Context.Consumer>
      {({ lang }) => (
        <SidebarComponent
          lang={lang}
          menuData={
            lang === "es"
              ? menuEdgeSpanish.node.data
              : menuEdgeEnglish.node.data
          }
        />
      )}
    </Context.Consumer>
  )
}

const SidebarContainer = () => (
  <StaticQuery
    query={graphql`
      query MainMenuQuery {
        allPrismicMenu(filter: { uid: { eq: "bc_menu" } }) {
          edges {
            node {
              uid
              lang
              data {
                twitter_url {
                  url
                }
                facebook_url {
                  url
                }
                youtube_url {
                  url
                }
                menu_main {
                  item_url {
                    url
                  }
                  item_title {
                    text
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={SidebarLangContainer}
  />
)

export default SidebarContainer
