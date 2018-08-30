'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconCircleArrowUp = props => (
  <SvgIcon id="Layer_1" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <circle cx={12} cy={12} r={10.286} fill="#fff" />
    <path
      className="st2"
      d="M12 22.5C6.21 22.5 1.5 17.79 1.5 12S6.21 1.5 12 1.5 22.5 6.21 22.5 12 17.79 22.5 12 22.5zm0-20.571C6.447 1.929 1.929 6.447 1.929 12S6.447 22.071 12 22.071 22.071 17.553 22.071 12 17.553 1.929 12 1.929z"
    />
    <g>
      <path className="st2" d="M15.83 14.235L12 10.413l-3.83 3.822-1.177-1.177L12 8.051l5.007 5.007-1.177 1.177z" />
    </g>
  </SvgIcon>
);

export default IconCircleArrowUp;
