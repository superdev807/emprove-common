'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(theme) {
  return {
    root: {
      width: '100%'
    },
    content: {
      backgroundColor: theme.palette.text.primary,
      borderRadius: 0,
      padding: "".concat(theme.spacing(1), "px ").concat(theme.spacing(2), "px"),
      width: '100%',
      maxWidth: '100%'
    },
    message: {
      flex: 1,
      padding: 0
    },
    action: {
      paddingLeft: theme.spacing(1),
      color: 'white',
      borderColor: 'white',
      marginRight: 0,
      transition: 'all 0.1s ease',
      '&:hover, &:active': {
        color: theme.palette.primary.main
      }
    },
    link: {
      color: 'white',
      textDecoration: 'underline'
    }
  };
};

exports["default"] = _default;