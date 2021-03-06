'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(theme) {
  return {
    root: {
      marginTop: theme.spacing(2)
    },
    label: {
      marginTop: theme.spacing(0.5)
    },
    field: {
      marginBottom: theme.spacing(2)
    },
    divider: {
      margin: "".concat(theme.spacing(2), "px 0")
    },
    error: {
      fontSize: 10
    },
    imageField: {
      width: 210,
      height: 140,
      display: 'flex'
    },
    imageFieldLabel: {
      marginRight: theme.spacing(2)
    },
    image: {
      position: 'relative',
      width: 210,
      height: 140,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: 'cover'
    },
    withRelativePosition: {
      position: 'relative'
    },
    helptext: {
      position: 'absolute',
      bottom: -6,
      width: 240,
      fontSize: 13,
      fontWeight: 400
    },
    addressFieldContainer: {
      position: 'relative'
    },
    arrowIcon: {
      position: 'absolute',
      right: 0,
      top: 5
    },
    inputText: {
      textAlign: 'left'
    },
    hidden: {
      display: 'none'
    }
  };
};

exports["default"] = _default;