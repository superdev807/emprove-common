'use strict';

import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getDeviceType } from './helpers';
import { detectDevice } from '../../redux/modules/device';
import { isMobileSelector, isTabletSelector, isPhoneSelector } from '../../redux/selectors';

var DeviceDetector =
/*#__PURE__*/
function (_Component) {
  _inherits(DeviceDetector, _Component);

  function DeviceDetector(props) {
    var _this;

    _classCallCheck(this, DeviceDetector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DeviceDetector).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setDeviceType", function () {
      var _getDeviceType = getDeviceType(window.navigator.userAgent),
          isMobile = _getDeviceType.isMobile,
          isTablet = _getDeviceType.isTablet,
          isPhone = _getDeviceType.isPhone;

      if (isMobile !== _this.props.isMobile || isTablet !== _this.props.isTablet || isPhone !== _this.props.isPhone) {
        _this.props.detectDevice({
          isMobile: isMobile,
          isTablet: isTablet,
          isPhone: isPhone
        });
      }
    });

    _this.setDeviceType = debounce(_this.setDeviceType, 200, {
      trailing: true
    });
    return _this;
  }

  _createClass(DeviceDetector, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setDeviceType();
      window.addEventListener('resize', this.setDeviceType);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setDeviceType);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return DeviceDetector;
}(Component);

var selector = createStructuredSelector({
  isMobile: isMobileSelector,
  isPhone: isPhoneSelector,
  isTablet: isTabletSelector
});
var action = {
  detectDevice: detectDevice
};
DeviceDetector.propTypes = {
  detectDevice: PropTypes.func.isRequired
};
export default connect(selector, action)(DeviceDetector);