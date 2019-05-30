import React, { Component } from "react"
import { Banner, YellowBg, YellowItem, BannerContainer } from "./index.styled"
import { Rows } from "../../theme/index.styled"
import MenuComponent from "./menu"

class BannerComponent extends Component {
  render() {
    return (
      <Banner>
        <BannerContainer>
          <h1>Empoderamos el periodismo en las fronteras</h1>
          <MenuComponent />
        </BannerContainer>
        <YellowBg>
          <Rows>
            <YellowItem href="/convocatorias">
              <i class="icon-megafono" />
              <span>Convocatorias</span>
            </YellowItem>
            <YellowItem href="">
              <i class="icon-calendario" />
              <span>Calendario</span>
            </YellowItem>
            <YellowItem href="">
              <i class="icon-periodico" />
              <span>Border Hub</span>
            </YellowItem>
          </Rows>
        </YellowBg>
      </Banner>
    )
  }
}

export default BannerComponent
