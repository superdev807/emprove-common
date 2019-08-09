'use strict';

import React from 'react';
import FooterList from '../FooterList';
var workWithUsReasons = ['We have the Most Qualified Consumers', 'You Can Price Free and Efficently'];

var WorkWithUs = function WorkWithUs(props) {
  return React.createElement(FooterList, {
    items: workWithUsReasons
  });
};

export default WorkWithUs;