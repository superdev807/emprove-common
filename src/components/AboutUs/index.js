'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Divider from '@material-ui/core/Divider';

import AboutUsHero from './components/AboutUsHero';
import AboutTheCompany from './components/AboutTheCompany';
import BidItPartial from './components/BidItPartial';
import CostItPartial from './components/CostItPartial';
import DreamItPartial from './components/DreamItPartial';
import ForProfessionals from './components/ForProfessionals';
// import OurProduct from './components/OurProduct';
import OurInvestors from './components/OurInvestors';
import PressAndMedia from './components/PressAndMedia';
import TheTeam from './components/TheTeam';
import TipsAndIdeas from './components/TipsAndIdeas';
import Container from '../Container';
import './styles.scss';

const AboutUs = (props) => {
  const domain = window.location.protocol + '//' + window.location.host + '/';
  const actionText = 'Start Now';
  //
  // let onStep2 = '';
  // if (this.state.tabIndex >= 2) {
  //   onStep2 = 'on';
  // }
  //
  // let onStep1 = '';
  // if (this.state.tabIndex >= 1) {
  //   onStep1 = 'on';
  // }
  //
  // let onStep0 = '';
  // if (this.state.onDreamIt) {
  //   onStep0 = 'on';
  // }
  // let onStepBottom = '';
  // if (this.state.tabIndex >= 4) {
  //   onStepBottom = 'on';
  // }

  return (
    <main className={cx(props.className)}>
      <AboutUsHero />
      <Container>
        <AboutTheCompany className="about-us__about-the-company" />
        <DreamItPartial domain={domain} onStep={true || onStep0} actionText={actionText} action={() => null || this.handleStart} />
        {/* <div id="tab1" style={{ height: '20vh' }} /> */}
        <CostItPartial domain={domain} onStep={true || onStep1} actionText={actionText} action={() => null || this.handleStart} />
        {/* <div style={{ height: '13vh' }} /> */}
        {/* <div id="tab2" style={{ height: '20vh' }} /> */}
        <BidItPartial domain={domain} onStep={true || onStep2} actionText={actionText} action={() => null || this.handleStart} />
      </Container>
      <div id="tab5">
        <ForProfessionals onStep={'on' || true || onStepBottom} onClick={() => null || this.goPro} />
      </div>
      <Divider className="about-us__divider" />
      <Container>
        <div id="tab3">
          <TipsAndIdeas />
        </div>
      </Container>
      <Divider className="about-us__divider" />
      <Container>
        <TheTeam className="about-us__the-team" fromContractor={props.fromContractor} />
      </Container>
      <Divider className="about-us__divider" />
      <Container>
        <div id="tab4">
          <PressAndMedia />
        </div>
        {/* <OurProduct className="about-us__our-product" /> */}
      </Container>
      {/* <OurInvestors /> */}
      {/* <PressAndMedia /> */}
    </main>
  );
};

AboutUs.propTypes = {
  className: PropTypes.string,
  fromContractor: PropTypes.bool
};

AboutUs.defaultProps = {
  fromContractor: false
};

export default AboutUs;
