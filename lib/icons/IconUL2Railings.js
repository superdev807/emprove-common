'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var IconUL2Railings = function IconUL2Railings(props) {
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
    d: "M23.37 20.82h-.42V9.538c.187-.24.304-.538.304-.866a1.415 1.415 0 1 0-2.73-.517l-8.659-3.548c.141-.22.226-.48.226-.761 0-.781-.635-1.416-1.415-1.416-.781 0-1.416.635-1.416 1.416 0 .243.067.468.175.668H.737a.375.375 0 0 0 0 .75h8.827v1.338H.889a.375.375 0 0 0 0 .75h3.842v6.697l-3.993-.012H.737a.375.375 0 0 0-.001.75l3.995.012v1.064H.671a.375.375 0 0 0 0 .75H11.645v2.104c0 .207.168.375.375.375h5.365v2.104c0 .207.168.375.375.375h5.609a.375.375 0 0 0 .001-.751zm-1.532-10.732c.126 0 .245-.022.361-.053v.414h-.724v-.414c.117.031.237.053.363.053zm-.362 1.111h.724v9.49h-.724v-9.49zm-.75-1.661v.787l-4.36-1.786a.283.283 0 0 0-.057-.023l-2.201-.901a.122.122 0 0 0-.017-.007l-2.304-.944V5.385l8.662 3.549c.042.226.141.43.277.604zm-2.23 4.757a.666.666 0 1 1 .002-1.332.666.666 0 0 1-.002 1.332zm-4.541-1.957a.666.666 0 1 1 .002-1.332.666.666 0 0 1-.002 1.332zm-2.168-4.865l1.793.735v2.106a1.412 1.412 0 0 0-1.04 1.358c0 .65.442 1.194 1.04 1.359v1.802l-1.793-.735V7.473zm2.543 5.558a1.414 1.414 0 0 0 1.041-1.359c0-.65-.443-1.193-1.041-1.358V8.515l1.49.611v6.625l-1.49-.61v-2.11zm2.24-3.598l1.551.635v2.203a1.412 1.412 0 0 0-1.04 1.358c0 .65.442 1.194 1.04 1.359v1.705l-1.551-.635V9.433zm2.301 5.555a1.414 1.414 0 0 0 1.041-1.359c0-.65-.443-1.193-1.041-1.358v-1.896l1.855.76v6.625L18.871 17v-2.012zm2.967-6.981a.665.665 0 1 1 0 1.33.665.665 0 0 1 0-1.33zM10.675 3.18a.666.666 0 1 1-.002 1.332.666.666 0 0 1 .002-1.332zM9.564 14.096a.38.38 0 0 0-.151-.034l-1.667-.005v-1.81a1.412 1.412 0 0 0 1.04-1.358c0-.65-.442-1.194-1.04-1.359V7.352h1.818v6.744zm-2.193-3.872a.666.666 0 1 1-.002 1.332.666.666 0 0 1 .002-1.332zm-1.89-2.872h1.515V9.53a1.414 1.414 0 0 0-1.041 1.359c0 .65.443 1.193 1.041 1.358v1.807l-1.515-.004V7.352zm0 7.449l3.93.011h.001a.364.364 0 0 0 .152-.034v1.084H5.481v-1.061zm4.833 1.062V5.208c.116.031.236.052.361.052.126 0 .245-.022.361-.053v10.655h-.722zm1.706 0h-.233v-.955l4.033 1.652v1.781h-3.425v-2.104a.375.375 0 0 0-.375-.374zm5.74 2.479h-1.19v-1.474l4.156 1.703v2.25h-2.591v-2.104a.375.375 0 0 0-.375-.375z"
  }), _react.default.createElement("path", {
    fill: primary,
    d: "M3.981 10.89c0-.781-.635-1.416-1.415-1.416-.781 0-1.416.635-1.416 1.416 0 .78.635 1.415 1.416 1.415.78 0 1.415-.635 1.415-1.415zm-2.081 0a.666.666 0 1 1 0 0z"
  }));
};

var _default = IconUL2Railings;
exports.default = _default;