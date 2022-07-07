import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IconLogo } from '../assets/icons'

// styles
const StyledHeaderSection = styled.header`
  position: relative;
  width: 100%;
  height: 0px;
`

const StyledHeaderBar = styled.nav`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 58px;
  background-color: transparent;
`

const StyledHeaderRow = styled.div`
  height: 0;
  .headerbar-logo {
    position: absolute;
    cursor: pointer;
    top: 24px;
    left: 12px;
    color: transparent;
    font-size: 0;
    width: 48px;
    height: 48px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 48px 48px;
    background-color: transparent;
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxvZ28iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiNGRkZGRkY7fTwvc3R5bGU+PHBhdGggaWQ9Imljb24iIGNsYXNzPSJzdDAiIGQ9Ik00MTIsMEgxMDBIMHYxMjB2MjcydjEyMGgxMDBoMzEyaDEwMFYzOTJWMTIwVjBINDEyeiBNODAsMTUyLjNjMC0xMi4zLDctMTkuNiwxOC43LTE5Ljd2LTAuMWgyMy41YzU2LjYsMCw4NC4zLDI0LjYsMTE2LjksNjRsLTMyLjksMzkuM2MtMjcuNy0zNC45LTQ0LjgtNTMuOC04NC01My44SDk4Ljl2MC4xYy0xMS44LDAtMTguOS03LjUtMTguOS0yMC4xVjE1Mi4zeiBNNDMyLDM1OS40YzAsMTIuNS03LDE5LjktMTguNywyMHYwaC0yMy41Yy01Ni42LDAtODQuMy0yNC43LTExNi45LTY0bDMyLjktMzkuM2MyNy43LDM0LjksNDQuOCw1My45LDg0LDUzLjloMjMuM3YwYzAuMSwwLDAuMSwwLDAuMSwwYzAsMCwwLjEsMCwwLjEsMGMxMS43LDAuMSwxOC43LDcuNCwxOC43LDE5LjdWMzU5LjR6IE00MzIsMTYxLjljMCwxMi42LTcuMSwyMC4xLTE4LjksMjAuMXYtMC4xaC0yMy4zYy00MC4yLDAtNTcuMSwxOS43LTg2LDU2LjRjMC4xLDAuMi02NCw3Ni42LTY0LDc2LjZjLTMyLjksMzkuNy02MC42LDY0LjYtMTE3LjUsNjQuNkg5OC43djBjLTExLjctMC4xLTE4LjctNy42LTE4LjctMjB2LTkuNmMwLTEyLjMsNy0xOS42LDE4LjctMTkuN2MwLDAsMC4xLDAsMC4xLDBjMCwwLDAuMSwwLDAuMSwwdjBoMjMuM2M0MC4yLDAsNTcuMS0xOS43LDg2LjEtNTYuNGMtMC4yLTAuMiw2NC03Ni42LDY0LTc2LjZjMzIuOS0zOS43LDYwLjYtNjQuNiwxMTcuNS02NC42aDIzLjV2MC4xYzExLjcsMC4xLDE4LjcsNy41LDE4LjcsMTkuN1YxNjEuOXoiLz48L3N2Zz4=');
  }
  .headerbar-menu {
    position: absolute;
    top: 24px;
    right: 12px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    li {
      color: var(--white);
    }
  }
`

// markup
const Header = () => {
  return (
    <StyledHeaderSection>
      <StyledHeaderBar>
        <StyledHeaderRow>
          <Link to={'/'}>
            <h1 className="headerbar-logo">
              <IconLogo />
            </h1>
          </Link>
          <ul className="headerbar-menu">
            <li>• • •</li>
          </ul>
        </StyledHeaderRow>
      </StyledHeaderBar>
    </StyledHeaderSection>
  )
}

export default Header
