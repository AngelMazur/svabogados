import React from 'react'

async function getData () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

const postPageNext13 = async () => {
  const data = await getData()
  console.log(data)

  return (
    <>
      <section>
        {data.slice(0, 5).map(post => (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </article>
        ))}
      </section>
    </>
  )
}

export default postPageNext13
