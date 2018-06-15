'use strict'

import React from 'react';
import FooterList from '../FooterList';

const growWithUsReasons = [
  'Build Your Professional Brand',
  'Lower Your Overhead Costs'
];

const GrowWithUs = (props) => {
  return (
    <FooterList items={growWithUsReasons} />
  );
};

export default GrowWithUs;
