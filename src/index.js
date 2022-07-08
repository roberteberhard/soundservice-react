import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'

// routes & components
import { Home, Sound, Privacy, Legal, Error } from './routes'

const Index = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sound" element={<Sound />}>
            <Route path=":user" element={<Sound />} />
          </Route>
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*" component={<Error />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Index />)
