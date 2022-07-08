import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IconSeparatorDown } from '../assets/icons'
import { socials, email, year } from '../config'

// styles
const StyledFooterSection = styled.footer`
  display: block;
  margin: 0;
  overflow: hidden;
  width: 100%;
  height: 400px;
  background-color: var(--lightblack);
  .separator {
    width: 100%;
    height: 60px;
    background-color: var(--lightblack);
  }
`
const StyledFooterContent = styled.div`
  padding: 0 var(--pad-lg) var(--pad-xxl) var(--pad-lg);

  @media (max-width: 1080px) {
    padding: 0 var(--pad-md) var(--pad-xl) var(--pad-md);
  }
  @media (max-width: 768px) {
    padding: 0 var(--pad-sm) var(--pad-lg) var(--pad-sm);
  }
`

const StyledInnerSection = styled.div`
  margin: 0;
  .footer-brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    @media only screen and {
      align-items: flex-start;
      margin-bottom: 30px;
    }
    .footer-brand__logo {
      color: transparent;
      font-size: 0;
      &.i-sose::before {
        background-image: var(--home-logo-white);
      }
    }
  }
`

// markup
const Footer = () => {
  return (
    <StyledFooterSection>
      <IconSeparatorDown />
      <StyledFooterContent>
        <StyledInnerSection>
          <div className="footer-brand">
            <div className="footer-brand__logo i-sose">Soundservice</div>
          </div>
          <nav className="footer-nav">
            <div className="footer-meta">
              <h2>Do you have your own favorite song or do you miss one?</h2>
              <p>
                We would like to expand this list, add more tracks. Leave us a{' '}
                <a className="link" href={`mailto:${email}`}>
                  comment
                </a>{' '}
                with your favorite song, we are curious which song you love.
              </p>
            </div>
            <div className="footer-social">
              <ul>
                <li>
                  <a href={socials[0].url} target="_blank" rel="noreferrer">
                    <div className="social-icon i-twitter">{socials[0].name}</div>
                  </a>
                </li>
                <li>
                  <a href={socials[1].url} target="_blank" rel="noreferrer">
                    <div className="social-icon i-instagram">{socials[1].name}</div>
                  </a>
                </li>
                <li>
                  <a className="link" href={`mailto:${email}`}>
                    <div className="social-icon i-airplane">Email</div>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <nav className="footer-legal">
            <div className="footer-privacy">
              <ul>
                <li>
                  <Link to={'/Privacy'} className="link">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to={'/Legal'} className="link">
                    Legal
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-copyright">
              <p>© SoundService {year}</p>
            </div>
          </nav>
        </StyledInnerSection>
      </StyledFooterContent>
    </StyledFooterSection>
  )
}

export default Footer
