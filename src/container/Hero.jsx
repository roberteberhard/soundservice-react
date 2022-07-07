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
  padding-top: 100px;
  padding-left: 12px;
  @media only screen and (min-width: $viewport-7) {
    width: 80%;
    padding-top: 130px;
  }
  @media only screen and (min-width: $viewport-9) {
    width: 60%;
    padding-top: 140px;
  }
  @media only screen and (min-width: $viewport-12) {
    width: 50%;
    padding-top: 160px;
  }
  @media only screen and (min-width: $viewport-15) {
    width: 40%;
    padding-top: 220px;
  }
  h1.home-title {
    color: $white;
    line-height: 1.1;
    margin-bottom: 25px;
  }
  h2.home-subtitle {
    color: $white;
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
          <h2 className="home-subtitle">Whether you are chilling out, coding or spending a day on the beach, different playlists are suitable for different situations and environments.</h2>
        </StyledInnerHeading>
      </StyledHeroContent>
    </StyledHeroSection>
  )
}

export default Hero
