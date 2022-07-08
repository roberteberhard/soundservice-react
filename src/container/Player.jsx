import React from 'react'
import styled from 'styled-components'

// styles
const StyledPlayerSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  top: 600px;
  right: 140px;
  width: 120px;
  height: 40px;
  font-size: 14px;
  color: var(--white);
  background-color: rgba(9, 9, 9, 0.2);
`

// markup
const Player = () => {
  return (
    <StyledPlayerSection>
      <h1>Player Section</h1>
    </StyledPlayerSection>
  )
}

export default Player
