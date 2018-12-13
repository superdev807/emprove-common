'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (theme) {
  return {
    topIcon: {
      color: theme.palette.text.primary,
      fontSize: 24,
      position: 'relative'
    },
    topIconBox: {
      textAlign: 'right',
      padding: 0
    },
    dialogContent: {
      width: 1200,
      height: 800,
      maxWidth: '100%',
      margin: '0 auto'
    },
    noMarginTop: {
      marginTop: 0
    },
    downloadButton: {
      width: '60vw',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: 32,
      zIndex: 10
    }
  };
};