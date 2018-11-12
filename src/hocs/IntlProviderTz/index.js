'use strict';

import React, { Component } from 'react';
import fp from 'lodash/fp';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { IntlProvider } from 'react-intl';

import intlConfig from '../../config/intlConfig';

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

const IntlProviderWrapper = ({ timeZone, ...props }) => {
  return <IntlProvider {...props} key={timeZone} {...addTimeZone(intlConfig, timeZone)} />;
};

const IntlProviderTz = ({ timezoneSelector, children }) => {
  const selector = createStructuredSelector({
    timeZone: timezoneSelector
  });

  const IntlProviderConnected = connect(selector)(IntlProviderWrapper);
  return <IntlProviderConnected>{children}</IntlProviderConnected>;
};

export default IntlProviderTz;
