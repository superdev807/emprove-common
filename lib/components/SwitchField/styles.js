'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var switchStyles = exports.switchStyles = function switchStyles(theme) {
  return {
    root: {
      width: 50
    },
    switchBase: {
      width: 36,
      height: 36
    }
  };
};

var labelStyles = exports.labelStyles = function labelStyles(theme) {
  return {
    root: {
      marginLeft: -8,
      maxWidth: '100%' // to fix IE label overflow issue
    }
  };
};