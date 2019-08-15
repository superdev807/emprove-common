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
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import xor from 'lodash/xor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

var MultiSegmentField =
/*#__PURE__*/
function (_Component) {
  _inherits(MultiSegmentField, _Component);

  function MultiSegmentField(props) {
    var _this;

    _classCallCheck(this, MultiSegmentField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MultiSegmentField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "isMobile", function (mobileWidth) {
      if (mobileWidth.matches) {
        _this.setState({
          isMobile: true
        });
      } else {
        _this.setState({
          isMobile: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value) {
      return function () {
        var _this$props = _this.props,
            input = _this$props.input,
            disableDeselectAll = _this$props.disableDeselectAll;
        var deselectAllTried = _this.state.deselectAllTried;
        var newValue = xor(input.value, [value]);

        if (disableDeselectAll && newValue.length === 0) {
          _this.setState({
            deselectAllTried: true
          });
        } else {
          deselectAllTried && _this.setState({
            deselectAllTried: false
          });
          input.onBlur(newValue);
        }
      };
    });

    _this.state = {
      deselectAllTried: false,
      isMobile: false
    };
    _this.mobileWidth = window.matchMedia('(max-width: 400px)');
    return _this;
  }

  _createClass(MultiSegmentField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mobileWidth.addListener(this.isMobile);
      this.isMobile(this.mobileWidth);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mobileWidth.removeListener(this.isMobile);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          classes = _this$props2.classes,
          deselectAllErrorMessage = _this$props2.deselectAllErrorMessage,
          input = _this$props2.input,
          options = _this$props2.options,
          _this$props2$meta = _this$props2.meta,
          touched = _this$props2$meta.touched,
          error = _this$props2$meta.error;
      var _this$state = this.state,
          deselectAllTried = _this$state.deselectAllTried,
          isMobile = _this$state.isMobile;
      return React.createElement(Grid, {
        container: true,
        spacing: 0
      }, options.map(function (option, index) {
        var isSelected = input.value.indexOf(option.value) > -1;
        return React.createElement(Grid, {
          key: index,
          item: true,
          xs: isMobile ? 4 : 2
        }, React.createElement(Button, {
          fullWidth: true,
          className: classes.segment,
          variant: "contained",
          color: isSelected ? 'primary' : 'default',
          onClick: _this2.handleChange(option.value)
        }, option.label));
      }), touched && error && React.createElement(FormHelperText, {
        error: true
      }, error), deselectAllTried && React.createElement(FormHelperText, {
        error: true
      }, deselectAllErrorMessage));
    }
  }]);

  return MultiSegmentField;
}(Component);

_defineProperty(MultiSegmentField, "propTypes", {
  classes: PropTypes.object.isRequired,
  deselectAllErrorMessage: PropTypes.string,
  disableDeselectAll: PropTypes.bool,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired
});

export default withStyles(styles)(MultiSegmentField);