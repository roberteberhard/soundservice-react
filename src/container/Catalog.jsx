import React from 'react'
import styled from 'styled-components'
import useShop from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { images } from '../constants'
import Wave from '../assets/svgs/wave.svg'

// styles
const StyledCatalogSection = styled.section`
  overflow: hidden;
  position: relative;
  z-index: 1;
  margin-top: -400px;
  width: 100%;
  height: 500px;
  color: var(--text-color);
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    height: 650px;
  }
  @media screen and (max-width: 480px) {
    height: 640px;
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
  @media screen and (max-width: 1080px) {
    left: calc(100% - 490px);
  }
  @media screen and (max-width: 768px) {
    top: 180px;
    left: calc((100% - 480px) * 0.5);
  }
  @media screen and (max-width: 480px) {
    top: 200px;
    left: calc((100% - 420px) * 0.5);
  }
`

const StyledPlayerNavi = styled.nav`
  position: absolute;
  z-index: 4;
  top: 405px;
  left: calc(100% - 470px);
  display: flex;
  justify-content: space-between;
  width: 420px;
  height: 36px;
  @media screen and (max-width: 1080px) {
    top: 405px;
    left: calc(100% - 460px);
  }
  @media screen and (max-width: 768px) {
    top: 550px;
    left: calc((100% - 420px) * 0.5);
  }
  @media screen and (max-width: 480px) {
    top: 550px;
    left: 20px;
    width: calc(100% - 40px);
  }
  .player-controls {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${props => (props.hasPlayer === '' ? `var(--text-color)` : `var(--white)`)};
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    font-weight: 600;
    letter-spacing: 0px;
    .btn {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 62px;
      height: 36px;
      pointer-events: ${props => (props.hasPlayer === '' ? `none` : `auto`)};
      border-radius: 18px;
      transition: var(--transition);
      background: ${props => (props.hasPlayer === '' ? `transparent` : `var(--lightblack)`)};
      box-shadow: ${props => (props.hasPlayer === '' ? `none` : `rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px`)};
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
    color: ${props => (props.hasPlayer === '' ? `var(--text-color)` : `var(--white)`)};
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    font-weight: 600;
    letter-spacing: 0px;
    .btn {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 62px;
      height: 36px;
      pointer-events: ${props => (props.hasPlayer === '' ? `none` : `auto`)};
      border-radius: 18px;
      transition: var(--transition);
      background: ${props => (props.hasPlayer === '' ? `transparent` : `var(--lightblack)`)};
      box-shadow: ${props => (props.hasPlayer === '' ? `none` : `rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px`)};
      &:hover,
      &:focus {
        background-color: var(--secondary);
      }
    }
  }
`

// markup
const Catalog = () => {
  const { playlistSlug, playlistTrack, trackIsPlaying, nextTrack, appPlayPauseTrack } = useShop()
  const navigate = useNavigate()

  const onPlayClick = () => {
    trackIsPlaying ? appPlayPauseTrack('pause') : appPlayPauseTrack('play')
  }
  const onNextClick = () => {
    navigate(`/track/${playlistSlug}/${nextTrack}`)
  }

  const onBackClick = () => {
    navigate(`/track/${playlistSlug}/${playlistTrack}`)
  }

  return (
    <StyledCatalogSection style={{ backgroundImage: `url(${Wave})` }}>
      <StyledEmptyJesus />
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
            Back
          </div>
        </div>
      </StyledPlayerNavi>
    </StyledCatalogSection>
  )
}

export default Catalog
