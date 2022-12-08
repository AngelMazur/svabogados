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
      {posts.map(post => (
        <article key={post.id}>
          <h3>{post.body}</h3>
          <p>{post.title}</p>
        </article>
      ))}
    </section>
  )
}

export default PostPage
