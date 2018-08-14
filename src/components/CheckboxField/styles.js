'use strict';

export const checkboxStyles = theme => ({
  root: {
    width: 36,
    height: 36
  }
});

export const labelStyles = theme => ({
  root: {
    marginLeft: -8,
    maxWidth: '100%' // to fix IE label overflow issue
  }
});
