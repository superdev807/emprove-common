'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (theme) {
  return {
    inputWrapper: {
      position: 'relative',
      'label + &': {
        marginTop: 16
      }
    },
    icon: {
      position: 'absolute',
      cursor: 'pointer',
      right: 0,
      top: 3
    }
  };
};