'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(theme) {
  var _ref;

  return _ref = {
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
    }
  }, _defineProperty(_ref, "imageField", {
    width: 210,
    height: 140
  }), _defineProperty(_ref, "hidden", {
    display: 'none'
  }), _ref;
};

exports["default"] = _default;