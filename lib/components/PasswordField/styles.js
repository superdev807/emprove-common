'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatorTextStyles = exports["default"] = void 0;

var _green = _interopRequireDefault(require("@material-ui/core/colors/green"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(theme) {
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
      padding: theme.spacing(1),
      position: 'relative',
      zIndex: 1
    },
    popperClose: {
      zIndex: theme.zIndex.tooltip,
      pointerEvents: 'none'
    }
  };
};

exports["default"] = _default;

var validatorTextStyles = function validatorTextStyles(theme) {
  return {
    icon: {
      fontSize: '0.8rem',
      verticalAlign: 'middle',
      marginRight: theme.spacing(0.5)
    },
    text: {
      verticalAlign: 'middle'
    },
    success: {
      color: _green["default"][600]
    },
    fail: {
      color: theme.palette.error.main
    },
    validationText: {
      display: 'block'
    }
  };
};

exports.validatorTextStyles = validatorTextStyles;