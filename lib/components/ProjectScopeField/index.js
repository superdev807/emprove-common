'use strict';

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
      }, options.map(function (option, index) {
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