import React, {Fragment} from 'react';
import Banner from '../theme/Banner';
import Header from '../components/Header/Header';
import MainContent from '../components/MainContent/MainContent';
import Features from '../components/Features/Features';

const Landing = () => {
  return (
    <Fragment>
      <Banner><span role='img' aria-label='Gratuit'>😍</span> Un domaine gratuit offert avec tous les hébergements !</Banner>
      <Header />
      <MainContent />
      <Features />
    </Fragment>
  )
}

export default Landing;