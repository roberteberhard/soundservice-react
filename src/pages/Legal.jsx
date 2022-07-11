import React, { useEffect } from 'react'
import styled from 'styled-components'
import useShop from '../context/AppContext'
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
      <StyledMainContainer>
        <Imprint />
      </StyledMainContainer>
    </Layout>
  )
}

export default Legal
