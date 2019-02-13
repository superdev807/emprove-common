'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconGuestBathroom = _interopRequireDefault(require("../../icons/IconGuestBathroom"));

var _IconMasterBathroom = _interopRequireDefault(require("../../icons/IconMasterBathroom"));

var _IconPowderRoom = _interopRequireDefault(require("../../icons/IconPowderRoom"));

var _IconGuestBedroom = _interopRequireDefault(require("../../icons/IconGuestBedroom"));

var _IconMasterBedroom = _interopRequireDefault(require("../../icons/IconMasterBedroom"));

var _IconKitchen = _interopRequireDefault(require("../../icons/IconKitchen"));

var _IconGeneralLiving = _interopRequireDefault(require("../../icons/IconGeneralLiving"));

var _IconBackyard = _interopRequireDefault(require("../../icons/IconBackyard"));

var _IconDeck = _interopRequireDefault(require("../../icons/IconDeck"));

var _IconDen = _interopRequireDefault(require("../../icons/IconDen"));

var _IconFoyer = _interopRequireDefault(require("../../icons/IconFoyer"));

var _IconKitchenette = _interopRequireDefault(require("../../icons/IconKitchenette"));

var _IconLivingRoom = _interopRequireDefault(require("../../icons/IconLivingRoom"));

var _IconLoft = _interopRequireDefault(require("../../icons/IconLoft"));

var _IconOffice = _interopRequireDefault(require("../../icons/IconOffice"));

var _IconPatio = _interopRequireDefault(require("../../icons/IconPatio"));

var _enums = require("../../utils/enums");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var HomeAreaIcon =
/*#__PURE__*/
function (_Component) {
  _inherits(HomeAreaIcon, _Component);

  function HomeAreaIcon() {
    _classCallCheck(this, HomeAreaIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomeAreaIcon).apply(this, arguments));
  }

  _createClass(HomeAreaIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          homeAreaId = _this$props.homeAreaId,
          otherProps = _objectWithoutProperties(_this$props, ["homeAreaId"]);

      if (homeAreaId == _enums.HomeArea.BACKYARD) {
        return _react.default.createElement(_IconBackyard.default, otherProps);
      }

      if (homeAreaId == _enums.HomeArea.GUEST_BATHROOM) {
        return _react.default.createElement(_IconGuestBathroom.default, otherProps);
      }

      if (homeAreaId == _enums.HomeArea.MASTER_BATHROOM) {
        return _react.default.createElement(_IconMasterBathroom.default, otherProps);
      }

      if (homeAreaId == _enums.HomeArea.POWDER_ROOM) {
        return _react.default.createElement(_IconPowderRoom.default, otherProps);
      }

      if (homeAreaId == _enums.HomeArea.GUEST_BEDROOM) {
        return _react.default.createElement(_IconGuestBedroom.default, otherProps);
      }

      if (homeAreaId == _enums.HomeArea.MASTER_BEDROOM) {
        return _react.default.createElement(_IconMasterBedroom.default, otherProps);
      }

      if (homeAreaId == _enums.HomeArea.DECK) {
        return _react.default.createElement(_IconDeck.default, otherProps);
      }

      if (homeAreaId == _enums.HomeArea.DEN) {
        return _react.default.createElement(_IconDen.default, otherProps);
      }

      if (homeAreaId == _enums.HomeArea.FOYER) {
        return _react.default.createElement(_IconFoyer.default, otherProps);
      }

      if (homeAreaId == _enums.HomeArea.KITCHEN) {
        return _react.default.createElement(_IconKitchen.default, otherProps);
      }

      if (homeAreaId == _enums.HomeArea.KITCHENETTE) {
        return _react.default.createElement(_IconKitchenette.default, otherProps);
      }

      if (homeAreaId == _enums.HomeArea.LIVING_ROOM) {
        return _react.default.createElement(_IconLivingRoom.default, otherProps);
      }

      if (homeAreaId == _enums.HomeArea.LOFT) {
        return _react.default.createElement(_IconLoft.default, otherProps);
      }

      if (homeAreaId == _enums.HomeArea.OFFICE) {
        return _react.default.createElement(_IconOffice.default, otherProps);
      }

      if (homeAreaId == _enums.HomeArea.PATIO) {
        return _react.default.createElement(_IconPatio.default, otherProps);
      }

      if (homeAreaId == _enums.HomeArea.GENERAL_LIVING) {
        return _react.default.createElement(_IconGeneralLiving.default, otherProps);
      }

      return _react.default.createElement("div", null, "error ", homeAreaId);
    }
  }]);

  return HomeAreaIcon;
}(_react.Component);

HomeAreaIcon.propTypes = {
  homeAreaId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired
};
var _default = HomeAreaIcon;
exports.default = _default;