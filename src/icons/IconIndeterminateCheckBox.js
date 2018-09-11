'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconIndeterminateCheckBox = props => (
  <SvgIcon x="0px" y="0px" viewBox="0 0 24 24" {...props}>
    <defs>
      <path d="M0 0h24v24H0z" id="a" />
    </defs>
    <clipPath id="b">
      <use overflow="visible" />
    </clipPath>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z" />
  </SvgIcon>
);

export default IconIndeterminateCheckBox;
