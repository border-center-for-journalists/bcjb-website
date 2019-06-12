import React, { Component } from "react"
import PropTypes from "prop-types"
import { Banner, YellowBg, YellowItem, BannerContainer } from "./index.styled"
import { Rows } from "../../theme/index.styled"
import MenuComponent from "./menu"

class BannerComponent extends Component {
  render() {
    const { cover, title } = this.props.data
    return (
      <Banner fullHeight={this.props.fullHeight} bg={cover.url}>
        <BannerContainer fullHeight={this.props.fullHeight}>
          <h1>{title.text}</h1>
          {this.props.menu && <MenuComponent menu={this.props.menu} />}
        </BannerContainer>
        {this.props.submenu && (
          <YellowBg>
            <Rows>
              {this.props.submenu.map(item => {
                let iconClass = ""
                switch (item.item_title.text) {
                  case "Calendario":
                    iconClass = "icon-calendario"
                    break
                  case "Convocatorias":
                    iconClass = "icon-megafono"
                  default:
                    iconClass = "icon-periodico"
                    break
                }

                return (
                  <YellowItem href={item.item_url.url}>
                    <i className={iconClass} />
                    <span>{item.item_title.text}</span>
                  </YellowItem>
                )
              })}
            </Rows>
          </YellowBg>
        )}
      </Banner>
    )
  }
}

BannerComponent.propTypes = {
  cover: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
  title: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
}

BannerComponent.defaultProps = {
  fullHeight: false,
  menu: false,
}

export default BannerComponent
