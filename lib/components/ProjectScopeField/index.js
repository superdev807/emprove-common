'use strict';

import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import React, { Component } from 'react';
import cx from 'classnames';
import Grid from '@material-ui/core/Grid';
import MobileDetect from 'mobile-detect';
import ProjectScopeOptionBox from './components/ProjectScopeOptionBox';
import options from './projectScopeOptions';
import './style.scss';

var ProjectScopeField =
/*#__PURE__*/
function (_Component) {
  _inherits(ProjectScopeField, _Component);

  function ProjectScopeField(props) {
    var _this;

    _classCallCheck(this, ProjectScopeField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProjectScopeField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value) {
      return function () {
        var onSelect = _this.props.onSelect;
        onSelect && onSelect(value);
      };
    });

    var md = new MobileDetect(window.navigator.userAgent);
    _this.state = {
      isMobile: Boolean(md.phone())
    };
    return _this;
  }

  _createClass(ProjectScopeField, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          input = _this$props.input,
          showScaleInfo = _this$props.showScaleInfo,
          onClickDetail = _this$props.onClickDetail;
      var inputValue = input ? input.value : '';
      return React.createElement("div", {
        className: cx('project-scope-field', _defineProperty({}, className, Boolean(className)))
      }, React.createElement(Grid, {
        container: true,
        spacing: 24
      }, _mapInstanceProperty(options).call(options, function (option, index) {
        return React.createElement(Grid, {
          key: index,
          item: true,
          className: "project-scope-field__option"
        }, React.createElement(ProjectScopeOptionBox, {
          id: "buttons_clicked_projectPackageSelect_".concat(option.value),
          onClick: _this2.handleChange(option.value),
          onClickDetail: onClickDetail,
          option: option,
          isMobile: _this2.state.isMobile,
          showScaleInfo: showScaleInfo,
          selected: option.value === inputValue
        }));
      })));
    }
  }]);

  return ProjectScopeField;
}(Component);

export default ProjectScopeField;