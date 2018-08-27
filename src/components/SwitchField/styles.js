'use strict';

export const switchStyles = theme => ({
  root: {
    width: 50
  },
  switchBase: {
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
