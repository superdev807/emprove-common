'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(theme) {
  return _defineProperty({
    root: {
      width: '100%'
    },
    content: {
      backgroundColor: theme.palette.text.primary,
      borderRadius: 0,
      padding: "".concat(theme.spacing.unit, "px ").concat(theme.spacing.unit * 2, "px"),
      width: '100%',
      maxWidth: '100%'
    },
    message: {
      flex: 1,
      padding: 0
    },
    action: {
      paddingLeft: theme.spacing.unit,
      marginRight: 0
    },
    link: {
      color: 'white',
      textDecoration: 'underline'
    }
  }, "action", {
    color: 'white',
    borderColor: 'white',
    marginRight: 0,
    transition: 'all 0.1s ease',
    '&:hover, &:active': {
      color: theme.palette.primary.main
    }
  });
};

exports.default = _default;