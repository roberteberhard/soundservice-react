import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from '../apis/playlists'
import { VideolistCard, NetworkEmpty, NetworkSpinner, NetworkError } from '../components'
import { useParams } from 'react-router-dom'
import { useAxios } from '../hooks'

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
  const { slug } = useParams()

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: 'GET',
      url: `/playlist/${slug}`
    })
  }

  useEffect(() => {
    if (slug) getData()
    // eslint-disable-next-line
  }, [slug])

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
