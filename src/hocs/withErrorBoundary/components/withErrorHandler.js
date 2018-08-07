'use strict';

import React, { Component } from 'react';
// import curry from 'lodash/curry';

const withErrorHandler = (errorCallback, FallbackComponent, WrappedComponent) => {
  class WithErrorHandler extends Component {
    constructor() {
      super();
      console.log('in constructor', this.props);
      this.state = {
        hasError: false,
        error: null,
        errorInfo: null
      };
    }

    componentDidCatch(error, errorInfo) {
      this.setState({ hasError: true, error, errorInfo });

      // Report errors
      errorCallback && errorCallback(error, info, this.props);
    }

    render() {
      console.log('render', errorCallback, FallbackComponent, WrappedComponent);

      if (this.state.hasError) {
        const { error, errorInfo } = this.state;
        return <FallbackComponent {...this.props} error={error} errorInfo={errorInfo} />;
      }

      return <WrappedComponent {...this.props} />;
    }
  }
  return WithErrorHandler;
  // return <div className="test">fjdia;</div>;
};

export default withErrorHandler;
