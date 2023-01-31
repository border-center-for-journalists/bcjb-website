import React, { Component } from "react"
import { Header, Logo } from "./index.styled"
import logo from "../../theme/logo.jpg"
import { Context } from "../../languages/context"

class HeaderComponent extends Component {
  render() {
    return (
      <Header>
        <Context.Consumer>
          {({ lang }) => (
            <Logo href={`/${lang}`} aria-label="home">
              <img loading="lazy" alt="Border center" width="100%" height="100%" src={logo} />
            </Logo>
          )}
        </Context.Consumer>
      </Header>
    )
  }
}

export default HeaderComponent
