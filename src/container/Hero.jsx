import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from '../apis/playlists'
import { Link } from 'react-router-dom'
import { IconPlay } from '../assets/icons'
import { useAxios } from '../hooks'

// styles
const StyledHeroSection = styled.section`
  position: absolute;
  z-index: 2;
  top: 0;
  width: 100%;
  min-height: 800px;
  height: calc(100vh + 200px);
  @media screen and (min-height: 990px) {
    height: 990px;
  }
`

const StyledHeroContent = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 var(--pad-lg) 200px var(--pad-sm);
  @media screen and (max-width: 1080px) {
    padding: 0 var(--pad-md) 200px var(--pad-md);
  }
  @media screen and (max-width: 768px) {
    padding: 0 var(--pad-sm) 200px var(--pad-sm);
  }
`

const StyledInnerHeading = styled.div`
  display: inline-block;
  width: auto;
  height: auto;
  padding: 0 40% 0 4%;
  @media screen and (max-width: 1080px) {
    padding: 0 20% 0 0%;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  h1.home-title {
    color: var(--white);
    line-height: 1.1;
    margin: 80px 0 30px;
    font-size: 40px;
    @media screen and (max-width: 1080px) {
      margin: 40px 0 30px;
      font-size: 36px;
    }
    @media screen and (max-width: 768px) {
      padding-right: 0;
      font-size: 32px;
    }
    @media screen and (max-width: 480px) {
      padding-right: 0;
      font-size: 28px;
    }
  }
  h2.home-subtitle {
    color: var(--white);
    font-family: var(--font-mono);
    line-height: 1.25;
  }
  .home-play {
    margin-top: 80px;
    width: 55%;
    height: auto;
    .play-link {
      display: block;
      margin: 0 auto;
      width: 78px;
      height: 78px;
      border-radius: 50%;
      &.ready {
        animation: fadeInAndScale 500ms normal forwards;
      }
      &:hover,
      &:focus {
        .play-arrow,
        .play-circle {
          fill: var(--primary);
          transition: var(--transition);
        }
      }
    }
    @keyframes fadeInAndScale {
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
const Hero = () => {
  const [posts, error, loading, axiosFetch] = useAxios()
  const [slug, setSlug] = useState('')
  const [track, setTrack] = useState('')

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
    <StyledHeroSection>
      <StyledHeroContent>
        <StyledInnerHeading>
          <h1 className="home-title">Welcome to Soundservice and enjoy our curated video playlists!</h1>
          <h2 className="home-subtitle">Whether you're chilling, programming, or spending a day at the beach, different playlists are suitable for different situations and environments.</h2>
          <div className="home-play">
            <Link className="play-link ready" to={`/track/${slug}/${track}`}>
              <IconPlay />
            </Link>
          </div>
        </StyledInnerHeading>
      </StyledHeroContent>
    </StyledHeroSection>
  )
}

export default Hero
