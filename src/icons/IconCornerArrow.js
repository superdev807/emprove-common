'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconCornerArrow = props => {
  const primary = props.primary || '#888';
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M5.693 7.107l1.414-1.414 8.485 8.485V6.4H17.6v11.2H6.4v-2.008h7.778L5.693 7.107z" fill={primary} />
    </SvgIcon>
  );
};

export default IconCornerArrow;
