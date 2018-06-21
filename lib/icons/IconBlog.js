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

var IconBlog = function IconBlog(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({ x: '0px', y: '0px', viewBox: '0 0 24 24' }, props),
    _react2.default.createElement('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
    _react2.default.createElement('path', { d: 'M5.393 6.31h9.957a.375.375 0 0 0 0-.75H5.393a.375.375 0 0 0 0 .75zM5.018 17.558c0 .207.168.375.375.375h9.957a.375.375 0 0 0 0-.75H5.393a.375.375 0 0 0-.375.375zM5.393 14.059h3.11a.375.375 0 0 0 0-.75h-3.11a.375.375 0 0 0 0 .75z' }),
    _react2.default.createElement('path', { d: 'M22.89 6.527l-2.436-2.436a.377.377 0 0 0-.531 0l-.181.181V1.811c0-.697-.579-1.265-1.292-1.265H2.319C1.591.546 1 1.125 1 1.837v20.136c0 .816.685 1.48 1.526 1.48h13.25a.377.377 0 0 0 .261-.105l3.592-3.484a.373.373 0 0 0 .104-.219c.002-.017.01-.033.01-.051v-9.388l3.067-3.067.001-.002.079-.079a.377.377 0 0 0 0-.531zm-6.739 15.665v-2.223h2.292l-2.292 2.223zm2.842-2.973h-3.217a.375.375 0 0 0-.375.375v3.109H2.526c-.428 0-.776-.328-.776-.73V1.837c0-.298.256-.541.569-.541h16.132c.299 0 .542.23.542.515v3.211l-4.436 4.436a.355.355 0 0 0-.113-.023H5.393a.375.375 0 0 0 0 .75h8.437l-1.703 1.703a.39.39 0 0 0-.088.141l-1.331 3.779a.375.375 0 0 0 .48.479l3.767-1.344a.387.387 0 0 0 .14-.088l.012-.012 3.888-3.887v8.263zm-6.445-6.378l1.595 1.595-1.995.712-.305-.305.705-2.002zm1.564.501l-1.189-1.189 7.266-7.266 1.189 1.189-7.266 7.266z' })
  );
};

exports.default = IconBlog;