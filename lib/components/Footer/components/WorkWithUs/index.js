'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _FooterList = _interopRequireDefault(require("../FooterList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var workWithUsReasons = ['We have the Most Qualified Consumers', 'You Can Price Free and Efficently'];

var WorkWithUs = function WorkWithUs(props) {
  return _react.default.createElement(_FooterList.default, {
    items: workWithUsReasons
  });
};

var _default = WorkWithUs;
exports.default = _default;