import React, { useEffect } from 'react'
import styled from 'styled-components'
import useShop from '../context/AppContext'
import { Layout } from '../layout'
import { Slider, Hero, Catalog, Playlists } from '../container'

// styles
const StyledMainContainer = styled.main``

// markup
const Home = () => {
  const { appPageView } = useShop()

  useEffect(() => {
    appPageView('home')
    // eslint-disable-next-line
  }, [])

  return (
    <Layout>
      <StyledMainContainer>
        <Slider />
        <Hero />
        <Catalog />
        <Playlists />
      </StyledMainContainer>
    </Layout>
  )
}

export default Home
