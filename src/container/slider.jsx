import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { slides } from '../config'

// styles
const StyledSlider = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh + 200px);
  min-height: 800px;

  @media screen and (min-height: 1000px) {
    height: 1000px;
  }
  img {
    &.slide {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      object-fit: cover;
      transition: opacity 1000ms ease-in-out 0s;
      &.first-one {
        position: relative;
      }
      &.active {
        z-index: 1;
        opacity: 1;
      }
    }
  }
`

// markup
const Slider = () => {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)
  const delay = 6000

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => setIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1)), delay)
    return () => {
      resetTimeout()
    }
  }, [index])

  return <StyledSlider>{slides && slides.map((slide, i) => <img key={slide.id} src={slide.img} className={`slide${index === i ? ' active' : ''}`} alt={slide.alt} />)}</StyledSlider>
}

export default Slider
