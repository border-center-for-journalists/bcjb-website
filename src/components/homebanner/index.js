import React, { Component } from "react"
import { Banner, YellowBg, YellowItem, BannerContainer } from "./index.styled"
import { Rows } from "../../theme/index.styled"
import MenuComponent from "./menu"

class BannerComponent extends Component {
  render() {
    const { cover, title } = this.props.data
    return (
      <Banner bg={cover.url}>
        <BannerContainer>
          <h1>{title.text}</h1>
          <MenuComponent />
        </BannerContainer>
        <YellowBg>
          <Rows>
            <YellowItem href="/convocatorias">
              <i className="icon-megafono" />
              <span>Convocatorias</span>
            </YellowItem>
            <YellowItem href="/calendar">
              <i className="icon-calendario" />
              <span>Calendario</span>
            </YellowItem>
            <YellowItem href="">
              <i className="icon-periodico" />
              <span>Border Hub</span>
            </YellowItem>
          </Rows>
        </YellowBg>
      </Banner>
    )
  }
}

export default BannerComponent
