'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconUL2Molding = props => {
  const primary = props.primary || '#878787';
  const secondary = props.secondary || 'none';
  return (
    <SvgIcon x={0} y={0} viewBox="0 0 24 24" xmlSpace="preserve" {...props}>
      <path fill={secondary} d="M0 0h24v24H0z" />
      <path
        fill={primary}
        d="M22.731 1.885H1.269v20.229h.75V3.233L3.27 4.421v17.693h.041v.001h.93V4.76H22.73v-.125h.001v-.75h-.001v-.083H3.706L2.478 2.635h20.253z"
      />
      <path
        fill={primary}
        d="M6.353 22.114h.75V8.24l.417.425v13.449h.75V9.24l1.583 1.13v11.744h.75V11.037l.416.387v10.69h.375v.001h.562V11.948H22.73v-.312h.001v-.75h-11.19l-.36-.334h11.55v-.75H10.349l-1.284-.916h13.666v-.75H8.052l-.43-.437h15.109v-.75H6.353z"
      />
    </SvgIcon>
  );
};

export default IconUL2Molding;
