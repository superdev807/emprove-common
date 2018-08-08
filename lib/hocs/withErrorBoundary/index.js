'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _errorReporter = require('../../../src/hocs/withErrorBoundary/services/errorReporter');

var _FallbackView = require('./components/FallbackView');

var _FallbackView2 = _interopRequireDefault(_FallbackView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withErrorBoundary = function withErrorBoundary(_ref) {
  var componentName = _ref.componentName,
      customErrorReportService = _ref.customErrorReportService,
      customFallbackView = _ref.customFallbackView,
      fallbackHeader = _ref.fallbackHeader;
  return function (WrappedComponent) {
    return function (_Component) {
      _inherits(WithErrorBoundary, _Component);

      function WithErrorBoundary(props) {
        _classCallCheck(this, WithErrorBoundary);

        var _this = _possibleConstructorReturn(this, (WithErrorBoundary.__proto__ || Object.getPrototypeOf(WithErrorBoundary)).call(this, props));

        _this.state = {
          hasError: false,
          error: null,
          errorInfo: null,
          isMobile: _this.isPortraitMobile()
        };
        return _this;
      }

      _createClass(WithErrorBoundary, [{
        key: 'isPortraitMobile',
        value: function isPortraitMobile() {
          return window.matchMedia('(orientation: portrait)').matches && window.innerWidth <= 600 || window.matchMedia('(orientation: landscape)').matches && window.innerWidth <= 960;
        }
      }, {
        key: 'componentDidCatch',
        value: function componentDidCatch(error, errorInfo) {
          this.setState({ hasError: true, error: error, errorInfo: errorInfo });

          customErrorReportService && customErrorReportService(error, errorInfo, componentName, this.props);
          (0, _errorReporter.trackJsErrorReporter)(error, errorInfo, componentName, this.props);
        }
      }, {
        key: 'render',
        value: function render() {
          var FallbackComponent = customFallbackView || _FallbackView2.default;
          //only show the header if the header is supposed to be hidden for mobile and it's mobile
          var header = fallbackHeader ? this.props.hideHeaderForMobile === true && this.state.isMobile ? fallbackHeader : null : null;
          if (this.state.hasError) {
            var _state = this.state,
                error = _state.error,
                errorInfo = _state.errorInfo;

            return _react2.default.createElement(FallbackComponent, _extends({}, this.props, { error: error, errorInfo: errorInfo, header: header, isMobile: this.state.isMobile }));
          }
          return _react2.default.createElement(WrappedComponent, this.props);
        }
      }]);

      return WithErrorBoundary;
    }(_react.Component);
  };
};

exports.default = withErrorBoundary;