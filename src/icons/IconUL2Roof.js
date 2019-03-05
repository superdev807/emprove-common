'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconUL2Roof = props => {
  const primary = props.primary || '#878787';
  const secondary = props.secondary || 'none';
  return (<SvgIcon viewBox="0 0 24 24" {...props}>
    <path fill={secondary} d="M0 0h24v24H0z" />
    <path
      d="M23.1 15.643l-6.758-6.988a.374.374 0 0 0-.27-.114h-1.855v-.543a.375.375 0 0 0-.375-.375h-3.019a.375.375 0 0 0-.375.375v.543h-2.84c-.004 0-.007.003-.011.003a.565.565 0 0 0-.158.048.33.33 0 0 0-.059.038c-.015.011-.033.016-.045.03L.807 15.648a.377.377 0 0 0 .275.631h2.887c.101 0 .197-.04.268-.112l4.936-5.03 4.692 5.023a.376.376 0 0 0 .274.119h8.693c.15 0 .286-.09.346-.229a.379.379 0 0 0-.078-.407zm-8.654-6.352l5.758 6.238h-1.615l-4.371-4.735V9.291h.228zm1.597 6.238l-3.382-3.664h1.182c.195 0 .35-.151.368-.341l3.697 4.005h-1.865zm-2.575-4.414h-.759V8.373h.759v2.742zm-2.269-2.742h.76v2.164l-.76-.816V8.373zm-.75 1.096l-.164-.178h.164v.178zm-6.639 6.06H1.944l5.66-6.059 1.032 1.141-4.826 4.918zm4.662-6.238h1.163c.01.019.006.041.021.058l5.705 6.181H14.3L8.472 9.291zm12.413 6.238l-5.758-6.238h.787l6.032 6.238h-1.061z"
      fill={primary}
    />
  </SvgIcon >)
};

export default IconUL2Roof;