'use strict';

import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
export default (function (theme) {
  var _context;

  return {
    root: {
      width: '100%'
    },
    content: {
      backgroundColor: theme.palette.text.primary,
      borderRadius: 0,
      padding: _concatInstanceProperty(_context = "".concat(theme.spacing.unit, "px ")).call(_context, theme.spacing.unit * 2, "px"),
      width: '100%',
      maxWidth: '100%'
    },
    message: {
      flex: 1,
      padding: 0
    },
    action: {
      paddingLeft: theme.spacing.unit,
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
});