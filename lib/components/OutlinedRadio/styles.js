'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.radioStyles = exports.labelStyles = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var controlHeight = 32;
var controlWidth = 24;
var borderRadius = 4;

var labelStyles = function labelStyles(theme) {
  return {
    root: _defineProperty({
      borderRadius: borderRadius,
      border: "1px solid ".concat(theme.palette.primary.main),
      height: controlHeight,
      marginLeft: 'auto',
      marginRight: 'auto',
      '&$disabled': {
        border: 'none',
        paddingLeft: controlWidth
      }
    }, theme.breakpoints.down('sm'), {
      width: '100%'
    }),
    disabled: {},
    label: _defineProperty({
      color: theme.palette.primary.main,
      textAlign: 'center',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    }, theme.breakpoints.up('md'), {
      minWidth: 80
    })
  };
};

exports.labelStyles = labelStyles;

var radioStyles = function radioStyles(theme) {
  return {
    root: {
      borderRadius: 0,
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      width: controlWidth,
      height: controlHeight
    },
    colorPrimary: {
      color: theme.palette.primary.main,
      borderRight: "1px solid ".concat(theme.palette.primary.main),
      '&$checked': {
        backgroundColor: theme.palette.primary.main,
        color: 'white'
      }
    },
    checked: {}
  };
};

exports.radioStyles = radioStyles;

var _default = function _default(theme) {
  return {
    checkIcon: {
      width: controlHeight / 2,
      height: controlHeight / 2
    }
  };
};

exports["default"] = _default;