import axios from 'axios'

async function getRef() {
  const { data } = await axios.get("https://borderhub.cdn.prismic.io/api/v2")
  return data.refs[0].ref;
}

async function getBannerId(english=false) {
  let ref = await getRef();
  let uid = english ? "common-data-en":"common-data"
  let document_url = `https://borderhub.cdn.prismic.io/api/v2/documents/search?ref=${ref}&q=[[at(my.datos_comunes.uid,"${uid}")]]&lang=*`
  const { data } = await axios.get(document_url)

  return data.results[0].data.show_banner ? data.results[0].data.banner.id:false
}

async function getBannerNews(english=false){
  let ref = await getRef();
  let document_id = await getBannerId(english);
  if(!document_id){
    return false;
  }
  let document_url = `https://borderhub.cdn.prismic.io/api/v2/documents/search?ref=${ref}&q=[[at(document.id,"${document_id}")]]&lang=*`;
  const { data } = await axios.get(document_url)
  return data.results[0];
}


export default getBannerNews;