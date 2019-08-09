'use strict';

import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/index-of";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
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
      }, _mapInstanceProperty(options).call(options, function (option, index) {
        var _context;

        var isSelected = _indexOfInstanceProperty(_context = input.value).call(_context, option.value) > -1;
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