'use strict';

import "core-js/modules/es.array.concat";
export default (function (theme) {
  return {
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