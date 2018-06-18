'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TeamMember = require('./TeamMember');

var _TeamMember2 = _interopRequireDefault(_TeamMember);

var _enums = require('../../../../utils/enums');

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var teamMembers = [{
  id: 1,
  name: 'James Noel',
  position: 'CEO',
  dreamSpace: 'Contemporary Premium Family Room',
  homeAreaId: _enums.HomeArea.GENERAL_LIVING,
  description: 'Construction executive with 15+ years delivering large & highly refined projects on the contractor and owner sides.',
  photoKey: 'james_400x400.jpg',
  dreamSpaceImageKey: '01698_E_cimage.jpg'
}, {
  id: 2,
  name: 'Linda Lee',
  position: 'COO',
  dreamSpace: 'Contemporary Luxurious Master Bath',
  homeAreaId: _enums.HomeArea.MASTER_BATHROOM,
  description: 'Sofware executive with expertise in growing 0-$500MM businesses. Built large machine-learning personalization products.',
  photoKey: 'linda_400x400.jpg',
  dreamSpaceImageKey: '00043_E_cimage.jpg'
}, {
  id: 3,
  name: 'Andrew Pascal',
  position: 'Chairman',
  dreamSpace: 'Contemporary High-End Master Bath',
  homeAreaId: _enums.HomeArea.MASTER_BATHROOM,
  description: 'An accomplished leader who has founded & built businesses in the digital casino & leisure entertainment industries.',
  photoKey: 'andrew_400x400.jpg',
  dreamSpaceImageKey: '00016_E_cimage.jpg'
}, {
  id: 4,
  name: 'Ervi Bongso',
  position: 'Principal Engineer',
  dreamSpace: 'Rustic Tiny House',
  homeAreaId: _enums.HomeArea.GENERAL_LIVING,
  description: null,
  photoKey: 'ervi_400x400.jpg',
  dreamSpaceImageKey: '02369_E_cimage.jpg'
}, {
  id: 5,
  name: 'Tonson Back',
  position: 'UI/UX Artist',
  dreamSpace: 'Industrial Upgraded Living Area',
  homeAreaId: _enums.HomeArea.GENERAL_LIVING,
  description: null,
  photoKey: 'tonson_400x400.jpg',
  dreamSpaceImageKey: '01990_E_cimage.jpg'
}, {
  id: 6,
  name: 'Mike Gonzales',
  position: 'Market Launcher',
  dreamSpace: 'Contemporary Open Living Area',
  homeAreaId: _enums.HomeArea.GENERAL_LIVING,
  description: null,
  photoKey: 'mike_400x400.jpg',
  dreamSpaceImageKey: '01762_E_cimage.jpeg'
}, {
  id: 7,
  name: 'JoAnne McCauley',
  position: 'Market Launcher',
  dreamSpace: 'Contemporary Luxurious Bedroom',
  homeAreaId: _enums.HomeArea.MASTER_BEDROOM,
  description: null,
  photoKey: 'joanne_400x400.jpg',
  dreamSpaceImageKey: '00889_E_cimage.jpg'
}, {
  id: 8,
  name: 'Domini Noel',
  position: 'Business Intelligence',
  dreamSpace: 'Traditional High-End Kitchen',
  homeAreaId: _enums.HomeArea.KITCHEN,
  description: null,
  photoKey: 'domini_400x400.jpg',
  dreamSpaceImageKey: '01844_E_cimage.jpg'
}, {
  id: 9,
  name: 'Kiwook Kwon',
  position: 'Engineer',
  dreamSpace: 'Rustic Upgraded Bathroom',
  homeAreaId: _enums.HomeArea.MASTER_BATHROOM,
  description: null,
  photoKey: 'kiwook_400x400.jpg',
  dreamSpaceImageKey: '00599_E_cimage.jpg'
}, {
  id: 10,
  name: 'Renan Martins',
  position: 'Engineer',
  dreamSpace: 'Modern Zen Master Bath',
  homeAreaId: _enums.HomeArea.MASTER_BATHROOM,
  description: null,
  photoKey: 'renan_400x400.jpg',
  dreamSpaceImageKey: '00504_E_cimage.jpg'
}, {
  id: 11,
  name: 'Sousuke Tanaka',
  position: 'Engineer',
  dreamSpace: 'Master Bedroom',
  homeAreaId: _enums.HomeArea.MASTER_BEDROOM,
  description: null,
  photoKey: 'sousuke_400x400.jpg',
  dreamSpaceImageKey: '00234_E_cimage.jpg'
}, {
  id: 12,
  name: 'Leo Esaki',
  position: 'Engineer',
  dreamSpace: 'General Living',
  homeAreaId: _enums.HomeArea.GENERAL_LIVING,
  description: null,
  photoKey: 'leo_400x400.jpg',
  dreamSpaceImageKey: '01946_E_cimage.jpg'
}];

var TheTeam = function TheTeam(props) {
  var members = teamMembers.map(function (teamMember) {
    var memberWithPhotoUrl = _extends({}, teamMember, {
      photoUrl: '/images/team/' + teamMember.photoKey
    });

    return _react2.default.createElement(
      'div',
      { key: teamMember.id, className: 'the-team__team-member' },
      _react2.default.createElement(_TeamMember2.default, { member: memberWithPhotoUrl })
    );
  });

  return _react2.default.createElement(
    'section',
    { className: (0, _classnames2.default)('the-team', props.className) },
    _react2.default.createElement(
      'div',
      { className: 'the-team__title' },
      'Meet ',
      _react2.default.createElement(
        'strong',
        null,
        'the Team'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'the-team__members' },
      members
    )
  );
};

TheTeam.propTypes = {
  className: _propTypes2.default.string
};

exports.default = TheTeam;