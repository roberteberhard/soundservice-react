import React from 'react'
import styled from 'styled-components'
import useShop from '../../context/AppContext'
import { Link } from 'react-router-dom'
import { images } from '../../constants'
import { LazyImage } from 'react-lazy-images'
import { IconPlay, IconActive } from '../../assets/icons'

// styles
const StyledPlaylistCard = styled.article`
  display: block;
  position: relative;
  overflow: hidden;
  background-color: var(--jetblack);
  background-color: ${props => (props.page === 'home' ? '#ccc' : 'var(--jetblack)')};
  box-shadow: rgba(50, 50, 93, 0.3) 0px 1px 2px 0px, rgba(0, 0, 0, 0.15) 0px 1px 3px 1px;
  &.active {
    .playlist-ctrl {
      opacity: 1;
      border-color: var(--primary);
      svg.icon-active {
        display: inline-block;
        position: absolute;
        z-index: 2;
        bottom: 0;
        right: 0;
        width: 80px;
        height: 80px;
      }
    }
  }
  &:hover {
    .playlist-ctrl {
      opacity: 1;
    }
  }
  .playlist-ctrl {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: var(--transition);
    border: 2px solid var(--white);
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
  .playlist-tracks {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    padding: 15px;
    .tracks-amount {
      font-family: var(--font-mono);
      color: var(--white);
      font-size: var(--fz-sm);
      font-weight: 600;
    }
  }
  .playlist--desc {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 15px;
    .playlist-title {
      margin: 0;
      color: var(--white);
      font-size: var(--fz-lg);
      font-weight: 900;
    }
    .playlist-by {
      color: var(--white);
      font-size: var(--fz-sm);
      font-weight: 500;
      margin-bottom: 20px;
    }
    .playlist-genre {
      display: flex;
      width: 100%;
      flex-direction: row;
      .genre-tag {
        display: inline-block;
        margin-right: 8px;
        font-family: var(--font-sans);
        color: var(--white);
        font-size: 10px;
        font-weight: 400;
        text-transform: uppercase;
      }
    }
  }
  img {
    width: 100%;
    height: auto;
  }
`

// markup
const PlaylistCard = ({ ...post }) => {
  const genres = post.genre.slice(0, 3)
  const { playlistSlug, pageView } = useShop()

  return (
    <StyledPlaylistCard className={playlistSlug === post.slug ? 'active' : ''} page={pageView}>
      <Link to={`/track/${post.slug}/${post.track}`}>
        <div className="playlist-ctrl">{playlistSlug === post.slug ? <IconActive /> : <IconPlay />}</div>
        <div className="playlist-tracks">
          <span className="tracks-amount">{post.tracks} tracks</span>
        </div>
        <div className="playlist--desc">
          <h2 className="playlist-title">{post.title}</h2>
          <p className="playlist-by">by {post.user}</p>
          <div className="playlist-genre">
            {genres &&
              genres.map((genre, i) => (
                <span key={i} className="genre-tag">
                  {genre.toLowerCase()}
                </span>
              ))}
          </div>
        </div>
        <LazyImage src={post.card} alt={post.title} placeholder={({ imageProps, ref }) => <img ref={ref} src={images.placeholder} alt={imageProps.alt} />} actual={({ imageProps }) => <img {...imageProps} alt={post.title} />} />
      </Link>
    </StyledPlaylistCard>
  )
}

export default PlaylistCard
