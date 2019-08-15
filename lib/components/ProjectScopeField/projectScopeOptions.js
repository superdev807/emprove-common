'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var _default = [{
  label: _react["default"].createElement(_react.Fragment, null, "LIGHT", _react["default"].createElement("br", null), "REFRESH"),
  value: 1,
  barValues: {
    refinish: 40,
    replace: 0
  },
  text: 'Freshen it up with a repaint, new flooring, and a few other upgrades'
}, {
  label: _react["default"].createElement(_react.Fragment, null, "UPGRADE", _react["default"].createElement("br", null), "FINISHES"),
  value: 2,
  barValues: {
    refinish: 30,
    replace: 20
  },
  text: 'A facelift for your space, with new hard surfaces and a repaint'
}, {
  label: _react["default"].createElement(_react.Fragment, null, "LIGHT", _react["default"].createElement("br", null), "RENOVATION"),
  value: 3,
  barValues: {
    refinish: 25,
    replace: 60
  },
  text: 'A brand new look, keeping plumbing and walls where they are'
}, {
  label: _react["default"].createElement(_react.Fragment, null, "FULL", _react["default"].createElement("br", null), "RENOVATION"),
  value: 4,
  barValues: {
    refinish: 0,
    replace: 100
  },
  text: 'Make it precisely yours by moving a wall or two, and relocating plumbing'
}];
exports["default"] = _default;