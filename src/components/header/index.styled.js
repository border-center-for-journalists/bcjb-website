import styled from "styled-components"

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: ${props => props.theme.SidebarWidth}px;
  padding-left: ${props => props.theme.SidebarWidth}px;
  transition: padding 0.5s;
  box-sizing: border-box;
  top: 0;
  left: 0;
  z-index: 100;
  ${props => props.theme.largeBreakPoint} {
    height: ${props => props.theme.SidebarWidth2x}px;
    padding-left: ${props => props.theme.SidebarWidth2x}px;
  }
`

const Logo = styled.a`
  display: inline-block;
  img {
    transition: height 0.5s;
    height: ${props => props.theme.SidebarWidth}px;
    ${props => props.theme.largeBreakPoint} {
      height: ${props => props.theme.SidebarWidth2x}px;
    }
    width:auto;
  }
  ${props => props.theme.smallBreakPoint} {
    overflow: hidden;
    width: 130px;
  }
`

export { Header, Logo }
