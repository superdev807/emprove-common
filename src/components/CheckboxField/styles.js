'use strict';

export const checkboxStyles = theme => ({
  root: {
    width: 36,
    height: 36
  }
});

export const styles = theme => ({
  rootLabel: {
    marginLeft: -8,
    maxWidth: '100%' // to fix IE label overflow issue
  },
  redLabel: {
    color: theme.palette.error.main
  }
});
