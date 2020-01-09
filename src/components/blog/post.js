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
import ImageModal from "../imageModal"
import { Context } from "../../languages/context"
import { FacebookShareButton, TwitterShareButton } from "react-share"

function postParser(post){
  let finalContent=[];
  let html = post.content.html;
  let allPtags = html.split("<p")  
  let images = `<p class=" block-img">` // image identifier
  for(let i=0;i<allPtags.length;i++){
    allPtags[i]= "<p" + (allPtags[i] == "" ? '></p>':allPtags[i]); // complete broken <p>
    let splitted = allPtags[i].split(images)
    //console.log(splitted);
    if(splitted.length>1){
      let imageData = splitted[1].split('"');
      let image = imageData[1]
      let alt = imageData[3]
      let copyright = imageData[5]
      finalContent.push({type:"image",img:image,alt:alt,copyright:copyright})
    } else {
      // no contiene
      finalContent.push({type:"text",content:allPtags[i]})
    }
  }
  return finalContent
}
const Post = ({ post, full, location, lang }) => {
  moment.locale(lang)
  const imageUrl = post.banner.medium ? post.banner.medium.url : post.banner.url
  const date = lang === "es" ? moment(post.publishedAt).format('DD [de] MMMM, YYYY') : moment(post.publishedAt).format('MMMM DD[,] YYYY');
  const IMAGE_GALLERY_SLICE_TYPE = "image_gallery"
  const finalContent = postParser(post);
  const galleries = post.body
    ? post.body.filter(slice => slice.slice_type === IMAGE_GALLERY_SLICE_TYPE)
    : []

  const excerptobj = post.excerpt || post.metadescription || { text: '' };
  const excerptText = excerptobj.text || '';

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
            {!full && (
              <a href={url}>
                <img src={imageUrl} alt={post.title.text} />
              </a>
            )}

            {!full &&
              post.excerpt &&
              post.excerpt.text &&
              typeof post.excerpt.text === "string" && (
                <p>
                  {`${excerptText}${excerptText.length > 200 ? "..." : ""}`}
                </p>
              )}

            {/*
              full && (
              <HtmlContent
                dangerouslySetInnerHTML={{ __html: post.content.html }}
              />
            )
              */}
            {full && (
              finalContent.map((obj) => {
                if(obj.type == 'text')
                  return (
                    <HtmlContent
                      dangerouslySetInnerHTML={{ __html: obj.content }}
                    />
                  )
                return <ImageModal alt={obj.alt} src={obj.img} copyright={obj.copyright}></ImageModal>
              })
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

            {location && full && (
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
