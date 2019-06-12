import React from "react"
import PropTypes from "prop-types"
import { Subtitle, HtmlContent } from "../../theme/index.styled"
import {
  PostMetadata,
  PostContent,
  SocialContainer,
  Social,
} from "./index.styled.js"
import "moment/locale/es"
import moment from "moment"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import { Context } from "../../languages/context"
import { FacebookShareButton, TwitterShareButton } from "react-share"

moment.locale("es")

const Post = ({ post, full, location }) => {
  const imageUrl = post.banner.medium ? post.banner.medium.url : post.banner.url
  const date = moment(post.publishedAt).format("DD [de] MMMM, YYYY")
  const IMAGE_GALLERY_SLICE_TYPE = "image_gallery"
  const galleries = post.body
    ? post.body.filter(slice => slice.slice_type === IMAGE_GALLERY_SLICE_TYPE)
    : []

  return (
    <Context.Consumer>
      {({ lang }) => {
        const url = `/${lang}/blog/${post.uid}`
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
              <HtmlContent
                dangerouslySetInnerHTML={{ __html: post.content.html }}
              />
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

            {location && (
              <SocialContainer>
                <FacebookShareButton url={location.href}>
                  <Social bigger className="icon-facebook" />
                </FacebookShareButton>
                <TwitterShareButton url={location.href}>
                  <Social className="icon-twitter" />
                </TwitterShareButton>
              </SocialContainer>
            )}
          </PostContent>
        )
      }}
    </Context.Consumer>
  )
}

Post.propTypes = {
  full: PropTypes.bool,
}

export default Post
