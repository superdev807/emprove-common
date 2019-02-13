'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

require("./style.scss");

var _styles2 = _interopRequireDefault(require("./styles"));

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

var ForProfessionals =
/*#__PURE__*/
function (_Component) {
  _inherits(ForProfessionals, _Component);

  function ForProfessionals() {
    _classCallCheck(this, ForProfessionals);

    return _possibleConstructorReturn(this, _getPrototypeOf(ForProfessionals).call(this));
  }

  _createClass(ForProfessionals, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onStep = _this$props.onStep,
          className = _this$props.className,
          classes = _this$props.classes,
          id = _this$props.id;
      return _react.default.createElement("div", {
        id: id,
        className: (0, _classnames.default)('forProfessionalsContainer', className)
      }, _react.default.createElement("div", {
        id: "forProfessionals",
        className: "forProfessionalsContent",
        title: "A free platform for contractors to efficiently bid for projects that are well-defined and vetted!"
      }, _react.default.createElement("div", {
        id: "contractorBox",
        className: (0, _classnames.default)({
          on: onStep
        }, 'contractorBox')
      }, _react.default.createElement("div", {
        className: "forProfessionalsContentTitle"
      }, "FOR ", _react.default.createElement("b", null, "PROFESSIONALS")), _react.default.createElement("div", {
        className: "orangeLine"
      }), _react.default.createElement("div", {
        id: "contractorText",
        className: "contractorTextStyle"
      }, "A new place to ", _react.default.createElement("b", null, "grow your business")), _react.default.createElement("div", null, _react.default.createElement("div", {
        id: "contractorButton",
        className: "contractorButtonContainer"
      }, _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "primary",
        onClick: this.props.onClick,
        fullWidth: true,
        className: classes.contractorButtonStyle
      }, "LEARN MORE"))))), _react.default.createElement("div", {
        style: {
          maxWidth: '85vw',
          margin: 'auto'
        }
      }, _react.default.createElement("div", {
        id: "forProfessionalsTextsBox",
        className: onStep ? 'on' : undefined,
        style: {
          position: 'relative'
        }
      }, _react.default.createElement("div", {
        className: "forProfessionalsHeaderContainer"
      }, _react.default.createElement("p", {
        className: "forProfessionalsHeader"
      }, _react.default.createElement("b", null, "PRICE"), " TO THE ", _react.default.createElement("b", null, "MOST QUALIFIED"), " CONSUMER IN THE MARKET ", _react.default.createElement("b", null, "FOR FREE"))), _react.default.createElement("div", {
        className: "forProfessionalsFirstTitleBoxStyle"
      }, _react.default.createElement("div", {
        className: "forProfessionalsTitleBox",
        style: {
          flex: 1,
          textAlign: 'right'
        }
      }, _react.default.createElement("p", {
        className: "forProfessionalsTitle"
      }, "Project pricing briefs emailed directly to your inbox ")), _react.default.createElement("div", {
        style: {
          margin: 'auto 2vw'
        }
      }, _react.default.createElement("img", {
        src: "./images/arrows-right.png"
      })), _react.default.createElement("div", {
        className: "forProfessionalsTitleBox",
        style: {
          flex: 1,
          textAlign: 'left'
        }
      }, _react.default.createElement("p", {
        className: "forProfessionalsTitle"
      }, "No more wasted time and money cold calling!"))), _react.default.createElement("div", {
        className: "forProfessionalsTitleBoxStyle"
      }, _react.default.createElement("div", {
        className: "forProfessionalsTitleBox",
        style: {
          flex: 1,
          textAlign: 'right'
        }
      }, _react.default.createElement("p", {
        className: "forProfessionalsTitle"
      }, "Scope of work is comprehensive and listed by trade")), _react.default.createElement("div", {
        style: {
          margin: 'auto 2vw'
        }
      }, _react.default.createElement("img", {
        src: "./images/arrows-right.png"
      })), _react.default.createElement("div", {
        className: "forProfessionalsTitleBox",
        style: {
          flex: 1,
          textAlign: 'left'
        }
      }, _react.default.createElement("p", {
        className: "forProfessionalsTitle"
      }, "The scope to price is clear and straightforward!"))), _react.default.createElement("div", {
        className: "forProfessionalsTitleBoxStyle"
      }, _react.default.createElement("div", {
        className: "forProfessionalsTitleBox",
        style: {
          flex: 1,
          textAlign: 'right'
        }
      }, _react.default.createElement("p", {
        className: "forProfessionalsTitle"
      }, "Consumer cost expectations set to local market rates")), _react.default.createElement("div", {
        style: {
          margin: 'auto 2vw'
        }
      }, _react.default.createElement("img", {
        src: "./images/arrows-right.png"
      })), _react.default.createElement("div", {
        className: "forProfessionalsTitleBox",
        style: {
          flex: 1,
          textAlign: 'left'
        }
      }, _react.default.createElement("p", {
        className: "forProfessionalsTitle"
      }, "Sticker-shock is removed from the equation!"))))));
    }
  }]);

  return ForProfessionals;
}(_react.Component);

ForProfessionals.propTypes = {
  onStep: _propTypes.default.bool.isRequired,
  onClick: _propTypes.default.func.isRequired
};

var _default = (0, _styles.withStyles)(_styles2.default)(ForProfessionals);

exports.default = _default;