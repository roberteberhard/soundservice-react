import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from '../apis/playlists'
import { PlaylistCard } from '../components'
import { IconBeachbus } from '../assets/icons'
import { useAxios } from '../hooks'

const StyledPlaylistsSection = styled.section`
  width: 100%;
  height: auto;
  background-color: var(--ghost);
`
const StyledPlaylistContent = styled.div`
  padding: 0 var(--pad-lg) var(--pad-xxl) var(--pad-lg);
  @media (max-width: 1080px) {
    padding: 0 var(--pad-md) var(--pad-xl) var(--pad-md);
  }
  @media (max-width: 768px) {
    padding: 0 var(--pad-sm) var(--pad-lg) var(--pad-sm);
  }
`

const StyledPlaylistInner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;

  .playlist-header {
    width: 100%;
    margin-bottom: 30px;
    .playlist-icon {
      height: 88px;
      width: 100px;
      margin: 0 auto;
    }
    .playlist-title {
      color: var(--darkgrey);
      font-family: var(--font-mono);
      font-weight: 700;
      font-size: 22px;
      line-height: 1.35;
      text-align: center;
      text-transform: uppercase;
    }
  }

  .playlist-articles {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    @media (max-width: 1080px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
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

  const PlaylistHeader = (
    <header className="playlist-header">
      <div className="playlist-icon">
        <IconBeachbus />
      </div>
      <h2 className="playlist-title">Beach Summer Playlists</h2>
    </header>
  )
  const PlaylistCards = (
    <div className="playlist-articles ">
      {loading && <p>Loading...</p>}
      {!loading && error && <p className="errMsg">{error}</p>}
      {!loading && !error && posts?.length && (
        <>
          {posts.map((post, i) => (
            <PlaylistCard key={i} id={post.id} user={post.user} slug={post.slug} track={post.track} tracks={post.tracks} card={post.cover} genre={post.genre} title={post.title} alt={post.alt} />
          ))}
        </>
      )}
      {!loading && !error && !posts && <p>No posts to display</p>}
    </div>
  )

  return (
    <StyledPlaylistsSection>
      <StyledPlaylistContent>
        <StyledPlaylistInner>
          {PlaylistHeader}
          {PlaylistCards}
          <button onClick={getData}>Refetch</button>
        </StyledPlaylistInner>
      </StyledPlaylistContent>
    </StyledPlaylistsSection>
  )
}

export default Playlists
