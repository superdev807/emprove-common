'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconCircleQuestionMark = _interopRequireDefault(require("../../icons/IconCircleQuestionMark"));

var _IconUL2BathroomAccessories = _interopRequireDefault(require("../../icons/IconUL2BathroomAccessories"));

var _IconUL2Cabinets = _interopRequireDefault(require("../../icons/IconUL2Cabinets"));

var _IconUL2Casework = _interopRequireDefault(require("../../icons/IconUL2Casework"));

var _IconUL2CeilingFinishes = _interopRequireDefault(require("../../icons/IconUL2CeilingFinishes"));

var _IconUL2CommunicationCabling = _interopRequireDefault(require("../../icons/IconUL2CommunicationCabling"));

var _IconUL2Countertops = _interopRequireDefault(require("../../icons/IconUL2Countertops"));

var _IconUL2DevicesAndTrims = _interopRequireDefault(require("../../icons/IconUL2DevicesAndTrims"));

var _IconUL2ElectricalWiring = _interopRequireDefault(require("../../icons/IconUL2ElectricalWiring"));

var _IconUL2Equipment = _interopRequireDefault(require("../../icons/IconUL2Equipment"));

var _IconUL2ExteriorDoorsAndWindows = _interopRequireDefault(require("../../icons/IconUL2ExteriorDoorsAndWindows"));

var _IconUL2ExteriorPaving = _interopRequireDefault(require("../../icons/IconUL2ExteriorPaving"));

var _IconUL2ExteriorWalls = _interopRequireDefault(require("../../icons/IconUL2ExteriorWalls"));

var _IconUL2Fireplaces = _interopRequireDefault(require("../../icons/IconUL2Fireplaces"));

var _IconUL2Floor = _interopRequireDefault(require("../../icons/IconUL2Floor"));

var _IconUL2FloorConstruction = _interopRequireDefault(require("../../icons/IconUL2FloorConstruction"));

var _IconUL2InteriorCeilingConstruction = _interopRequireDefault(require("../../icons/IconUL2InteriorCeilingConstruction"));

var _IconUL2InteriorDoorsAndHardware = _interopRequireDefault(require("../../icons/IconUL2InteriorDoorsAndHardware"));

var _IconUL2InteriorWallConstruction = _interopRequireDefault(require("../../icons/IconUL2InteriorWallConstruction"));

var _IconUL2KitchenAppliances = _interopRequireDefault(require("../../icons/IconUL2KitchenAppliances"));

var _IconUL2Landscaping = _interopRequireDefault(require("../../icons/IconUL2Landscaping"));

var _IconUL2Lighting = _interopRequireDefault(require("../../icons/IconUL2Lighting"));

var _IconUL2MachanicalDucting = _interopRequireDefault(require("../../icons/IconUL2MachanicalDucting"));

var _IconUL2MachanicalPiping = _interopRequireDefault(require("../../icons/IconUL2MachanicalPiping"));

var _IconUL2Molding = _interopRequireDefault(require("../../icons/IconUL2Molding"));

var _IconUL2PlumbingFixtures = _interopRequireDefault(require("../../icons/IconUL2PlumbingFixtures"));

var _IconUL2PlumbingPiping = _interopRequireDefault(require("../../icons/IconUL2PlumbingPiping"));

var _IconUL2PoolAndWaterFeatures = _interopRequireDefault(require("../../icons/IconUL2PoolAndWaterFeatures"));

var _IconUL2Railings = _interopRequireDefault(require("../../icons/IconUL2Railings"));

var _IconUL2Roof = _interopRequireDefault(require("../../icons/IconUL2Roof"));

var _IconUL2Shelving = _interopRequireDefault(require("../../icons/IconUL2Shelving"));

var _IconUL2Vanities = _interopRequireDefault(require("../../icons/IconUL2Vanities"));

var _IconUL2WallBaseTrims = _interopRequireDefault(require("../../icons/IconUL2WallBaseTrims"));

var _IconUL2WallFinishes = _interopRequireDefault(require("../../icons/IconUL2WallFinishes"));

var _IconUL2WindowTreatments = _interopRequireDefault(require("../../icons/IconUL2WindowTreatments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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

var userLevel2 = {
  2000: _IconUL2FloorConstruction["default"],
  2005: _IconUL2ExteriorWalls["default"],
  2010: _IconUL2Roof["default"],
  2015: _IconUL2InteriorWallConstruction["default"],
  2020: _IconUL2InteriorCeilingConstruction["default"],
  2025: _IconUL2Floor["default"],
  2030: _IconUL2WallFinishes["default"],
  2035: _IconUL2CeilingFinishes["default"],
  2040: _IconUL2ExteriorDoorsAndWindows["default"],
  2045: _IconUL2InteriorDoorsAndHardware["default"],
  2050: _IconUL2WallBaseTrims["default"],
  2055: _IconUL2Molding["default"],
  2060: _IconUL2Railings["default"],
  2065: _IconUL2Cabinets["default"],
  2070: _IconUL2Casework["default"],
  2075: _IconUL2Shelving["default"],
  2080: _IconUL2Vanities["default"],
  2085: _IconUL2Countertops["default"],
  2090: _IconUL2WindowTreatments["default"],
  2095: _IconUL2BathroomAccessories["default"],
  2100: _IconUL2KitchenAppliances["default"],
  2105: _IconUL2Fireplaces["default"],
  2110: _IconUL2PoolAndWaterFeatures["default"],
  2115: _IconUL2PlumbingFixtures["default"],
  2120: _IconUL2Lighting["default"],
  2125: _IconUL2DevicesAndTrims["default"],
  2130: _IconUL2PlumbingPiping["default"],
  2135: _IconUL2ElectricalWiring["default"],
  2140: _IconUL2CommunicationCabling["default"],
  2145: _IconUL2MachanicalPiping["default"],
  2150: _IconUL2MachanicalDucting["default"],
  2155: _IconUL2Equipment["default"],
  2160: _IconUL2Landscaping["default"],
  2165: _IconUL2ExteriorPaving["default"]
};

var UserLevel2Icon =
/*#__PURE__*/
function (_Component) {
  _inherits(UserLevel2Icon, _Component);

  function UserLevel2Icon() {
    _classCallCheck(this, UserLevel2Icon);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserLevel2Icon).apply(this, arguments));
  }

  _createClass(UserLevel2Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ul2Id = _this$props.ul2Id,
          otherProps = _objectWithoutProperties(_this$props, ["ul2Id"]);

      var IconComponent = userLevel2[ul2Id] || _IconCircleQuestionMark["default"];
      return _react["default"].createElement(IconComponent, otherProps);
    }
  }]);

  return UserLevel2Icon;
}(_react.Component);

UserLevel2Icon.propTypes = {
  ul2Id: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired
};
var _default = UserLevel2Icon;
exports["default"] = _default;