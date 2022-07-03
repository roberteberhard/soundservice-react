import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from '../apis/jsonPH'
import { useAxiosFunction } from '../hooks'

// styles
const StyledPosts = styled.article`
  display: flex;
  flex-direction: column;
  padding: 30px;
  button {
    padding: 12px;
    margin-right: 10px;
  }
`

// markup
const Posts = () => {
  const [posts, error, loading, axiosFetch] = useAxiosFunction()

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: 'GET',
      url: '/posts'
    })
  }

  const handleSubmit = () => {
    axiosFetch({
      axiosInstance: axios,
      method: 'POST',
      url: '/posts',
      requestConfig: {
        data: {
          userId: 10,
          title: 'Axios stuff',
          body: 'Axios hook stuff'
        }
      }
    })
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  return (
    <StyledPosts>
      <h2>Posts</h2>
      <div>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={getData}>Refetch</button>
      </div>

      {loading && <p>Loading...</p>}
      {!loading && error && <p className="errMsg">{error}</p>}
      {!loading && !error && posts?.length && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>{`${post.id}. ${post.title}`}</li>
          ))}
        </ul>
      )}
      {!loading && !error && !posts?.length && posts?.data && <p>{`userId: ${posts.data?.userId}, title: ${posts.data?.title} ,body: ${posts.data?.body}`}</p>}
      {!loading && !error && !posts && <p>No posts to display</p>}
    </StyledPosts>
  )
}

export default Posts
