'use strict';

export default (function (theme) {
  return {
    root: {
      position: 'relative',
      display: 'block',
      textAlign: 'center',
      width: 100,
      height: 100,
      cursor: 'pointer',
      marginTop: theme.spacing.unit,
      border: "1px solid ".concat(theme.palette.grey[300]),
      '&:hover svg': {
        opacity: 1
      }
    },
    image: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: 'cover'
    },
    addImage: {
      width: '50%',
      height: 36,
      opacity: 0.4,
      marginTop: '20%',
      transition: 'opacity 0.4s ease',
      fill: '#888'
    },
    addText: {
      margin: '8px 0',
      fontSize: '75%',
      textAlign: 'center'
    },
    error: {
      position: 'absolute',
      left: 0,
      bottom: -theme.spacing.unit * 2
    }
  };
});