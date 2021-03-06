'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TeamMember = _interopRequireDefault(require("./TeamMember"));

var _CatalogPhotoModal = _interopRequireDefault(require("../../../CatalogPhotoModal"));

var _enums = require("../../../../utils/enums");

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var teamMembers = [{
  id: 1,
  name: 'James Noel',
  position: 'CEO',
  dreamSpace: {
    style: 'Contemporary',
    homeArea: 'General Living',
    quality: 'Upgraded',
    homeAreaId: _enums.HomeArea.GENERAL_LIVING,
    imageKey: '01698_E_cimage.jpg'
  },
  description: 'Construction executive with 15+ years delivering large & highly refined projects on the contractor and owner sides.',
  photoKey: 'james_400x400.jpg',
  linkedIn: 'https://www.linkedin.com/in/james-noel/'
}, {
  id: 4,
  name: 'Ervi Bongso',
  position: 'Principal Engineer',
  dreamSpace: {
    style: 'Rustic',
    homeArea: 'General Living',
    quality: 'Best Value',
    homeAreaId: _enums.HomeArea.GENERAL_LIVING,
    imageKey: '02369_E_cimage.jpg'
  },
  description: 'Versatile full-stack engineer with deep startup experience. 10+ years building cross-platform & scalable consumer products.',
  photoKey: 'ervi_2_400x400.jpg',
  linkedIn: 'https://www.linkedin.com/in/ebongso/'
}, {
  id: 3,
  name: 'Andrew Pascal',
  position: 'Chairman',
  dreamSpace: {
    style: 'Contemporary',
    homeArea: 'Master Bathroom',
    quality: 'High-End',
    homeAreaId: _enums.HomeArea.MASTER_BATHROOM,
    imageKey: '00016_E_cimage.jpg'
  },
  description: 'An accomplished leader who has founded & built businesses in the digital casino & leisure entertainment industries.',
  photoKey: 'andrew_400x400.jpg',
  linkedIn: 'https://www.linkedin.com/in/andrew-pascal-926aaa27/'
}, {
  id: 5,
  name: 'Tonson Back',
  position: 'UI/UX Artist',
  dreamSpace: {
    style: 'Industrial',
    homeArea: 'General Living',
    quality: 'Upgraded',
    homeAreaId: _enums.HomeArea.GENERAL_LIVING,
    imageKey: '01990_E_cimage.jpg'
  },
  description: null,
  photoKey: 'tonson_400x400.jpg'
}, {
  id: 6,
  name: 'Mike Gonzales',
  position: 'Market Launcher',
  dreamSpace: {
    style: 'Contemporary',
    homeArea: 'General Living',
    quality: 'High-End',
    homeAreaId: _enums.HomeArea.GENERAL_LIVING,
    imageKey: '01762_E_cimage.jpeg'
  },
  description: null,
  photoKey: 'mike_400x400.jpg'
}, {
  id: 8,
  name: 'Domini Noel',
  position: 'Business Intelligence',
  dreamSpace: {
    style: 'Traditional',
    homeArea: 'Kitchen',
    quality: 'High-End',
    homeAreaId: _enums.HomeArea.KITCHEN,
    imageKey: '01844_E_cimage.jpg'
  },
  description: null,
  photoKey: 'domini_400x400.jpg'
}, {
  id: 17,
  name: 'Iris Sin',
  position: 'Interior Design Intelligence',
  dreamSpace: {
    style: 'Rustic',
    homeArea: 'Kitchen',
    quality: 'High-End',
    homeAreaId: _enums.HomeArea.KITCHEN,
    imageKey: '02443_E_cimage.jpg'
  },
  description: null,
  photoKey: 'iris_400x400.jpg'
}, {
  id: 9,
  name: 'Kiwook Kwon',
  position: 'Engineer',
  dreamSpace: {
    style: 'Rustic',
    homeArea: 'Master Bathroom',
    quality: 'Upgraded',
    homeAreaId: _enums.HomeArea.MASTER_BATHROOM,
    imageKey: '00599_E_cimage.jpg'
  },
  description: null,
  photoKey: 'kiwook_400x400.jpg'
}, {
  id: 11,
  name: 'Sousuke Tanaka',
  position: 'Engineer',
  dreamSpace: {
    style: 'Contemporary',
    homeArea: 'Master Bedroom',
    quality: 'High-End',
    homeAreaId: _enums.HomeArea.MASTER_BEDROOM,
    imageKey: '00234_E_cimage.jpg'
  },
  description: null,
  photoKey: 'sousuke_400x400.jpg'
}];

var TheTeam =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TheTeam, _React$Component);

  function TheTeam(props) {
    var _this;

    _classCallCheck(this, TheTeam);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TheTeam).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleHomeAreaClick", function (dreamSpace) {
      return function () {
        _this.setState({
          selectedDreamSpace: dreamSpace
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleCatalogPhotoModalClose", function () {
      _this.setState({
        selectedDreamSpace: undefined
      });
    });

    _this.state = {
      selectedDreamSpace: undefined
    };
    return _this;
  }

  _createClass(TheTeam, [{
    key: "getTeamMembers",
    value: function getTeamMembers() {
      var _this2 = this;

      return teamMembers.map(function (teamMember) {
        var memberWithPhotoUrl = _objectSpread({}, teamMember, {
          photoUrl: "/images/team/".concat(teamMember.photoKey)
        });

        return _react["default"].createElement("div", {
          key: teamMember.id,
          className: "the-team__team-member"
        }, _react["default"].createElement(_TeamMember["default"], {
          member: memberWithPhotoUrl,
          onHomeAreaClick: _this2.handleHomeAreaClick(teamMember.dreamSpace)
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("section", {
        className: (0, _classnames["default"])('the-team', this.props.className)
      }, _react["default"].createElement("div", {
        className: "the-team__title"
      }, "Meet ", _react["default"].createElement("strong", null, "the Team")), _react["default"].createElement("div", {
        className: "the-team__members"
      }, this.getTeamMembers()), _react["default"].createElement(_CatalogPhotoModal["default"], {
        image: this.state.selectedDreamSpace,
        open: this.state.selectedDreamSpace !== undefined,
        onClose: this.handleCatalogPhotoModalClose,
        fromContractor: this.props.fromContractor
      }));
    }
  }]);

  return TheTeam;
}(_react["default"].Component);

TheTeam.propTypes = {
  className: _propTypes["default"].string,
  fromContractor: _propTypes["default"].bool
};
TheTeam.defaultProps = {
  fromContractor: false
};
var _default = TheTeam;
exports["default"] = _default;