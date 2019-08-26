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
            <Logo href={`/${lang}`}>
              <img alt="Border center" src={logo} />
            </Logo>
          )}
        </Context.Consumer>
      </Header>
    )
  }
}

export default HeaderComponent
