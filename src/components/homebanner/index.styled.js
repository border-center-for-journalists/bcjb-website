import styled from "styled-components"
import { Section, Container } from "../../theme/index.styled"
import bg from "../../theme/images/periodistas.png"
const Buttons = styled.div`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;

  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-line-pack:center;
  align-content:center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  margin-top: 20px;
  > *{
    max-width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  a {
    margin: 20px;
  }
`
const Button = styled.a`
  background: ${props => props.color && props.color === 'Black' ? props.theme.Black : 'rgba(0,0,0,0)'};
  color: ${props => props.color && props.color === 'Black' ? props.theme.Yellow : props.theme.White};
  padding: 10px 40px;
  min-width: 200px;
  width: 100%;
  max-width: 250px;
  font-size: 24px;
  font-weight: 700;
  border: 3px solid ${props => props.color && props.color === 'Black' ? props.theme.Black : props.theme.White};
  -webkit-border-radius: 70px;
  -moz-border-radius: 70px;
  border-radius: 70px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: ${props => props.theme.Black};
  }
  text-align:center;
  text-decoration:none;
`
const Banner = styled(Section)`
  background-image: url(${props => (props.bg ? props.bg : bg)});
  background-position: center;
  background-size: cover;
  min-height: ${props => (props.fullHeight ? "750px" : "300px")};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #000;
  position: relative;
  & > * {
    z-index: 1;
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 13%,
      rgba(0, 0, 0, 0.6)
    );
    z-index: 0;
  }
  ${props => props.theme.ipadBreakPoint} {
    min-height: ${props => (props.fullHeight ? "440px" : "200px")};
  }

  ${props => props.theme.mediumBreakPoint} {
    min-height: ${props => (props.fullHeight ? "240px" : "200px")};
  }
`

const BannerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.fullHeight ? "flex-end" : "flex-start")};
  align-items: ${props => (props.fullHeight ? "flex-end" : "flex-start")};

  h1 {
    font-size: 50px;
    color: white;
    max-width: 650px;
    text-align: left;
  }
  h3 {
    font-size: 24px;
    color: white;
    max-width: 650px;
    text-align: center;
  }

  ${props => props.theme.ipadBreakPoint} {
    h1 {
      margin-top: 100px;
    }
  }

  ${props => props.theme.mediumBreakPoint} {
    h1 {
      font-size: 30px;
    }

    align-items: ${props => (props.fullHeight ? "center" : "flex-start")};
  }

  ${props => props.theme.smallBreakPoint} {
    h1 {
      font-size: 20px;
    }
  }
`

const YellowBg = styled.div`
  background-color: ${props => props.theme.Yellow};
  width: 100%;
`

const YellowItem = styled.a`
  flex: 1 0 auto;
  padding: 20px 10px;
  text-align: center;
  color: ${props => props.theme.Black};
  text-decoration: none;
  font-size: 22px;
  box-sizing: border-box;
  span {
    vertical-align: middle;
  }
  i {
    vertical-align: middle;
    font-size: 30px;
    margin-right: 10px;
  }

  ${props => props.theme.mediumBreakPoint} {
    font-size: 18px;
    padding: 10px 6px;
    i {
      margin-right: 4px;
      font-size: 18px;
    }
    font-size: 13px;
  }

  ${props => props.theme.smallBreakPoint} {
    width: 50%;
    flex: 0 1 50%;
  }
`

const MenuItem = styled.a`
  font-size: 13px;
  padding: 15px 8px;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 1.2px;
  &:after {
    content: "|";
    color: white;
    margin-left: 16px;
  }
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
    &:after {
      content: "";
      margin: 0;
    }
  }
  &:hover {
    color: ${props => props.theme.Yellow};
  }

  ${props => props.theme.ipadBreakPoint} {
    font-size: 12px;
    padding: 10px 2px;
  }

  ${props => props.theme.mediumBreakPoint} {
    padding: 15px 0;
    text-align: center;
    &:after {
      content: "";
    }
  }
`

const MenuSeparator = styled.span`
  color: white;
  content: "/";
`

const Menu = styled.nav`
  flex: 1 0 auto;
  margin: 70px 0 40px 0;
  border-top: 1px solid white;

  ${props => props.theme.ipadBreakPoint} {
    margin-top: 0;
  }

  ${props => props.theme.mediumBreakPoint} {
    display: none;
  }
`

export {
  Banner,
  YellowBg,
  YellowItem,
  Menu,
  MenuItem,
  MenuSeparator,
  BannerContainer,
  Buttons,
  Button
}
