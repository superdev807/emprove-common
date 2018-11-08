'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fp = require('lodash/fp');

var _fp2 = _interopRequireDefault(_fp);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var withTzConfig = function withTzConfig(timezoneSelector) {
  return function (WrappedComponent) {
    var IntlProviderWrapper = function (_Component) {
      _inherits(IntlProviderWrapper, _Component);

      function IntlProviderWrapper() {
        _classCallCheck(this, IntlProviderWrapper);

        return _possibleConstructorReturn(this, (IntlProviderWrapper.__proto__ || Object.getPrototypeOf(IntlProviderWrapper)).apply(this, arguments));
      }

      _createClass(IntlProviderWrapper, [{
        key: 'render',
        value: function render() {
          var _props = this.props,
              intlConfig = _props.intlConfig,
              timeZone = _props.timeZone,
              props = _objectWithoutProperties(_props, ['intlConfig', 'timeZone']);

          return _react2.default.createElement(WrappedComponent, _extends({}, props, { key: timeZone }, addTimeZone(intlConfig, timeZone)));
        }
      }]);

      return IntlProviderWrapper;
    }(_react.Component);

    IntlProviderWrapper.propTypes = {
      intlConfig: _propTypes2.default.object,
      timeZone: _propTypes2.default.string
    };


    var selector = (0, _reselect.createStructuredSelector)({
      timeZone: timezoneSelector
    });

    return (0, _reactRedux.connect)(selector)(IntlProviderWrapper);
  };
};

exports.default = withTzConfig;