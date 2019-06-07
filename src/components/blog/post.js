import React from "react"
import PropTypes from "prop-types"
import { Subtitle, HtmlContent } from "../../theme/index.styled"
import sampleImage from "../../theme/images/about.png"
import { PostMetadata, PostContent } from "./index.styled.js"
import "moment/locale/es"
import moment from "moment"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

moment.locale("es")

const Post = ({ post, full }) => {
  const imageUrl = post.banner.medium ? post.banner.medium.url : post.banner.url
  const date = moment(post.publishedAt).format("DD [de] MMMM, YYYY")
  const url = `/blog/${post.uid}`
  const IMAGE_GALLERY_SLICE_TYPE = "image_gallery"
  const galleries = post.body
    ? post.body.filter(slice => slice.slice_type === IMAGE_GALLERY_SLICE_TYPE)
    : []
  console.log("galeries", galleries)

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
      {full &&
        galleries &&
        galleries.length > 0 &&
        galleries.map(gallery => (
          <div>
            <Carousel dynamicHeight infiniteLoop showStatus>
              {gallery.items.map(gi => (
                <div>
                  <img src={gi.gallery_image.medium.url} />
                </div>
              ))}
            </Carousel>
          </div>
        ))}
    </PostContent>
  )
}

Post.propTypes = {
  full: PropTypes.bool,
}

export default Post
