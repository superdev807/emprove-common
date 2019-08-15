'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { IntlProvider } from 'react-intl';
import intlConfig from '../../config/intlConfig';
import LoadingIndicator from '../../components/LoadingIndicator';
import { listTranslations } from '../../redux/modules/globalStatus';
import { translationsSelector, translationsStatusSelector } from '../../redux/selectors';
import { API_FAIL, API_SUCCESS } from '../../redux/api/request';

var IntlProviderWrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(IntlProviderWrapper, _Component);

  function IntlProviderWrapper() {
    _classCallCheck(this, IntlProviderWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(IntlProviderWrapper).apply(this, arguments));
  }

  _createClass(IntlProviderWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          listTranslations = _this$props.listTranslations,
          withTranslation = _this$props.withTranslation;
      var locale = intlConfig.locale;
      withTranslation && listTranslations({
        params: {
          locale: locale
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          withTranslation = _this$props2.withTranslation,
          timeZone = _this$props2.timeZone,
          translations = _this$props2.translations,
          translationsStatus = _this$props2.translationsStatus,
          props = _objectWithoutProperties(_this$props2, ["withTranslation", "timeZone", "translations", "translationsStatus"]);

      if (withTranslation) {
        var messages = translations.reduce(function (acc, item) {
          acc[item.msgId] = item.msgString;
          return acc;
        }, {});
        var isLoaded = [API_FAIL, API_SUCCESS].includes(translationsStatus);
        return isLoaded ? React.createElement(IntlProvider, _extends({}, props, intlConfig, {
          timeZone: timeZone,
          messages: messages
        })) : React.createElement(LoadingIndicator, null);
      } else {
        return React.createElement(IntlProvider, _extends({}, props, intlConfig, {
          timeZone: timeZone
        }));
      }
    }
  }]);

  return IntlProviderWrapper;
}(Component);

_defineProperty(IntlProviderWrapper, "propTypes", {
  listTranslations: PropTypes.func.isRequired,
  timeZone: PropTypes.string,
  translations: PropTypes.array,
  translationsStatus: PropTypes.string,
  withTranslation: PropTypes.bool
});

var IntlProviderTz = function IntlProviderTz(_ref) {
  var timezoneSelector = _ref.timezoneSelector,
      _withTranslation = _ref.withTranslation,
      children = _ref.children;
  var selector = createStructuredSelector({
    timeZone: timezoneSelector,
    translations: translationsSelector,
    translationsStatus: translationsStatusSelector,
    withTranslation: function withTranslation() {
      return _withTranslation;
    }
  });
  var actions = {
    listTranslations: listTranslations
  };
  var IntlProviderConnected = connect(selector, actions)(IntlProviderWrapper);
  return React.createElement(IntlProviderConnected, null, children);
};

export default IntlProviderTz;