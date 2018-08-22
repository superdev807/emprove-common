'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { parseQueryString } from '~/utils/pureFunctions';

const withRouterAndQueryParams = WrappedComponent => {
  class QueryParamsWrapper extends Component {
    static propTypes = {
      location: PropTypes.object.isRequired
    };

    render() {
      const queryParams = parseQueryString(location.search);
      return <WrappedComponent {...this.props} queryParams={queryParams} />;
    }
  }

  return withRouter(QueryParamsWrapper);
};

export default withRouterAndQueryParams;
