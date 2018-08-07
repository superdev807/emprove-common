'use strict';

import React, { Component } from 'react';

// import errorReportService from '../services/errorReporter'
import FallbackView from './components/FallbackView';

const withErrorBoundary = WrappedComponent => {
  return class WithErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hasError: false,
        error: null,
        errorInfo: null
      };
    }

    componentDidCatch(error, errorInfo) {
      const { customErrorReportService } = this.props;
      this.setState({ hasError: true, error, errorInfo });

      const errorCallback = customErrorReportService || console.log;
      errorCallback(error, errorInfo, this.props);
    }

    render() {
      const FallbackComponent = this.props.customFallbackView || FallbackView;

      if (this.state.hasError) {
        const { error, errorInfo } = this.state;
        return <FallbackComponent {...this.props} error={error} errorInfo={errorInfo} />;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withErrorBoundary;
