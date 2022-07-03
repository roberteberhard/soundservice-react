import React from 'react'
import styled from 'styled-components'
import { Layout } from '../layout'

// styles
const StyledMainContainer = styled.main`
  display: grid;
  border: 2px dotted coral;
`

// markup
const Legal = () => {
  return (
    <Layout>
      <StyledMainContainer>
        <>
          <h5>Legal</h5>
        </>
      </StyledMainContainer>
    </Layout>
  )
}

export default Legal
