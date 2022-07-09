import React from 'react'
import styled from 'styled-components'
import { Layout } from '../layout'
import { Imprint } from '../container'

// styles
const StyledMainContainer = styled.main`
  display: grid;
  background-color: var(--lightblack);
`

// markup
const Legal = () => {
  return (
    <Layout>
      <StyledMainContainer>
        <Imprint />
      </StyledMainContainer>
    </Layout>
  )
}

export default Legal
