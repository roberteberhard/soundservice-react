import React from 'react'
import styled from 'styled-components'

// styles
const StyledNetworkEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 50vh;
  .empty-description {
    max-width: 480px;
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    text-align: center;
  }
`

// markup
const NetworkEmpty = () => {
  return (
    <StyledNetworkEmpty>
      <p className="empty-description">No Playlists to display!</p>
    </StyledNetworkEmpty>
  )
}

export default NetworkEmpty
