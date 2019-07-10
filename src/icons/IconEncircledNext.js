'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconEncircledNext = props => (
  <SvgIcon x="0px" y="0px" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <circle cx="12" cy="12" r="11" />
    <path
      fill="#fff"
      d="M12 23.375C5.727 23.375.625 18.273.625 12S5.727.625 12 .625 23.375 5.728 23.375 12 18.272 23.375 12 23.375zm0-22C6.141 1.375 1.375 6.142 1.375 12S6.141 22.625 12 22.625 22.625 17.859 22.625 12 17.858 1.375 12 1.375z"
    />
    <path fill="#fff" d="M9.913 15.825L13.729 12 9.913 8.175 11.087 7l5 5-5 5-1.174-1.175z" />
  </SvgIcon>
);

export default IconEncircledNext;
