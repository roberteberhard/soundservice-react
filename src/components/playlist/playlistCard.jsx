import React from 'react'
import styled from 'styled-components'

// styles
const StyledPlaylistCard = styled.article`
  display: flex;
  max-width: 320px;
  img {
    width: 100%;
    height: auto;
    max-width: 100%;
  }
`

// markup
const PlaylistCard = ({ ...post }) => {
  return (
    <StyledPlaylistCard>
      {post.id}
      {post.title}
      <img src={post.card} width="100%" height="100%" alt={post.title} />
    </StyledPlaylistCard>
  )
}

export default PlaylistCard
