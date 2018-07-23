'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconSitePhotos = function IconSitePhotos(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 52 52', width: '24', height: '24' }, props),
    _react2.default.createElement('path', { d: 'M0 0h52v52H0V0z', fill: 'none' }),
    _react2.default.createElement('path', { d: 'M38.9 1.81c-5.494 0-10.163 3.559-11.849 8.489H4.18a3.226 3.226 0 0 0-3.223 3.223v33.416a3.226 3.226 0 0 0 3.223 3.223h41.389a3.678 3.678 0 0 0 3.675-3.673V21.394a12.453 12.453 0 0 0 2.184-7.055c0-6.909-5.62-12.529-12.528-12.529zm-8.188 11.131h6.79v-6.79h2.795v6.789h6.79v2.796h-6.79v6.79h-2.795v-6.79h-6.79v-2.795zm16.907 33.546c0 1.13-.92 2.048-2.05 2.048H4.18a1.6 1.6 0 0 1-1.598-1.598V13.522a1.6 1.6 0 0 1 1.598-1.598h22.428a12.555 12.555 0 0 0-.239 2.414c0 6.908 5.622 12.53 12.53 12.53 3.388 0 6.462-1.358 8.719-3.552v23.171z' }),
    _react2.default.createElement('path', { d: 'M18.413 30.7a2.921 2.921 0 0 0 2.919-2.922c0-1.614-1.307-2.923-2.919-2.923s-2.92 1.308-2.92 2.923a2.921 2.921 0 0 0 2.92 2.922zM28.986 36.184l-5.031-5.558-11.18 11.686h25.367l-7.639-7.652z' })
  );
};

exports.default = IconSitePhotos;