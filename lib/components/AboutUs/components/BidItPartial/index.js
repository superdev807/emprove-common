'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BidItPartial =
/*#__PURE__*/
function (_Component) {
  _inherits(BidItPartial, _Component);

  function BidItPartial() {
    _classCallCheck(this, BidItPartial);

    return _possibleConstructorReturn(this, _getPrototypeOf(BidItPartial).apply(this, arguments));
  }

  _createClass(BidItPartial, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          domain = _this$props.domain,
          onStep = _this$props.onStep,
          actionText = _this$props.actionText,
          action = _this$props.action;
      return _react["default"].createElement("div", {
        className: "partial__container"
      }, _react["default"].createElement("div", {
        id: "bidItImages",
        className: "bidItImages"
      }, _react["default"].createElement("div", {
        id: "bidItCircle",
        className: "bidItCircle"
      }, _react["default"].createElement("div", {
        id: "bidItStep1",
        className: (0, _classnames["default"])('bidItStep1', {
          onStep: onStep
        })
      }, _react["default"].createElement("div", {
        id: "bidItStep1Inner",
        className: "bidItStep1Inner",
        style: {
          backgroundImage: 'url(' + domain + 'images/bidItStep1.png)'
        },
        title: "Turn your project dream into a comprehensive request-for-proposal package for contractors to bid!"
      }, _react["default"].createElement("div", {
        className: "bidItStepNumber"
      }, "1"))), _react["default"].createElement("div", {
        id: "bidItStep2",
        className: (0, _classnames["default"])('bidItStep2', {
          onStep: onStep
        })
      }, _react["default"].createElement("div", {
        id: "bidItStep2Inner",
        className: "bidItStep2Inner",
        style: {
          backgroundImage: 'url(' + domain + 'images/bidItStep2.png)'
        },
        title: "Turn your project dream into a comprehensive request-for-proposal package for contractors to bid!"
      }, _react["default"].createElement("div", {
        className: "bidItStepNumber"
      }, "2"))), _react["default"].createElement("div", {
        id: "bidItStep3",
        className: (0, _classnames["default"])('bidItStep3', {
          onStep: onStep
        })
      }, _react["default"].createElement("div", {
        id: "bidItStep3Inner",
        className: "bidItStep3Inner",
        style: {
          backgroundImage: 'url(' + domain + 'images/bidItStep3.png)'
        },
        title: "Turn your project dream into a comprehensive request-for-proposal package for contractors to bid!"
      }, _react["default"].createElement("div", {
        className: "bidItStepNumber"
      }, "3"))))), _react["default"].createElement("div", {
        id: "bidIt",
        className: (0, _classnames["default"])('partial__description', 'bidIt', {
          onStep: onStep
        })
      }, _react["default"].createElement("div", {
        id: "bidItTitle",
        className: "bidItTitle"
      }, "GET IT DONE"), _react["default"].createElement("div", {
        id: "bidItBody",
        className: "bidItBody"
      }, "When you're comfortable with your project details and estimate, we'll send it to at least three qualified contractors in your area. Review their preliminary pricing and select the pros to meet. After a site visit, your contractor can nail down a price."), _react["default"].createElement("div", {
        id: "bidItButton",
        className: "partial__button"
      }, actionText && _react["default"].createElement(_Button["default"], {
        className: "partial__button-start-now",
        variant: "contained",
        color: "primary",
        onClick: action,
        style: {
          display: 'block',
          marginTop: '5vh'
        }
      }, actionText))));
    }
  }]);

  return BidItPartial;
}(_react.Component);

_defineProperty(BidItPartial, "propTypes", {
  domain: _propTypes["default"].string,
  onStep: _propTypes["default"].bool,
  actionText: _propTypes["default"].string,
  action: _propTypes["default"].func
});

var _default = BidItPartial;
exports["default"] = _default;