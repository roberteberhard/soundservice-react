import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IconLogo } from '../assets/icons'

// styles
const StyledHeaderSection = styled.header`
  width: 100%;
  height: 0;
  background-color: transparent;
`

const StyledHeaderContent = styled.nav`
  padding: 0 var(--pad-lg) var(--pad-xxl) var(--pad-lg);
  @media (max-width: 1080px) {
    padding: 0 var(--pad-md) var(--pad-xl) var(--pad-md);
  }
  @media (max-width: 768px) {
    padding: 0 var(--pad-sm) var(--pad-lg) var(--pad-sm);
  }
`

const StyledHeaderInner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  top: 36px;
  width: 100%;
  height: 48px;
  .navbar-logo {
    cursor: pointer;
    width: 48px;
    height: 48px;
    &:hover,
    &:focus {
      .icon-logo__path {
        fill: var(--primary);
        transition: var(--transition);
      }
    }
  }
`

// markup
const Header = () => {
  return (
    <StyledHeaderSection>
      <StyledHeaderContent>
        <StyledHeaderInner>
          <Link to={'/'} className="navbar-logo">
            <IconLogo />
          </Link>
        </StyledHeaderInner>
      </StyledHeaderContent>
    </StyledHeaderSection>
  )
}

export default Header
