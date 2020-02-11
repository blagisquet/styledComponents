import React from 'react';
import data from '../../data';

import Feature from '../Feature/Feature';

const Features = () => {
  return (
    <div>
      { data.features.map((feature, i) => <Feature key={feature.title} feature={feature} odd={i % 2 !== 0}></Feature>)}
    </div>
  )
}

export default Features;