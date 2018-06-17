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
  children: PropTypes.func,
  footer: PropTypes.func,
  header: PropTypes.func,
};

export default StaticLayout;
