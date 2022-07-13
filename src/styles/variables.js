import { css } from 'styled-components'

const variables = css`
  :root {
    /**
     * Colors
     */
    --white: #ffffff;
    --ghost: #f1f1f1;
    --black: #000000;
    --jetblack: #1e1e1e;
    --lightblack: #282828;
    --lightgrey: #999999;

    --darkgrey: #3c3c3e;
    --oilgrey: #4a4a4a;

    --primary: #97d058;
    --secondary: #64a10e;

    --text-color: #4a4a4a;
    --server-error: #996667;

    --font-sans: 'MuseoRounded', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: Courier, 'Courier New', 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 28px;

    --pad-xxl: 100px;
    --pad-xl: 70px;
    --pad-lg: 50px;
    --pad-md: 40px;
    --pad-sm: 25px;

    --border-radius: 4px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;
    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`

export default variables
