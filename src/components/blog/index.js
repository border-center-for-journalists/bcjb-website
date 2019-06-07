import React from "react"
import PostItem from "./post"
import BlogSidebar from "./sidebar"
import { PostsColumn, BlogContent } from "./index.styled"
import { Rows, Container } from "../../theme/index.styled.js"

const BlogContainer = ({ posts }) => (
  <Container>
    <BlogContent>
      <Rows>
        <PostsColumn>{posts.map(p => <PostItem post={p} />)}</PostsColumn>
        <BlogSidebar posts={posts} />
      </Rows>
    </BlogContent>
  </Container>
)

export default BlogContainer
