'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.map";
import "core-js/modules/es.object.assign";
import "core-js/modules/es.object.create";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.iterator";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, Fragment } from 'react';
import cx from 'classnames';
import get from 'lodash/get';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import PlacesAutocomplete, { geocodeByPlaceId } from 'react-places-autocomplete';
import PropTypes from 'prop-types';
import loadScript from '../../utils/loadScript';
import { makeCancelable } from '../../utils/promiseFunctions';
import { parseGeocodeApiResult } from '../../utils/geolocationFunctions';
import './styles.scss';

var AutoCompleteAddressField =
/*#__PURE__*/
function (_Component) {
  _inherits(AutoCompleteAddressField, _Component);

  function AutoCompleteAddressField(props) {
    var _this;

    _classCallCheck(this, AutoCompleteAddressField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AutoCompleteAddressField).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (address) {
      var input = _this.props.input;
      input ? input.onChange(address) : _this.setState({
        address: address
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (address, placeId) {
      var _this$props = _this.props,
          input = _this$props.input,
          onClear = _this$props.onClear,
          onSelect = _this$props.onSelect;
      !input && _this.setState({
        address: address
      });
      geocodeByPlaceId(placeId).then(function (results) {
        if (results.length > 0) {
          var result = parseGeocodeApiResult(results[0]);

          if (result) {
            return onSelect ? onSelect(result) : input && input.onBlur(result);
          }
        }

        input ? input.onBlur(address) : onClear();
      })["catch"](function (error) {
        console.error(error);
        input ? input.onBlur(address) : onClear();
      });
    });

    _this.state = {
      address: '',
      googleReady: Boolean(window.google)
    };
    _this.cancelableLoadScript = null;
    _this.outlinedFieldLabelRef = React.createRef();
    return _this;
  }

  _createClass(AutoCompleteAddressField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!window.google) {
        this.cancelableLoadScript = makeCancelable(loadScript("https://maps.googleapis.com/maps/api/js?key=".concat(process.env.GOOGLE_MAP_API_KEY, "&libraries=places")));
        this.cancelableLoadScript.promise.then(function () {
          _this2.setState({
            googleReady: true
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelableLoadScript && this.cancelableLoadScript.cancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          errorMessageClass = _this$props2.errorMessageClass,
          hideErrorText = _this$props2.hideErrorText,
          input = _this$props2.input,
          label = _this$props2.label,
          meta = _this$props2.meta,
          type = _this$props2.type,
          variant = _this$props2.variant;
      var touched = get(meta, 'touched', false);
      var error = get(meta, 'error', null);
      var errorEl = !hideErrorText && touched && error ? React.createElement(FormHelperText, {
        className: errorMessageClass
      }, error) : null;

      if (type === 'text') {
        return this.state.googleReady ? React.createElement(PlacesAutocomplete, {
          value: input ? get(input, 'value.name', input.value) : this.state.address,
          onChange: this.handleChange,
          onSelect: this.handleSelect,
          searchOptions: {
            types: ['address'],
            componentRestrictions: {
              country: 'us'
            }
          }
        }, function (_ref) {
          var getInputProps = _ref.getInputProps,
              suggestions = _ref.suggestions,
              getSuggestionItemProps = _ref.getSuggestionItemProps,
              loading = _ref.loading;
          return React.createElement(FormControl, {
            className: cx('auto-complete-address-field', className, variant),
            error: touched && !!error
          }, React.createElement("div", {
            className: "auto-complete-address-field__formControl"
          }, variant === 'outlined' ? React.createElement(Fragment, null, label && React.createElement(InputLabel, _extends({}, _this3.props.inputLabelProps, {
            ref: _this3.outlinedFieldLabelRef
          }), label), React.createElement(OutlinedInput, getInputProps({
            placeholder: 'enter your home address',
            className: 'auto-complete-address-field__input',
            labelWidth: get(_this3.outlinedFieldLabelRef, 'offsetWidth', 0),
            inputProps: _this3.props.inputProps
          }))) : React.createElement("input", getInputProps({
            placeholder: 'enter your home address',
            className: 'auto-complete-address-field__input'
          }))), suggestions.length > 0 && React.createElement("div", {
            className: "auto-complete-address-field__dropdown"
          }, suggestions.map(function (suggestion) {
            return React.createElement("div", _extends({
              key: suggestion.id
            }, getSuggestionItemProps(suggestion, {
              className: cx('auto-complete-address-field__dropdown-item', {
                'auto-complete-address-field__dropdown-item--active': suggestion.active
              })
            })), React.createElement("span", null, suggestion.description));
          })), errorEl);
        }) : null;
      } else {
        return React.createElement(FormControl, {
          className: cx('auto-complete-address-field', className),
          error: touched && !!error
        }, React.createElement("div", {
          className: "auto-complete-address-field__formControl"
        }, React.createElement("div", {
          className: "auto-complete-address-field__input"
        }, input.value)), errorEl);
      }
    }
  }]);

  return AutoCompleteAddressField;
}(Component);

_defineProperty(AutoCompleteAddressField, "propTypes", {
  variant: PropTypes.oneOf(['outlined', 'underlined', 'standard']),
  type: PropTypes.oneOf(['text', 'button'])
});

_defineProperty(AutoCompleteAddressField, "defaultProps", {
  variant: 'underlined',
  type: 'text'
});

export default AutoCompleteAddressField;