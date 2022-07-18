import React, { useEffect } from 'react'
import styled from 'styled-components'
import useShop from '../context/AppContext'
import { Helmet } from 'react-helmet'
import { Layout } from '../layout'
import { Policy } from '../container'

// styles
const StyledMainContainer = styled.main`
  display: grid;
  background-color: var(--lightblack);
`

// markup
const Privacy = () => {
  const { appPageView } = useShop()

  useEffect(() => {
    appPageView('privacy')
    // eslint-disable-next-line
  }, [])

  return (
    <Layout>
      <Helmet>
        <title>Privacy - soundservice.com</title>
        <link rel="canonical" href="https://soundservice.com/privacy" />
      </Helmet>
      <StyledMainContainer>
        <Policy />
      </StyledMainContainer>
    </Layout>
  )
}

export default Privacy
