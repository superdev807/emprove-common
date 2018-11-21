'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconMoreMenu = props => (
  <SvgIcon x={0} y={0} viewBox="0 0 24 24" {...props}>
    <circle cx={12} cy={12} r={12} />
    <path d="M19.393 19.393V4.607H4.607v14.786h14.786z" fill="none" />
    <path
      fill="#fff"
      d="M13.151 12a1.15 1.15 0 1 0-2.301 0 1.15 1.15 0 0 0 2.301 0M13.151 7.781a1.15 1.15 0 1 0-2.301 0 1.15 1.15 0 0 0 2.301 0"
    />
    <circle fill="#fff" cx={12} cy={16.219} r={1.151} />
  </SvgIcon>
);

export default IconMoreMenu;
