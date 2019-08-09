'use strict';

import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import React from 'react';
import cx from 'classnames';
import './styles.scss';

var FooterList = function FooterList(props) {
  var _context;

  return React.createElement("ul", {
    className: cx('footer-list', props.className)
  }, _mapInstanceProperty(_context = props.items).call(_context, function (item, index) {
    return React.createElement("li", {
      key: index,
      className: "footer-list__item"
    }, item);
  }));
};

export default FooterList;