import styled from "styled-components"

const DayTitle = styled.h4`
  font-size: 22px;
  color: ${props => props.theme.Black};
  margin-top: 55px;
  margin-bottom: 20px;
`

const EventTitle = styled.h5`
  font-size: 22px;
  font-weight: 300;
  line-height: 2.18;
  color: ${props => props.theme.Black};
  margin: 20px 0;
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
  font-size: 38px;
  font-weight: bold;
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
  padding-right: 100px;
  p {
    font-size: 19px;
    line-height: 1.58;
    color: ${props => props.theme.Black};
    margin: 15px 0;
  }
`

const ImageWrapper = styled.div`
  margin-top: 40px;
  img {
    width: 100%;
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

export {
  DayTitle,
  EventTitle,
  EventSingleTitle,
  EventSingleTitleMarquer,
  EventContent,
  ImageWrapper,
  CalendarWrapper,
  Arrow,
  MonthWrapp,
  DayWrapp,
}
