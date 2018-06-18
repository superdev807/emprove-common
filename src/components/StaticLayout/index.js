'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';

import './styles.scss';

const StaticLayout = (props) => {
  return (
    <div className="static-layout">
      {props.header}
      {props.children}
      {props.withoutFooterDivider ? null : <Divider />}
      {props.footer}
    </div>
  );
};

StaticLayout.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.element,
  header: PropTypes.element,
  withoutFooterDivider: PropTypes.bool
};

StaticLayout.defaultProps = {
  withoutFooterDivider: false
};

export default StaticLayout;
