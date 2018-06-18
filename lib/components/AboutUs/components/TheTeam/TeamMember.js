'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _HomeAreaIcon = require('../../../HomeAreaIcon');

var _HomeAreaIcon2 = _interopRequireDefault(_HomeAreaIcon);

var _TeamMemberPhoto = require('./TeamMemberPhoto');

var _TeamMemberPhoto2 = _interopRequireDefault(_TeamMemberPhoto);

require('./team-member-styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TeamMember = function (_React$Component) {
  _inherits(TeamMember, _React$Component);

  function TeamMember(props) {
    _classCallCheck(this, TeamMember);

    var _this = _possibleConstructorReturn(this, (TeamMember.__proto__ || Object.getPrototypeOf(TeamMember)).call(this, props));

    _this.handlePhotoMouseOver = function () {
      _this.setState({ showOverlay: true });
    };

    _this.handlePhotoMouseOut = function () {
      _this.setState({ showOverlay: false });
    };

    _this.state = {
      showOverlay: false
    };
    return _this;
  }

  _createClass(TeamMember, [{
    key: 'render',
    value: function render() {
      var member = this.props.member;

      return _react2.default.createElement(
        'div',
        { className: 'team-member' },
        _react2.default.createElement(
          'div',
          { className: 'team-member__photo' },
          _react2.default.createElement(_TeamMemberPhoto2.default, {
            photoUrl: member.photoUrl,
            photoAlt: member.name,
            onMouseOver: this.handlePhotoMouseOver,
            onMouseOut: this.handlePhotoMouseOut
          })
        ),
        _react2.default.createElement(
          'div',
          null,
          member.name
        ),
        _react2.default.createElement(
          'div',
          { className: 'team-member__position' },
          member.position
        ),
        _react2.default.createElement(
          'div',
          null,
          'My dream space:'
        ),
        _react2.default.createElement(
          'div',
          { className: 'team-member__dream-space' },
          member.dreamSpace
        ),
        _react2.default.createElement(
          'div',
          { className: 'team-member__home-area-icon-container' },
          _react2.default.createElement(
            _IconButton2.default,
            null,
            _react2.default.createElement(_HomeAreaIcon2.default, { className: 'team-member__home-area-icon', homeAreaId: member.homeAreaId })
          )
        ),
        member.description && _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('team-member__overlay', { 'team-member__overlay--shown': this.state.showOverlay }) },
          _react2.default.createElement(
            'div',
            { className: 'team-member__description' },
            member.description
          )
        )
      );
    }
  }]);

  return TeamMember;
}(_react2.default.Component);

TeamMember.propTypes = {
  member: _propTypes2.default.object.isRequired
};

exports.default = TeamMember;