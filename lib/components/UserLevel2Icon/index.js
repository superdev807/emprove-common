'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconFeatureBathroomAccessories = _interopRequireDefault(require("../../icons/IconFeatureBathroomAccessories"));

var _IconFeatureCabinets = _interopRequireDefault(require("../../icons/IconFeatureCabinets"));

var _IconFeatureCasework = _interopRequireDefault(require("../../icons/IconFeatureCasework"));

var _IconFeatureCeilingFinishes = _interopRequireDefault(require("../../icons/IconFeatureCeilingFinishes"));

var _IconFeatureCommunicationCabling = _interopRequireDefault(require("../../icons/IconFeatureCommunicationCabling"));

var _IconFeatureCountertops = _interopRequireDefault(require("../../icons/IconFeatureCountertops"));

var _IconFeatureDevicesAndTrims = _interopRequireDefault(require("../../icons/IconFeatureDevicesAndTrims"));

var _IconFeatureElectricalWiring = _interopRequireDefault(require("../../icons/IconFeatureElectricalWiring"));

var _IconFeatureEquipment = _interopRequireDefault(require("../../icons/IconFeatureEquipment"));

var _IconFeatureExteriorDoorsAndWindows = _interopRequireDefault(require("../../icons/IconFeatureExteriorDoorsAndWindows"));

var _IconFeatureExteriorPaving = _interopRequireDefault(require("../../icons/IconFeatureExteriorPaving"));

var _IconFeatureExteriorWalls = _interopRequireDefault(require("../../icons/IconFeatureExteriorWalls"));

var _IconFeatureFireplaces = _interopRequireDefault(require("../../icons/IconFeatureFireplaces"));

var _IconFeatureFloor = _interopRequireDefault(require("../../icons/IconFeatureFloor"));

var _IconFeatureFloorConstruction = _interopRequireDefault(require("../../icons/IconFeatureFloorConstruction"));

var _IconFeatureInteriorCeilingConstruction = _interopRequireDefault(require("../../icons/IconFeatureInteriorCeilingConstruction"));

var _IconFeatureInteriorDoorsAndHardware = _interopRequireDefault(require("../../icons/IconFeatureInteriorDoorsAndHardware"));

var _IconFeatureInteriorWallConstruction = _interopRequireDefault(require("../../icons/IconFeatureInteriorWallConstruction"));

var _IconFeatureKitchenAppliances = _interopRequireDefault(require("../../icons/IconFeatureKitchenAppliances"));

var _IconFeatureLandscaping = _interopRequireDefault(require("../../icons/IconFeatureLandscaping"));

var _IconFeatureLighting = _interopRequireDefault(require("../../icons/IconFeatureLighting"));

var _IconFeatureMachanicalDucting = _interopRequireDefault(require("../../icons/IconFeatureMachanicalDucting"));

var _IconFeatureMachanicalPiping = _interopRequireDefault(require("../../icons/IconFeatureMachanicalPiping"));

var _IconFeatureMolding = _interopRequireDefault(require("../../icons/IconFeatureMolding"));

var _IconFeaturePlumbingFixtures = _interopRequireDefault(require("../../icons/IconFeaturePlumbingFixtures"));

var _IconFeaturePlumbingPiping = _interopRequireDefault(require("../../icons/IconFeaturePlumbingPiping"));

var _IconFeaturePoolAndWaterFeatures = _interopRequireDefault(require("../../icons/IconFeaturePoolAndWaterFeatures"));

var _IconFeatureRailings = _interopRequireDefault(require("../../icons/IconFeatureRailings"));

var _IconFeatureRoof = _interopRequireDefault(require("../../icons/IconFeatureRoof"));

var _IconFeatureShelving = _interopRequireDefault(require("../../icons/IconFeatureShelving"));

var _IconFeatureVanities = _interopRequireDefault(require("../../icons/IconFeatureVanities"));

var _IconFeatureWallBaseTrims = _interopRequireDefault(require("../../icons/IconFeatureWallBaseTrims"));

var _IconFeatureWallFinishes = _interopRequireDefault(require("../../icons/IconFeatureWallFinishes"));

var _IconFeatureWindowTreatments = _interopRequireDefault(require("../../icons/IconFeatureWindowTreatments"));

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

      switch (ul2Id) {
        case _enums.UserLevel2.FLOOR_CONSTRUCTION:
          return _react.default.createElement(_IconFeatureFloorConstruction.default, otherProps);

        case _enums.UserLevel2.EXTERIOR_WALLS:
          return _react.default.createElement(_IconFeatureExteriorWalls.default, otherProps);

        case _enums.UserLevel2.ROOF:
          return _react.default.createElement(_IconFeatureRoof.default, otherProps);

        case _enums.UserLevel2.INTERIOR_WALL_CONSTRUCTION:
          return _react.default.createElement(_IconFeatureInteriorWallConstruction.default, otherProps);

        case _enums.UserLevel2.INTERIOR_CEILING_CONSTRUCTION:
          return _react.default.createElement(_IconFeatureInteriorCeilingConstruction.default, otherProps);

        case _enums.UserLevel2.FLOORING:
          return _react.default.createElement(_IconFeatureFloor.default, otherProps);

        case _enums.UserLevel2.WALL_FINISHES:
          return _react.default.createElement(_IconFeatureWallFinishes.default, otherProps);

        case _enums.UserLevel2.CEILING_FINISHES:
          return _react.default.createElement(_IconFeatureCeilingFinishes.default, otherProps);

        case _enums.UserLevel2.EXTERIOR_DOORS_AND_WINDOWS:
          return _react.default.createElement(_IconFeatureExteriorDoorsAndWindows.default, otherProps);

        case _enums.UserLevel2.INTERIOR_DOORS_AND_HARDWARE:
          return _react.default.createElement(_IconFeatureInteriorDoorsAndHardware.default, otherProps);

        case _enums.UserLevel2.WALL_BASE_TRIM:
          return _react.default.createElement(_IconFeatureWallBaseTrims.default, otherProps);

        case _enums.UserLevel2.MOLDINGS:
          return _react.default.createElement(_IconFeatureMolding.default, otherProps);

        case _enums.UserLevel2.RAILINGS:
          return _react.default.createElement(_IconFeatureRailings.default, otherProps);

        case _enums.UserLevel2.CABINETS:
          return _react.default.createElement(_IconFeatureCabinets.default, otherProps);

        case _enums.UserLevel2.CASEWORK:
          return _react.default.createElement(_IconFeatureCasework.default, otherProps);

        case _enums.UserLevel2.SHELVING:
          return _react.default.createElement(_IconFeatureShelving.default, otherProps);

        case _enums.UserLevel2.VANITIES:
          return _react.default.createElement(_IconFeatureVanities.default, otherProps);

        case _enums.UserLevel2.COUNTERTOPS:
          return _react.default.createElement(_IconFeatureCountertops.default, otherProps);

        case _enums.UserLevel2.WINDOW_TREATMENTS:
          return _react.default.createElement(_IconFeatureWindowTreatments.default, otherProps);

        case _enums.UserLevel2.BATH_ACCESSORIES:
          return _react.default.createElement(_IconFeatureBathroomAccessories.default, otherProps);

        case _enums.UserLevel2.KITCHEN_APPLIANCES:
          return _react.default.createElement(_IconFeatureKitchenAppliances.default, otherProps);

        case _enums.UserLevel2.FIREPLACES:
          return _react.default.createElement(_IconFeatureFireplaces.default, otherProps);

        case _enums.UserLevel2.POOLS_AND_WATER_FEATURES:
          return _react.default.createElement(_IconFeaturePoolAndWaterFeatures.default, otherProps);

        case _enums.UserLevel2.PLUMBING_FIXTURES:
          return _react.default.createElement(_IconFeaturePlumbingFixtures.default, otherProps);

        case _enums.UserLevel2.LIGHTING:
          return _react.default.createElement(_IconFeatureLighting.default, otherProps);

        case _enums.UserLevel2.DEVICES_AND_TRIMS:
          return _react.default.createElement(_IconFeatureDevicesAndTrims.default, otherProps);

        case _enums.UserLevel2.PLUMBING_PIPING:
          return _react.default.createElement(_IconFeaturePlumbingPiping.default, otherProps);

        case _enums.UserLevel2.ELECTRICAL_WIRING:
          return _react.default.createElement(_IconFeatureElectricalWiring.default, otherProps);

        case _enums.UserLevel2.COMMUNICATIONS_CABLING:
          return _react.default.createElement(_IconFeatureCommunicationCabling.default, otherProps);

        case _enums.UserLevel2.MECHANICAL_PIPING:
          return _react.default.createElement(_IconFeatureMachanicalPiping.default, otherProps);

        case _enums.UserLevel2.MECHANICAL_DUCTING:
          return _react.default.createElement(_IconFeatureMachanicalDucting.default, otherProps);

        case _enums.UserLevel2.EQUIPMENT:
          return _react.default.createElement(_IconFeatureEquipment.default, otherProps);

        case _enums.UserLevel2.LANDSCAPING:
          return _react.default.createElement(_IconFeatureLandscaping.default, otherProps);

        case _enums.UserLevel2.EXTERIOR_PAVING:
          return _react.default.createElement(_IconFeatureExteriorPaving.default, otherProps);

        default:
          return _react.default.createElement("div", null, "N/A");
      }
    }
  }]);

  return UserLevel2Icon;
}(_react.Component);

UserLevel2Icon.propTypes = {
  ul2Id: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired
};
var _default = UserLevel2Icon;
exports.default = _default;