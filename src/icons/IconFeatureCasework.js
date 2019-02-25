'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconFeatureCasework = props => {
  const primary = props.primary || '#878787';
  const secondary = props.secondary || 'none';
  return (
    <SvgIcon x={0} y={0} viewBox="0 0 24 24" xmlSpace="preserve" {...props}>
      <path fill={secondary} d="M0 0h24v24H0z" />
      <path
        fill={primary}
        d="M22.506 2.617H1.495a.375.375 0 0 0-.375.375v16.593c0 .207.168.375.375.375h.692v1.048c0 .207.168.375.375.375h10.243a.375.375 0 0 0 .375-.375V19.96h.692a.375.375 0 0 0 .375-.375v-3.483h8.258a.375.375 0 0 0 .375-.375V2.992a.374.374 0 0 0-.374-.375zm-20.636.75h5.438V19.21H1.87V3.367zm10.56 17.266H2.937v-.67h9.493v.67zm1.068-1.423H8.221V3.376h-.163v-.009h5.439V19.21zm8.633-3.859h-7.883V3.367h7.883v11.984z"
      />
      <path
        fill={primary}
        d="M15.094 14.18h6.189a.375.375 0 0 0 .375-.375v-8.89a.375.375 0 0 0-.375-.375h-6.189a.375.375 0 0 0-.375.375v8.89c0 .207.168.375.375.375zm.375-.75v-2.214h5.439v2.214h-5.439zm0-2.964V8.253h5.439v2.213h-5.439zm5.44-5.176v2.213H15.47V5.29h5.439zM6.625 10.624a.375.375 0 0 0-.375.375v2.123a.375.375 0 0 0 .75 0v-2.123a.375.375 0 0 0-.375-.375zM8.844 10.624a.375.375 0 0 0-.375.375v2.123a.375.375 0 0 0 .75 0v-2.123a.375.375 0 0 0-.375-.375z"
      />
    </SvgIcon>
  );
};

export default IconFeatureCasework;
