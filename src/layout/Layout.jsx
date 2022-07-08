import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles'
import { Header, Player, Footer } from '../container'

// styled
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

// markup
const Layout = ({ children }) => {
  const refTop = useRef(null)

  useEffect(() => {
    refTop.current.scrollIntoView()
  }, [])

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
