'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { IntlProvider } from 'react-intl';

import intlConfig from '../../config/intlConfig';
import LoadingIndicator from '../../components/LoadingIndicator';
import { listTranslations } from '../../redux/modules/globalStatus';
import { translationsSelector, translationsStatusSelector } from '../../redux/selectors';
import { API_FAIL, API_SUCCESS } from '../../redux/api/request';

class IntlProviderWrapper extends Component {
  static propTypes = {
    listTranslations: PropTypes.func.isRequired,
    timeZone: PropTypes.string,
    translations: PropTypes.array,
    translationsStatus: PropTypes.string,
    withTranslation: PropTypes.bool
  };

  componentDidMount() {
    const { listTranslations, withTranslation } = this.props;
    const { locale } = intlConfig;
    withTranslation &&
      listTranslations({
        params: { locale }
      });
  }

  render() {
    const { withTranslation, timeZone, translations, translationsStatus, ...props } = this.props;
    if (withTranslation) {
      const messages = {
        ...intlConfig.messages,
        ...translations.reduce((acc, item) => {
          acc[item.msgId] = item.msgString;
          return acc;
        }, {})
      };
      const isLoaded = [API_FAIL, API_SUCCESS].includes(translationsStatus);
      return isLoaded ? <IntlProvider {...props} {...intlConfig} timeZone={timeZone} messages={messages} /> : <LoadingIndicator />;
    } else {
      return <IntlProvider {...props} {...intlConfig} timeZone={timeZone} />;
    }
  }
}

const IntlProviderTz = ({ timezoneSelector, withTranslation, children }) => {
  const selector = createStructuredSelector({
    timeZone: timezoneSelector,
    translations: translationsSelector,
    translationsStatus: translationsStatusSelector,
    withTranslation: () => withTranslation
  });

  const actions = {
    listTranslations
  };

  const IntlProviderConnected = connect(selector, actions)(IntlProviderWrapper);
  return <IntlProviderConnected>{children}</IntlProviderConnected>;
};

export default IntlProviderTz;
