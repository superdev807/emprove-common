'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = [{
  label: _react2.default.createElement(
    _react.Fragment,
    null,
    'LIGHT',
    _react2.default.createElement('br', null),
    'REFRESH'
  ),
  value: 1,
  barValues: { refinish: 40, replace: 0 },
  text: 'Freshen it up with a repaint, new flooring, and a few other upgrades'
}, {
  label: _react2.default.createElement(
    _react.Fragment,
    null,
    'UPGRADE',
    _react2.default.createElement('br', null),
    'FINISHES'
  ),
  value: 2,
  barValues: { refinish: 30, replace: 20 },
  text: 'A facelift for your space, with new hard surfaces and a repaint'
}, {
  label: _react2.default.createElement(
    _react.Fragment,
    null,
    'LIGHT',
    _react2.default.createElement('br', null),
    'RENOVATION'
  ),
  value: 3,
  barValues: { refinish: 25, replace: 60 },
  text: 'A brand new look, keeping plumbing and walls where they are'
}, {
  label: _react2.default.createElement(
    _react.Fragment,
    null,
    'FULL',
    _react2.default.createElement('br', null),
    'RENOVATION'
  ),
  value: 4,
  barValues: { refinish: 0, replace: 100 },
  text: 'Make it precisely yours by moving a wall or two, and relocating plumbing'
}];