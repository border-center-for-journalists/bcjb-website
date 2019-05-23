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
`

const TallerTexts = styled.div`
  flex: 0 1 50%;
  box-sizing: border-box;
  padding-right: 15px;
  h3 {
    font-size: 19px;
    margin: 0;
  }
  ${Paragraph} {
    font-size: 16px;
  }
`

const TallerImage = styled.div`
  flex: 0 1 50%;
  box-sizing: border-box;
  padding-left: 15px;
  position: relative;
  img {
    display: block;
  }
  div {
    color: white;
    padding-left: 15px;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i {
      color: ${props => props.theme.Yellow};
      font-size: 35px;
      margin-bottom: 10px;
    }
    span {
      font-size: 18px;
      padding: 5px 0;
    }
  }
`

export { TallerItem, TallerTexts, TallerImage }
