'use strict';

import React from 'react';

import './styles.scss';

const FooterList = (props) => {
  return (
    <ul className="footer-list">
      {props.items.map(item => <li className="footer-list__item">{item}</li>)}
    </ul>
  );
};

export default FooterList;
