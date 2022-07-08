import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const StyledVideolistsSection = styled.section`
  width: 100%;
  min-height: 400px;
  background-color: var(--lightblack);
`
const StyledVideolistsContent = styled.div`
  padding: 0 var(--pad-lg) var(--pad-xxl) var(--pad-lg);
  @media (max-width: 1080px) {
    padding: 0 var(--pad-md) var(--pad-xl) var(--pad-md);
  }
  @media (max-width: 768px) {
    padding: 0 var(--pad-sm) var(--pad-lg) var(--pad-sm);
  }
`

const StyledVideolistsInner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;

  .wrapper {
    padding: 120px 0 0 0;
    .params {
      padding: 30px;
      background-color: coral;
    }
  }
`

// markup
//https://cms.soundservice.com/api/sose/v1/playlist/full-moon-beach-tracks
const Videolists = () => {
  const { slug, track } = useParams()

  return (
    <StyledVideolistsSection>
      <StyledVideolistsContent>
        <StyledVideolistsInner>
          <h1>Video Lists</h1>
          <div className="wrapper">
            <div className="params">
              <h3>Slug is: {slug}</h3>
              <h3>Track is: {track}</h3>
            </div>
          </div>
        </StyledVideolistsInner>
      </StyledVideolistsContent>
    </StyledVideolistsSection>
  )
}

export default Videolists
