'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TeamMember = require('./TeamMember');

var _TeamMember2 = _interopRequireDefault(_TeamMember);

var _CatalogPhotoModal = require('../../../CatalogPhotoModal');

var _CatalogPhotoModal2 = _interopRequireDefault(_CatalogPhotoModal);

var _enums = require('../../../../utils/enums');

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
  photoKey: 'james_400x400.jpg'
}, {
  id: 2,
  name: 'Linda Lee',
  position: 'COO',
  dreamSpace: {
    style: 'Contemporary',
    homeArea: 'Master Bathroom',
    quality: 'Luxurious',
    homeAreaId: _enums.HomeArea.MASTER_BATHROOM,
    imageKey: '00043_E_cimage.jpg'
  },
  description: 'Sofware executive with expertise in growing 0-$500MM businesses. Built large machine-learning personalization products.',
  photoKey: 'linda_400x400.jpg'
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
  photoKey: 'andrew_400x400.jpg'
}, {
  id: 15,
  name: 'Rosemary Kuropat',
  position: 'Brand and Marketing',
  dreamSpace: {
    style: 'Contemporary',
    homeArea: 'General Living',
    quality: 'Upgraded',
    homeAreaId: _enums.HomeArea.GENERAL_LIVING,
    imageKey: '00426_E_cimage.jpg'
  },
  description: 'Rosemary is a chronicler of culture, from street art to consumer trends, and a chronic connector of dots.',
  photoKey: 'rosemary_400x400.jpg'
}, {
  id: 16,
  name: 'Evan Earnest',
  position: 'Product',
  dreamSpace: {
    style: 'Contemporary',
    homeArea: 'General Living',
    quality: 'Upgraded',
    homeAreaId: _enums.HomeArea.GENERAL_LIVING,
    imageKey: '00426_E_cimage.jpg'
  },
  description: null,
  photoKey: 'evan_400x400.jpg'
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
  description: null,
  photoKey: 'ervi_400x400.jpg'
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
  id: 7,
  name: 'JoAnne McCauley',
  position: 'Market Launcher',
  dreamSpace: {
    style: 'Contemporary',
    homeArea: 'Master Bedroom',
    quality: 'Luxurious',
    homeAreaId: _enums.HomeArea.MASTER_BEDROOM,
    imageKey: '00889_E_cimage.jpg'
  },
  description: null,
  photoKey: 'joanne_400x400.jpg'
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
  id: 10,
  name: 'Renan Martins',
  position: 'Engineer',
  dreamSpace: {
    style: 'Modern',
    homeArea: 'Master Bathroom',
    quality: 'Luxurious',
    homeAreaId: _enums.HomeArea.MASTER_BATHROOM,
    imageKey: '00504_E_cimage.jpg'
  },
  description: null,
  photoKey: 'renan_400x400.jpg'
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
}, {
  id: 12,
  name: 'Leo Esaki',
  position: 'Engineer',
  dreamSpace: {
    style: 'Traditional',
    homeArea: 'General Living',
    quality: 'Upgraded',
    homeAreaId: _enums.HomeArea.GENERAL_LIVING,
    imageKey: '01946_E_cimage.jpg'
  },
  description: null,
  photoKey: 'leo_400x400.jpg'
}, {
  id: 13,
  name: 'Juan Ortiz',
  position: 'Engineer',
  dreamSpace: {
    style: 'Contemporary',
    homeArea: 'Kitchen',
    quality: 'Luxurious',
    homeAreaId: _enums.HomeArea.KITCHEN,
    imageKey: '00009_E_cimage.jpg'
  },
  description: null,
  photoKey: 'juan_400x400.jpg'
}, {
  id: 14,
  name: 'Vooha Nallamothu',
  position: 'Quality Assurance',
  dreamSpace: {
    style: 'Traditional',
    homeArea: 'General Living',
    quality: 'Upgraded',
    homeAreaId: _enums.HomeArea.GENERAL_LIVING,
    imageKey: '02021_E_cimage.jpg'
  },
  description: null,
  photoKey: 'vooha_400x400.jpg'
}];

var TheTeam = function (_React$Component) {
  _inherits(TheTeam, _React$Component);

  function TheTeam(props) {
    _classCallCheck(this, TheTeam);

    var _this = _possibleConstructorReturn(this, (TheTeam.__proto__ || Object.getPrototypeOf(TheTeam)).call(this, props));

    _this.handleHomeAreaClick = function (dreamSpace) {
      return function () {
        _this.setState({ selectedDreamSpace: dreamSpace });
      };
    };

    _this.handleCatalogPhotoModalClose = function () {
      _this.setState({ selectedDreamSpace: undefined });
    };

    _this.state = {
      selectedDreamSpace: undefined
    };
    return _this;
  }

  _createClass(TheTeam, [{
    key: 'getTeamMembers',
    value: function getTeamMembers() {
      var _this2 = this;

      return teamMembers.map(function (teamMember) {
        var memberWithPhotoUrl = _extends({}, teamMember, {
          photoUrl: '/images/team/' + teamMember.photoKey
        });

        return _react2.default.createElement(
          'div',
          { key: teamMember.id, className: 'the-team__team-member' },
          _react2.default.createElement(_TeamMember2.default, { member: memberWithPhotoUrl, onHomeAreaClick: _this2.handleHomeAreaClick(teamMember.dreamSpace) })
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: (0, _classnames2.default)('the-team', this.props.className) },
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
          this.getTeamMembers()
        ),
        _react2.default.createElement(_CatalogPhotoModal2.default, { image: this.state.selectedDreamSpace, open: this.state.selectedDreamSpace !== undefined, onClose: this.handleCatalogPhotoModalClose, fromContractor: this.props.fromContractor })
      );
    }
  }]);

  return TheTeam;
}(_react2.default.Component);

TheTeam.propTypes = {
  className: _propTypes2.default.string,
  fromContractor: _propTypes2.default.bool
};

TheTeam.defaultProps = {
  fromContractor: false
};

exports.default = TheTeam;