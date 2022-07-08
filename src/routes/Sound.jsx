import React from 'react'
import styled from 'styled-components'
import { Layout } from '../layout'

// styles
const StyledMainContainer = styled.main`
  display: grid;
`

// markup
const Sound = () => {
  return (
    <Layout>
      <StyledMainContainer>
        <>
          <h5>Sound</h5>
        </>
      </StyledMainContainer>
    </Layout>
  )
}

export default Sound
