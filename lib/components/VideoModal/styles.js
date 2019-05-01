'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(theme) {
  var _iconClose;

  return {
    dialogContent: {
      width: '90vh',
      height: '50vh',
      background: '#000'
    },
    fixedCloseIcon: _defineProperty({
      position: 'absolute',
      zIndex: 1,
      right: '-50px',
      width: '48px',
      height: '48px'
    }, theme.breakpoints.down('sm'), {
      left: '-8px',
      top: '-6px'
    }),
    iconClose: (_iconClose = {
      color: '#fff'
    }, _defineProperty(_iconClose, theme.breakpoints.down('sm'), {
      width: '0.7em',
      height: '0.7em',
      color: '#888888'
    }), _defineProperty(_iconClose, '&:hover', {
      color: '#fff'
    }), _iconClose),
    dialogContentPaper: _defineProperty({
      padding: '0 !important',
      overflow: 'inherit'
    }, theme.breakpoints.down('sm'), {
      overflow: 'hidden'
    }),
    videoContainer: {
      display: 'flex',
      flexDirection: 'column'
    }
  };
};

exports["default"] = _default;