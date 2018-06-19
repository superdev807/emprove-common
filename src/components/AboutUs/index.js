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
import Container from '../Container';
import './styles.scss';

const AboutUs = (props) => {
  return (
    <main className={cx(props.className)}>
      <AboutUsHero />
      <Container>
        <AboutTheCompany className="about-us__about-the-company" />
        <TheTeam className="about-us__the-team"/>
        <Divider className="about-us__divider" />
        <OurProduct className="about-us__our-product" />
      </Container>
      {/* <OurInvestors /> */}
      {/* <PressAndMedia /> */}
    </main>
  );
};

AboutUs.propTypes = {
  className: PropTypes.string
};

export default AboutUs;
