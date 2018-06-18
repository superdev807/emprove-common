'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _HomeAreaIcon = require('../../../HomeAreaIcon');

var _HomeAreaIcon2 = _interopRequireDefault(_HomeAreaIcon);

var _TeamMemberPhoto = require('./TeamMemberPhoto');

var _TeamMemberPhoto2 = _interopRequireDefault(_TeamMemberPhoto);

require('./team-member-styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TeamMember = function TeamMember(props) {
  return _react2.default.createElement(
    'div',
    { className: 'team-member' },
    _react2.default.createElement(
      'div',
      { className: 'team-member__photo' },
      _react2.default.createElement(_TeamMemberPhoto2.default, { photoUrl: props.member.photoUrl, photoAlt: props.member.name })
    ),
    _react2.default.createElement(
      'div',
      null,
      props.member.name
    ),
    _react2.default.createElement(
      'div',
      { className: 'team-member__position' },
      props.member.position
    ),
    _react2.default.createElement(
      'div',
      null,
      'My dream space,'
    ),
    _react2.default.createElement(
      'div',
      { className: 'team-member__dream-space' },
      props.member.dreamSpace
    ),
    _react2.default.createElement(
      'div',
      { className: 'team-member__home-area-icon-container' },
      _react2.default.createElement(
        _IconButton2.default,
        null,
        _react2.default.createElement(_HomeAreaIcon2.default, { className: 'team-member__home-area-icon', homeAreaId: props.member.homeAreaId })
      )
    )
  );
};

TeamMember.propTypes = {
  member: _propTypes2.default.object.isRequired
};

exports.default = TeamMember;