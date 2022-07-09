import React from 'react'
import styled from 'styled-components'
import { Layout } from '../layout'
import { Policy } from '../container'

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
        <Policy />
      </StyledMainContainer>
    </Layout>
  )
}

export default Legal
