'use strict';

import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const IconPlayVideo = props => (
  <SvgIcon x="0px" y="0px" viewBox="0 0 36 36" width="36" height="36" {...props}>
    <circle cx="18" cy="18" r="15.938" opacity=".9" fill="#fff" />
    <path d="M36 0H0v36h36V0z" fill="none" />
    <path d="M18 35.063C8.592 35.063.938 27.409.938 18S8.592.938 18 .938 35.063 8.591 35.063 18 27.409 35.063 18 35.063zm0-33C9.213 2.063 2.063 9.213 2.063 18S9.213 33.938 18 33.938 33.938 26.788 33.938 18 26.788 2.063 18 2.063z" />
    <path d="M15.01 11.808v12.383L24.74 18l-9.73-6.192z" />
  </SvgIcon>
);

export default IconPlayVideo;
