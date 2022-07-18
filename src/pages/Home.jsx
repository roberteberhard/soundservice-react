import React, { useEffect } from 'react'
import styled from 'styled-components'
import useShop from '../context/AppContext'
import { Helmet } from 'react-helmet'
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
      <Helmet>
        <title>soundservice.com</title>
        <link rel="canonical" href="https://soundservice.com" />
      </Helmet>
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
