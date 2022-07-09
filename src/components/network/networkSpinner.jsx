import React from 'react'
import styled from 'styled-components'

// styles
const StyledNetworkSpinner = styled.div`
  position: relative;
  width: 100%;
  min-height: 50vh;
`
const DarkSpinner = styled.div`
  position: absolute;
  z-index: 1;
  top: calc(50% - 5px);
  left: calc(50% - 5px);
  height: 26px;
  width: 26px;
  &:not(:required):after {
    content: '';
    display: block;
    font-size: 10px;
    width: 8px;
    height: 8px;
    animation: spinner 1500ms infinite linear;
    border-radius: 0.5em;
    box-shadow: var(--oilgrey) 1.5em 0 0 0, var(--oilgrey) 1.1em 1.1em 0 0, var(--oilgrey) 0 1.5em 0 0, var(--oilgrey) -1.1em 1.1em 0 0, var(--oilgrey) -1.5em 0 0 0, var(--oilgrey) -1.1em -1.1em 0 0, var(--oilgrey) 0 -1.5em 0 0, var(--oilgrey) 1.1em -1.1em 0 0;
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

// markup
const NetworkSpinner = () => {
  return (
    <StyledNetworkSpinner>
      <DarkSpinner />
    </StyledNetworkSpinner>
  )
}

export default NetworkSpinner
