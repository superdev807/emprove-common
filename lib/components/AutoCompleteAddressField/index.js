'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import _extends from "@babel/runtime-corejs3/helpers/extends";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime-corejs3/helpers/assertThisInitialized";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
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
          }, _mapInstanceProperty(suggestions).call(suggestions, function (suggestion) {
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