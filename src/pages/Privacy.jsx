import React from 'react'
import styled from 'styled-components'
import { Layout } from '../layout'

// styles
const StyledMainContainer = styled.main`
  display: grid;
`

// markup
const Privacy = () => {
  return (
    <Layout>
      <StyledMainContainer>
        <>
          <h5>Privacy</h5>
        </>
      </StyledMainContainer>
    </Layout>
  )
}

export default Privacy