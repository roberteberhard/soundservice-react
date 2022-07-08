import React from 'react'
import styled from 'styled-components'

// styles
const StyledNetworkError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 50vh;
  padding-top: 30px;
  .error-heading {
    max-width: 480px;
    font-family: var(--font-sans);
    font-size: var(--fz-xxl);
    font-weight: 900;
    text-align: center;
  }
  .error-description {
    max-width: 480px;
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    text-align: center;
  }
`

// markup
const NetworkError = () => {
  return (
    <StyledNetworkError>
      <p class="error-heading">Network Error!</p>
      <p class="error-description">Sorry, a network error occurred while establishing a connection to the server. Please press the browser's reload button.</p>
    </StyledNetworkError>
  )
}

export default NetworkError
