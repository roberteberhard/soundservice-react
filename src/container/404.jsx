import React from 'react'
import styled from 'styled-components'

// styles
const Styled404Section = styled.section`
  display: grid;
`

// markup
const error404 = () => {
  return (
    <Styled404Section>
      <p>404 Section</p>
    </Styled404Section>
  )
}

export default error404
