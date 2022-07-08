import React from 'react'
import styled from 'styled-components'

// styles
const StyledNetworkEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 50vh;
  padding-top: 50px;
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
      <p class="empty-description">No Playlists to display!</p>
    </StyledNetworkEmpty>
  )
}

export default NetworkEmpty
