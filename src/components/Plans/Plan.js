import React from 'react';
import styled from 'styled-components';

import { colors , pxToRem } from '../../theme/helpers';
import Button from '../../theme/Button';

import { darken } from 'polished';

const Plan = ({ className, plan }) => {
  return (
    <div className={className}>
      <h3><span className='bolder'>{plan.name}</span> Plan</h3>
      <p className='promo bolder'>70% de PROMO !</p>
      <ul>
        {
          plan.features.map((feature, i) => <li key={i}><div dangerouslySetInnerHTML={{ __html: feature }} /></li>)
        }
      </ul>
      <div className='command'>
        <p className='prix accent'>A partir de <span className='bolder'>{plan.price}€ / mois</span></p>
      </div>
      <Button />
    </div>
  );
}

export default styled(Plan)`
  background: ${colors.white};
  color: ${colors.black};
  border-radius: 4px;
  margin: 0 ${pxToRem(16)} ${pxToRem(32)};
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  min-width: ${pxToRem(256)};
  * {
    flex: 1 1 100%;
  }
  h3 {
    margin: 0;
    background: ${colors.primary};
    color: ${colors.white};
    padding: 16px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .promo {
    background: ${darken(0.2, colors.primary)};
    margin: 0;
    font-size: ${pxToRem(16)};
    padding: ${pxToRem(8)};
    color: ${colors.white};
  }
  ul {
    list-style-type: none;
    font-size: ${pxToRem(16)};
    text-align: left;
    color: ${colors.grey};
  }
  li {
    padding: ${pxToRem(4)} 0;
  }
  .prix {
    font-size: ${pxToRem(16)};
    margin-top: ${pxToRem(24)};
    .bolder {
      font-size: ${pxToRem(22)};
    }
  }
  .command {
    align-self: flex-end;
  }
`;