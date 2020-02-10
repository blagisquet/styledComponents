import React from 'react';
import styled from 'styled-components';

import Plan from './Plan';

import { layout, pxToRem } from '../../theme/helpers';

import data from '../../data';

const Plans = ({ className }) => {
  return (
    <div className={className}>
      {
        data.plans.map(plan => <Plan key={plan.name} plan={plan} />)
      }
    </div>
  )
}

export default styled(Plans)`
  ${layout()}
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: ${pxToRem(64)};
  max-width: ${pxToRem(920)};
`;