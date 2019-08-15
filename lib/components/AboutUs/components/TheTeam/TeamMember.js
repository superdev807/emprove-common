'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.function.name";
import "core-js/modules/es.object.create";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

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
        titleAccess: "".concat(member.dreamSpace.style, " ").concat(member.dreamSpace.homeArea)
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