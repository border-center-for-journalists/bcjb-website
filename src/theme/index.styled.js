import styled from "styled-components"

/* 
          Containers 
*/

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`

const Content = styled.div`

  padding: 0 0 0 ${props => props.theme.SidebarWidth}px;
  transition: padding 0.5s;
  
  ${props => props.theme.largeBreakPoint} {
    padding: 0 0 0 ${props => props.theme.SidebarWidth2x}px;
  }
  ${props => props.theme.mediumBreakPoint} {
    padding: 0;
  }
`

const Section = styled.section`
  ${props => (props.paddingTop ? "padding-top: 130px;" : "")}
  ${props =>
    props.darkMode === true
      ? "background-color: " + props.theme.Black + ";"
      : ""}
`

const Container = styled.div`
  width: 95%;
  ${props =>
    !props.size ? "max-width:" + props.theme.ContainerCommon + "px" : ""};
  ${props =>
    props.size === "small"
      ? "max-width:" + props.theme.ContainerSmall + "px"
      : ""};
  ${props =>
    props.size === "medium"
      ? "max-width:" + props.theme.ContainerMedium + "px"
      : ""};
  margin: 0 auto;
`

const Rows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props =>
    props.align && props.align === "start" ? "flex-start" : props.align};
  ${props => (props.wrap ? "flex-wrap: wrap;" : "")}
  ${props => props.theme.mediumBreakPoint} {
    flex-direction: ${props => (props.keepRow ? "row" : "column")};
  }
  ${props => props.theme.smallBreakPoint} {
    ${props => (props.keepRow ? "flex-wrap: wrap;" : "")}
  }
`
const Row = styled.div`
  flex: ${props => (props.width ? "0 1 " + props.width : "0 1 auto")};
  flex-direction: column;
`
/* 
          Texts
*/

const Title2 = styled.h2`
  font-size: 50px;
  font-weight: bold;
  margin: 22px 0;
  color: ${props => props.theme.Black};
  ${props => props.theme.mediumBreakPoint} {
    font-size: 36px;
  }
`

const Title3 = styled.h2`
  font-size: 30px;
  padding: 15px 0;
  border-bottom: 4px solid
    ${props => (props.color ? props.theme.Yellow : props.theme.Black)};
`

const Subtitle = styled.h3`
  font-size: 30px;
  font-weight: bold;
  margin: 22px 0;
  color: ${props => props.theme.Black};
`

const Paragraph = styled.p`
  font-size: 1.1em;
  font-weight: 500;
  line-height: 1.47;
  color: ${props => props.theme.Black};
`

const HtmlContent = styled.div`
  ${props => (props.showLtSm ? "display: none;" : "")} ${props =>
    props.theme.mediumBreakPoint} {
    ${props => (props.showLtSm ? "display: block; " : "")};
    ${props => (props.hideLtSm ? "display: none" : "")};
  }

  p {
    font-size: 1.29em;
    font-weight: 500;
    line-height: 1.8;
    color: ${props => props.theme.Black};
  }

  p:first-child {
    margin-top: 0;
  }

  img {
    max-width: 100%;
  }

  ${props =>
    props.programsPage
      ? `
  .block-img:before {
    content: "";
    display: block;
    border-top: 1px solid #bbb;
    width: 50%;
    height: 1px;
    margin: 40px auto;
  }`
      : ``} 
  ul, ol {
    list-style: none;
    padding-left: 0;
    font-size: 17px;
    line-height: 1.8;
  }
  ul li, ol li {
    margin-bottom: 15px;
  }
  ul li:before, ol li:before {
    content: "";
    width: 12px;
    height: 12px;
    border: 2px solid #000;
    background-color: #fef100;
    display: inline-block;
    margin-right: 12px;
    border-radius: 50%;
    vertical-align: middle;
  }

  .embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
  }
  .embed-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  ${({ theme }) => theme.mediumBreakPoint} {
    iframe {
      max-width: 100%;
      max-height: 68vw !important;
      margin: 0 auto;
    }
  }
`

const ImageWrapper = styled.div`
  padding: 10px 0;
  img {
    width: 100%;
  }
  p {
    font-size: 14px;
    font-style: italic;
    color: ${props => props.theme.Black};
    text-align: right;
  }
`

const TextContainer = styled.div`
  color: ${props => props.theme.Black};
  p {
    font-size: 12px;
    font-weight: 300;
    line-height: 2.08;
    letter-spacing: normal;
    margin: 10px 0;
  }
  h1 {
    font-size: 38px;
    text-align: center;
    margin: 50px 0;
    font-weight: bold;
  }
  h2 {
    font-size: 22px;
    font-weight: bold;
    margin: 20px 0;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 20px 0;
  }
  h4,
  h5,
  h6 {
    font-size: 15px;
    font-weight: bold;
    margin: 20px 0;
  }
`

const AbsoluteLink = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
`

const Capitalized = styled.p`
  text-transform: capitalize;
  margin: 0;
`
const TwoTwoGrid = styled.div`
  display:flex;
  flex:1;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center;
  & > a  {
    margin-right:1%;
    max-width:49% !important;
  }
  & > a:nth-child(even){
    margin-left:1%;
    margin-right:0;

  }
  @media only screen and (max-width: 750px){
    & > a  {
      margin-right:1%;
      max-width:100% !important;
    }
  }
`
const Button = styled.a`
  background: ${props => props.color && props.color === 'Yellow' ? props.theme.Yellow : props.theme.Black};
  color: ${props => props.color && props.color === 'Yellow' ? props.theme.Black : props.theme.White};
  padding: 10px 20px;
  min-width: 200px;
  width: 100%;
  max-width: 250px;
  font-size: 19px;
  font-weight: 700;
  text-align:center;
  border: 1px solid ${props => props.color && props.color === 'Yellow' ? props.theme.Yellow : props.theme.Black};
  cursor: pointer;
  &:hover {
    background-color: white;
    color: ${props => props.theme.Black};
  }
`

const Author = styled.i`
  color: ${props => props.theme.Yellow}
`
const AuthorContainer = styled.i`
  display:flex;
  flex-direction:column;
  align-items: end;
`
const PublicationDate = styled.span`
  font-size: 12px;
  margin-bottom:1em;
`
const Title = styled.h1`
  a{
    text-decoration: none !important; 
    color: #fff !important;  
    font-size:2em;
  }
  text-align:right !important;

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
  YellowBg,
  YellowItem,
  Wrapper,
  AbsoluteLink,
  Button,
  Capitalized,
  Content,
  Section,
  Container,
  Rows,
  Row,
  Title2,
  Title3,
  Subtitle,
  Paragraph,
  HtmlContent,
  ImageWrapper,
  TextContainer,
  TwoTwoGrid,
  Author,
  AuthorContainer,
  PublicationDate,
  Title
}
