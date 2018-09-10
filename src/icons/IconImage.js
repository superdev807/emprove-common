'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconImage = props => (
  <SvgIcon x="0px" y="0px" viewBox="0 0 24 24" {...props}>
    <rect fill="none" width="24" height="24" />
    <ellipse cx="6.1" cy="7.2" rx="2.4" ry="2.4" />
    <polygon points="1.4,19.3 10.7,9.5 14.9,14.2 16.2,12.9 22.6,19.3" />
  </SvgIcon>
);

export default IconImage;
