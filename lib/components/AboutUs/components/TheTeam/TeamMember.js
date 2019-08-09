'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.function.name";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import HomeAreaIcon from '../../../HomeAreaIcon';
import IconLinkedIn from '../../../../icons/IconLinkedIn';
import TeamMemberPhoto from './TeamMemberPhoto';
import './team-member-styles.scss';

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
      var _context;

      var member = this.props.member;
      return React.createElement("div", {
        className: "team-member",
        onMouseLeave: this.handlePhotoMouseOut
      }, React.createElement("div", {
        className: "team-member__photo"
      }, React.createElement(TeamMemberPhoto, {
        photoUrl: member.photoUrl,
        photoAlt: member.name,
        onMouseOver: this.handlePhotoMouseOver
      })), React.createElement("div", null, member.name), React.createElement("div", {
        className: "team-member__position"
      }, member.position), React.createElement("div", null, "My dream space:"), React.createElement("div", {
        className: "team-member__home-area-icon-container"
      }, React.createElement(IconButton, {
        onClick: this.props.onHomeAreaClick
      }, React.createElement(HomeAreaIcon, {
        className: "team-member__home-area-icon",
        homeAreaId: member.dreamSpace.homeAreaId,
        titleAccess: _concatInstanceProperty(_context = "".concat(member.dreamSpace.style, " ")).call(_context, member.dreamSpace.homeArea)
      }))), member.description && React.createElement("div", {
        className: cx('team-member__overlay', {
          'team-member__overlay--shown': this.state.showOverlay
        })
      }, React.createElement("div", {
        className: "team-member__overlay-content"
      }, React.createElement("div", {
        className: "team-member__description"
      }, member.description), React.createElement("div", {
        className: "team-member__bar"
      }), member.linkedIn && React.createElement("a", {
        href: member.linkedIn,
        target: "_blank",
        rel: "noopener noreferrer"
      }, React.createElement(IconLinkedIn, {
        className: "team-member__linked-in"
      })))));
    }
  }]);

  return TeamMember;
}(React.Component);

TeamMember.propTypes = {
  member: PropTypes.object.isRequired,
  onHomeAreaClick: PropTypes.func.isRequired
};
export default TeamMember;