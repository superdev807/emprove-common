'use strict';

import React from 'react';
import FooterList from '../FooterList';
import './styles.scss';
/* eslint-disable react/jsx-key */

var instructions = [React.createElement("span", {
  className: "how-to-use-subtitle"
}, "STYLE IT"), 'Be inspired by our PrettySmart photos', 'Create Styleboards', React.createElement("span", {
  className: "how-to-use-subtitle"
}, "ESTIMATE IT"), 'Affordability assurance', 'Submit your project', React.createElement("span", {
  className: "how-to-use-subtitle"
}, "GET IT DONE"), 'Receive a comprehensive Project Plan', 'Get preliminary pricing from qualified contractors', 'Compare proposals to make a well informed selection', 'Create a General Contractor work agreement'];
/* eslint-enable react/jsx-key */

var HowToUse = function HowToUse(props) {
  return React.createElement(FooterList, {
    items: instructions
  });
};

export default HowToUse;