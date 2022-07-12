import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from '../apis/playlists'
import useShop from '../context/AppContext'
import { VideolistCard, NetworkEmpty, NetworkSpinner, NetworkError } from '../components'
import { IconArrow, IconSose } from '../assets/icons'
import { useParams } from 'react-router-dom'
import { useAxios } from '../hooks'

const StyledVideolistsSection = styled.section`
  width: 100%;
  min-height: 400px;
  margin-top: 100vh;
  background-color: var(--jetblack);
`
const StyledVideolistsContent = styled.div`
  padding: 0 var(--pad-lg) var(--pad-xxl) var(--pad-lg);
  @media (max-width: 1080px) {
    padding: 0 var(--pad-md) var(--pad-xl) var(--pad-md);
  }
  @media (max-width: 768px) {
    padding: 0 var(--pad-sm) var(--pad-lg) var(--pad-sm);
  }
`

const StyledVideolistsInner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  .videolist-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 60px 0 20px;
    .videolist-icon {
      width: 12px;
      height: 18px;
    }
    .videolist-desc {
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

  .videolist-articles {
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
const Videolists = () => {
  const [posts, error, loading, axiosFetch] = useAxios()
  const [listIndex, setListIndex] = useState(0)
  const [listTracks, setListTracks] = useState(0)
  const [activeArtist, setActiveArtist] = useState('Artist')
  const [activeTrack, setActiveTrack] = useState('Track')
  const { playlistTrack, appVideoTracks } = useShop()
  const { slug } = useParams()

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: 'GET',
      url: `/playlist/${slug}`
    })
  }

  const getIndex = track => {
    return posts.findIndex(obj => obj.track === track) + 1
  }
  const getArtist = track => {
    let index = posts.findIndex(obj => obj.track === track)
    return index >= 0 ? posts[index].artist : 'Artist'
  }
  const getTrack = track => {
    let index = posts.findIndex(obj => obj.track === track)
    return index >= 0 ? posts[index].title : 'Track'
  }

  useEffect(() => {
    if (slug) getData()
    // eslint-disable-next-line
  }, [slug])

  useEffect(() => {
    if (playlistTrack) {
      setListIndex(getIndex(playlistTrack))
      setActiveArtist(getArtist(playlistTrack))
      setActiveTrack(getTrack(playlistTrack))
    }
    // eslint-disable-next-line
  }, [playlistTrack])

  useEffect(() => {
    if (!loading && !error && posts?.length) {
      setListTracks(posts.length)
      setListIndex(getIndex(playlistTrack))
      setActiveArtist(getArtist(playlistTrack))
      setActiveTrack(getTrack(playlistTrack))
      // add video list to state
      appVideoTracks(posts.map(e => e.video))
    }
    // eslint-disable-next-line
  }, [posts, error, loading])

  const VideolistHeader = (
    <header className="videolist-header">
      <div className="videolist-icon">
        <IconSose />
      </div>
      <div className="videolist-desc">
        Track {listIndex} of {listTracks}
        <span className="videolist-desc__arrow">
          <IconArrow />
        </span>
        {activeArtist}
        <span className="videolist-desc__arrow">
          <IconArrow />
        </span>
        {activeTrack}
      </div>
    </header>
  )

  const VideolistCards = (
    <>
      {loading && <NetworkSpinner />}
      {!loading && error && <NetworkError />}
      {!loading && !error && posts?.length && (
        <div className="videolist-articles ">
          {posts.map((post, i) => (
            <VideolistCard key={i} {...post} />
          ))}
        </div>
      )}
      {!loading && !error && !posts && <NetworkEmpty />}
    </>
  )

  return (
    <StyledVideolistsSection>
      <StyledVideolistsContent>
        <StyledVideolistsInner>
          {VideolistHeader}
          {VideolistCards}
        </StyledVideolistsInner>
      </StyledVideolistsContent>
    </StyledVideolistsSection>
  )
}

export default Videolists
