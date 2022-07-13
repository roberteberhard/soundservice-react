import React from 'react'
import styled from 'styled-components'
import useShop from '../context/AppContext'
import { Link } from 'react-router-dom'
import { IconTwitter, IconInstagram, IconPlane, IconSeparatorDown, IconSoundservice } from '../assets/icons'
import { socials, email, year } from '../config'

// styles
const StyledFooterSection = styled.footer`
  display: block;
  margin: 0;
  overflow: hidden;
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
  padding: 0 var(--pad-lg) var(--pad-xxl) var(--pad-lg);
  @media (max-width: 1080px) {
    padding: 0 var(--pad-md) var(--pad-xl) var(--pad-md);
  }
  @media (max-width: 768px) {
    padding: 0 var(--pad-sm) var(--pad-lg) var(--pad-sm);
  }
`

const StyledInnerSection = styled.div`
  padding: 40px 0 0 0;
  border: 1px dotted green;
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
  flex-direction: column;
  .favorites-heading {
    width: 100%;
    margin-bottom: 60px;
    h3 {
      margin-bottom: 15px;
      color: var(--ghost);
      font-size: var(--fz-xl);
      font-weight: 900;
      text-align: left;
      line-height: 1.25;
    }
    p {
      color: var(--lightgrey);
      text-align: left;
      line-height: 1.25;
    }
  }
  .favorites-socials {
    display: flex;
    width: 100%;
    margin-left: -10px;
    margin-bottom: 30px;
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
  flex-direction: column;
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
            <div className="footer-privacy">
              <Link to={'/Privacy'} className="footer-link">
                Privacy
              </Link>
              <Link to={'/Legal'} className="footer-link">
                Legal
              </Link>
            </div>
            <div className="footer-copyright">
              <p>© SOUNDSERVICE {year} • Designed and built by Robert Eberhard</p>
            </div>
          </StyledFooterCopyright>
        </StyledInnerSection>
      </StyledFooterContent>
    </StyledFooterSection>
  )
}

export default Footer
