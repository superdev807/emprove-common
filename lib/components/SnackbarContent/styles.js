'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _green = _interopRequireDefault(require("@material-ui/core/colors/green"));

var _amber = _interopRequireDefault(require("@material-ui/core/colors/amber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(theme) {
  return {
    success: {
      backgroundColor: _green["default"][600]
    },
    error: {
      backgroundColor: theme.palette.error.dark
    },
    info: {
      backgroundColor: theme.palette.primary.dark
    },
    warning: {
      backgroundColor: _amber["default"][700]
    },
    invitation: {
      backgroundColor: _green["default"][600]
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing.unit
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    },
    contentMessage: {
      flex: 1
    },
    contentAction: _defineProperty({}, theme.breakpoints.down('sm'), {
      padding: 0
    })
  };
};

exports["default"] = _default;