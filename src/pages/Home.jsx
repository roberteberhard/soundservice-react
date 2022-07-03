import React from 'react'
import styled from 'styled-components'
import { Layout } from '../layout'
import { Playlists } from '../components'

// styles
const StyledMainContainer = styled.main`
  display: grid;
  border: 2px dotted coral;
`

// markup
const Home = () => {
  return (
    <Layout>
      <StyledMainContainer>
        <Playlists />
      </StyledMainContainer>
    </Layout>
  )
}

export default Home
