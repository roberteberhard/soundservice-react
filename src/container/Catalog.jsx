import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from '../apis/playlists'
import { Link } from 'react-router-dom'
import { useAxios } from '../hooks'
import { IconPlay } from '../assets/icons'
import Wave from '../assets/svgs/wave.svg'

// styles
const StyledCatalogSection = styled.section`
  display: flex;
  position: relative;
  z-index: 1;
  margin-top: -400px;
  width: 100%;
  height: 440px;
  color: var(--text-color);
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  background-color: transparent;
  @media (max-width: 1080px) {
    height: 420px;
  }
  @media (max-width: 768px) {
    height: 600px;
  }
  @media (max-width: 480px) {
    height: 580px;
  }

  .catalog-start {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 55%;
    height: auto;
    .start-now {
      cursor: pointer;
      display: block;
      margin: 10px auto 0;
      width: 78px;
      height: 78px;
      color: transparent;
      font-size: 0;
      background-repeat: no-repeat;
      background-position: 0 0;
      background-size: 100% 100%;
      appearance: none;
      &.ready {
        animation: uiFadeIn 500ms normal forwards;
      }
    }
    @keyframes uiFadeIn {
      0% {
        opacity: 0;
        transform: scale(0.9);
      }
      80% {
        opacity: 0.8;
        transform: scale(1.15);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`

// markup
const Catalog = () => {
  const [posts, error, loading, axiosFetch] = useAxios()
  const [slug, setSlug] = useState('a')
  const [track, setTrack] = useState('b')

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

  useEffect(() => {
    if (!loading && !error && posts?.length) {
      const post = posts[Math.floor(Math.random() * posts.length)]
      setSlug(post.slug)
      setTrack(post.track)
    }
  }, [posts, error, loading])

  return (
    <StyledCatalogSection style={{ backgroundImage: `url(${Wave})` }}>
      <div className="catalog-start">
        <Link to={`/track/${slug}/${track}`}>
          <div className="start-now ready">
            <IconPlay />
          </div>
        </Link>
      </div>
    </StyledCatalogSection>
  )
}

export default Catalog
