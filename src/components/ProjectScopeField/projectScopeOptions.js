import React, { Fragment } from 'react';

module.exports = [
  {
    label: (
      <Fragment>
        REPAINT<br />ONLY
      </Fragment>
    ),
    value: 1,
    barValues: { refinish: 40, replace: 0 },
    text: 'Freshen your space up with a new coat of paint'
  },
  {
    label: (
      <Fragment>
        UPGRADE<br />FINISHES
      </Fragment>
    ),
    value: 2,
    barValues: { refinish: 30, replace: 20 },
    text: 'A facelift for your space, with new hard surfaces and a repaint'
  },
  {
    label: (
      <Fragment>
        LIGHT<br />RENOVATION
      </Fragment>
    ),
    value: 3,
    barValues: { refinish: 25, replace: 60 },
    text: 'A brand new look, keeping plumbing and walls where they are'
  },
  {
    label: (
      <Fragment>
        FULL<br />RENOVATION
      </Fragment>
    ),
    value: 4,
    barValues: { refinish: 0, replace: 100 },
    text: 'Make it precisely yours by moving a wall or two, and relocating plumbing'
  }
];
