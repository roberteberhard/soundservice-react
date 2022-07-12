import React from 'react'
import styled from 'styled-components'
import useShop from '../context/AppContext'
import { Link } from 'react-router-dom'
import { IconSeparatorDown, IconSoundservice } from '../assets/icons'
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
  padding: 40px 0 300px 0;
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
  flex-direction: row;
  align-items: flex-start;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
  .favorites-heading {
    width: 100%;
    margin-bottom: 30px;
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
    width: 100%;
    margin-bottom: 30px;
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
          </StyledFooterFavorites>
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
