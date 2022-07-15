import React from 'react'
import styled from 'styled-components'
import useShop from '../context/AppContext'
import { Link } from 'react-router-dom'
import { IconTwitter, IconInstagram, IconPlane, IconSeparatorDown, IconSoundservice } from '../assets/icons'
import { socials, email, year } from '../config'

// styles
const StyledFooterSection = styled.footer`
  overflow: hidden;
  margin: 0;
  width: 100%;
  min-height: 400px;
  background-color: var(--jetblack);
  .separator {
    width: 100%;
    height: 60px;
    background-color: var(--jetblack);
  }
`
const StyledFooterContent = styled.div`
  padding: 0 var(--pad-lg) var(--pad-lg) var(--pad-lg);
  @media (max-width: 1080px) {
    padding: 0 var(--pad-md) var(--pad-md) var(--pad-md);
  }
  @media (max-width: 768px) {
    padding: 0 var(--pad-sm) var(--pad-sm) var(--pad-sm);
  }
`

const StyledInnerSection = styled.div`
  padding: 40px 0 0 0;
  &.has-player {
    border: 2px dotted red;
  }
`

const StyledFooterBranding = styled.div`
  margin-bottom: 40px;
  .icon-soundservice {
    width: 185px;
    height: 20px;
  }
`
const StyledFooterFavorites = styled.div`
  display: flex;
  flex-direction: row;
  .favorites-heading {
    width: 60%;
    margin-bottom: 120px;
    h3 {
      margin-bottom: 15px;
      color: var(--ghost);
      font-size: var(--fz-xl);
      font-weight: 900;
      text-align: left;
      line-height: 1.25;
      letter-spacing: 0.5px;
    }
    p {
      color: var(--text-color);
      font-family: var(--font-mono);
      font-size: var(--fz-md);
      font-weight: 600;
      text-align: left;
      line-height: 1.25;
      letter-spacing: 0;
    }
  }
  .favorites-socials {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 40%;
    .social-links {
      display: block;
      overflow: hidden;
      width: 44px;
      height: 44px;
      margin: 0 4px;
      padding: 6px;
      border-radius: 50%;
      &.plane {
        padding: 7px;
      }
      &:hover,
      &:focus {
        .icon-instagram,
        .icon-twitter,
        .icon-plane {
          stroke: var(--primary);
        }
      }
      .icon-instagram,
      .icon-twitter,
      .icon-plane {
        stroke: var(--white);
        transition: var(--transition);
      }
    }
  }
`
const StyledFooterCopyright = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: var(--text-color);
  text-align: center;
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
  font-weight: 600;
  a {
    cursor: pointer;
    color: var(--primary);
    &:hover,
    &:focus {
      color: var(--secondary);
    }
  }
  .footer-copyright {
    .strong {
      font-weight: 900;
    }
  }
  .footer-policy {
    .policy-spacer {
      display: inline-block;
      margin: 0 8px;
      font-size: var(--fz-xxs);
    }
  }
`

// markup
const Footer = () => {
  const { playlistSlug, pageView } = useShop()

  return (
    <StyledFooterSection>
      <IconSeparatorDown page={pageView} />
      <StyledFooterContent>
        <StyledInnerSection className={playlistSlug !== '' ? 'has-player' : ''}>
          <StyledFooterBranding>
            <Link to={'/'}>
              <IconSoundservice />
            </Link>
          </StyledFooterBranding>
          <StyledFooterFavorites>
            <div className="favorites-heading">
              <h3>Do you have your own favorite song or do you miss one?</h3>
              <p>
                We would like to expand this list, add more tracks. Leave us a{' '}
                <a className="link" href={`mailto:${email}`}>
                  comment
                </a>{' '}
                with your favorite song, we are curious which song you love.
              </p>
            </div>
            <div className="favorites-socials">
              <a className="social-links" href={socials[0].url} target="_blank" rel="noreferrer">
                <IconInstagram />
              </a>
              <a className="social-links" href={socials[1].url} target="_blank" rel="noreferrer">
                <IconTwitter />
              </a>
              <a className="social-links plane" href={`mailto:${email}`}>
                <IconPlane />
              </a>
            </div>
          </StyledFooterFavorites>
          <StyledFooterCopyright>
            <div className="footer-copyright">
              <span className="strong">© SOUNDSERVICE {year}</span>{' '}
              <span className="designed-by">
                - Designed and built by{' '}
                <a href="https://roberteberhard.com" target="_blank" rel="noopener noreferrer">
                  Robert Eberhard
                </a>
              </span>
            </div>
            <div className="footer-policy">
              <Link to={'/Privacy'} className="footer-link">
                Privacy
              </Link>
              <span className="policy-spacer">•</span>
              <Link to={'/Legal'} className="footer-link">
                Legal
              </Link>
            </div>
          </StyledFooterCopyright>
        </StyledInnerSection>
      </StyledFooterContent>
    </StyledFooterSection>
  )
}

export default Footer
