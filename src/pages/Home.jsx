import React from 'react'
import styled from 'styled-components'
import { Layout } from '../layout'
import { Hero, Catalog, Playlists } from '../container'

// styles
const StyledMainContainer = styled.main`
  display: grid;
`

// markup
const Home = () => {
  return (
    <Layout>
      <StyledMainContainer>
        <Hero />
        <Catalog />
        <Playlists />
      </StyledMainContainer>
    </Layout>
  )
}

export default Home
