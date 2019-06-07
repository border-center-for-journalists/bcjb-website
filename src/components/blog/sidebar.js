import React from "react"
import { Subtitle, Title2 } from "../../theme/index.styled"
import { SidebarContainer, RecentEntries } from "./index.styled"
import moment from "moment"

const Sidebar = ({ posts }) => (
  <SidebarContainer>
    <RecentEntries>
      <h3>Entradas recientes</h3>

      <ul>
        {posts.map(post => {
          const url = `/blog/${post.uid}`
          return (
            <li>
              <p>
                <a href={url}>{post.title.text}</a>
              </p>
              <p>
                {moment(post.publishedAt).format("DD/MM/YY")} |{" "}
                {post.excerpt.text.slice(0, 100)}
                {post.excerpt.text.length > 100 ? "..." : ""}
              </p>
            </li>
          )
        })}
      </ul>
    </RecentEntries>
  </SidebarContainer>
)

export default Sidebar
