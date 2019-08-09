'use strict';

import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(source, true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(source)).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import TeamMember from './TeamMember';
import CatalogPhotoModal from '../../../CatalogPhotoModal';
import { HomeArea } from '../../../../utils/enums';
import './styles.scss';
var teamMembers = [{
  id: 1,
  name: 'James Noel',
  position: 'CEO',
  dreamSpace: {
    style: 'Contemporary',
    homeArea: 'General Living',
    quality: 'Upgraded',
    homeAreaId: HomeArea.GENERAL_LIVING,
    imageKey: '01698_E_cimage.jpg'
  },
  description: 'Construction executive with 15+ years delivering large & highly refined projects on the contractor and owner sides.',
  photoKey: 'james_400x400.jpg',
  linkedIn: 'https://www.linkedin.com/in/james-noel/'
}, {
  id: 2,
  name: 'Linda Lee',
  position: 'COO',
  dreamSpace: {
    style: 'Contemporary',
    homeArea: 'Master Bathroom',
    quality: 'Luxurious',
    homeAreaId: HomeArea.MASTER_BATHROOM,
    imageKey: '00043_E_cimage.jpg'
  },
  description: 'Software executive with expertise in growing 0-$500MM businesses. Built large machine-learning personalization products.',
  photoKey: 'linda_400x400.jpg',
  linkedIn: 'https://www.linkedin.com/in/lindalee/'
}, {
  id: 3,
  name: 'Andrew Pascal',
  position: 'Chairman',
  dreamSpace: {
    style: 'Contemporary',
    homeArea: 'Master Bathroom',
    quality: 'High-End',
    homeAreaId: HomeArea.MASTER_BATHROOM,
    imageKey: '00016_E_cimage.jpg'
  },
  description: 'An accomplished leader who has founded & built businesses in the digital casino & leisure entertainment industries.',
  photoKey: 'andrew_400x400.jpg',
  linkedIn: 'https://www.linkedin.com/in/andrew-pascal-926aaa27/'
}, {
  id: 4,
  name: 'Ervi Bongso',
  position: 'Principal Engineer',
  dreamSpace: {
    style: 'Rustic',
    homeArea: 'General Living',
    quality: 'Best Value',
    homeAreaId: HomeArea.GENERAL_LIVING,
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
    homeAreaId: HomeArea.GENERAL_LIVING,
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
    homeAreaId: HomeArea.GENERAL_LIVING,
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
    homeAreaId: HomeArea.MASTER_BEDROOM,
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
    homeAreaId: HomeArea.KITCHEN,
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
    homeAreaId: HomeArea.KITCHEN,
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
    homeAreaId: HomeArea.MASTER_BATHROOM,
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
    homeAreaId: HomeArea.MASTER_BEDROOM,
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

      return _mapInstanceProperty(teamMembers).call(teamMembers, function (teamMember) {
        var memberWithPhotoUrl = _objectSpread({}, teamMember, {
          photoUrl: "/images/team/".concat(teamMember.photoKey)
        });

        return React.createElement("div", {
          key: teamMember.id,
          className: "the-team__team-member"
        }, React.createElement(TeamMember, {
          member: memberWithPhotoUrl,
          onHomeAreaClick: _this2.handleHomeAreaClick(teamMember.dreamSpace)
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("section", {
        className: cx('the-team', this.props.className)
      }, React.createElement("div", {
        className: "the-team__title"
      }, "Meet ", React.createElement("strong", null, "the Team")), React.createElement("div", {
        className: "the-team__members"
      }, this.getTeamMembers()), React.createElement(CatalogPhotoModal, {
        image: this.state.selectedDreamSpace,
        open: this.state.selectedDreamSpace !== undefined,
        onClose: this.handleCatalogPhotoModalClose,
        fromContractor: this.props.fromContractor
      }));
    }
  }]);

  return TheTeam;
}(React.Component);

TheTeam.propTypes = {
  className: PropTypes.string,
  fromContractor: PropTypes.bool
};
TheTeam.defaultProps = {
  fromContractor: false
};
export default TheTeam;