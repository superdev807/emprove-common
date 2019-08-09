'use strict';

import React from 'react';
import FooterList from '../FooterList';
var growWithUsReasons = ['Build Your Professional Brand', 'Lower Your Overhead Costs'];

var GrowWithUs = function GrowWithUs(props) {
  return React.createElement(FooterList, {
    items: growWithUsReasons
  });
};

export default GrowWithUs;