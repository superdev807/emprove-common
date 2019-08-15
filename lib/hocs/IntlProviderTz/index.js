'use strict';

import _extends from "@babel/runtime-corejs3/helpers/extends";
import _includesInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/includes";
import _reduceInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/reduce";
import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
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
        var _context;

        var messages = _reduceInstanceProperty(translations).call(translations, function (acc, item) {
          acc[item.msgId] = item.msgString;
          return acc;
        }, {});

        var isLoaded = _includesInstanceProperty(_context = [API_FAIL, API_SUCCESS]).call(_context, translationsStatus);

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