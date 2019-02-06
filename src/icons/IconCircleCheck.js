'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconCircleCheck = props => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <rect x="0.5" y="0.5" fill="none" fillRule="evenodd" clipRule="evenodd" width="23" height="23" />
    <circle cx="12" cy="12" r="11.5" />
    <polygon fill="#ffffff" points="17.053,6.513 9.762,13.797 6.947,10.988 5.106,12.829 9.763,17.487 18.894,8.355" />
  </SvgIcon>
);

export default IconCircleCheck;
