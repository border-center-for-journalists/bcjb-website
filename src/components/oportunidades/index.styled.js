import styled from "styled-components"

const Box = styled.div`
  
  -webkit-box-sizing: border-box; 
  -moz-box-sizing: border-box;    
  box-sizing: border-box;  
  *{
    -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box;    
    box-sizing: border-box;
  }


  webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;

  -ms-flex-line-pack:start;
  align-content:start;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: start;


  padding-top: 14px;
  min-height: 434px;
  margin-top: 20px;
  margin-bottom: 40px;
  position: relative;

  color: ${props => props.theme.White};
  
  & .topHolder{
    width: 100%;
  }
  & .topBar{
    border-bottom: 2px solid ${props => props.theme.Yellow};
    z-index: 2;
    position: relative;
    min-height: 61px;
    margin: 0 30px 10px;
    padding-bottom: 8px;
    webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

    -ms-flex-line-pack:center;
    align-content:center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  & .topBar .col1 .tipo{
    background-color: ${props => props.theme.Yellow};
    color: ${props => props.theme.Black};
    padding: 6px 20px 5px 13px;
    margin-right: 10px;
  }
  & .topBar .col2 p{
    color: ${props => props.theme.Yellow};
    font-weight: 700;
  }
  & .bottomBar{
    width:100%;
    margin-top: 10px;
    padding: 16px 30px;
    z-index: 2;
    position: relative;
    background-color: ${props => props.theme.Black};
  }
  & .tipoText{
    z-index: 2;
    position: relative;
    background-color: ${props => props.theme.Yellow};
  }
  & .grad{
   position: absolute;
   height: 100%;
   width: 100%;
   top: 0;
   left: 0;
   z-index: 1;
   background: rgb(0,0,0);
   background: -moz-linear-gradient(180deg, rgba(0,0,0,0.6085784655659139) 0%, rgba(0,0,0,0.0959734235491071) 100%);
   background: -webkit-linear-gradient(180deg, rgba(0,0,0,0.6085784655659139) 0%, rgba(0,0,0,0.0959734235491071) 100%);
   background: linear-gradient(180deg, rgba(0,0,0,0.6085784655659139) 0%, rgba(0,0,0,0.0959734235491071) 100%);
   filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
  }
  img{
    object-fit: cover;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  h2 {
    font-size: 30px;
    font-weight: 700;
    margin: 20px 0;
    z-index: 2;
    padding: 0px 30px;
    position: relative;
  }
`


const Buttons = styled.div`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;

  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-line-pack:center;
  align-content:center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  margin-top: 20px;

  > *{
    max-width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  Button{
    margin: 20px;
  }
`
const Button = styled.button`
  background: ${props => props.color && props.color === 'Yellow' ? props.theme.Yellow : props.theme.Black};
  color: ${props => props.color && props.color === 'Yellow' ? props.theme.Black : props.theme.White};
  padding: 10px 20px;
  min-width: 200px;
  width: 100%;
  max-width: 250px;
  font-size: 19px;
  font-weight: 700;
  border: 1px solid ${props => props.color && props.color === 'Yellow' ? props.theme.Yellow : props.theme.Black};
  cursor: pointer;
  &:hover {
    background-color: white;
    color: ${props => props.theme.Black};
  }
`

const Select = styled.div`
 -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;

  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-line-pack:center;
  align-content:center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  /*max-width: 300px;*/
  width: 100%;

  > *{
    max-width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  p{
    /*width: 50%;*/
    max-width: 200px;
    padding-right: 10px;
    color: ${props => props.theme.DarkGray};
    font-style: italic;
  }
  select{
    width: 50%;
    max-width: 170px;
    height: 42px;
    padding-left: 10px;
    color: ${props => props.theme.Black};
    font-size: 18px;
    font-family: ${props => props.theme.FontAleo};
    font-weight: 400;
    margin:unset;

    border-radius: 0;
    -webkit-appearance: none!important;
    -webkit-user-select: text!important; /* Chrome, Opera, Safari */
    -moz-user-select: text!important; /* Firefox 2+ */
    -ms-user-select: text!important; /* IE 10+ */
    user-select: text!important; /* Standard syntax */
    -webkit-touch-callout: text!important;

    border: none;
    -o-text-overflow: clip;
    text-overflow: clip;
    background-color: ${props => props.theme.Gray};
  }
`


const Restext = styled.p`
  color: ${props => props.theme.DarkGray};
  font-style: italic;
  padding-top: 50px;
`

export { Box, Button, Buttons, Select, Restext }
