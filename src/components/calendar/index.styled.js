import styled from "styled-components"
import { Rows } from "../../theme/index.styled"

const DayTitle = styled.h4`
  font-size: 22px;
  color: ${props => props.theme.Black};
  margin-top: 55px;
  margin-bottom: 20px;
`

const EventContainer = styled.div`
  margin-top: 10px;
  &:nth-child(even) {
    margin-left: 5%;
  }

  box-sizing: border-box;
  width: 45%;

  a {
    text-decoration: none;
  }
  &:hover img {
    transform: scale(1.2);
  }

  ${props => props.theme.mediumBreakPoint} {
    padding: 0 10px;
    margin: 10px 0;
    width: 100%;
    &:nth-child(even) {
      margin-left: 0;
    }
  }
`

const EventTitle = styled.h5`
  font-size: 22px;
  font-weight: 300;
  line-height: 2.18;
  color: ${props => props.theme.Black};
  margin: 10px 0;
  &:before {
    content: "";
    display: inline-block;
    margin-right: 15px;
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    border: 4px solid ${props => props.theme.Black};
    background-color: ${props => props.theme.Yellow};
    border-radius: 50%;
  }
`

const EventSingleTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 0;
  color: ${props => props.theme.Black};
  text-decoration: none;
`

const EventMeta = styled.p`
  font-size: 22px;
  font-weight: 300;
  margin: 13px 0 24px;
`

const EventSingleTitleMarquer = styled.div`
  display: inline-block;
  float: right;
  margin: 45px 20px 0 60px;
  box-sizing: border-box;
  width: 27px;
  height: 27px;
  border: 4px solid ${props => props.theme.Black};
  background-color: ${props => props.theme.Yellow};
  border-radius: 50%;
`

const EventContent = styled.div`
  p {
    text-align: justify;
    font-size: 1.29em;
    line-height: 1.58;
    color: ${props => props.theme.Black};
    margin: 15px 0;
  }
`

const EventLocation = styled.p`
  font-size: 22px;
  margin: 18px 0 24px;
`

const ImageWrapper = styled.div`
  overflow: hidden;
  img {
    width: 100%;
    transition: all 0.4s ease-in-out;
  }
`

const CalendarWrapper = styled.div`
  margin-right: 6%;
  flex: 0 1 47%;
  box-sizing: border-box;
  font-size: 22px;
  font-weight: bold;
  hr {
    border-top-width: 2px;
    border-color: ${props => props.theme.Black};
  }
`

const Arrow = styled.button`
  display: inline-block;
  border: 0 none;
  background-color: transparent;
  font-size: 35px;
  line-height: 20px;
  vertical-align: middle;
  cursor: pointer;
`

const MonthWrapp = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const DayWrapp = styled.div`
  flex: 0 1 ${100 / 7}%;
  box-sizing: border-box;
  text-align: center;
  padding: 4%;
  font-size: 12px;
  font-weight: normal;
  border: 1px solid ${props => props.theme.Black};
`

const LargeEventContainer = styled(Rows)`
  padding: 25px;
  margin: 10px 0;
  background-color: #f7f7f7;
  background-color: ${props => props.theme.Gray};
  ${ImageWrapper} {
    flex: 0 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ${EventContent} {
    padding: 0 25px;
    p {
      margin: 0;
      line-height: 1.47;
      font-size: 1.2em;
    }
  }
  ${props => props.theme.mediumBreakPoint} {
    ${EventContent} {
      padding: 0;
      margin-bottom: 15px;
    }
  }
`

const LargeEventData = styled.div`
  flex: 1 auto 25%;
  max-width: 25%;
  padding-right: 25px;
  border-right: 1px solid #000;
  p {
    margin: 0;
    font-size: 15px;
  }
  ${EventSingleTitle} {
    margin: 0;
    margin-bottom: 15px;
    line-height: 23.5px;
    a {
      font-size: 1em;
      color: ${props => props.theme.Black};
      text-decoration: none;
    }
  }
  ${props => props.theme.mediumBreakPoint} {
    flex: 1 auto 100%;
    max-width: 100%;
    border-right: 0 none;
    border-bottom: 1px solid #000;
    margin-bottom: 15px;
  }
`

export {
  DayTitle,
  EventTitle,
  EventSingleTitle,
  EventSingleTitleMarquer,
  EventContent,
  EventContainer,
  ImageWrapper,
  CalendarWrapper,
  Arrow,
  MonthWrapp,
  DayWrapp,
  EventMeta,
  EventLocation,
  LargeEventContainer,
  LargeEventData,
}
