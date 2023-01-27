import React from "react"
import { useState, useEffect } from "react"
import NoticiaComponent from "../homenews/noticia"
import { Container, Title3, Rows } from "../../theme/index.styled"
import { Context } from "../../languages/context"

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
  }, [recomendedBlogs])


  return (
    <div>
      <Context.Consumer>
        {({ texts }) => {
          return (
            <Container>
              <Title3 color="yellow">{texts.recomendedBlogs}</Title3>
              <Rows wrap>
                {
                  randomBlogs.map((blog) => (
                    <NoticiaComponent key={blog.uid} lang={lang} data={{ node: { data: blog, uid: blog.uid } }} />
                  ))
                }
              </Rows>
            </Container>
          )
        }}
      </Context.Consumer>

    </div>
  )
}
export default RecomendedBlogsComponent
