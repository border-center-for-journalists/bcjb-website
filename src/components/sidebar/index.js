import React, { Component } from "react"
import { Rows, Row } from "../../theme/index.styled"
import { Sidebar, Social, Hamburguer, Menu, Overlay } from "./index.styled"
import { MainMenu } from "./menu"

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
          <MainMenu />
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
