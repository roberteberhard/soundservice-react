import React from 'react'
import styled from 'styled-components'

// styles
const StyledHeaderSection = styled.header`
  display: grid;
`

// markup
const Header = () => {
  return (
    <StyledHeaderSection>
      <p>Header Section</p>
    </StyledHeaderSection>
  )
}

export default Header
