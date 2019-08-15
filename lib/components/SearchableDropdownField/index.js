'use strict';

import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _findInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/find";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _forEachInstanceProperty(_context2 = ownKeys(source, true)).call(_context2, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context3; _forEachInstanceProperty(_context3 = ownKeys(source)).call(_context3, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { propsChanged } from '~/utils/pureFunctions';
var styles = {
  menuList: function menuList(provided) {
    return _objectSpread({}, provided, {
      height: 132
    });
  }
};

var SearchableDropdownField =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchableDropdownField, _Component);

  function SearchableDropdownField() {
    var _getPrototypeOf2, _context;

    var _this;

    _classCallCheck(this, SearchableDropdownField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchableDropdownField)).call.apply(_getPrototypeOf2, _concatInstanceProperty(_context = [this]).call(_context, args)));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (option) {
      _this.props.input.onChange(option.value);
    });

    return _this;
  }

  _createClass(SearchableDropdownField, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (propsChanged(['options'], prevProps, this.props)) {
        var _this$props = this.props,
            input = _this$props.input,
            options = _this$props.options;

        if (!_findInstanceProperty(options).call(options, function (option) {
          return option.value === input.value;
        })) {
          input.onChange(null);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          errorMessageClass = _this$props2.errorMessageClass,
          fullWidth = _this$props2.fullWidth,
          id = _this$props2.id,
          input = _this$props2.input,
          _this$props2$meta = _this$props2.meta,
          touched = _this$props2$meta.touched,
          error = _this$props2$meta.error,
          options = _this$props2.options,
          selectClassName = _this$props2.selectClassName,
          selectClassNamePrefix = _this$props2.selectClassNamePrefix;
      var selectedOption = _findInstanceProperty(options).call(options, function (option) {
        return option.value === input.value;
      }) || {};
      return React.createElement(FormControl, {
        id: id,
        className: className,
        error: touched && !!error,
        fullWidth: fullWidth
      }, React.createElement(Select, {
        className: selectClassName,
        classNamePrefix: selectClassNamePrefix,
        value: selectedOption,
        onChange: this.handleChange,
        options: options,
        styles: styles
      }), touched && error && React.createElement(FormHelperText, {
        className: errorMessageClass
      }, error));
    }
  }]);

  return SearchableDropdownField;
}(Component);

_defineProperty(SearchableDropdownField, "propTypes", {
  className: PropTypes.string,
  errorMessageClass: PropTypes.string,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
  input: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  selectClassName: PropTypes.string,
  selectClassNamePrefix: PropTypes.string
});

export default SearchableDropdownField;