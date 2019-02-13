'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = exports.checkboxStyles = void 0;

var checkboxStyles = function checkboxStyles(theme) {
  return {
    root: {
      width: 36,
      height: 36
    }
  };
};

exports.checkboxStyles = checkboxStyles;

var styles = function styles(theme) {
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

exports.styles = styles;