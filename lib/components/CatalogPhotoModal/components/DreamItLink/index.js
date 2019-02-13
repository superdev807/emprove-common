'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactRouterDom = require("react-router-dom");

var _IconDreamIt = _interopRequireDefault(require("../../../../icons/IconDreamIt"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DreamItLink = function DreamItLink(props) {
  var path = "/browse/".concat(props.browseFilter);
  var TheLink;
  var linkProps = {};

  if (props.fromContractor) {
    TheLink = 'a';
    linkProps.href = process.env.CONSUMER_DOMAIN + path;
    linkProps.target = '_blank';
    linkProps.rel = 'noopener noreferrer';
  } else {
    TheLink = _reactRouterDom.Link;
    linkProps.to = path;
  }

  return _react.default.createElement("div", {
    className: (0, _classnames.default)('dream-it-link', {
      'dream-it-link--disabled': props.disabled
    })
  }, _react.default.createElement(_IconDreamIt.default, {
    className: "dream-it-link__icon"
  }), _react.default.createElement(TheLink, _extends({
    className: "dream-it-link__text"
  }, linkProps), "Go to Dream It"));
};

DreamItLink.propTypes = {
  browseFilter: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  fromContractor: _propTypes.default.bool
};
DreamItLink.defaultProps = {
  browseFilter: 'any-home',
  disabled: false,
  fromContractor: false
};
var _default = DreamItLink;
exports.default = _default;