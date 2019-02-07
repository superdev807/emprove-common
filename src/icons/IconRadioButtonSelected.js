'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconRadioButtonSelected = props => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path d="M12 3.667A8.336 8.336 0 0 0 3.667 12c0 4.6 3.733 8.333 8.333 8.333S20.333 16.6 20.333 12 16.6 3.667 12 3.667zm0 15A6.665 6.665 0 0 1 5.333 12c0-3.683 2.983-6.667 6.667-6.667S18.667 8.317 18.667 12A6.666 6.666 0 0 1 12 18.667z" />
    <circle cx={12} cy={12} r={4.167} />
    <path d="M2 2h20v20H2V2z" fill="none" />
  </SvgIcon>
);

export default IconRadioButtonSelected;
