import React, { Component } from "react"
import { Menu, MenuItem, MenuSeparator } from "./index.styled"
import { Rows } from "../../theme/index.styled"

import { Context } from "../../languages/context"

class MenuComponent extends Component {
  render() {
    return (
      <Context.Consumer>
        {({ lang, texts }) => {
          console.log("lang", lang)
          return (
            <Menu>
              <Rows>
                <MenuItem href="">¿Quiénes somos?</MenuItem>
                <MenuSeparator />
                <MenuItem href="">Talleres</MenuItem>
                <MenuSeparator />
                <MenuItem href={`/${lang}/contact`}>Contacto</MenuItem>
                <MenuSeparator />
                <MenuItem href="">Únete</MenuItem>
                <MenuSeparator />
                <MenuItem href={`/${lang}/termsandconditions`}>
                  Políticas de Privacidad
                </MenuItem>
              </Rows>
            </Menu>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default MenuComponent
