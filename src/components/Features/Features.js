import React from 'react';
import data from '../../data';

import Feature from '../Feature/Feature';

const Features = () => {
  return (
    <div>
      { data.features.map(feature => <Feature key={feature.title} feature={feature}></Feature>)}
    </div>
  )
}

export default Features;