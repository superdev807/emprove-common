'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(theme) {
  return {
    root: {
      marginTop: theme.spacing.unit * 2
    },
    label: {
      marginTop: theme.spacing.unit / 2
    },
    field: {
      marginBottom: theme.spacing.unit * 2
    },
    divider: {
      marginBottom: theme.spacing.unit * 2
    },
    error: {
      fontSize: 10
    },
    imageField: {
      display: 'flex'
    },
    imageFieldLabel: {
      marginRight: theme.spacing.unit * 2
    }
  };
};

exports.default = _default;