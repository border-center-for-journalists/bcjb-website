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
  font-family: ${props => props.theme.FontAleo};
  * {
    font-family: ${props => props.theme.FontAleo};
  }
  ${props => props.theme.largeBreakPoint} {
    padding: 0 0 0 ${props => props.theme.SidebarWidth2x}px;
  }
  ${props => props.theme.mediumBreakPoint} {
    padding: 0;
  }
`

const Section = styled.section``

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
  font-size: 17px;
  font-weight: 300;
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
    font-size: 17px;
    font-weight: 300;
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

export {
  Wrapper,
  AbsoluteLink,
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
}
