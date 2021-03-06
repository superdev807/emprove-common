'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconCircleArrowDown = props => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <circle cx={12.234} cy={12} r={10.286} fill="#fff" />
    <path d="M12.234 22.5c-5.79 0-10.5-4.71-10.5-10.5s4.71-10.5 10.5-10.5 10.5 4.71 10.5 10.5-4.71 10.5-10.5 10.5zm0-20.571C6.68 1.929 2.162 6.447 2.162 12S6.68 22.071 12.234 22.071 22.305 17.553 22.305 12 17.787 1.929 12.234 1.929z" />
    <g>
      <path d="M8.403 9.643l3.83 3.822 3.83-3.822 1.177 1.177-5.007 5.007-5.006-5.007 1.176-1.177z" />
    </g>
  </SvgIcon>
);

export default IconCircleArrowDown;
