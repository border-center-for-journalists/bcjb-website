import React, { Component } from "react"
import { Sidebar, Social } from "./index.styled"

class SidebarComponent extends Component {
  render() {
    return (
      <Sidebar>
        <Social href="/" className="icon-facebook" />
        <Social href="/" className="icon-twitter" />
        <Social href="/" className="icon-youtube" />
      </Sidebar>
    )
  }
}

export default SidebarComponent
