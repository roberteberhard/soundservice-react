import { createGlobalStyle } from 'styled-components'
import fonts from './fonts'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${variables};
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -moz-tap-highlight-color: rgba(0,0,0,0);
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ::selection {
    color: var(--white);
    background: lightgoldenrodyellow;
  }
  html {
    width: 100%;
    scroll-behavior: smooth;
    line-height: 1;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;

  }
  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    color: var(--text-color);
    font-family: var(--font-sans);
    font-size: var(--fz-md);
    font-weight: 500;
    font-style: normal;
    line-height: 1;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--lightblack);
    @media (max-width: 480px) {
      font-size: var(--fz-sm);
    }
  }
  button,
  input,
  textarea,
  select {
    font: inherit;
  }
  img,
  video,
  canvas,
  svg {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    &.feather {
      fill: none;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    color: var(--white);
    font-weight: 600;
    line-height: 1;
    overflow-wrap: break-word;
  }
  h1 {
    color: var(--white);
    font-size: 30px;
    font-family: var(--font-sans);
    font-weight: 900;
    letter-spacing: 0.5px;
  }
  h2 {
    color: var(--white);
    font-size: 18px;
    font-family: var(--font-sans);
    font-weight: 900;
    letter-spacing: 0.5px;
  }
  p {
    margin: 0 0 15px 0;
    color: var(--text-color);
    font-size: 16px;
    font-family: var(--font-sans);
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0;
    &:last-child,
    &:last-of-type {
      margin: 0;
    }
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-word-wrap: break-word;
    word-wrap: break-word;
    a {
      color: var(--primary);
      text-decoration: none;
    }
  }
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:focus {
      color: var(--secondary);
    }
  }
  .link {
    cursor: pointer;
    color: var(--primary);
    text-decoration: none;
    font-size: 16px;
    font-family: var(--font-sans);
    font-weight: 700;
    letter-spacing: 0;
    word-wrap: break-word;
    transition: color .6s cubic-bezier(.19,1,.22,1);
    &:hover {
      color: var(--secondary)
    }
  }
  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }
  input, textarea {
    border-radius: 0;
    outline: 0;
    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }
  code {
    font-family: var(--font-mono);
    font-size: var(--fz-md);
  }
  :focus {
    outline: 2px dashed var(--secondary);
    outline-offset: 3px;
  }
  :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0px;
  }
  :focus-visible {
    outline: 2px dashed var(--secondary);
    outline-offset: 3px;
  }
  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--body-scroll) var(--body);
  }
  body::-webkit-scrollbar {
    width: 12px;
  }
  body::-webkit-scrollbar-track {
    background: var(--body);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--body-scroll);
    border: 3px solid var(--body);
    border-radius: 10px;
  }
  #root {
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
    grid-gap: 0px;
    width: 100vw;
    min-height: 100vh;
  }
`
export default GlobalStyle
