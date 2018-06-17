'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const StaticLayout = (props) => {
  return (
    <div className="static-layout">
      {props.header}
      {props.children}
      {props.footer}
    </div>
  );
};

StaticLayout.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.element,
  header: PropTypes.element,
};

export default StaticLayout;
