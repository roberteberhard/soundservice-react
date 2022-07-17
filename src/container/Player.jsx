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
  height: ${props => props.dimensions.height + 'px'};
  background-color: var(--black);
  &.player-home {
    overflow: hidden;
    width: 420px;
    height: 236px;
    top: calc(100vh - 50px);
    left: calc(100% - 470px);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    @media screen and (max-width: 1080px) {
      left: calc(100% - 460px);
    }
    @media screen and (max-width: 768px) {
      top: calc(100vh + 95px);
      left: calc((100% - 420px) * 0.5);
    }
    @media screen and (max-width: 420px) {
      top: calc(100vh + 95px);
      left: 0;
      width: 100%;
    }
    @media screen and (min-height: 990px) {
      top: calc(990px - 236px);
      border: 2px solid red;
    }
    @media screen and (max-width: 1080px) and (min-height: 990px) {
      top: calc(990px - 241px);
      border: 2px solid yellow;
    }
  }
  &.player-privacy,
  &.player-legal {
    position: fixed;
    width: 420px;
    height: 236px;
    top: calc(100vh - 286px);
    left: calc(100% - 470px);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    .remote-control {
      display: none;
    }
    .partner-links {
      display: none;
    }
  }
`

const StyledInnerWrapper = styled.div`
  position: absolute;
  top: ${props => (props.pageView === 'track' ? props.positions.y + 'px' : `0px`)};
  left: ${props => (props.pageView === 'track' ? props.positions.x + 'px' : `0px`)};
  width: ${props => (props.pageView === 'track' ? props.dimensions.width + 'px' : `420px`)};
  height: ${props => (props.pageView === 'track' ? props.dimensions.height + 'px' : `236px`)};
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
  const { playlistSlug, trackId, nextTrack, playPauseTrack, pageView, appTrackIsPlaying } = useShop()
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

  const onPlayClick = () => {
    refPlayer.current.internalPlayer.playVideo()
  }

  const onPauseClick = () => {
    refPlayer.current.internalPlayer.pauseVideo()
  }

  /*   const onNextClick = () => {
    navigate(`/track/${playlistSlug}/${nextTrack}`)
  } */

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

  useEffect(() => {
    playPauseTrack === 'play' ? onPlayClick() : onPauseClick()
    // eslint-disable-next-line
  }, [playPauseTrack])

  return (
    <StyledOuterWrapper hasPlayer={playlistSlug} className={`player-${pageView}`} dimensions={dimensions}>
      <StyledInnerWrapper pageView={pageView} positions={positions} dimensions={dimensions}>
        <YouTube className="video-player" ref={refPlayer} videoId={videoId} opts={opts} onReady={onReady} onPlay={onPlay} onPause={onPause} onEnd={onEnd} onError={onError} />
      </StyledInnerWrapper>
    </StyledOuterWrapper>
  )
}

export default Player
