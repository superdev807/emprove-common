'use strict';

import React from 'react';
import FooterList from '../FooterList';

const workWithUsReasons = [
  'We have the Most Qualified Consumers',
  'You Can Price Free and Efficently'
];

const WorkWithUs = (props) => {
  return (
    <FooterList items={workWithUsReasons} />
  );
};

export default WorkWithUs;
