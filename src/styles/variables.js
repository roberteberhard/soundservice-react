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
    --darkgrey: #242428;
    --primary: #97d058;
    --secondary: #64a10e;
    --text-color: #999999;

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

    --max-size: 1280px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`

export default variables
