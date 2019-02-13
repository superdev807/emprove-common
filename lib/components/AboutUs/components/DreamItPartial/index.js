'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var DreamItPartial =
/*#__PURE__*/
function (_Component) {
  _inherits(DreamItPartial, _Component);

  function DreamItPartial() {
    _classCallCheck(this, DreamItPartial);

    return _possibleConstructorReturn(this, _getPrototypeOf(DreamItPartial).apply(this, arguments));
  }

  _createClass(DreamItPartial, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          domain = _this$props.domain,
          onStep = _this$props.onStep,
          actionText = _this$props.actionText,
          action = _this$props.action;
      return _react.default.createElement("div", {
        className: "partial__container"
      }, _react.default.createElement("div", {
        id: "monitor",
        className: "monitor",
        style: {
          backgroundImage: 'url(' + domain + 'images/monitor.png)'
        },
        title: "Dream up your home improvements with Emprove's interactive scope definition cost estimation tools!"
      }, _react.default.createElement("iframe", {
        id: "monitorContent",
        className: "monitorContent",
        src: "https://player.vimeo.com/video/252014513?quality=720p&background=1",
        width: "640",
        height: "360",
        frameBorder: "0"
      })), _react.default.createElement("div", {
        id: "dreamIt",
        className: (0, _classnames.default)('dreamIt', 'partial__description', {
          onStep: onStep
        })
      }, _react.default.createElement("div", {
        id: "dreamItTitle",
        className: "dreamItTitle"
      }, "STYLE IT"), _react.default.createElement("div", {
        id: "dreamItBody",
        className: "dreamItBody"
      }, "Our photos aren't just pretty... they're PrettySmart! As you select photos you like, they send costing information to our", ' ', "estimator, the most advanced budgeting tool in the residential design and construction industry."), _react.default.createElement("div", {
        id: "dreamItButton",
        className: "partial__button"
      }, actionText && _react.default.createElement(_Button.default, {
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

  return DreamItPartial;
}(_react.Component);

_defineProperty(DreamItPartial, "propTypes", {
  domain: _propTypes.default.string,
  onStep: _propTypes.default.bool,
  actionText: _propTypes.default.string,
  action: _propTypes.default.func
});

var _default = DreamItPartial;
exports.default = _default;