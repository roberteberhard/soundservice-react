import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from '../apis/playlists'
import useShop from '../context/AppContext'
import { PlaylistCard, NetworkEmpty, NetworkSpinner, NetworkError } from '../components'
import { IconBeachbus, IconSose, IconArrow } from '../assets/icons'
import { useAxios } from '../hooks'

const StyledPlaylistsSection = styled.section`
  width: 100%;
  height: auto;
  background-color: ${props => (props.isHome ? '#f1f1f1' : '#282828')};
`
const StyledPlaylistsContent = styled.div`
  padding: 0 var(--pad-lg) var(--pad-xxl) var(--pad-lg);
  @media (max-width: 1080px) {
    padding: 0 var(--pad-md) var(--pad-xl) var(--pad-md);
  }
  @media (max-width: 768px) {
    padding: 0 var(--pad-sm) var(--pad-lg) var(--pad-sm);
  }
`

const StyledPlaylistsInner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  /* Home */
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
  /* Track */
  .track-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 60px 0 20px;
    .track-icon {
      width: 12px;
      height: 18px;
    }
    .track-desc {
      margin-left: 10px;
      color: var(--ghost);
      color: #ccc;
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      font-weight: 600;
      letter-spacing: 0.5px;
      text-align: center;
      text-transform: uppercase;
      line-height: 1;
      &__arrow {
        display: inline-block;
        position: relative;
        top: -1px;
        width: 7px;
        margin: 0 10px;
      }
    }
  }
  /* Articles */
  .playlist-articles {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding-bottom: 20px;
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
`

// markup
const Playlists = () => {
  const [posts, error, loading, axiosFetch] = useAxios()
  const [activeUser, setActiveUser] = useState('User')
  const [activeTitle, setActiveTitle] = useState('Title')
  const [activeTracks, setActiveTracks] = useState(0)
  const { pageHome, playlistSlug } = useShop()

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: 'GET',
      url: '/playlists'
    })
  }

  const getUser = slug => {
    let index = posts.findIndex(obj => obj.slug === slug)
    return index >= 0 ? posts[index].user : 'User'
  }
  const getTitle = slug => {
    let index = posts.findIndex(obj => obj.slug === slug)
    return index >= 0 ? posts[index].title : 'Title'
  }
  const getTracks = slug => {
    let index = posts.findIndex(obj => obj.slug === slug)
    return index >= 0 ? posts[index].tracks : 'Title'
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setActiveTitle(getTitle(playlistSlug))
    setActiveTracks(getTracks(playlistSlug))
    // eslint-disable-next-line
  }, [playlistSlug])

  useEffect(() => {
    if (!loading && !error && posts?.length) {
      setActiveUser(getUser(playlistSlug))
      setActiveTitle(getTitle(playlistSlug))
      setActiveTracks(getTracks(playlistSlug))
    }
    // eslint-disable-next-line
  }, [posts, error, loading])

  const HomeHeader = (
    <header className="playlist-header">
      <div className="playlist-icon">
        <IconBeachbus />
      </div>
      <h2 className="playlist-title">Beach Summer Playlists</h2>
    </header>
  )

  const TrackHeader = (
    <header className="track-header">
      <div className="track-icon">
        <IconSose />
      </div>
      <div className="track-desc">
        {activeUser}
        <span className="track-desc__arrow">
          <IconArrow />
        </span>
        {activeTitle}
        <span className="track-desc__arrow">
          <IconArrow />
        </span>
        {activeTracks} Tracks
      </div>
    </header>
  )

  const PlaylistCards = (
    <>
      {loading && <NetworkSpinner />}
      {!loading && error && <NetworkError />}
      {!loading && !error && posts?.length && (
        <div className="playlist-articles ">
          {posts.map((post, i) => (
            <PlaylistCard key={i} user={post.user} slug={post.slug} track={post.track} tracks={post.tracks} card={post.cover} genre={post.genre} title={post.title} alt={post.alt} />
          ))}
        </div>
      )}
      {!loading && !error && !posts && <NetworkEmpty />}
    </>
  )

  return (
    <StyledPlaylistsSection isHome={pageHome}>
      <StyledPlaylistsContent>
        <StyledPlaylistsInner>
          {pageHome && pageHome ? HomeHeader : TrackHeader}
          {PlaylistCards}
        </StyledPlaylistsInner>
      </StyledPlaylistsContent>
    </StyledPlaylistsSection>
  )
}

export default Playlists
