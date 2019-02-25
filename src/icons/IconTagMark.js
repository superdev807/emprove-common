'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconTagMark = props => {
  const primary = props.primary || '#888';
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        d="M15.928 2.5H8.072a.436.436 0 0 0-.436.436v18.128a.435.435 0 0 0 .743.31l3.489-3.454 3.765 3.465a.435.435 0 0 0 .731-.321V2.936a.436.436 0 0 0-.436-.436z"
        fill={primary}
      />
      <path fill="none" d="M0 0h24v24H0z" />
    </SvgIcon>
  );
};

export default IconTagMark;
