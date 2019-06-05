import React, { Component } from "react"
import PropTypes from "prop-types"
import { Banner, YellowBg, YellowItem, BannerContainer } from "./index.styled"
import { Rows } from "../../theme/index.styled"
import MenuComponent from "./menu"

class BannerComponent extends Component {
  render() {
    const { cover, title } = this.props.data
    console.log("this.props", this.props)
    return (
      <Banner fullHeight={this.props.fullHeight} bg={cover.url}>
        <BannerContainer fullHeight={this.props.fullHeight}>
          <h1>{title.text}</h1>
          {this.props.menu && <MenuComponent />}
        </BannerContainer>
        {this.props.fullHeight && (
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
  fullHeight: true,
  menu: false,
}

export default BannerComponent
