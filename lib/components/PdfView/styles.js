'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(theme) {
  return {
    root: {
      overflow: 'hidden'
    },
    mobileRoot: {
      height: '100%',
      position: 'relative'
    },
    paper: {
      margin: "".concat(theme.spacing(1), "px 0")
    },
    mobileDocument: {
      height: 'calc(100% - 48px)',
      overflow: 'auto'
    },
    buttonContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      textAlign: 'center'
    }
  };
};

exports["default"] = _default;