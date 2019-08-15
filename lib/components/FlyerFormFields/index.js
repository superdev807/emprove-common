'use strict';

import "core-js/modules/es.symbol";
import "core-js/modules/es.symbol.description";
import "core-js/modules/es.symbol.iterator";
import "core-js/modules/es.array.concat";
import "core-js/modules/es.array.filter";
import "core-js/modules/es.array.for-each";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.array.map";
import "core-js/modules/es.array.slice";
import "core-js/modules/es.object.create";
import "core-js/modules/es.object.define-properties";
import "core-js/modules/es.object.define-property";
import "core-js/modules/es.object.get-own-property-descriptor";
import "core-js/modules/es.object.get-own-property-descriptors";
import "core-js/modules/es.object.get-prototype-of";
import "core-js/modules/es.object.keys";
import "core-js/modules/es.object.set-prototype-of";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.string.iterator";
import "core-js/modules/web.dom-collections.for-each";
import "core-js/modules/web.dom-collections.iterator";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import cx from 'classnames';
import get from 'lodash/get';
import { Field } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import AutoCompleteAddressField from '../AutoCompleteAddressField';
import DropdownField from '../DropdownField';
import FlyerFormAddressField from './components/FlyerFormAddressField';
import IconArrowDropdown from '../../icons/IconArrowDropdown';
import ImageField from '../ImageField';
import InputField from '../InputField';
import LoadingIndicator from '../LoadingIndicator';
import RealtorInfo from './components/RealtorInfo';
import SearchableDropdownField from '../SearchableDropdownField';
import ZipCodeField from '../ZipCodeField';
import metaData from '../../data/metaData.json';
import styles from './styles';
var homeAreaOptions = metaData.homeAreas.map(function (homeArea) {
  return {
    value: homeArea.id,
    label: homeArea.label
  };
});
var scaleOptions = metaData.projectScale.slice(0, 4).map(function (scale) {
  return {
    value: scale.id,
    label: scale.description
  };
});
var qualityOptions = metaData.qualityStandard.map(function (quality) {
  return {
    value: quality.id,
    label: quality.label
  };
});

var isRequired = function isRequired(value) {
  return !value ? 'This field is required' : undefined;
};

var FlyerFormFields =
/*#__PURE__*/
function (_Component) {
  _inherits(FlyerFormFields, _Component);

  function FlyerFormFields(props) {
    var _this;

    _classCallCheck(this, FlyerFormFields);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FlyerFormFields).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleToggleProperties", function (event, forceToggle) {
      event && event.stopPropagation();

      if (!_this.state.manualAddressEntry || forceToggle) {
        _this.setState({
          showProperties: !_this.state.showProperties
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickProperty", function (property) {
      _this.setState({
        manualAddressEntry: false,
        showProperties: false
      }, function () {
        _this.props.onSelectProperty(property);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickManualEntry", function () {
      _this.setState({
        manualAddressEntry: true,
        showProperties: false
      }, function () {
        _this.addressFieldRef.current.focus();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseProperties", function () {
      _this.setState({
        showProperties: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleRealtorChange", function (event, value) {
      var onRealtorChange = _this.props.onRealtorChange;
      onRealtorChange && onRealtorChange(value);
    });

    var properties = get(props, 'properties', []);
    _this.state = {
      manualAddressEntry: properties.length === 0,
      showProperties: false
    };
    _this.addressFieldRef = React.createRef();
    return _this;
  }

  _createClass(FlyerFormFields, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          city = _this$props.city,
          classes = _this$props.classes,
          handleSubmit = _this$props.handleSubmit,
          hideRealtorDropdown = _this$props.hideRealtorDropdown,
          hideRealtorInfo = _this$props.hideRealtorInfo,
          imageNames = _this$props.imageNames,
          onAddressChange = _this$props.onAddressChange,
          onHomeAreaChange = _this$props.onHomeAreaChange,
          onZipcodeChange = _this$props.onZipcodeChange,
          properties = _this$props.properties,
          realtors = _this$props.realtors,
          realtorDetails = _this$props.realtorDetails,
          submitting = _this$props.submitting,
          snapPriceImage = _this$props.snapPriceImage;
      var manualAddressEntry = this.state.manualAddressEntry;
      var hasProperties = properties && properties.length > 0;
      return React.createElement("form", {
        onSubmit: handleSubmit(function (values) {
          return _this2.props.onSubmit(_objectSpread({}, values, {
            imageKey: values.imageKey || snapPriceImage.imageKey
          }));
        }),
        className: classes.root
      }, React.createElement(Grid, {
        container: true
      }, React.createElement(Grid, {
        item: true,
        xs: 4
      }, React.createElement(Typography, {
        className: classes.label
      }, "Flyer Name:")), React.createElement(Grid, {
        item: true,
        xs: 8
      }, React.createElement(Field, {
        name: "description",
        type: "text",
        component: InputField,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error
      }))), realtors && React.createElement(Grid, {
        container: true,
        spacing: 16
      }, React.createElement(Grid, {
        item: true,
        xs: 4
      }, React.createElement(Typography, {
        className: classes.label
      }, "Realtor:"), React.createElement("div", {
        className: cx(_defineProperty({}, classes.hidden, hideRealtorDropdown))
      }, React.createElement(Field, {
        name: "realtorId",
        component: SearchableDropdownField,
        options: realtors,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error,
        onChange: this.handleRealtorChange
      })))), !hideRealtorInfo && React.createElement(RealtorInfo, {
        realtorDetails: realtorDetails
      }), React.createElement(Grid, {
        container: true,
        spacing: 16,
        justify: "space-between"
      }, React.createElement(Grid, {
        item: true,
        xs: 7
      }, React.createElement(Grid, {
        container: true,
        spacing: 16
      }, React.createElement(Grid, {
        className: classes.withRelativePosition,
        item: true,
        xs: 12
      }, React.createElement(Typography, {
        className: classes.label
      }, "Property address:"), React.createElement(Fragment, null, React.createElement("div", {
        className: classes.addressFieldContainer,
        ref: this.addressFieldRef,
        onClick: this.handleToggleProperties
      }, React.createElement(Field, {
        withRef: true,
        name: "property.address1",
        type: manualAddressEntry ? 'text' : 'button',
        component: AutoCompleteAddressField,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error,
        inputClasses: {
          input: classes.inputText
        },
        onBlur: onAddressChange ? onAddressChange : undefined
      }), hasProperties && React.createElement(IconArrowDropdown, {
        className: classes.arrowIcon,
        onClick: function onClick(event) {
          return _this2.handleToggleProperties(event, true);
        }
      })), hasProperties && React.createElement(FlyerFormAddressField, {
        anchorEl: get(this.addressFieldRef, 'current'),
        open: this.state.showProperties,
        onClickProperty: this.handleClickProperty,
        onClickManualEntry: this.handleClickManualEntry,
        onClose: this.handleCloseProperties,
        properties: properties,
        placement: "bottom-start"
      })), React.createElement(Grid, {
        container: true,
        alignItems: "center",
        spacing: 16
      }, React.createElement(Grid, {
        item: true,
        xs: 4
      }, React.createElement(Typography, {
        className: classes.label
      }, "Zipcode:"), React.createElement("div", {
        className: classes.withRelativePosition
      }, React.createElement(Field, {
        name: "property.zipcode",
        type: "text",
        component: ZipCodeField,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error,
        onChange: onZipcodeChange ? onZipcodeChange : undefined
      }), Boolean(get(city, 'label')) && React.createElement(Typography, {
        className: classes.helptext,
        color: "primary"
      }, "".concat(city.label, ", ").concat(city.stateNameShort)))), React.createElement(Grid, {
        item: true,
        xs: 4
      }, React.createElement(Typography, {
        className: classes.label
      }, "Listing Price:"), React.createElement(Field, {
        name: "listingPrice",
        type: "text",
        component: InputField,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error,
        mask: "withThousandSeparator"
      })), React.createElement(Grid, {
        item: true,
        xs: 4
      }, React.createElement(Typography, {
        className: classes.label
      }, "Home (ft\xB2):"), React.createElement(Field, {
        name: "property.sqft",
        type: "text",
        component: InputField,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error,
        mask: "withThousandSeparator"
      })))))), React.createElement(Grid, {
        item: true,
        xs: 5
      }, React.createElement(Typography, {
        className: classes.label
      }, "Current Space:"), React.createElement(Field, {
        name: "picture",
        component: ImageField,
        className: classes.imageField,
        validate: [isRequired],
        errorMessageClass: classes.error,
        aspectRatio: 1.5,
        uploadFolder: process.env.CLOUDINARY_CONSUMER_IMAGES_FOLDER,
        uploadPreset: process.env.CLOUDINARY_CONSUMER_IMAGES_UPLOAD_PRESET
      }))), React.createElement(Divider, {
        className: classes.divider
      }), React.createElement(Grid, {
        container: true,
        spacing: 16
      }, React.createElement(Grid, {
        item: true,
        xs: 7
      }, React.createElement(Grid, {
        container: true,
        spacing: 16
      }, React.createElement(Grid, {
        item: true,
        xs: 6
      }, React.createElement(Typography, {
        className: classes.label
      }, "Home Area:"), React.createElement(Field, {
        name: "homeAreaId",
        component: DropdownField,
        options: homeAreaOptions,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error,
        onBlur: onHomeAreaChange
      })), React.createElement(Grid, {
        item: true,
        xs: 6
      }, React.createElement(Typography, {
        className: classes.label
      }, "Area (ft\xB2):"), React.createElement(Field, {
        name: "areaSqft",
        type: "text",
        component: InputField,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error,
        mask: "withThousandSeparator"
      }))), React.createElement(Grid, {
        container: true,
        spacing: 16
      }, React.createElement(Grid, {
        item: true,
        xs: 6
      }, React.createElement(Typography, {
        className: classes.label
      }, "Project Scale:"), React.createElement(Field, {
        name: "projectScaleId",
        component: DropdownField,
        options: scaleOptions,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error
      })), React.createElement(Grid, {
        item: true,
        xs: 6
      }, React.createElement(Typography, {
        className: classes.label
      }, "Project Quality:"), React.createElement(Field, {
        name: "qualityStandardId",
        component: DropdownField,
        options: qualityOptions,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error
      })))), React.createElement(Grid, {
        item: true,
        xs: 5
      }, React.createElement(Typography, {
        className: classes.label
      }, "SnapPrice:"), snapPriceImage ? React.createElement("div", {
        className: classes.image,
        style: {
          backgroundImage: "url(".concat(snapPriceImage.url, ")")
        }
      }) : React.createElement(Field, {
        name: "imageKey",
        component: SearchableDropdownField,
        options: imageNames,
        fullWidth: true,
        validate: [isRequired],
        className: classes.field,
        errorMessageClass: classes.error
      }))), React.createElement(Grid, {
        container: true,
        justify: "flex-end",
        spacing: 16
      }, React.createElement(Grid, {
        item: true
      }, React.createElement(Button, {
        variant: "contained",
        color: "primary",
        onClick: handleSubmit(function (values) {
          return _this2.props.onSubmit(_objectSpread({}, values, {
            preview: true,
            imageKey: values.imageKey || snapPriceImage.imageKey
          }));
        })
      }, "Save & Preview")), React.createElement(Grid, {
        item: true
      }, React.createElement(Button, {
        type: "submit",
        variant: "contained",
        color: "primary"
      }, "Save"))), submitting && React.createElement(LoadingIndicator, null));
    }
  }]);

  return FlyerFormFields;
}(Component);

export default withStyles(styles)(FlyerFormFields);