import styled from "styled-components"
import { Section, Container } from "../../theme/index.styled"
import bg from "../../theme/images/periodistas.png"

const Banner = styled(Section)`
  background-image: url(${props => (props.bg ? props.bg : bg)});
  background-position: center;
  background-size: cover;
  min-height: ${props => (props.fullHeight ? "800px" : "300px")};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #000;

  ${props => props.theme.largeBreakPoint} {
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

  ${props => props.theme.largeBreakPoint} {
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
  }

  ${props => props.theme.mediumBreakPoint} {
    font-size: 13px;
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

  ${props => props.theme.largeBreakPoint} {
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

  ${props => props.theme.largeBreakPoint} {
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
}
