'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _reactIntl = require('react-intl');

var _intlConfig = require('../../config/intlConfig');

var _intlConfig2 = _interopRequireDefault(_intlConfig);

var _LoadingIndicator = require('../../components/LoadingIndicator');

var _LoadingIndicator2 = _interopRequireDefault(_LoadingIndicator);

var _globalStatus = require('../../redux/modules/globalStatus');

var _selectors = require('../../redux/selectors');

var _request = require('../../redux/api/request');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntlProviderWrapper = function (_Component) {
  _inherits(IntlProviderWrapper, _Component);

  function IntlProviderWrapper() {
    _classCallCheck(this, IntlProviderWrapper);

    return _possibleConstructorReturn(this, (IntlProviderWrapper.__proto__ || Object.getPrototypeOf(IntlProviderWrapper)).apply(this, arguments));
  }

  _createClass(IntlProviderWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          listTranslations = _props.listTranslations,
          withTranslation = _props.withTranslation;
      var locale = _intlConfig2.default.locale;

      withTranslation && listTranslations({
        params: { locale: locale }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          withTranslation = _props2.withTranslation,
          timeZone = _props2.timeZone,
          translations = _props2.translations,
          translationsStatus = _props2.translationsStatus,
          props = _objectWithoutProperties(_props2, ['withTranslation', 'timeZone', 'translations', 'translationsStatus']);

      if (withTranslation) {
        var messages = _extends({}, _intlConfig2.default.messages, translations.reduce(function (acc, item) {
          acc[item.msgId] = item.msgString;
          return acc;
        }, {}));
        var isLoaded = [_request.API_FAIL, _request.API_SUCCESS].includes(translationsStatus);
        return isLoaded ? _react2.default.createElement(_reactIntl.IntlProvider, _extends({}, props, _intlConfig2.default, { timeZone: timeZone, messages: messages })) : _react2.default.createElement(_LoadingIndicator2.default, null);
      } else {
        return _react2.default.createElement(_reactIntl.IntlProvider, _extends({}, props, _intlConfig2.default, { timeZone: timeZone }));
      }
    }
  }]);

  return IntlProviderWrapper;
}(_react.Component);

IntlProviderWrapper.propTypes = {
  listTranslations: _propTypes2.default.func.isRequired,
  timeZone: _propTypes2.default.string,
  translations: _propTypes2.default.array,
  translationsStatus: _propTypes2.default.string,
  withTranslation: _propTypes2.default.bool
};


var IntlProviderTz = function IntlProviderTz(_ref) {
  var timezoneSelector = _ref.timezoneSelector,
      _withTranslation = _ref.withTranslation,
      children = _ref.children;

  var selector = (0, _reselect.createStructuredSelector)({
    timeZone: timezoneSelector,
    translations: _selectors.translationsSelector,
    translationsStatus: _selectors.translationsStatusSelector,
    withTranslation: function withTranslation() {
      return _withTranslation;
    }
  });

  var actions = {
    listTranslations: _globalStatus.listTranslations
  };

  var IntlProviderConnected = (0, _reactRedux.connect)(selector, actions)(IntlProviderWrapper);
  return _react2.default.createElement(
    IntlProviderConnected,
    null,
    children
  );
};

exports.default = IntlProviderTz;