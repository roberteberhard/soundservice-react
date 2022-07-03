import { css } from 'styled-components'

import MuseoLightWoff from '../fonts/museo/museosansrounded-300.woff'
import MuseoLightWoff2 from '../fonts/museo/museosansrounded-300.woff2'
import MuseoRegularWoff from '../fonts/museo/museosansrounded-500.woff'
import MuseoRegularWoff2 from '../fonts/museo/museosansrounded-500.woff2'
import MuseoSemiboldWoff from '../fonts/museo/museosansrounded-700.woff'
import MuseoSemiboldWoff2 from '../fonts/museo/museosansrounded-700.woff2'
import MuseoBoldWoff from '../fonts/museo/museosansrounded-900.woff'
import MuseoBoldWoff2 from '../fonts/museo/museosansrounded-900.woff2'

const museoNormalWeights = {
  300: [MuseoLightWoff, MuseoLightWoff2],
  500: [MuseoRegularWoff, MuseoRegularWoff2],
  700: [MuseoSemiboldWoff, MuseoSemiboldWoff2],
  900: [MuseoBoldWoff, MuseoBoldWoff2]
}

const museo = {
  name: 'MuseoRounded',
  normal: museoNormalWeights
}

const createFontFaces = (family, style = 'normal') => {
  let styles = ''
  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0]
    const woff2 = formats[1]
    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `
  }
  return styles
}

const museoRounded = createFontFaces(museo)

const Fonts = css`
  ${museoRounded}
`

export default Fonts
