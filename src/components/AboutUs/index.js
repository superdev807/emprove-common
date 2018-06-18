'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Divider from '@material-ui/core/Divider';

import AboutUsHero from './components/AboutUsHero';
import AboutTheCompany from './components/AboutTheCompany';
import OurProduct from './components/OurProduct';
import OurInvestors from './components/OurInvestors';
import PressAndMedia from './components/PressAndMedia';
import TheTeam from './components/TheTeam';

const AboutUs = (props) => {
  return (
    <main className={cx(props.className)}>
      <AboutUsHero />
      <AboutTheCompany />
      <TheTeam />
      <Divider />
      <OurProduct />
      {/* <OurInvestors /> */}
      {/* <PressAndMedia /> */}
    </main>
  );
};

AboutUs.propTypes = {
  className: PropTypes.string
};

export default AboutUs;
