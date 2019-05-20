'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconPriceGraph = props => (
  <SvgIcon x={0} y={0} viewBox="0 0 24 24" xmlSpace="preserve" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12.271 5.948c-1.325-.344-1.751-.701-1.751-1.255 0-.636.59-1.08 1.576-1.08 1.039 0 1.425.496 1.46 1.226h1.29c-.041-1.004-.654-1.927-1.874-2.224V1.336h-1.751v1.261c-1.133.245-2.043.981-2.043 2.108 0 1.349 1.115 2.02 2.744 2.411 1.46.35 1.751.864 1.751 1.407 0 .403-.286 1.045-1.576 1.045-1.203 0-1.676-.537-1.74-1.226H9.072c.07 1.279 1.028 1.997 2.148 2.236v1.267h1.751V10.59c1.138-.216 2.043-.876 2.043-2.073.001-1.658-1.417-2.224-2.743-2.569z" />
    <path d="M16.277 9.505l2.449 2.449-5.218 5.218-4.277-4.277-7.923 7.934 1.508 1.508 6.415-6.415 4.277 4.277 6.736-6.726 2.449 2.449V9.505h-6.416z" />
  </SvgIcon>
);

export default IconPriceGraph;