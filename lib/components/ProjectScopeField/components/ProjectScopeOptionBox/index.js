'use strict';

import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './styles.scss';

var ProjectScopeOptionBox =
/*#__PURE__*/
function (_Component) {
  _inherits(ProjectScopeOptionBox, _Component);

  function ProjectScopeOptionBox() {
    var _getPrototypeOf2, _context;

    var _this;

    _classCallCheck(this, ProjectScopeOptionBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ProjectScopeOptionBox)).call.apply(_getPrototypeOf2, _concatInstanceProperty(_context = [this]).call(_context, args)));

    _defineProperty(_assertThisInitialized(_this), "handleClickDetail", function (event) {
      var _this$props = _this.props,
          onClickDetail = _this$props.onClickDetail,
          option = _this$props.option;
      onClickDetail && onClickDetail(event, option.value);
    });

    return _this;
  }

  _createClass(ProjectScopeOptionBox, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onClick = _this$props2.onClick,
          option = _this$props2.option,
          showSelectButton = _this$props2.showSelectButton,
          showScaleInfo = _this$props2.showScaleInfo,
          selected = _this$props2.selected,
          isMobile = _this$props2.isMobile;
      return React.createElement("div", {
        className: "project-scope-option-box-wrapper"
      }, React.createElement("div", {
        id: this.props.id,
        className: cx('project-scope-option-box', {
          'project-scope-option-box--opaque': this.props.opaque,
          'project-scope-option-box--no-cursor': !onClick,
          'project-scope-option-box--highlight-on-hover': this.props.highlightOnHover,
          'project-scope-option-box--selected': selected
        }, this.props.className),
        onClick: onClick
      }, showScaleInfo && showSelectButton && React.createElement("div", {
        className: cx('project-scope-option-box__option-top-button', {
          'project-scope-option-box__option-top-button--mobile': isMobile
        })
      }, React.createElement(Button, {
        className: cx('project-scope-option-box__option-button', {
          'project-scope-option-box__option-button--mobile': isMobile
        }),
        color: "primary",
        fullWidth: true,
        variant: "contained"
      }, "Select")), React.createElement("div", {
        className: cx('project-scope-option-box__option-top', {
          'project-scope-option-box__option-top--centered': !showSelectButton,
          'project-scope-option-box__option-top--mobile': isMobile
        })
      }, React.createElement(Typography, {
        className: "project-scope-option-box__text project-scope-option-box__text--title",
        variant: "body2"
      }, option.label), React.createElement(Typography, {
        className: "project-scope-option-box__text project-scope-option-box__text--help",
        variant: "body1"
      }, option.text)), !showScaleInfo && showSelectButton && React.createElement("div", {
        className: cx('project-scope-option-box__option-bottom', {
          'project-scope-option-box__option-bottom--mobile': isMobile
        })
      }, React.createElement(Button, {
        className: cx('project-scope-option-box__option-button', {
          'project-scope-option-box__option-button--mobile': isMobile
        }),
        color: "primary",
        fullWidth: true,
        variant: "contained"
      }, selected ? 'Selected' : 'Select'))), showScaleInfo && React.createElement("div", {
        className: cx('project-scope-option-box__option-bottom', {
          'project-scope-option-box__option-bottom--mobile': isMobile
        })
      }, React.createElement(Button, {
        className: cx('project-scope-option-box__include-button', {
          'project-scope-option-box__include-button--mobile': isMobile
        }),
        color: "primary",
        fullWidth: true,
        onClick: this.handleClickDetail,
        variant: "contained",
        classes: {
          label: 'project-scope-option-box__include-button--no-capitalize'
        }
      }, "What's included")));
    }
  }]);

  return ProjectScopeOptionBox;
}(Component);

_defineProperty(ProjectScopeOptionBox, "propTypes", {
  className: PropTypes.string,
  highlightOnHover: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  onClickScopeDetail: PropTypes.func,
  opaque: PropTypes.bool,
  option: PropTypes.object.isRequired,
  showSelectButton: PropTypes.bool
});

_defineProperty(ProjectScopeOptionBox, "defaultProps", {
  highlightOnHover: true,
  opaque: false,
  showSelectButton: true,
  showScaleInfo: false
});

export default ProjectScopeOptionBox;