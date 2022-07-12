import React from 'react'
import styled from 'styled-components'
import useShop from '../../context/AppContext'
import { Link } from 'react-router-dom'
import { IconPlay } from '../../assets/icons'

// styles
const StyledVideolistCard = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  background-color: var(--lightblack);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.5);
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
    }
  }
  &.playing {
    .videocard-link {
      .videocard-ctrl {
        border: solid 2px var(--primary);
        svg.icon-play {
          .play-circle,
          .play-arrow {
            fill: transparent;
          }
        }
      }
      .videocard-eqlizr {
        opacity: 1;
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
  &:hover {
    .videocard-link {
      .videocard-ctrl {
        opacity: 1;
      }
    }
  }
  .videocard-link {
    display: block;
    cursor: pointer;
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
    .video-eqlizr {
      opacity: 0;
      transition: opacity 0.5s var(--easing);
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
`

// markup
const VideolistCard = ({ ...post }) => {
  const { playlistSlug, playlistTrack } = useShop()

  return (
    <StyledVideolistCard className={playlistTrack === post.track ? 'active' : ''}>
      <Link to={`/track/${playlistSlug}/${post.track}`}>
        <div className="videocard-link">
          <div className="videocard-ctrl">
            <IconPlay />
          </div>
          <div className="videocard-eqlizr">
            <span className="bar bar-1"></span>
            <span className="bar bar-2"></span>
            <span className="bar bar-3"></span>
          </div>
          <div className="videocard-desc">
            <h2 className="videocard-desc__title">{post.title}</h2>
            <p className="videocard-desc__artist">{post.artist}</p>
          </div>
          <img src={post.thumb} width="100%" height="100%" alt={post.title} />
        </div>
      </Link>
    </StyledVideolistCard>
  )
}

export default VideolistCard
