import React, { Component } from "react"
import { Sidebar, Social, Hamburguer } from "./index.styled"

class SidebarComponent extends Component {
  render() {
    return (
      <Sidebar>
        <Hamburguer className="">
          <i />
        </Hamburguer>
        <Social bigger href="/" className="icon-facebook" />
        <Social href="/" className="icon-twitter" />
        <Social href="/" className="icon-youtube" />
      </Sidebar>
    )
  }
}

export default SidebarComponent
