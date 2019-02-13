'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ErrorMessage = function ErrorMessage(props) {
  if (props.error) {
    return _react.default.createElement(_Paper.default, {
      className: (0, _classnames.default)('error-message', {
        'error-message--floating': props.floating
      }, props.className),
      elevation: 1
    }, _react.default.createElement("div", null, props.error), props.tryAgain && _react.default.createElement(_Button.default, {
      className: "error-message__try-again-button",
      variant: "contained",
      onClick: props.onTryAgainClick
    }, "Try Again"));
  }

  return null;
};

ErrorMessage.propTypes = {
  className: _propTypes.default.string,
  error: _propTypes.default.string,
  floating: _propTypes.default.bool,
  onTryAgainClick: _propTypes.default.func,
  tryAgain: _propTypes.default.bool
};
ErrorMessage.defaultProps = {
  floating: false,
  tryAgain: false
};
var _default = ErrorMessage;
exports.default = _default;