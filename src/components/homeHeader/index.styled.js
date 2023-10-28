import styled from "styled-components"
import { Section, Container } from "../../theme/index.styled"

const Banner = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
`
const BannerImg = styled.div`
  background-position: center 20%;
  background-size: cover; 
  background-image: linear-gradient(to bottom, transparent 40%, black),
    url(${props => (props.bg)});
  width: 100%;
  min-height: ${props => (props.fullHeight ? "600px" : "300px")};

  ${props => props.theme.ipadBreakPoint} {
    min-height: ${props => (props.fullHeight ? "440px" : "200px")};
  }

  ${props => props.theme.smallBreakPoint} {
    min-height: ${props => (props.fullHeight ? "340px" : "200px")};
  }
  ${props => props.theme.xlBreakPoint} {
  }
`

const BannerContainer = styled(Container)`
color:#fff;
`

export { Banner, BannerContainer, BannerImg }
