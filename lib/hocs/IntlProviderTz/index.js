'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fp = require('lodash/fp');

var _fp2 = _interopRequireDefault(_fp);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _reactIntl = require('react-intl');

var _intlConfig = require('../../config/intlConfig');

var _intlConfig2 = _interopRequireDefault(_intlConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var addTimeZone = function addTimeZone(intlConfig, timeZone) {
  return _extends({}, intlConfig, {
    formats: _extends({}, intlConfig.formats, {
      date: _fp2.default.compose(_fp2.default.mapValues(function (item) {
        return _extends({}, item, {
          timeZone: timeZone
        });
      }), _fp2.default.defaultTo({}), _fp2.default.get('formats.date'))(intlConfig)
    })
  });
};

var IntlProviderWrapper = function IntlProviderWrapper(_ref) {
  var timeZone = _ref.timeZone,
      props = _objectWithoutProperties(_ref, ['timeZone']);

  return _react2.default.createElement(_reactIntl.IntlProvider, _extends({}, props, { key: timeZone }, addTimeZone(_intlConfig2.default, timeZone)));
};

var IntlProviderTz = function IntlProviderTz(_ref2) {
  var timezoneSelector = _ref2.timezoneSelector,
      children = _ref2.children;

  var selector = (0, _reselect.createStructuredSelector)({
    timeZone: timezoneSelector
  });

  var IntlProviderConnected = (0, _reactRedux.connect)(selector)(IntlProviderWrapper);
  return _react2.default.createElement(
    IntlProviderConnected,
    null,
    children
  );
};

exports.default = IntlProviderTz;