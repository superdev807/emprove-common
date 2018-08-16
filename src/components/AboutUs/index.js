'use strict';

import React, { Component } from 'react';
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
// import OurInvestors from './components/OurInvestors';
import PressAndMedia from './components/PressAndMedia';
import TheTeam from './components/TheTeam';
import TipsAndIdeas from './components/TipsAndIdeas';
import Container from '../Container';
import './styles.scss';
import './partial-styles.scss';

const SectionIndex = {
  DREAM_IT: 3,
  COST_IT: 4,
  BID_IT: 5,
  FOR_PROFESSIONALS: 6
};

class AboutUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sectionIndex: -1
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    let sectionIndex = -1;
    const innerHeight = window.innerHeight * 0.75;

    const dreamIt = document.getElementById('dreamIt');
    if (dreamIt && dreamIt.getBoundingClientRect().top < innerHeight) {
      sectionIndex = SectionIndex.DREAM_IT;
    }
    const costIt = document.getElementById('costIt');
    if (costIt && costIt.getBoundingClientRect().top < innerHeight) {
      sectionIndex = SectionIndex.COST_IT;
    }
    const bidIt = document.getElementById('bidIt');
    if (bidIt && bidIt.getBoundingClientRect().top < innerHeight) {
      sectionIndex = SectionIndex.BID_IT;
    }
    const forProfessionals = document.getElementById('about-us-for-professionals-section');
    if (forProfessionals && forProfessionals.getBoundingClientRect().top < innerHeight) {
      sectionIndex = SectionIndex.FOR_PROFESSIONALS;
    }

    if (this.state.sectionIndex !== sectionIndex) {
      this.setState({ sectionIndex });
    }
  };

  handleStart = () => {
    const { history, fromContractor } = this.props;

    if (fromContractor) {
      window.location.replace(process.env.CONSUMER_DOMAIN);
    } else {
      history.push('/browse');
    }
  };

  handleProStart = () => {
    const { history, fromContractor } = this.props;

    if (fromContractor) {
      history.push('/');
    } else {
      history.push('/pro');
    }
  };

  render() {
    const domain = window.location.protocol + '//' + window.location.host + '/';
    const actionText = 'Start Now';

    return (
      <main className={cx(this.props.className)}>
        <AboutUsHero onPlayClick={this.props.onPlayClick} />
        <Container>
          <AboutTheCompany className="about-us__about-the-company" />
          <DreamItPartial
            domain={domain}
            onStep={this.state.sectionIndex >= SectionIndex.DREAM_IT}
            actionText={actionText}
            action={this.handleStart}
          />
          <div id="tab1" style={{ height: '20vh' }} />
          <CostItPartial
            domain={domain}
            onStep={this.state.sectionIndex >= SectionIndex.COST_IT}
            actionText={actionText}
            action={this.handleStart}
          />
          <div style={{ height: '13vh' }} />
          <div id="tab2" style={{ height: '20vh' }} />
          <BidItPartial
            domain={domain}
            onStep={this.state.sectionIndex >= SectionIndex.BID_IT}
            actionText={actionText}
            action={this.handleStart}
          />
        </Container>
        <ForProfessionals
          id="about-us-for-professionals-section"
          className="about-us__for-professionals"
          onStep={this.state.sectionIndex >= SectionIndex.FOR_PROFESSIONALS}
          onClick={this.handleProStart}
        />
        <Divider className="about-us__divider" />
        <Container>
          <div id="tab3">
            <TipsAndIdeas className="about-us__tips-and-ideas" fromContractor={this.props.fromContractor} />
          </div>
        </Container>
        <Divider className="about-us__divider" />
        <Container>
          <TheTeam className="about-us__the-team" fromContractor={this.props.fromContractor} />
        </Container>
        <Divider className="about-us__divider" />
        <Container>
          <div id="tab4">
            <PressAndMedia className="about-us__press-and-media" fromContractor={this.props.fromContractor} />
          </div>
          {/* <OurProduct className="about-us__our-product" /> */}
        </Container>
        {/* <OurInvestors /> */}
      </main>
    );
  }
}

AboutUs.propTypes = {
  className: PropTypes.string,
  fromContractor: PropTypes.bool,
  consumerURL: PropTypes.string
};

AboutUs.defaultProps = {
  fromContractor: false
};

export default AboutUs;
