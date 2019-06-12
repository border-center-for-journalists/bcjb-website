import React from "react"
import PostItem from "./post"
import BlogSidebar from "./sidebar"
import { PostsColumn, BlogContent } from "./index.styled"
import { Rows, Container } from "../../theme/index.styled.js"
import PaginationComponent from "../pagination/index"

const BlogContainer = ({ posts, singlePost, pageContext }) => (
  <Container>
    <BlogContent>
      <Rows>
        <PostsColumn>
          {!singlePost && posts.map(p => <PostItem post={p} />)}
          {singlePost && <PostItem post={singlePost} full />}
        </PostsColumn>
        <BlogSidebar posts={posts} />
      </Rows>
      <PaginationComponent
        totalPages={pageContext.totalPages}
        currentPage={pageContext.currentPage}
      />
    </BlogContent>
  </Container>
)

export default BlogContainer
