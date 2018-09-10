'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconPrevArrow = props => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path d="M24 0H0v24h24V0z" fill="none" />
    <path d="M16.17 17.165L11.015 12l5.154-5.165-1.587-1.587L7.83 12l6.752 6.752 1.588-1.587z" />
  </SvgIcon>
);

export default IconPrevArrow;
