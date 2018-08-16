'use strict';

import React, { Component } from 'react';

import { trackJsErrorReporter } from './services/errorReporter.js';
import FallbackView from './components/FallbackView';

const withErrorBoundary = ({ componentName, customErrorReportService, customFallbackView, fallbackHeader }) => WrappedComponent => {
  return class WithErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hasError: false,
        error: null,
        errorInfo: null,
        isMobile: this.isPortraitMobile()
      };
    }

    isPortraitMobile() {
      return (
        (window.matchMedia('(orientation: portrait)').matches && window.innerWidth <= 600) ||
        (window.matchMedia('(orientation: landscape)').matches && window.innerWidth <= 960)
      );
    }

    componentDidCatch(error, errorInfo) {
      this.setState({ hasError: true, error, errorInfo });

      customErrorReportService && customErrorReportService(error, errorInfo, componentName, this.props);
      trackJsErrorReporter(error, errorInfo, componentName, this.props);
    }

    render() {
      const FallbackComponent = customFallbackView || FallbackView;
      const header = fallbackHeader ? fallbackHeader : null;
      if (this.state.hasError) {
        const { error, errorInfo } = this.state;
        return <FallbackComponent {...this.props} error={error} errorInfo={errorInfo} header={header} isMobile={this.state.isMobile} />;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withErrorBoundary;
