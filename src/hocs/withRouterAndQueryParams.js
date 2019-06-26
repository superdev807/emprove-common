'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { jsonToQueryString, parseQueryString } from '../utils/pureFunctions';

const withRouterAndQueryParams = WrappedComponent => {
  class QueryParamsWrapper extends Component {
    static propTypes = {
      location: PropTypes.object.isRequired
    };

    pushWithQuery = ({ location, queryParams }) => {
      this.props.history.push({
        ...location,
        search: jsonToQueryString(queryParams)
      });
    };

    replaceWithQuery = ({ location, queryParams }) => {
      this.props.history.replace({
        ...location,
        search: jsonToQueryString(queryParams)
      });
    };

    render() {
      const queryParams = parseQueryString(location.search);
      return (
        <WrappedComponent
          {...this.props}
          queryParams={queryParams}
          pushWithQuery={this.pushWithQuery}
          replaceWithQuery={this.replaceWithQuery}
        />
      );
    }
  }

  return withRouter(QueryParamsWrapper);
};

export default withRouterAndQueryParams;
