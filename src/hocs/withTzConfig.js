'use strict';

import React, { Component } from 'react';
import fp from 'lodash/fp';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const addTimeZone = (intlConfig, timeZone) => {
  return {
    ...intlConfig,
    formats: {
      ...intlConfig.formats,
      date: fp.compose(
        fp.mapValues(item => ({
          ...item,
          timeZone
        })),
        fp.defaultTo({}),
        fp.get('formats.date')
      )(intlConfig)
    }
  };
};

const withTzConfig = timezoneSelector => WrappedComponent => {
  class IntlProviderWrapper extends Component {
    static propTypes = {
      intlConfig: PropTypes.object,
      timeZone: PropTypes.string
    };

    render() {
      const { intlConfig, timeZone, ...props } = this.props;
      return <WrappedComponent {...props} key={timeZone} {...addTimeZone(intlConfig, timeZone)} />;
    }
  }

  const selector = createStructuredSelector({
    timeZone: timezoneSelector
  });

  return connect(selector)(IntlProviderWrapper);
};

export default withTzConfig;
