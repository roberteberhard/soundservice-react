import React, { useEffect } from 'react'
import styled from 'styled-components'
import useShop from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { Layout } from '../layout'
import { Player, Videolists, Playlists } from '../container'

// styles
const StyledMainContainer = styled.main`
  display: grid;
`
// markup
const Track = () => {
  const { slug, track } = useParams()
  const { appPlaylistSlug, appPlaylistTrack } = useShop()

  useEffect(() => {
    if (track) {
      appPlaylistSlug(slug)
      appPlaylistTrack(track)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, track])

  return (
    <Layout>
      <StyledMainContainer>
        <Player />
        <Videolists />
        <Playlists />
      </StyledMainContainer>
    </Layout>
  )
}

export default Track
