import React from "react"
import PostItem from "./post"
// import BlogSidebar from "./sidebar"
import { PostsColumn, BlogContent } from "./index.styled"
import { Rows, Container } from "../../theme/index.styled.js"
import PaginationComponent from "../pagination/index"

const BlogContainer = ({ posts, singlePost, location, pageContext, lang }) => (
  <Container>
    <BlogContent>
      <Rows>
        <PostsColumn>
          {!singlePost && posts.map(p => <PostItem post={p} lang={lang} />)}
          {singlePost && (
            <PostItem post={singlePost} full location={location} lang={lang} />
          )}
        </PostsColumn>
        {/*<BlogSidebar posts={posts} />*/}
      </Rows>
      {!singlePost && (
        <PaginationComponent
          lang={pageContext.lang}
          section="blog"
          totalPages={pageContext.totalPages}
          currentPage={pageContext.currentPage}
        />
      )}
    </BlogContent>
  </Container>
)

export default BlogContainer
