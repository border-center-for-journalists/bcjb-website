import styled from "styled-components"

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 79px;
  padding-left: 79px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  z-index: 100;
`

const Logo = styled.a`
  display: inline-block;
  img {
    height: 100%;
    max-width: 460px;
  }
`

export { Header, Logo }
