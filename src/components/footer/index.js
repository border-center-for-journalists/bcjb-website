import React, { Component } from "react"
import { Footer } from "./index.styled"
import bc from "../../theme/logo.jpg"
import bh from "../../theme/borderhubcenter.jpg"

class FooterComponent extends Component {
  render() {
    return (
      <Footer>
        <a href="https://www.borderhub.org/" aria-label="home">
          <img loading="lazy" alt="Border Hub" width="100%" height="100%" src={bh} />
        </a>
      </Footer>
    )
  }
}

export default FooterComponent
