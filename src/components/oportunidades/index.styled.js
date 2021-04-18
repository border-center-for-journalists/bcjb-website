import styled from "styled-components"

const Box = styled.a`
  text-decoration:none;
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


const PostMetadata = styled.p`
  font-size: 13px;
  font-weight: 300;
  font-style: italic;
  color: #1f191a;
`

const PostsColumn = styled.div`
  ${props => props.theme.mediumBreakPoint} {
    width: 100%;
  }
`

const PostContent = styled.div`
  margin-bottom: 70px;
  h3 {
    margin-top: 0;
  }
  h3 a {
    color: #000;
    text-decoration: none;
  }
  p {
    font-size: 1.29em;
    line-height: 1.92;
    color: #1f191a;
  }
  img {
    max-width: 100%;
  }
`

const SidebarContainer = styled.div`
  margin-left: 43px;
  width: 38%;
  ${props => props.theme.mediumBreakPoint} {
    width: 100%;
    margin-left: 0;
  }
`

const RecentEntries = styled.div`
  background-color: #fff200;
  padding: 30px;
  margin-bottom: 56px;
  a {
    color: #000;
  }

  h3 {
    font-size: 22px;
    margin-top: 0;
    margin-bottom: 33px;
  }

  ul {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
  }

  ul li {
    margin-bottom: 18px;
    font-size: 13px;
  }

  ul li a {
    font-weight: 400;
  }

  ul li p {
    margin: 4px 0;
    font-weight: 300;
  }
`

const BlogContent = styled.div`
  margin-top: 72px;
`

const RecentEntry = styled.li`
  a {
    color: #000;
  }
`
const ArchiveContainer = styled.div`
  margin-top: 20px;
  padding: 30px;
`

const ArchiveYear = styled.div`
  border-top: 1px solid #000;

  ul {
    padding-left: 0;
    list-style: none;
  }
  ul li a {
    color: #000;
    text-decoration: none;
  }
`

const SocialContainer = styled.div`
  display: flex;
`

const Social = styled.a`
  position: relative;
  display: inline-block;
  color: ${props => props.theme.Black};
  border: 2px solid ${props => props.theme.Black};
  cursor: pointer;
  background-color: ${props => props.theme.Yellow};
  width: 40px;
  height: 40px;
  text-decoration: none;
  border-radius: 50%;
  text-align: center;
  box-sizing: border-box;
  margin: 5px;
  padding: ${props => (props.bigger ? "10px" : "14px")} 0;
  font-size: ${props => (props.bigger ? "18px" : "14px")};
`
export { 
  Box, 
  Button, 
  Buttons, 
  Select, 
  Restext,
  PostMetadata,
  PostsColumn,
  PostContent,
  SidebarContainer,
  BlogContent,
  RecentEntries,
  RecentEntry,
  ArchiveYear,
  ArchiveContainer,
  SocialContainer,
  Social,
}
