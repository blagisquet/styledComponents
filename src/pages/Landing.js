import React, {Fragment} from 'react';
import Banner from '../theme/Banner';
import Header from '../components/Header/Header';
import MainContent from '../components/MainContent/MainContent';

const Landing = () => {
  return (
    <Fragment>
      <Banner><span role='img' aria-label='Gratuit'>😍</span> Un domaine gratuit offert avec tous les hébergements !</Banner>
      <Header />
      <MainContent />
    </Fragment>
  )
}

export default Landing;