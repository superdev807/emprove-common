'use strict';
/******************************
 * Bootstrap-container-like component
 ******************************/

import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './styles.scss';

const Container = ({ className, componentRef, fluid, children }) => (
  <div ref={componentRef} className={cx('container', { 'container--boxed': !fluid }, className)}>
    {children}
  </div>
);

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  ref: PropTypes.node
};

export default Container;
