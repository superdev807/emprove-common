'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import curry from 'lodash/curry';

exports.default = function (errorCallback, FallbackComponent, WrappedComponent) {
  var WithErrorHandler = function (_Component) {
    _inherits(WithErrorHandler, _Component);

    function WithErrorHandler() {
      _classCallCheck(this, WithErrorHandler);

      var _this = _possibleConstructorReturn(this, (WithErrorHandler.__proto__ || Object.getPrototypeOf(WithErrorHandler)).call(this));

      console.log('in constructor', errorCallback, FallbackComponent);
      _this.state = {
        hasError: false,
        error: null,
        errorInfo: null
      };
      return _this;
    }

    _createClass(WithErrorHandler, [{
      key: 'componentDidCatch',
      value: function componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true, error: error, errorInfo: errorInfo });

        // Report errors
        errorCallback && errorCallback(error, info, this.props);
      }
    }, {
      key: 'render',
      value: function render() {
        console.log('render', errorCallback, FallbackComponent, WrappedComponent);

        if (this.state.hasError) {
          var _state = this.state,
              error = _state.error,
              errorInfo = _state.errorInfo;

          return _react2.default.createElement(FallbackComponent, _extends({}, this.props, { error: error, errorInfo: errorInfo }));
        }

        return _react2.default.createElement(WrappedComponent, this.props);
      }
    }]);

    return WithErrorHandler;
  }(_react.Component);

  WithErrorHandler.displayName = 'WithErrorHandler(' + getDisplayName(WrappedComponent) + ')';
  return WithErrorHandler;
};