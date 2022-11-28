import React, { useEffect, useState } from 'react'

const PostPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
  }, [])

  return (
    <section>
      {posts.maps(post => {
        <article key={post.id}>
          <h2>{post.body}</h2>
          <p>{post.title}</p>
        </article>
      })}
    </section>
  )
}

export default PostPage
