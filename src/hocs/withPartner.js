'use strict';

import React, { Component } from 'react';
import { getPartnerFromHost } from '../utils/partnerFunctions';

const withPartner = WrappedComponent => {
  class PartnerWrapper extends Component {
    render() {
      const partner = getPartnerFromHost();
      return <WrappedComponent {...this.props} subDomain={partner} />;
    }
  }

  return PartnerWrapper;
};

export default withPartner;
