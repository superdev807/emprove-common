'use strict';

import React from 'react';

export const LinkRenderer = props => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );
};

export const RawRenderer = props => {
  return props.children;
};
