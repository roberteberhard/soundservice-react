import React from 'react'
import styled from 'styled-components'
import Wave from '../assets/svgs/wave.svg'
import { IconPlay } from '../assets/icons'

// styles
const StyledCatalogSection = styled.section`
  display: flex;
  position: relative;
  z-index: 1;
  margin-top: -400px;
  width: 100%;
  height: 400px;
  color: var(--text-color);
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  background-color: transparent;
  .row {
    .catalog-article {
      display: flex;
      justify-content: center;
      justify-content: flex-end;
      .player-box {
        margin-top: 200px;
      }
    }
    .catalog-start {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 55%;
      height: auto;
      .start-now {
        cursor: pointer;
        display: block;
        margin: 10px auto 0;
        width: 78px;
        height: 78px;
        color: transparent;
        font-size: 0;
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 100% 100%;
        appearance: none;
        &.ready {
          animation: uiFadeIn 500ms normal forwards;
        }
      }
    }
    @keyframes uiFadeIn {
      0% {
        opacity: 0;
        transform: scale(0.9);
      }
      80% {
        opacity: 0.8;
        transform: scale(1.15);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`

// markup
const Catalog = () => {
  return (
    <StyledCatalogSection style={{ backgroundImage: `url(${Wave})` }}>
      <div className="row">
        <div className="catalog-article">
          <div className="player-box"></div>
        </div>
        <div className="catalog-start">
          <div className="start-now ready">
            <IconPlay />
          </div>
        </div>
      </div>
    </StyledCatalogSection>
  )
}

export default Catalog
