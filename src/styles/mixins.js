import { css } from 'styled-components'

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  button: css`
    cursor: pointer;
    padding: 1.25rem 1.75rem;
    color: var(--secondary);
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    border: 1px solid var(--primary);
    border-radius: var(--border-radius);
    transition: var(--transition);
    background-color: transparent;
    &:hover,
    &:focus,
    &:active {
      outline: none;
      background-color: var(--secondary);
    }
    &:after {
      display: none !important;
    }
  `
}

export default mixins
