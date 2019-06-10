import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Rows, Row } from "../../theme/index.styled"
import { formatMenuItems } from "../../services/utils"
import { Sidebar, Social, Hamburguer, Menu, Overlay } from "./index.styled"

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
    console.log("toggle", this.state)
  }
  render() {
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
          <StaticQuery
            query={graphql`
              query MainMenuQuery {
                prismicMenu(uid: { eq: "bc_menu" }) {
                  uid
                  data {
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
            `}
            render={data => {
              if (!data.prismicMenu.data.menu_main) {
                return <ul />
              }
              const items = formatMenuItems(data.prismicMenu.data.menu_main)
              return (
                <ul>
                  {items &&
                    items.map(item => (
                      <li>
                        <a href={item.item_url.url}>{item.item_title.text}</a>
                      </li>
                    ))}
                </ul>
              )
            }}
          />
          <Rows align="space-between">
            <Row>
              <Social bigger href="/" className="icon-facebook" />
              <Social href="/" className="icon-twitter" />
              <Social href="/" className="icon-youtube" />
            </Row>
            <Row>
              <p>
                <a href="/">Inglés</a>
              </p>
              <p>
                <a href="/">Español</a>
              </p>
            </Row>
          </Rows>
        </Menu>
        <Social bigger href="/" className="icon-facebook" />
        <Social href="/" className="icon-twitter" />
        <Social href="/" className="icon-youtube" />
      </Sidebar>
    )
  }
}

export default SidebarComponent
