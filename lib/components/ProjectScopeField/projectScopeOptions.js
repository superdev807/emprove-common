'use strict';

import React, { Fragment } from 'react';
export default [{
  label: React.createElement(Fragment, null, "LIGHT", React.createElement("br", null), "REFRESH"),
  value: 1,
  barValues: {
    refinish: 40,
    replace: 0
  },
  text: 'Freshen it up with a repaint, new flooring, and a few other upgrades'
}, {
  label: React.createElement(Fragment, null, "UPGRADE", React.createElement("br", null), "FINISHES"),
  value: 2,
  barValues: {
    refinish: 30,
    replace: 20
  },
  text: 'A facelift for your space, with new hard surfaces and a repaint'
}, {
  label: React.createElement(Fragment, null, "LIGHT", React.createElement("br", null), "RENOVATION"),
  value: 3,
  barValues: {
    refinish: 25,
    replace: 60
  },
  text: 'A brand new look, keeping plumbing and walls where they are'
}, {
  label: React.createElement(Fragment, null, "FULL", React.createElement("br", null), "RENOVATION"),
  value: 4,
  barValues: {
    refinish: 0,
    replace: 100
  },
  text: 'Make it precisely yours by moving a wall or two, and relocating plumbing'
}];