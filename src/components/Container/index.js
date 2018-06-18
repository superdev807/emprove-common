'use strict';
/******************************
 * Bootstrap-container-like component
 ******************************/

import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './styles.scss';

const Container = ({ className, fluid, children }) => (
  <div className={cx('container', { 'container--boxed': !fluid }, className)}>{children}</div>
);

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Container;
