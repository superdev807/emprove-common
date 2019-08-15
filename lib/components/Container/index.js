'use strict';
/******************************
 * Bootstrap-container-like component
 ******************************/

import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './styles.scss';

var Container = function Container(_ref) {
  var className = _ref.className,
      componentRef = _ref.componentRef,
      fluid = _ref.fluid,
      children = _ref.children;
  return React.createElement("div", {
    ref: componentRef,
    className: cx('container', {
      'container--boxed': !fluid
    }, className)
  }, children);
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  ref: PropTypes.node
};
export default Container;