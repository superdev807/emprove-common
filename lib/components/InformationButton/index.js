'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InformationButton = exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _HelpOutline = _interopRequireDefault(require("@material-ui/icons/HelpOutline"));

var _IconInfo = _interopRequireDefault(require("../../icons/IconInfo"));

var _reactRedux = require("react-redux");

var _reduxModal = require("redux-modal");

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InformationButton =
/*#__PURE__*/
function (_Component) {
  _inherits(InformationButton, _Component);

  function InformationButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InformationButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InformationButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.props.showModal('informationModal', _this.props.information);
    });

    return _this;
  }

  _createClass(InformationButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          icon = _this$props.icon,
          iconClass = _this$props.iconClass,
          size = _this$props.size,
          tooltip = _this$props.tooltip,
          blink = _this$props.blink;
      var Icon = icon === 'help' ? _HelpOutline["default"] : _IconInfo["default"];
      return _react["default"].createElement(_IconButton["default"], {
        className: (0, _classnames["default"])('information-button', "information-button--size-".concat(size), className),
        onClick: this.handleClick
      }, _react["default"].createElement(Icon, {
        className: (0, _classnames["default"])("information-button--size-".concat(size), iconClass, {
          'information-button--blink': blink
        })
      }), tooltip);
    }
  }]);

  return InformationButton;
}(_react.Component);

exports.InformationButton = InformationButton;
InformationButton.propTypes = {
  information: _propTypes["default"].object.isRequired,
  size: _propTypes["default"].number,
  className: _propTypes["default"].string,
  icon: _propTypes["default"].oneOf(['help', 'info']),
  iconClass: _propTypes["default"].string,
  tooltip: _propTypes["default"].object,
  blink: _propTypes["default"].bool
};
InformationButton.defaultProps = {
  icon: 'info'
};
var actions = {
  showModal: _reduxModal.show
};

var _default = (0, _reactRedux.connect)(null, actions)(InformationButton); // for testing


exports["default"] = _default;