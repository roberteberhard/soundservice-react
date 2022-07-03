import React from 'react'
import styled from 'styled-components'

// styles
const StyledLoader = styled.div`
  display: flex;
`

// markup
const Loader = () => {
  return (
    <StyledLoader>
      <p>Loader</p>
    </StyledLoader>
  )
}

export default Loader
