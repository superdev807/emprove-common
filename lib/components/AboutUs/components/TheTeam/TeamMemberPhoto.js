'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./team-member-photo-styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TeamMemberPhoto = function TeamMemberPhoto(props) {
  return _react2.default.createElement('img', { className: 'team-member-photo', src: props.photoUrl, alt: props.photoAlt });
};

TeamMemberPhoto.propTypes = {
  photoAlt: _propTypes2.default.string.isRequired,
  photoUrl: _propTypes2.default.string.isRequired
};

exports.default = TeamMemberPhoto;