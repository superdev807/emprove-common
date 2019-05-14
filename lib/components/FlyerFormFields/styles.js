'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
      margin: "".concat(theme.spacing.unit * 2, "px 0")
    },
    error: {
      fontSize: 10
    },
    imageField: {
      display: 'flex'
    },
    imageFieldLabel: {
      marginRight: theme.spacing.unit * 2
    },
    image: {
      position: 'relative',
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundColor: 'lightgray'
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
      right: 0
    },
    inputText: {
      textAlign: 'left'
    },
    textLabel: {
      padding: '6px 0 7px',
      fontWeight: 400,
      color: theme.palette.primary.main,
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
    },
    realtorInfo: {
      padding: 16,
      marginBottom: 16,
      border: '1px solid rgba(0, 0, 0, 0.12)'
    }
  };
};

exports["default"] = _default;