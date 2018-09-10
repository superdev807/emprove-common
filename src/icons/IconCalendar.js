'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconCalendar = props => (
  <SvgIcon x="0px" y="0px" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0,0h24v24H0V0z" />
    <path d="M19,3.6h-0.6v-2h-2.8v2H8.4v-2H5.6v2H5C3.7,3.6,2.6,4.7,2.6,6v14c0,1.3,1.1,2.4,2.4,2.4h14
      c1.3,0,2.4-1.1,2.4-2.4V6C21.4,4.7,20.3,3.6,19,3.6z M19,21.6H5c-0.9,0-1.6-0.7-1.6-1.6V9h17.2v11C20.6,20.9,19.9,21.6,19,21.6z" />
    <rect x="7" y="11" width="2" height="2" />
    <rect x="11" y="11" width="2" height="2" />
    <rect x="15" y="11" width="2" height="2" />
  </SvgIcon>
);

export default IconCalendar;
