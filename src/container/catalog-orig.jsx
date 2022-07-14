import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from '../apis/playlists'
import useShop from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useAxios } from '../hooks'
import { IconPlay } from '../assets/icons'
import { images } from '../constants'
import Wave from '../assets/svgs/wave.svg'

// styles
const StyledCatalogSection = styled.section`
  display: flex;
  position: relative;
  z-index: 1;
  margin-top: -400px;
  width: 100%;
  height: 400px;
  color: var(--text-color);
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  background-color: transparent;
  @media (max-width: 1080px) {
    /* height: 420px; */
  }
  @media (max-width: 768px) {
    /* height: 600px; */
  }
  @media (max-width: 480px) {
    /* height: 400px; */
  }

  .catalog-start {
    position: absolute;
    z-index: 2;
    left: 0px;
    width: 55%;
    height: auto;
    .start-link {
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

const StyledEmptyJesus = styled.div`
  position: absolute;
  z-index: 3;
  width: 500px;
  height: 400px;
  top: 60px;
  left: calc(100% - 500px);
  background-size: 500px auto;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-image: url(${images.jesus});
  @media (max-width: 1080px) {
    top: 60px;
    left: calc(100% - 490px);
  }
  @media (max-width: 768px) {
    top: 220px;
    left: calc((100% - 480px) * 0.5);
  }
  @media (max-width: 480px) {
    top: 660px;
    left: calc((100% - 420px) * 0.5);
  }
`

const StyledEmptyTape = styled.div`
  position: absolute;
  display: ${props => (props.hasPlayer === '' ? `block` : `none`)};
  z-index: 5;
  width: 400px;
  height: 300px;
  top: 140px;
  left: calc(100% - 450px);
  background-size: 400px auto;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-image: url(${images.tape});
  @media (max-width: 1080px) {
    top: 136px;
    left: calc(100% - 460px);
  }
  @media (max-width: 768px) {
    top: 296px;
    left: calc((100% - 420px) * 0.5);
  }
  @media (max-width: 480px) {
    top: 660px;
    left: calc((100% - 420px) * 0.5);
  }
`

const StyledPlayerNavi = styled.nav`
  position: absolute;
  z-index: 4;
  top: 380px;
  left: calc(100% - 470px);
  display: flex;
  justify-content: space-between;
  width: 420px;
  height: 30px;
  @media (max-width: 1080px) {
    top: 380px;
    left: calc(100% - 460px);
  }
  @media (max-width: 768px) {
    top: 540px;
    left: calc((100% - 420px) * 0.5);
  }
  @media (max-width: 480px) {
    top: 440px;
    left: calc((100% - 420px) * 0.5);
  }
  .player-controls {
    display: flex;
    flex-direction: row;
    color: ${props => (props.hasPlayer === '' ? `var(--lightgrey)` : `var(--white)`)};
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 600;
    .btn {
      cursor: pointer;
      pointer-events: ${props => (props.hasPlayer === '' ? `none` : `auto`)};
      padding: 5px 10px;
      transition: var(--transition);
      background: ${props => (props.hasPlayer === '' ? `transparent` : `var(--lightblack)`)};
      &:hover,
      &:focus {
        background-color: var(--secondary);
      }
    }
    .spc {
      width: 6px;
    }
  }
  .player-backwards {
    color: ${props => (props.hasPlayer === '' ? `var(--lightgrey)` : `var(--darkgrey)`)};
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 600;
    .btn {
      cursor: pointer;
      pointer-events: ${props => (props.hasPlayer === '' ? `none` : `auto`)};
      padding: 5px 10px;
      transition: var(--transition);
      &:hover,
      &:focus {
        color: var(--secondary);
      }
    }
  }
`

// markup
const Catalog = () => {
  const [posts, error, loading, axiosFetch] = useAxios()
  const [slug, setSlug] = useState('')
  const [track, setTrack] = useState('')
  const { playlistSlug, playlistTrack, trackIsPlaying, nextTrack, appPlayPauseTrack } = useShop()
  const navigate = useNavigate()

  const getData = () => {
    axiosFetch({
      axiosInstance: axios,
      method: 'GET',
      url: '/playlists'
    })
  }

  const onPlayClick = () => {
    trackIsPlaying ? appPlayPauseTrack('pause') : appPlayPauseTrack('play')
  }
  const onNextClick = () => {
    navigate(`/track/${playlistSlug}/${nextTrack}`)
  }

  const onBackClick = () => {
    navigate(`/track/${playlistSlug}/${playlistTrack}`)
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

      <StyledEmptyJesus />
      <StyledEmptyTape hasPlayer={playlistSlug} />
      <StyledPlayerNavi hasPlayer={playlistSlug}>
        <div className="player-controls">
          <div className="btn" onClick={() => onPlayClick()}>
            {trackIsPlaying ? 'Pause' : 'Play'}
          </div>
          <span className="spc"></span>
          <div className="btn" onClick={() => onNextClick()}>
            Next
          </div>
        </div>
        <div className="player-backwards">
          <div className="btn" onClick={() => onBackClick()}>
            Back to Track
          </div>
        </div>
      </StyledPlayerNavi>
    </StyledCatalogSection>
  )
}

export default Catalog
