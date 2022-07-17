import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './styles'
import { AppProvider } from './context/AppContext'
import { Player } from './container'

// pages & routes
import { Home, Track, Privacy, Legal, Error } from './pages'

const Index = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/track/:slug/:track" element={<Track />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="*" component={<Error />} />
          </Routes>
          <Player />
        </ThemeProvider>
      </BrowserRouter>
    </AppProvider>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Index />)
