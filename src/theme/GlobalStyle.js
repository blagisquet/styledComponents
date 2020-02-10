import { createGlobalStyle } from 'styled-components';
import { colors } from './helpers';

import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';

const Global = createGlobalStyle`
  ::selection {
    background: ${colors.primary};
  }

  body {
    font-size: 16px;
    transition: 600ms;
  }

  .bolder {
    font-weight: 900;
  }

  .bold {
    font-weight: 600;
  }

  .accent {
    color: ${colors.accent};
  }
`

export default Global;
