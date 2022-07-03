import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from '../apis/playlists'
import { useAxios } from '../hooks'

// styles
const StyledPlaylists = styled.article`
  display: flex;
  flex-direction: column;
  padding: 30px;
  button {
    padding: 12px;
  }
`

// markup
const Playlists = () => {
  const [posts, error, loading, axiosFetch] = useAxios()

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: 'GET',
      url: '/playlists'
    })
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  return (
    <StyledPlaylists>
      <h2>Playlists</h2>
      <div>
        <button onClick={getData}>Refetch</button>
      </div>

      {loading && <p>Loading...</p>}
      {!loading && error && <p className="errMsg">{error}</p>}
      {!loading && !error && posts?.length && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>{`${post.id}. ${post.title} / ${post.user} / ${post.cover}`}</li>
          ))}
        </ul>
      )}
      {!loading && !error && !posts && <p>No posts to display</p>}
    </StyledPlaylists>
  )
}

export default Playlists
