import React from "react"
import { useState, useEffect } from "react"
import NoticiaComponent from "../homenews/noticia"
import { Container, Title3, Rows } from "../../theme/index.styled"

const RecomendedBlogsComponent = ({ recomendedBlogs, lang, location, pageContext }) => {
  const [randomBlogs, setRandomBlogs] = useState([])

  useEffect(() => {
    function selectTwoRandomBlogs(posts) {
      let randomIndexes = []
      let randomPosts = []
      while (randomIndexes.length < 2) {
        const randNumber = Math.floor(Math.random() * posts.length)
        if (!randomIndexes.includes(randNumber)) {
          randomIndexes.push(randNumber)
          randomPosts.push(posts[randNumber])
        }
      }
      return randomPosts;
    }
    if (recomendedBlogs.length > 0) {
      const Recommended = selectTwoRandomBlogs(recomendedBlogs);
      setRandomBlogs([...Recommended]);
    } else {
      setRandomBlogs([]);
    }
  }, [recomendedBlogs.length])


  return (
    <div>
      <Container>
        <Title3 color="yellow">Recomendados:</Title3>
        <Rows wrap>
          {
            randomBlogs.map((blog) => (
                <NoticiaComponent key={blog.uid} lang={lang} data={{node:{data:blog}}} />
            ))
          }
        </Rows>
      </Container>
    </div>
  )
}
export default RecomendedBlogsComponent
