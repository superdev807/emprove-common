'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getDeviceType } from './helpers';
import { detectDevice } from '../../redux/modules/device';
import { isMobileSelector, isTabletSelector } from '../../redux/selectors';


class DeviceDetector extends Component {
  componentDidMount() {
    this.setDeviceType();
    window.addEventListener('resize', this.setDeviceType);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setDeviceType);
  }

  setDeviceType = () => {
    const { isMobile, isTablet } = getDeviceType();
    this.props.detectDevice({ isMobile, isTablet });
  }

  render() {
    return this.props.children;
  }
}

const selector = createStructuredSelector({
  isMobile: isMobileSelector,
  isTablet: isTabletSelector
});

const action = {
  detectDevice
};

DeviceDetector.propTypes = {
  children: PropTypes.element,
  detectDevice: PropTypes.function.isRequired
};

export default connect(selector, action)(DeviceDetector);
