import React from 'react'
import styled from 'styled-components'
import { Slider } from '../components'

// styles
const StyledHeroSection = styled.section`
  display: grid;
`
const StyledHeroContent = styled.div`
  position: absolute;
  top: 0;
  z-index: 3;
  padding: 0 var(--pad-lg) var(--pad-xxl) var(--pad-lg);
  @media (max-width: 1080px) {
    padding: 0 var(--pad-md) var(--pad-xl) var(--pad-md);
  }
  @media (max-width: 768px) {
    padding: 0 var(--pad-sm) var(--pad-lg) var(--pad-sm);
  }
`

const StyledInnerHeading = styled.div`
  width: 100%;
  padding: 200px 0 0 120px;
  max-width: 920px;
  @media (max-width: 1080px) {
    padding: 200px 0 0 80px;
    max-width: 720px;
  }
  @media (max-width: 768px) {
    padding: 200px 0 0 0;
    max-width: 640px;
  }
  @media (max-width: 480px) {
    padding: 200px 0 0 0;
  }

  h1.home-title {
    color: var(--white);
    line-height: 1.1;
    margin-bottom: 25px;
    padding-right: 140px;
    font-size: 40px;
    @media (max-width: 1080px) {
      padding-right: 0;
      font-size: 36px;
    }
    @media (max-width: 768px) {
      padding-right: 0;
      font-size: 32px;
    }
    @media (max-width: 480px) {
      padding-right: 0;
      font-size: 28px;
    }
  }
  h2.home-subtitle {
    color: var(--white);
    font-family: var(--font-mono);
    line-height: 1.25;
  }
`

// markup
const Hero = () => {
  return (
    <StyledHeroSection>
      <Slider />
      <StyledHeroContent>
        <StyledInnerHeading>
          <h1 className="home-title">Welcome to Soundservice and enjoy our curated video playlists!</h1>
          <h2 className="home-subtitle">Whether you're chilling, programming, or spending a day at the beach, different playlists are suitable for different situations and environments.</h2>
        </StyledInnerHeading>
      </StyledHeroContent>
    </StyledHeroSection>
  )
}

export default Hero
