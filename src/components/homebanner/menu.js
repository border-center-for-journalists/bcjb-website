import React, { Component } from "react"
import { Menu, MenuItem, MenuSeparator } from "./index.styled"
import { Rows } from "../../theme/index.styled"

class MenuComponent extends Component {
  render() {
    return (
      <Menu>
        <Rows>
          <MenuItem href="">¿Quiénes somos?</MenuItem>
          <MenuSeparator />
          <MenuItem href="">Talleres</MenuItem>
          <MenuSeparator />
          <MenuItem href="/contact">Contacto</MenuItem>
          <MenuSeparator />
          <MenuItem href="">Únete</MenuItem>
          <MenuSeparator />
          <MenuItem href="/termsandconditions">
            Políticas de Privacidad
          </MenuItem>
        </Rows>
      </Menu>
    )
  }
}

export default MenuComponent
