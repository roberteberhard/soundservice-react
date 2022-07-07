import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from '../apis/playlists'
import { PlaylistCard } from '../components'
import { useAxios } from '../hooks'

// styles
const StyledPlaylists = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  background-color: var(--ghost);
  .playlist-header {
    &.row {
      height: 108px;
      .playlist-header__icon {
        position: absolute;
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
        height: 88px;
        width: 88px;
        font-size: 0;
        color: transparent;
        &::before {
          width: 88px;
          height: 88px;
        }
      }
      .playlist-header__title {
        color: var(--darkgrey);
        font-weight: 600;
        font-size: 16px;
        line-height: 1.35;
        text-align: center;
        padding-top: 74px;
      }
    }
  }
  .playlist-covers {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
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
      <header className="playlist-header row">
        <div className="playlist-header__icon i-bus">Beach Bus</div>
        <h3 className="playlist-header__title">Beach Summer Playlists</h3>
      </header>
      <div className="playlist-covers">
        {loading && <p>Loading...</p>}
        {!loading && error && <p className="errMsg">{error}</p>}
        {!loading && !error && posts?.length && (
          <>
            {posts.map((post, i) => (
              <PlaylistCard key={i} id={post.id} title={post.title} card={post.cover} alt={post.alt} />
            ))}
          </>
        )}
        {!loading && !error && !posts && <p>No posts to display</p>}
      </div>

      <button onClick={getData}>Refetch</button>
    </StyledPlaylists>
  )
}

export default Playlists
