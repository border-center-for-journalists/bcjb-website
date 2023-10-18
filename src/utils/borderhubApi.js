import axios from 'axios'

async function getRef() {
  const { data } = await axios.get("https://borderhub.cdn.prismic.io/api/v2")
  return data.refs[0].ref;
}

async function getBannerId() {
  let ref = await getRef();
  let document_url = `https://borderhub.cdn.prismic.io/api/v2/documents/search?ref=${ref}&q=[[at(my.datos_comunes.uid,"common-data")]]`
  const { data } = await axios.get(document_url)

  return data.results[0].data.show_banner ? data.results[0].data.banner.id:false
}

async function getBannerNews(){
  let document_id = await getBannerId();
  if(!document_id){
    return false;
  }
  let document_url = `https://borderhub.cdn.prismic.io/api/v2/documents/search?ref=ZSlpphAAACMA0zU1&q=[[at(document.id,"${document_id}")]]`;
  const { data } = await axios.get(document_url)
  return data.results[0];
}


export default getBannerNews;