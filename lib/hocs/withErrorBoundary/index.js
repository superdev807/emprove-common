'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import { trackJsErrorReporter } from './services/errorReporter.js';
import FallbackView from './components/FallbackView';

var withErrorBoundary = function withErrorBoundary(_ref) {
  var componentName = _ref.componentName,
      customErrorReportService = _ref.customErrorReportService,
      customFallbackView = _ref.customFallbackView,
      fallbackHeader = _ref.fallbackHeader;
  return function (WrappedComponent) {
    return (
      /*#__PURE__*/
      function (_Component) {
        _inherits(WithErrorBoundary, _Component);

        function WithErrorBoundary(props) {
          var _this;

          _classCallCheck(this, WithErrorBoundary);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(WithErrorBoundary).call(this, props));
          _this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
            isMobile: _this.isPortraitMobile()
          };
          return _this;
        }

        _createClass(WithErrorBoundary, [{
          key: "isPortraitMobile",
          value: function isPortraitMobile() {
            return window.matchMedia('(orientation: portrait)').matches && window.innerWidth <= 600 || window.matchMedia('(orientation: landscape)').matches && window.innerWidth <= 960;
          }
        }, {
          key: "componentDidCatch",
          value: function componentDidCatch(error, errorInfo) {
            this.setState({
              hasError: true,
              error: error,
              errorInfo: errorInfo
            });
            customErrorReportService && customErrorReportService(error, errorInfo, componentName, this.props);
            trackJsErrorReporter(error, errorInfo, componentName, this.props);
          }
        }, {
          key: "render",
          value: function render() {
            var FallbackComponent = customFallbackView || FallbackView;
            var header = fallbackHeader ? fallbackHeader : null;

            if (this.state.hasError) {
              var _this$state = this.state,
                  error = _this$state.error,
                  errorInfo = _this$state.errorInfo;
              return React.createElement(FallbackComponent, _extends({}, this.props, {
                error: error,
                errorInfo: errorInfo,
                header: header,
                isMobile: this.state.isMobile
              }));
            }

            return React.createElement(WrappedComponent, this.props);
          }
        }]);

        return WithErrorBoundary;
      }(Component)
    );
  };
};

export default withErrorBoundary;