'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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