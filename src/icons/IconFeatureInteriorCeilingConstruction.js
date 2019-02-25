'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconFeatureInteriorCeilingConstruction = props => {
  const primary = props.primary || '#878787';
  const secondary = props.secondary || 'none';
  return (<SvgIcon viewBox="0 0 24 24" {...props}>
    <path fill={secondary} d="M0 0h24v24H0z" />
    <path
      d="M23.74 6.677a.375.375 0 0 0-.375-.375H.827a.375.375 0 0 0-.375.375v1.311l.002.008c0 .011.005.021.007.032a.377.377 0 0 0 .045.141c.004.007.003.016.007.023l6.074 9.336a.377.377 0 0 0 .314.171h10.39a.382.382 0 0 0 .315-.171l6.074-9.336c.006-.009.007-.02.012-.03a.32.32 0 0 0 .027-.069.355.355 0 0 0 .015-.072l.005-.026.002-.008v-1.31zm-9.397 10.271l.945-2.905h3.689l-1.89 2.905h-2.744zm-3.706 0l-.945-2.905H14.5l-.945 2.905h-2.918zm-1.19-3.655L7.843 8.362h8.506l-1.605 4.931H9.447zm10.019 0h-3.933l1.604-4.931h5.536l-3.124 4.801-.083.13zM1.202 7.052H22.99v.561H1.202v-.561zm5.853 1.31l1.604 4.931H4.726L1.519 8.362h5.536zm-1.841 5.681h3.689l.945 2.905H7.104l-1.89-2.905z"
      fill={primary}
    />
  </SvgIcon >)
};

export default IconFeatureInteriorCeilingConstruction;
