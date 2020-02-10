import React from 'react';
import styled from 'styled-components';

import { colors, pxToRem } from './helpers';

const Banner = ({ className, children }) => {
  return (
    <div className={className}>
      <p className="bold">{children}</p>
    </div>
  )
}

export default styled(Banner)`
  background: ${colors.primary};
  padding: ${pxToRem(2)};
  color: ${colors.white};
  text-align: center;
  text-transform: capitalize;
`;