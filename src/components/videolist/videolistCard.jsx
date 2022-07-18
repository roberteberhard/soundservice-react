import React from 'react'
import styled from 'styled-components'
import useShop from '../../context/AppContext'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { images } from '../../constants'
import { LazyImage } from 'react-lazy-images'
import { IconPlay } from '../../assets/icons'

// styles
const StyledVideolistCard = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  background-color: var(--lightblack);
  box-shadow: rgba(50, 50, 93, 0.3) 0px 1px 2px 0px, rgba(0, 0, 0, 0.15) 0px 1px 3px 1px;
  .videocard-link {
    display: block;
    cursor: pointer;
    &:hover,
    &:focus {
      .videocard-ctrl {
        opacity: 1;
        border: 2px solid var(--white);
        svg.icon-play {
          .play-circle,
          .play-arrow {
            fill: var(--white);
          }
        }
      }
    }
    .videocard-ctrl {
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      transition: var(--transition);
      border: 2px solid var(--primary);
      background-color: rgba(0, 0, 0, 0.32);
      svg.icon-play {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 2;
        transform: translate(-21px, -21px);
        display: inline-block;
        width: 42px;
        height: 42px;
        .play-circle,
        .play-arrow {
          fill: var(--white);
        }
      }
    }
    .videocard-desc {
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 15px;
      font-family: var(--font-sans);
      &__title {
        margin: 0 0 4px;
        font-size: 16px;
        font-weight: 900;
        letter-spacing: 0;
      }
      &__artist {
        color: var(--white);
        font-size: 13px;
        font-weight: 500;
        line-height: 1.15;
      }
    }
  }
  &.active {
    .videocard-link {
      .videocard-ctrl {
        opacity: 1;
        border: solid 2px var(--primary);
        background-color: rgba(0, 0, 0, 0.32);
        transition: all 350ms ease;
        svg.icon-play {
          .play-circle,
          .play-arrow {
            fill: var(--primary);
          }
        }
      }
      .videocard-eqlizr {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 20px;
        width: 20px;
        transform: translate(-50%, -50%) scale(1);
        .bar {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 25%;
          height: 0;
          background: var(--primary);
          transition: height 0.4s ease;
          animation: bar 0.4s 0s both alternate ease infinite;
          &.bar-1 {
            animation-delay: 0.2s;
          }
          &.bar-2 {
            left: 36%;
            animation-delay: 0.4s;
          }
          &.bar-3 {
            left: 72%;
            animation-delay: 0.6s;
          }
          @keyframes bar {
            0% {
              height: 5;
            }
            100% {
              height: 100%;
            }
          }
        }
      }
    }
  }
`

// markup
const VideolistCard = ({ ...post }) => {
  const { playlistSlug, playlistTrack, trackName, trackIsPlaying, appPlayPauseTrack } = useShop()

  const onPlayPauseClick = () => {
    trackIsPlaying ? appPlayPauseTrack('pause') : appPlayPauseTrack('play')
  }

  return (
    <StyledVideolistCard className={playlistTrack === post.track ? 'active' : ''}>
      <Helmet>
        <title>{trackName} - soundservice.com</title>
        <link rel="canonical" href={`https://soundservice.com/track/${playlistSlug}/${playlistTrack}`} />
      </Helmet>
      {playlistTrack === post.track ? (
        <div
          className="videocard-link"
          onClick={() => {
            onPlayPauseClick()
          }}
        >
          {trackIsPlaying ? (
            <div className="videocard-ctrl">
              <div className="videocard-eqlizr">
                <span className="bar bar-1"></span>
                <span className="bar bar-2"></span>
                <span className="bar bar-3"></span>
              </div>
            </div>
          ) : (
            <div className="videocard-ctrl">
              <IconPlay />
            </div>
          )}
          <div className="videocard-desc">
            <h2 className="videocard-desc__title">{post.title}</h2>
            <p className="videocard-desc__artist">{post.artist}</p>
          </div>
          <LazyImage src={post.thumb} alt={post.title} placeholder={({ imageProps, ref }) => <img ref={ref} src={images.videolist} alt={imageProps.alt} />} actual={({ imageProps }) => <img {...imageProps} alt={post.title} />} />
        </div>
      ) : (
        <Link className="videocard-link" to={`/track/${playlistSlug}/${post.track}`}>
          <div className="videocard-ctrl">
            <IconPlay />
          </div>
          <div className="videocard-desc">
            <h2 className="videocard-desc__title">{post.title}</h2>
            <p className="videocard-desc__artist">{post.artist}</p>
          </div>
          <LazyImage src={post.thumb} alt={post.title} placeholder={({ imageProps, ref }) => <img ref={ref} src={images.videolist} alt={imageProps.alt} />} actual={({ imageProps }) => <img {...imageProps} alt={post.title} />} />
        </Link>
      )}
    </StyledVideolistCard>
  )
}

export default VideolistCard
