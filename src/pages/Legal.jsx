import React, { useEffect } from 'react'
import styled from 'styled-components'
import useShop from '../context/AppContext'
import { Helmet } from 'react-helmet'
import { Layout } from '../layout'
import { Imprint } from '../container'

// styles
const StyledMainContainer = styled.main`
  display: grid;
  background-color: var(--lightblack);
`

// markup
const Legal = () => {
  const { appPageView } = useShop()

  useEffect(() => {
    appPageView('legal')
    // eslint-disable-next-line
  }, [])

  return (
    <Layout>
      <Helmet>
        <title>Legal - soundservice.com</title>
        <link rel="canonical" href="https://soundservice.com/legal" />
      </Helmet>
      <StyledMainContainer>
        <Imprint />
      </StyledMainContainer>
    </Layout>
  )
}

export default Legal
