'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconDoubleArrowsDown = props => (
  <SvgIcon x={0} y={0} viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M23.9 23.9L.1 24V0h23.8v23.9z" />
    <path
      fill="#888"
      d="M17.3 4.188l1.645 1.631-6.942 7-7-6.942 1.631-1.645 5.355 5.299L17.3 4.188m.029 6.971l1.645 1.631-6.942 7-7-6.942 1.631-1.645 5.355 5.299 5.311-5.343z"
    />
  </SvgIcon>
);

export default IconDoubleArrowsDown;
