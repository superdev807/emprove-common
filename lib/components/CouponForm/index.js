'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _reactIntl = require("react-intl");

var _TranslatedMessage = _interopRequireDefault(require("../TranslatedMessage"));

var _constants = require("../../config/constants");

var _pureFunctions = require("../../utils/pureFunctions");

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

var CouponForm =
/*#__PURE__*/
function (_Component) {
  _inherits(CouponForm, _Component);

  function CouponForm() {
    _classCallCheck(this, CouponForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(CouponForm).apply(this, arguments));
  }

  _createClass(CouponForm, [{
    key: "getDiscountLabel",
    value: function getDiscountLabel(couponType, couponDiscount) {
      return couponType === _constants.COUPON_VALUE_TYPE.VALUE_DISCOUNT ? "$".concat(couponDiscount) : "".concat(couponDiscount, "%");
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          couponCode = _this$props.couponCode,
          couponError = _this$props.couponError,
          couponType = _this$props.couponType,
          finalAmount = _this$props.finalAmount;
      return this.props.couponApplied ? _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_Typography["default"], {
        variant: "caption"
      }, "Coupon ", _react["default"].createElement("strong", null, couponCode), " with ", this.getDiscountLabel(couponType, this.props.couponDiscount), " off applied"), (!this.props.forContractor || finalAmount === 0) && _react["default"].createElement(_Typography["default"], {
        variant: "caption"
      }, "Your new cost is", ' ', _react["default"].createElement("span", {
        className: "coupon-form__final-amount"
      }, _react["default"].createElement(_reactIntl.FormattedNumber, {
        value: (0, _pureFunctions.truncateToCentsWithoutRounding)(this.props.finalAmount),
        format: "currencyWithCents"
      })), "!")) : _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("span", {
        className: "coupon-form__label"
      }, "Coupon Code:"), _react["default"].createElement(_TextField["default"], {
        className: "coupon-form__input",
        classes: {
          root: 'coupon-form__input-root'
        },
        InputProps: {
          classes: {
            input: 'coupon-form__input-field'
          }
        },
        variant: "outlined",
        size: "small",
        value: couponCode,
        onChange: this.props.onCouponCodeChange
      }), _react["default"].createElement(_Button["default"], {
        className: "coupon-form__btn",
        variant: "contained",
        color: "primary",
        size: "small",
        onClick: this.props.onApplyCouponCode
      }, _react["default"].createElement(_TranslatedMessage["default"], {
        id: "HOP.CONCIERGE_PLAN.PAYMENT.COUPON_CODE",
        defaultMessage: "Apply"
      })), couponError && _react["default"].createElement(_Typography["default"], {
        color: "error",
        align: "center",
        variant: "caption",
        className: "coupon-form__error"
      }, couponError));
    }
  }]);

  return CouponForm;
}(_react.Component);

var _default = CouponForm;
exports["default"] = _default;