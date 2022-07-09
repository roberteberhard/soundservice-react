import React, { useEffect } from 'react'
import styled from 'styled-components'
import { VideolistCard, NetworkEmpty, NetworkSpinner, NetworkError } from '../components'
import { useParams } from 'react-router-dom'
import { useAxios } from '../hooks'

import axios from '../apis/playlists'

const StyledVideolistsSection = styled.section`
  width: 100%;
  min-height: 400px;
  margin-top: 20vh;
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
`

// markup
const Videolists = () => {
  const [posts, error, loading, axiosFetch] = useAxios()
  const { slug } = useParams()

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: 'GET',
      url: `/playlist/${slug}`
    })
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  const VideolistHeader = (
    <header className="videolist-header">
      <div className="videolist-icon">icon</div>
      <h3 className="videolist-desc">
        Track xxxx of xxx <span className="title--arrow"> • </span>xxx<span className="title--arrow"> • </span>xxxx
      </h3>
    </header>
  )

  const VideolistCards = (
    <>
      {loading && <NetworkSpinner />}
      {!loading && error && <NetworkError />}
      {!loading && !error && posts?.length && (
        <div className="videolist-articles ">
          {posts.map((post, i) => (
            <VideolistCard key={i} user={post.user} slug={post.slug} track={post.track} tracks={post.tracks} card={post.cover} genre={post.genre} title={post.title} alt={post.alt} />
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
          <VideolistHeader />
          <VideolistCards />
        </StyledVideolistsInner>
      </StyledVideolistsContent>
    </StyledVideolistsSection>
  )
}

export default Videolists
