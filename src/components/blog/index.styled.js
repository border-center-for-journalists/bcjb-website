import styled from "styled-components"

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
    font-size: 16px;
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
