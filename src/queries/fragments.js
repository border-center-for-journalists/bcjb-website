import { graphql } from "gatsby"

export const fragments = graphql`
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

  fragment eventEdgePreviewFragment on PrismicEventConnection {
    totalCount
    edges {
      node {
        uid
        lang
        data {
          title {
            text
          }
          banner {
            url
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
