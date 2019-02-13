'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _styles2 = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LoadingIndicator = function LoadingIndicator(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      opacity = _ref.opacity,
      fixed = _ref.fixed,
      size = _ref.size;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.refreshOverlay, _defineProperty({}, classes.fixedOverlay, fixed)),
    style: opacity !== undefined ? {
      backgroundColor: "rgba(255, 255, 255, ".concat(opacity, ")")
    } : {}
  }, _react.default.createElement(_CircularProgress.default, {
    size: size,
    thickness: 5
  }));
};

LoadingIndicator.propTypes = {
  className: _propTypes.default.string,
  classes: _propTypes.default.object.isRequired,
  opacity: _propTypes.default.number,
  size: _propTypes.default.number
};
LoadingIndicator.defaultProps = {
  size: 70
};

var _default = (0, _styles.withStyles)(_styles2.default)(LoadingIndicator);

exports.default = _default;