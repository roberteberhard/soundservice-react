import React, { useEffect } from 'react'
import styled from 'styled-components'
import useShop from '../context/AppContext'
import { Helmet } from 'react-helmet'
import { Layout } from '../layout'

// styles
const StyledMainContainer = styled.main`
  display: grid;
`

// markup
const Error = () => {
  const { appPageView } = useShop()

  useEffect(() => {
    appPageView('error')
    // eslint-disable-next-line
  }, [])

  return (
    <Layout>
      <Helmet>
        <title>404 - Soundservice.com</title>
      </Helmet>
      <StyledMainContainer>
        <>
          <h5>Error</h5>
        </>
      </StyledMainContainer>
    </Layout>
  )
}

export default Error
