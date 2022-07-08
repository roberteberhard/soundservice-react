import React from 'react'
import styled from 'styled-components'
import { Layout } from '../layout'
import { Player, Videolists, Playlists } from '../container'

// styles
const StyledMainContainer = styled.main`
  display: grid;
`

// markup
const Playing = () => {
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

export default Playing
