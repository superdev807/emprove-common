'use strict';

import React from 'react';

import AboutUsHero from './components/AboutUsHero';
import AboutTheCompany from './components/AboutTheCompany';
import TheTeam from './components/TheTeam';
import OurProduct from './components/OurProduct';
import OurInvestors from './components/OurInvestors';
import PressAndMedia from './components/PressAndMedia';

const AboutUs = (props) => {
  return (
    <main>
      <AboutUsHero />
      <AboutTheCompany />
      <TheTeam />
      <OurProduct />
      <OurInvestors />
      <PressAndMedia />
    </main>
  );
};

export default AboutUs;
