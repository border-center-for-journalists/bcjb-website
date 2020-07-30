import styled from "styled-components"
import { Paragraph } from "../../theme/index.styled"

const TallerItem = styled.div`
  display: flex;
  flex: 0 1 50%;
  box-sizing: border-box;
  padding: 25px 0;
  &:nth-child(odd) {
    padding-right: 15px;
  }
  &:nth-child(even) {
    padding-left: 15px;
  }

  &:hover img {
    transform: scale(1.2);
  }

  ${props => props.theme.mediumBreakPoint} {
    padding: 25px 0 !important;
    justify-content: space-between;
    flex-direction: column;
  }
`

const TallerTexts = styled.div`
  flex: 0 1 50%;
  box-sizing: border-box;
  padding-right: 15px;

  a {
    color: inherit;
    text-decoration: none;
  }
  h3 {
    font-size: 19px;
    margin: 0;
  }
  ${Paragraph} {
    font-size: 16px;
  }
  ${props => props.theme.mediumBreakPoint} {
    flex: 0 1 auto;
  }
`
const TallerImageContainer = styled.div`
  flex: 0 1 50%;
`

const TallerImage = styled.div`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    transition: all 0.4s ease-in-out;
  }
  div {
    color: white;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.6);
    i {
      color: ${props => props.theme.Yellow};
      font-size: 35px;
      margin-bottom: 10px;
    }
    span {
      font-size: 18px;
      padding: 5px 0;
    }
    span:first-child {
      text-transform: capitalize;
    }
  }
  ${props => props.theme.mediumBreakPoint} {
    flex: 0 1 auto;
  }
`

export { TallerItem, TallerTexts, TallerImage, TallerImageContainer }
