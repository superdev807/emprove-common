'use strict';

import React from 'react';
import cx from 'classnames';

import './styles.scss';

const FooterList = (props) => {
  return (
    <ul className={cx('footer-list', props.className)}>
      {props.items.map(item => <li className="footer-list__item">{item}</li>)}
    </ul>
  );
};

export default FooterList;
