import React, { Component } from "react"
import { Footer } from "./index.styled"
import bc from "../../theme/logo.jpg"
import bh from "../../theme/borderhubcenter.jpg"

class FooterComponent extends Component {
  render() {
    return (
      <Footer>
        <a href="https://www.borderhub.org/">
          <img alt="Border Hub" src={bh} />
        </a>
      </Footer>
    )
  }
}

export default FooterComponent
