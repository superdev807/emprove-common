'use strict';

import React from 'react';
import cx from 'classnames';
import './styles.scss';

var FooterList = function FooterList(props) {
  return React.createElement("ul", {
    className: cx('footer-list', props.className)
  }, props.items.map(function (item, index) {
    return React.createElement("li", {
      key: index,
      className: "footer-list__item"
    }, item);
  }));
};

export default FooterList;