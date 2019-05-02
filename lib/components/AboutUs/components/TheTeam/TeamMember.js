'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _HomeAreaIcon = _interopRequireDefault(require("../../../HomeAreaIcon"));

var _IconLinkedIn = _interopRequireDefault(require("../../../../icons/IconLinkedIn"));

var _TeamMemberPhoto = _interopRequireDefault(require("./TeamMemberPhoto"));

require("./team-member-styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var TeamMember =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TeamMember, _React$Component);

  function TeamMember(props) {
    var _this;

    _classCallCheck(this, TeamMember);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TeamMember).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handlePhotoMouseOver", function () {
      _this.setState({
        showOverlay: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePhotoMouseOut", function () {
      _this.setState({
        showOverlay: false
      });
    });

    _this.state = {
      showOverlay: false
    };
    return _this;
  }

  _createClass(TeamMember, [{
    key: "render",
    value: function render() {
      var member = this.props.member;
      return _react["default"].createElement("div", {
        className: "team-member",
        onMouseLeave: this.handlePhotoMouseOut
      }, _react["default"].createElement("div", {
        className: "team-member__photo"
      }, _react["default"].createElement(_TeamMemberPhoto["default"], {
        photoUrl: member.photoUrl,
        photoAlt: member.name,
        onMouseOver: this.handlePhotoMouseOver
      })), _react["default"].createElement("div", null, member.name), _react["default"].createElement("div", {
        className: "team-member__position"
      }, member.position), _react["default"].createElement("div", null, "My dream space:"), _react["default"].createElement("div", {
        className: "team-member__home-area-icon-container"
      }, _react["default"].createElement(_IconButton["default"], {
        onClick: this.props.onHomeAreaClick
      }, _react["default"].createElement(_HomeAreaIcon["default"], {
        className: "team-member__home-area-icon",
        homeAreaId: member.dreamSpace.homeAreaId,
        titleAccess: "".concat(member.dreamSpace.style, " ").concat(member.dreamSpace.homeArea)
      }))), member.description && _react["default"].createElement("div", {
        className: (0, _classnames["default"])('team-member__overlay', {
          'team-member__overlay--shown': this.state.showOverlay
        })
      }, _react["default"].createElement("div", {
        className: "team-member__overlay-content"
      }, _react["default"].createElement("div", {
        className: "team-member__description"
      }, member.description), _react["default"].createElement("div", {
        className: "team-member__bar"
      }), member.linkedIn && _react["default"].createElement("a", {
        href: member.linkedIn,
        target: "_blank",
        rel: "noopener noreferrer"
      }, _react["default"].createElement(_IconLinkedIn["default"], {
        className: "team-member__linked-in"
      })))));
    }
  }]);

  return TeamMember;
}(_react["default"].Component);

TeamMember.propTypes = {
  member: _propTypes["default"].object.isRequired,
  onHomeAreaClick: _propTypes["default"].func.isRequired
};
var _default = TeamMember;
exports["default"] = _default;