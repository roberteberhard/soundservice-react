import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import useShop from '../context/AppContext'
import { Header, Footer } from '../container'

// styled
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

// markup
const Layout = ({ children }) => {
  const { playlistSlug, playlistTrack } = useShop()
  const refTop = useRef(null)

  useEffect(() => {
    refTop.current.scrollIntoView()
    // eslint-disable-next-line
  }, [playlistSlug, playlistTrack])

  return (
    <StyledContent ref={refTop}>
      <Header />
      <div id="content">{children}</div>
      <Footer />
    </StyledContent>
  )
}

export default Layout
