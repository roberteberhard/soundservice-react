import React from 'react'
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
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledContent>
        <Header />
        <div id="content">{children}</div>
        <Player />
        <Footer />
      </StyledContent>
    </ThemeProvider>
  )
}

export default Layout
