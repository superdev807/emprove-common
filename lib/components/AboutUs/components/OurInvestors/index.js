'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Investor = _interopRequireDefault(require("./Investor"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var investors = [{
  id: 1,
  name: '',
  imageKey: 'ic_investor_01.svg'
}, {
  id: 2,
  name: '',
  imageKey: 'ic_investor_02.svg'
}, {
  id: 3,
  name: '',
  imageKey: 'ic_investor_01.svg'
}];

var OurInvestors = function OurInvestors(props) {
  var theInvestors = investors.map(function (investor) {
    var investorWithImageUrl = _objectSpread({}, investor, {
      imageUrl: "/images/".concat(investor.imageKey)
    });

    return _react["default"].createElement("div", {
      key: investor.id,
      className: "our-investors__investor"
    }, _react["default"].createElement(_Investor["default"], {
      investor: investorWithImageUrl
    }));
  });
  return _react["default"].createElement("section", {
    className: "our-investors"
  }, _react["default"].createElement("div", {
    className: "our-investors__title"
  }, "Our ", _react["default"].createElement("strong", null, "Investors")), _react["default"].createElement("p", {
    className: "our-investors__paragraph"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis, tellus non aliquam gravida, augue dui lacinia felis, nec auctor mi dui nec lacus. Ut in iaculis nulla."), _react["default"].createElement("div", {
    className: "our-investors__investors"
  }, theInvestors));
};

var _default = OurInvestors;
exports["default"] = _default;