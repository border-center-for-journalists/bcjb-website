import React from "react"
import PostItem from "./post"
import BlogSidebar from "./sidebar"
import { PostsColumn, BlogContent } from "./index.styled"
import { Rows, Container } from "../../theme/index.styled.js"

const BlogContainer = ({ posts, singlePost }) => (
  <Container>
    <BlogContent>
      <Rows>
        <PostsColumn>
          {!singlePost && posts.map(p => <PostItem post={p} />)}
          {singlePost && <PostItem post={singlePost} full />}
        </PostsColumn>
        <BlogSidebar posts={posts} />
      </Rows>
    </BlogContent>
  </Container>
)

export default BlogContainer
