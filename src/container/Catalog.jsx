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
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDQwIDQwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yNy43NjIsMTguNTA0bC01LjA2NC0zLjUwN2wtNC4zNzUtMy4wMjdjLTEuMjAxLTAuODMzLTIuODQ3LDAuMDI4LTIuODQ3LDEuNDkzdjYuNTM0djYuNTMzDQoJCWMwLDEuNDY2LDEuNjQ2LDIuMzI5LDIuODQ3LDEuNDk0bDQuMzc1LTMuMDI3bDUuMDY0LTMuNTA4QzI4LjgwNSwyMC43NjcsMjguODA1LDE5LjIyNywyNy43NjIsMTguNTA0eiIvPg0KCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0yMCwwQzguOTcyLDAsMCw4Ljk3MSwwLDIwLjAwMkMwLDMxLjAyOSw4Ljk3Miw0MCwyMCw0MGMxMS4wMzEsMCwyMC04Ljk3MSwyMC0xOS45OTgNCgkJQzQwLDguOTcxLDMxLjAzMSwwLDIwLDB6IE0xOS45OTgsMzUuNzQ0Yy04LjY5NSwwLTE1Ljc0NC03LjA1LTE1Ljc0NC0xNS43NDJjMC04LjY5OSw3LjA0OS0xNS43NDYsMTUuNzQ0LTE1Ljc0Ng0KCQljOC42OTMsMCwxNS43NDUsNy4wNDcsMTUuNzQ1LDE1Ljc0NkMzNS43NDMsMjguNjk0LDI4LjY5MSwzNS43NDQsMTkuOTk4LDM1Ljc0NHoiLz4NCjwvZz4NCjwvc3ZnPg0K');
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
