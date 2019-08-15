'use strict';

import React from 'react';
export var LinkRenderer = function LinkRenderer(props) {
  return React.createElement("a", {
    href: props.href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, props.children);
};
export var RawRenderer = function RawRenderer(props) {
  return props.children;
};