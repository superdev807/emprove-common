'use strict';

import _extends from "@babel/runtime-corejs3/helpers/extends";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
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