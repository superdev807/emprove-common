'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatorTextStyles = undefined;

var _green = require('@material-ui/core/colors/green');

var _green2 = _interopRequireDefault(_green);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (theme) {
  return {
    input: {
      color: theme.palette.text.primary,
      '&:before': {
        borderBottomColor: theme.palette.bottomLine
      }
    },
    helperText: {
      color: theme.palette.text.primary
    },
    paper: {
      padding: theme.spacing.unit,
      position: 'relative',
      zIndex: 1
    },
    popperClose: {
      zIndex: theme.zIndex.tooltip,
      pointerEvents: 'none'
    }
  };
};

var validatorTextStyles = exports.validatorTextStyles = function validatorTextStyles(theme) {
  return {
    icon: {
      fontSize: '0.8rem',
      verticalAlign: 'middle',
      marginRight: theme.spacing.unit / 2
    },
    text: {
      verticalAlign: 'middle'
    },
    success: {
      color: _green2.default[600]
    },
    fail: {
      color: theme.palette.error.main
    }
  };
};