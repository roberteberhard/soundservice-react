import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import YouTube from 'react-youtube'
import styled from 'styled-components'
import useShop from '../context/AppContext'

// styles
const StyledOuterWrapper = styled.div`
  display: ${props => (props.hasPlayer !== '' ? `block` : `none`)};
  position: absolute;
  top: 0;
  z-index: 5;
  width: 100vw;
  background-color: var(--black);
`

const StyledInnerWrapper = styled.div`
  position: absolute;
  .video-player {
    width: 100%;
    height: 100%;
  }
`

// markup
const Player = () => {
  const [videoId, setVideoId] = useState('')
  const [positions, setPositions] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ height: window.innerHeight, width: window.innerWidth })
  const { playlistSlug, trackId, nextTrack, pageView, appTrackIsPlaying } = useShop()
  const refPlayer = useRef(null)
  const navigate = useNavigate()

  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      modestbranding: 1,
      autohide: 1,
      showinfo: 0,
      controls: 0,
      playsinline: 1,
      rel: 0
    }
  }

  const handleResize = () => {
    handlePositions()
    handleDimensions()
  }
  const handlePositions = () => {
    const windowW = window.innerWidth
    setPositions({
      x: windowW > 1280 ? (windowW - 1280) * 0.5 : 0,
      y: 0
    })
  }
  const handleDimensions = () => {
    const windowW = window.innerWidth
    const windowH = window.innerHeight
    setDimensions({
      width: windowW > 1280 ? 1280 : windowW,
      height: windowH > 720 ? 720 : windowH
    })
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (trackId) setVideoId(trackId)
  }, [trackId])

  const onReady = event => {
    event.target.pauseVideo()
  }
  const onPlay = event => {
    appTrackIsPlaying(true)
  }
  const onPause = event => {
    appTrackIsPlaying(false)
  }
  const onEnd = event => {
    navigate(`/track/${playlistSlug}/${nextTrack}`)
  }
  const onError = event => {
    event.target.pauseVideo()
  }

  return (
    <StyledOuterWrapper hasPlayer={playlistSlug} className={`player-${pageView}`} style={{ height: dimensions.height }}>
      <StyledInnerWrapper style={{ left: positions.x, top: positions.y, height: dimensions.height, width: dimensions.width }}>
        <YouTube className="video-player" ref={refPlayer} videoId={videoId} opts={opts} onReady={onReady} onPlay={onPlay} onPause={onPause} onEnd={onEnd} onError={onError} />
      </StyledInnerWrapper>
    </StyledOuterWrapper>
  )
}

export default Player
