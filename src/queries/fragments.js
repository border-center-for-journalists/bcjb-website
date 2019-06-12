import { graphql } from "gatsby"

export const fragments = graphql`
  fragment landingPagesEdgeFragment on PrismicLandingPagesConnection {
    totalCount
    edges {
      node {
        uid
        data {
          title {
            text
          }
          subtitle {
            text
          }
          excerpt {
            html
            text
          }
          cover {
            url
          }
        }
      }
    }
  }

  fragment landingPageDataFragment on PrismicLandingPages {
    uid
    data {
      title {
        text
      }
      subtitle {
        text
      }
      excerpt {
        html
        text
      }
      cover {
        url
      }
    }
  }

  fragment noticiaEdgePreviewFragment on PrismicNoticiaConnection {
    totalCount
    edges {
      node {
        uid
        last_publication_date
        data {
          author
          banner {
            url
            panoramic {
              url
            }

            medium {
              url
            }
          }
          title {
            text
          }
          content {
            text
            html
          }
          excerpt {
            text
          }
        }
      }
    }
  }

  fragment eventEdgePreviewFragment on PrismicEventConnection {
    totalCount
    edges {
      node {
        uid
        data {
          title {
            text
          }
          banner {
            url
            medium {
              url
            }
            mediumpanoramic {
              url
            }
          }
          description {
            text
          }
          location
          event_start
          event_end
        }
      }
    }
  }
`
