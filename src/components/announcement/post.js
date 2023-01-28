import React , {useState, useEffect} from "react"
import PropTypes from "prop-types"
import { Subtitle, HtmlContent } from "../../theme/index.styled"
import {
  PostMetadata,
  PostContent,
  SocialContainer,
  Social,
} from "./index.styled.js"
import "./post-style.css"
import "moment/locale/es"
import moment from "moment"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

import { Context } from "../../languages/context"
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton} from "react-share"

const Post = ({ post, full, location, lang }) => {
  moment.locale(lang)
  // console.log('POST', post)
  const imageUrl = post.banner.medium ? post.banner.medium.url : post.banner.url
  const date = lang === "es" ? moment(post.publishedAt).format('DD [de] MMMM, YYYY') : moment(post.publishedAt).format('MMMM DD[,] YYYY');
  const IMAGE_GALLERY_SLICE_TYPE = "image_gallery"
  const galleries = post.body
    ? post.body.filter(slice => slice.slice_type === IMAGE_GALLERY_SLICE_TYPE)
    : []

  const excerptobj = post.excerpt || post.metadescription || { text: '' };
  const excerptText = excerptobj.text || '';
  

  const [sidebarWidth, setSidebarWidth] = useState(undefined);
  const [sidebarTop, setSidebarTop] = useState(undefined);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
 
  useEffect(() => {
    function setSideBar(){
      const sidebarEl = document.querySelector('.sideSticky');
      if(!sidebarEl) return;

      setSidebarWidth(sidebarEl.getBoundingClientRect().width);
      setSidebarTop(sidebarEl.getBoundingClientRect().top);
    }
    setSideBar();

    function handleResize() {
      setScreenWidth(window.innerWidth);
      setSideBar();
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

   
  useEffect(() => {
    if (!sidebarTop) return;
   
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, [sidebarTop]);
   
  const isSticky = (e) => {
    const sidebarEl = document.querySelector('.sideSticky');
    if(!sidebarEl) return;
    const scrollTop = window.scrollY;
    if (scrollTop >= sidebarTop - 10) {
      sidebarEl.classList.add('is-sticky');
    } else {
      sidebarEl.classList.remove('is-sticky');
    }
  }

  return (
    <Context.Consumer>
      {({ lang }) => {
        const url = `/${lang}/announcement/${post.uid}`
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
                        <img alt="" src={gi.gallery_image.medium.url} />
                      </div>
                    ))}
                  </Carousel>
                </div>
              ))}

            {location && full && (
              <SocialContainer className="sideSticky">
                <FacebookShareButton url={location.href}>
                  <Social bigger className="icon-facebook" />
                </FacebookShareButton>
                <TwitterShareButton url={location.href}>
                  <Social className="icon-twitter" />
                </TwitterShareButton>
                <LinkedinShareButton url={location.href} title={post.title.text}>
                  <Social className="icon-linkedin iconSvg" >
                    <svg viewBox="0 0 64 64" width="30" height="30" >
                      <g>
                        <path d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"></path>
                      </g>
                    </svg>
                  </Social>
                </LinkedinShareButton>
                <WhatsappShareButton url={location.href} >
                  <Social className="icon-whatsapp iconSvg" >
                    <svg viewBox="0 0 64 64" width="30" height="30" >
                      <g>
                        <path d="m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"></path>
                      </g>
                    </svg>
                  </Social>
                </WhatsappShareButton>
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
