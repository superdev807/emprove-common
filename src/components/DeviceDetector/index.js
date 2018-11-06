'use strict';

import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getDeviceType } from './helpers';
import { detectDevice } from '../../redux/modules/device';
import { isMobileSelector, isTabletSelector } from '../../redux/selectors';

class DeviceDetector extends Component {
  constructor(props) {
    super(props);
    this.setDeviceType = debounce(this.setDeviceType, 200, { trailing: true });
  }

  componentDidMount() {
    this.setDeviceType();
    window.addEventListener('resize', this.setDeviceType);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setDeviceType);
  }

  setDeviceType = () => {
    const { isMobile, isTablet } = getDeviceType(window.navigator.userAgent);
    if (isMobile !== this.props.isMobile || isTablet !== this.props.isTablet) {
      this.props.detectDevice({ isMobile, isTablet });
    }
  };

  render() {
    return null;
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
  detectDevice: PropTypes.func.isRequired
};

export default connect(
  selector,
  action
)(DeviceDetector);
