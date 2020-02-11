import React from 'react';
import styled from 'styled-components';

import { pxToRem, colors } from '../../theme/helpers';

const Footer = ({ className }) => {
  return (
    <div className={className}>
      <p className='bold'>Copyright 2020</p>
    </div>
  )
}

export default styled(Footer)`
  border-top: 2px ${colors.primary} solid;
  font-size: ${pxToRem(18)};
  p {
    text-align: center;
  }
`;