import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles'
import { Header, Player, Footer } from '../container'
import useShop from '../context/AppContext'

// styled
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

// markup
const Layout = ({ children }) => {
  const refTop = useRef(null)
  const { pathname } = useLocation()
  const { appPageHome } = useShop()

  useEffect(() => {
    appPageHome(pathname === '/')
    refTop.current.scrollIntoView()
    // eslint-disable-next-line
  }, [pathname])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledContent ref={refTop}>
        <Header />
        <div id="content">{children}</div>
        <Player />
        <Footer />
      </StyledContent>
    </ThemeProvider>
  )
}

export default Layout
