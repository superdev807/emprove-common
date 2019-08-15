'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.labelStyles = exports.switchStyles = void 0;

var switchStyles = function switchStyles(theme) {
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

exports.switchStyles = switchStyles;

var labelStyles = function labelStyles(theme) {
  return {
    root: {
      marginLeft: -8,
      maxWidth: '100%' // to fix IE label overflow issue

    }
  };
};

exports.labelStyles = labelStyles;