'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconGuestBathroom = require('../../icons/IconGuestBathroom');

var _IconGuestBathroom2 = _interopRequireDefault(_IconGuestBathroom);

var _IconMasterBathroom = require('../../icons/IconMasterBathroom');

var _IconMasterBathroom2 = _interopRequireDefault(_IconMasterBathroom);

var _IconPowderRoom = require('../../icons/IconPowderRoom');

var _IconPowderRoom2 = _interopRequireDefault(_IconPowderRoom);

var _IconGuestBedroom = require('../../icons/IconGuestBedroom');

var _IconGuestBedroom2 = _interopRequireDefault(_IconGuestBedroom);

var _IconMasterBedroom = require('../../icons/IconMasterBedroom');

var _IconMasterBedroom2 = _interopRequireDefault(_IconMasterBedroom);

var _IconKitchen = require('../../icons/IconKitchen');

var _IconKitchen2 = _interopRequireDefault(_IconKitchen);

var _IconGeneralLiving = require('../../icons/IconGeneralLiving');

var _IconGeneralLiving2 = _interopRequireDefault(_IconGeneralLiving);

var _IconBackyard = require('../../icons/IconBackyard');

var _IconBackyard2 = _interopRequireDefault(_IconBackyard);

var _IconDeck = require('../../icons/IconDeck');

var _IconDeck2 = _interopRequireDefault(_IconDeck);

var _IconDen = require('../../icons/IconDen');

var _IconDen2 = _interopRequireDefault(_IconDen);

var _IconFoyer = require('../../icons/IconFoyer');

var _IconFoyer2 = _interopRequireDefault(_IconFoyer);

var _IconKitchenette = require('../../icons/IconKitchenette');

var _IconKitchenette2 = _interopRequireDefault(_IconKitchenette);

var _IconLivingRoom = require('../../icons/IconLivingRoom');

var _IconLivingRoom2 = _interopRequireDefault(_IconLivingRoom);

var _IconLoft = require('../../icons/IconLoft');

var _IconLoft2 = _interopRequireDefault(_IconLoft);

var _IconOffice = require('../../icons/IconOffice');

var _IconOffice2 = _interopRequireDefault(_IconOffice);

var _IconPatio = require('../../icons/IconPatio');

var _IconPatio2 = _interopRequireDefault(_IconPatio);

var _enums = require('../../utils/enums');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeAreaIcon = function (_Component) {
  _inherits(HomeAreaIcon, _Component);

  function HomeAreaIcon() {
    _classCallCheck(this, HomeAreaIcon);

    return _possibleConstructorReturn(this, (HomeAreaIcon.__proto__ || Object.getPrototypeOf(HomeAreaIcon)).apply(this, arguments));
  }

  _createClass(HomeAreaIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          homeAreaId = _props.homeAreaId,
          otherProps = _objectWithoutProperties(_props, ['homeAreaId']);

      if (homeAreaId == _enums.HomeArea.BACKYARD) {
        return _react2.default.createElement(_IconBackyard2.default, otherProps);
      }
      if (homeAreaId == _enums.HomeArea.GUEST_BATHROOM) {
        return _react2.default.createElement(_IconGuestBathroom2.default, otherProps);
      }
      if (homeAreaId == _enums.HomeArea.MASTER_BATHROOM) {
        return _react2.default.createElement(_IconMasterBathroom2.default, otherProps);
      }
      if (homeAreaId == _enums.HomeArea.POWDER_ROOM) {
        return _react2.default.createElement(_IconPowderRoom2.default, otherProps);
      }
      if (homeAreaId == _enums.HomeArea.GUEST_BEDROOM) {
        return _react2.default.createElement(_IconGuestBedroom2.default, otherProps);
      }
      if (homeAreaId == _enums.HomeArea.MASTER_BEDROOM) {
        return _react2.default.createElement(_IconMasterBedroom2.default, otherProps);
      }
      if (homeAreaId == _enums.HomeArea.DECK) {
        return _react2.default.createElement(_IconDeck2.default, otherProps);
      }
      if (homeAreaId == _enums.HomeArea.DEN) {
        return _react2.default.createElement(_IconDen2.default, otherProps);
      }
      if (homeAreaId == _enums.HomeArea.FOYER) {
        return _react2.default.createElement(_IconFoyer2.default, otherProps);
      }
      if (homeAreaId == _enums.HomeArea.KITCHEN) {
        return _react2.default.createElement(_IconKitchen2.default, otherProps);
      }
      if (homeAreaId == _enums.HomeArea.KITCHENETTE) {
        return _react2.default.createElement(_IconKitchenette2.default, otherProps);
      }
      if (homeAreaId == _enums.HomeArea.LIVING_ROOM) {
        return _react2.default.createElement(_IconLivingRoom2.default, otherProps);
      }
      if (homeAreaId == _enums.HomeArea.LOFT) {
        return _react2.default.createElement(_IconLoft2.default, otherProps);
      }
      if (homeAreaId == _enums.HomeArea.OFFICE) {
        return _react2.default.createElement(_IconOffice2.default, otherProps);
      }
      if (homeAreaId == _enums.HomeArea.PATIO) {
        return _react2.default.createElement(_IconPatio2.default, otherProps);
      }
      if (homeAreaId == _enums.HomeArea.GENERAL_LIVING) {
        return _react2.default.createElement(_IconGeneralLiving2.default, otherProps);
      }

      return _react2.default.createElement(
        'div',
        null,
        'error ',
        homeAreaId
      );
    }
  }]);

  return HomeAreaIcon;
}(_react.Component);

HomeAreaIcon.propTypes = {
  homeAreaId: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired
};

exports.default = HomeAreaIcon;