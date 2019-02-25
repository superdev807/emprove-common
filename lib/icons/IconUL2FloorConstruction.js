'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconUL2FloorConstruction = function IconUL2FloorConstruction(props) {
  var primary = props.primary || '#878787';
  var secondary = props.secondary || 'none';
  return _react.default.createElement(_SvgIcon.default, _extends({
    x: 0,
    y: 0,
    viewBox: "0 0 24 24",
    xmlSpace: "preserve"
  }, props), _react.default.createElement("path", {
    fill: secondary,
    d: "M0 0h24v24H0z"
  }), _react.default.createElement("path", {
    fill: primary,
    d: "M23.581 18.588l-1.713-3.851-1.271-2.854-1.27-2.854-1.27-2.854-.476-1.068a.375.375 0 0 0-.343-.223H6.76a.376.376 0 0 0-.343.223L.418 18.587a.373.373 0 0 0 .342.527h7.065l.005.001H23.239a.373.373 0 0 0 .342-.527zm-6.206-4.078l-1.635-1.396 3.13-3.269.94 2.113-2.435 2.552zm.336-4.539l-1.625-1.386L17.6 6.993l.939 2.111-.828.867zm-2.142-.842l1.623 1.384-1.906 1.991-.778-2.259 1.061-1.116zm1.287 5.924l-.509.533-.472-1.37.981.837zm2.474 1.593l-1.366 1.431-1.081-.936-.261-.757L20.14 12.7l.94 2.113-1.75 1.833zM17.271 6.252l-3.042 3.186-.784-2.276 1.458-1.527h2.094l.274.617zm-4.101.112l-.251-.729h.947l-.696.729zm-4.917 12l.385-3.164.145.151a.375.375 0 0 0 .469.059l.604-.377.607.377a.37.37 0 0 0 .395 0l.609-.377.611.378c.089.055.198.07.299.042l.493-.139.538 3.051H8.253zM7.003 5.636h2.04l-1.082 8.658v.004l-.47 4.066H1.338L7.003 5.636zm7.166 12.729l-.634-3.59a.378.378 0 0 0-.471-.296l-.732.206-.669-.414a.375.375 0 0 0-.395.001l-.609.377-.608-.377a.37.37 0 0 0-.396 0l-.543.339-.358-.373L9.8 5.636h2.325l4.388 12.729h-2.344zm4.557 0l2.685-2.812 1.251 2.812h-3.936z"
  }), _react.default.createElement("circle", {
    fill: primary,
    cx: 10.726,
    cy: 16.57,
    r: 0.67
  }), _react.default.createElement("circle", {
    fill: primary,
    cx: 7.663,
    cy: 6.591,
    r: 0.67
  }), _react.default.createElement("circle", {
    fill: primary,
    cx: 10.973,
    cy: 6.591,
    r: 0.67
  }), _react.default.createElement("circle", {
    fill: primary,
    cx: 3.288,
    cy: 17.216,
    r: 0.67
  }), _react.default.createElement("circle", {
    fill: primary,
    cx: 5.955,
    cy: 17.216,
    r: 0.67
  }));
};

var _default = IconUL2FloorConstruction;
exports.default = _default;