import React, { useState, useEffect } from 'react';
import Prismic from "prismic-javascript"
import PrismicDOM from 'prismic-dom'
import SEO from '../components/seo';
import { Context, ContextEs, ContextEn } from "../languages/context"
import Layout from "../components/layout"
import BannerComponent from "../components/homebanner/index"
import BlogContainer from "../components/blog"

const Elements = PrismicDOM.RichText.Elements

const htmlSerializer = (
  type,
  element,
  content,
  children
) => {
  if (type === Elements.image) {
    return `OBJIMG${element.url}${element.alt ? `|${element.alt}` : ''}OBJIMG`;
  }
  if (type === Elements.preformatted) {
    //console.log("element", element)
    return `${element.text}`
  }
  return null
}
const linkResolver = function (doc) {
  return "/" + doc.uid;

};

const Preview = ({ location, data: { site: { siteMetadata: { API_KEY, API_URL } } } }) => {
  const [pageType, setPageType] = useState('');
  const [post, setPost] = useState(
    {
      uid: '',
      excerpt: {},
      metadescription: {},
      title: {},
      publishedAt: new Date(),
      banner: {},
      body: [],
      author: '',
      metakeywords: {},
      content: { html: '' },
      lang: 'es-MX',
      urlLang: 'es'
    }
  );
  const [documentId, setDocumentId] = useState('');

  useEffect(() => {
    const qryString = window.location.search.slice(1);
    const qryStrParams = qryString.split('&');
    const strParams = qryStrParams.map(item => item.split('='));
    const [paramName, docId] = strParams.find(item => item[0] === 'documentId')
    const [paramToken, token] = strParams.find(item => item[0] === 'token')

    if (docId !== documentId) {
      Prismic.getApi(API_URL, { accessToken: API_KEY })
        .then(api =>
          api.query(
            Prismic.Predicates.at('document.id', docId),
            { lang: '*', ref: token }
          )
        )
        .then(response => {
          // console.log(response);
          if (response.results.length === 0) {
            // No data! D:
            setPageType('page-not-found');
          } else if (response.results[0].type === 'noticia') {
            const rawResponse = { ...response.results[0] };
            const { uid, lang, data: rawData } = { ...rawResponse }
            setDocumentId(rawResponse.id)
            // console.log(rawData);
            const [excerpt = {}] = rawData.excerpt || [];
            const [metadescription = {}] = rawData.metadescription || [];
            const [title = { text: '' }] = rawData.title || [];
            const publishedAt = new Date(rawData.custom_publication_date);
            const { banner, body, author, metakeywords } = rawData;
            const html = PrismicDOM.RichText.asHtml(rawData.content, linkResolver);
            const [urlLang] = lang.split('-');
            const postData = {
              uid,
              excerpt,
              metadescription,
              title,
              publishedAt,
              banner,
              body,
              author,
              metakeywords,
              content: { html },
              lang,
              urlLang
            }
            setPost(postData);
            setPageType('noticia');
          } else {
            setPageType('invalid-type');
          }
        })
    }
  })
  //console.log('POST!!!!!!!!!!', post)

  if (pageType !== 'noticia') {
    return <h1>Unsupported Page Type for Preview...</h1>;
  }

  const ContextTexts = post.urlLang === 'es' ? ContextEs : ContextEn;
  const pageContext = { lang: post.urlLang, totalPAges: 1, currentPage: 1 };
  return (
    <Context.Provider value={ContextTexts}>
      <Layout lang={post.urlLang}>
        <SEO
          lang={post.urlLang}
          title={post.title.text}
          keywords={post.metakeywords}
          description={post.metadescription.text}
          image={post.banner.url}
        />
        <BannerComponent data={{ title: post.title.text, cover: post.banner }} />
        <BlogContainer lang={post.urlLang} pageContext={pageContext} posts={[]} singlePost={post} />
      </Layout>
    </Context.Provider>
  );
}

export const pageQuery = graphql`
  query previewQuery {
    site {
      siteMetadata {
        API_KEY
        API_URL
      }
    }
  }
`

export default Preview;
