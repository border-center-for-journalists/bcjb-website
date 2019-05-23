import styled from "styled-components"

/* 
          Containers 
*/

const Content = styled.div`
  padding: 0 0 0 79px;
  font-family: ${props => props.theme.FontAleo};
  * {
    font-family: ${props => props.theme.FontAleo};
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
`
const Row = styled.div`
  flex: ${props => (props.width ? "0 1 " + props.width : "1 0 auto")};
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

export {
  Content,
  Section,
  Container,
  Rows,
  Row,
  Title2,
  Title3,
  Subtitle,
  Paragraph,
  ImageWrapper,
}
