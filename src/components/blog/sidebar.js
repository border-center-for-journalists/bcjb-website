import React from "react"
import { Subtitle, Title2 } from "../../theme/index.styled"
import {
  SidebarContainer,
  RecentEntries,
  ArchiveYear,
  ArchiveContainer,
} from "./index.styled"
import moment from "moment"
import { Context } from "../../languages/context"

const Sidebar = ({ posts }) => (
  <Context.Consumer>
    {({ lang }) => {
      return (
        <SidebarContainer>
          <RecentEntries>
            <h3>Entradas recientes</h3>

            <ul>
              {posts.map(post => {
                const url = `/${lang}/blog/${post.uid}`
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

          <ArchiveContainer>
            <Subtitle>Archives</Subtitle>
            <ArchiveYear>
              <h2>2018</h2>
              <ul>
                <li>
                  <a href="#">Noviembre</a>
                </li>
                <li>
                  <a href="#">Diciembre</a>
                </li>
              </ul>
            </ArchiveYear>
            <ArchiveYear>
              <h2>2019</h2>
              <ul>
                <li>
                  <a href="#">Enero</a>
                </li>
                <li>
                  <a href="#">Febrero</a>
                </li>
                <li>
                  <a href="#">Marzo</a>
                </li>
                <li>
                  <a href="#">Abril</a>
                </li>
                <li>
                  <a href="#">Mayo</a>
                </li>
              </ul>
            </ArchiveYear>
          </ArchiveContainer>
        </SidebarContainer>
      )
    }}
  </Context.Consumer>
)

export default Sidebar
