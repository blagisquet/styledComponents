import React, {Fragment} from 'react';
import Banner from '../theme/Banner';
import Footer from '../components/Footer/Footer';
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
      <Footer />
    </Fragment>
  )
}

export default Landing;