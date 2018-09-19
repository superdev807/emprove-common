'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var checkboxStyles = exports.checkboxStyles = function checkboxStyles(theme) {
  return {
    root: {
      width: 36,
      height: 36
    }
  };
};

var styles = exports.styles = function styles(theme) {
  return {
    rootLabel: {
      marginLeft: -8,
      maxWidth: '100%' // to fix IE label overflow issue
    },
    redLabel: {
      color: theme.palette.error.main
    }
  };
};