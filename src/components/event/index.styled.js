import styled from "styled-components"

const EventMetaContainer = styled.div`
  padding: 36px;
  min-width: 282px;
  box-sizing: border-box;
  background-color: #000;
  margin-right: 50px;

  ${props => props.theme.mediumBreakPoint} {
    margin-right: 0;
    margin-bottom: 10px;
    padding: 10px;
  }

  p {
    font-size: 22px;
    color: #fff200;
    line-height: 1.36;
    margin: 0;
  }
`

export { EventMetaContainer }
