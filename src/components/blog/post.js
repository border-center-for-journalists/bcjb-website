import React from "react"
import PropTypes from "prop-types"
import { Subtitle, HtmlContent } from "../../theme/index.styled"
import sampleImage from "../../theme/images/about.png"
import { PostMetadata, PostContent } from "./index.styled.js"
import "moment/locale/es"
import moment from "moment"

moment.locale("es")

const Post = ({ post, full }) => {
  const imageUrl = post.banner.medium ? post.banner.medium.url : post.banner.url
  const date = moment(post.publishedAt).format("DD [de] MMMM, YYYY")
  const url = `/blog/${post.uid}`

  return (
    <PostContent>
      <Subtitle>
        <a href={url}>{post.title.text}</a>
      </Subtitle>
      <PostMetadata>
        {date} | por {post.author}
      </PostMetadata>
      <a href={url}>
        <img src={imageUrl} alt={post.title.text} />
      </a>

      {!full && (
        <p>
          {post.excerpt.text.slice(0, 200)}
          {post.excerpt.text.length > 200 ? "..." : ""}
        </p>
      )}

      {full && (
        <HtmlContent dangerouslySetInnerHTML={{ __html: post.content.html }} />
      )}
    </PostContent>
  )
}

Post.propTypes = {
  full: PropTypes.bool,
}

export default Post
