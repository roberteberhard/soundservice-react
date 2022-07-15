import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IconLogo } from '../assets/icons'

// styles
const StyledHeaderSection = styled.header`
  width: 100%;
  height: 0;
`

const StyledHeaderContent = styled.nav`
  padding: 0 var(--pad-lg) 0 var(--pad-lg);
  @media screen and (max-width: 1080px) {
    padding: 0 var(--pad-md) 0 var(--pad-md);
  }
  @media screen and (max-width: 768px) {
    padding: 0 var(--pad-sm) 0 var(--pad-sm);
  }
`

const StyledHeaderInner = styled.div`
  position: relative;
  z-index: 5;
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
